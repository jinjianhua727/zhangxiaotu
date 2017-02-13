/// <reference path="./theme.js" />

// system information output + events to react on fps change
SystemInformation = (function () {

    "use strict";

    // get the elements that will be filled with data
    var siBrowser = document.getElementById("siBrowser");
    var siResolution = document.getElementById("siResolution");
    var siFps = document.getElementById("siFps");
    var siParticles = document.getElementById("siParticlesCount");
    // don't know the fps yet
    var lastFps = 0;

    function getInformation() {
        // at any given point we can collect screen dimensions
        var information = {};
        information.width = window.innerWidth;
        information.height = window.innerHeight;
        return information;
    }

    // event to do something on fps reported
    var onFpsReport;

    // update page elements to show the updated data
    function post(info) {
        if (!info) return;

        if (info.browser) { siBrowser.textContent = info.browser; }
        if (info.width && info.height) { siResolution.textContent = info.width + "x" + info.height; }
        if (info.fps) {
            lastFps = info.fps;
            if (onFpsReport && typeof (onFpsReport) === "function") {
                onFpsReport(info.fps);
            }
            siFps.textContent = info.fps;
        }
        if (info.particles) {
            if (Theme.resources.particles.dynamic.active) {
                siParticles.textContent = info.particles;
            }
        }
    }

    function setOnFpsReport(handler) {
        onFpsReport = handler;
    }

    function getLastFps() {
        return lastFps;
    }

    function getBrowser() {
        // browser detection used to display custom message in postcard.js
        var userAgent = navigator.userAgent;
        var browser = "default";
        if (userAgent.indexOf("Chrome") > -1) {
            browser = "chrome";
        } else if (userAgent.indexOf("Firefox") > -1) {
            browser = "firefox";
        } else if (document.documentMode) {
            browser = "ie" + document.documentMode;
        }
        return browser;
    }

    return {
        "post": post,
        "getInformation": getInformation,
        "setOnFpsReport": setOnFpsReport,
        "getLastFps": getLastFps,
        "getBrowser": getBrowser
    }
})();