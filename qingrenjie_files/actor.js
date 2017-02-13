/// <reference path="./theme.js" />
/// <reference path="./classes.js" />

Actor = (function () {

    "use strict";

    var actorContainer = document.getElementById("actorContainer");
    var tra = Theme.resources.actor;
    var theme = tra.defaultTheme;

    var actorHead, actorLegs;

    var currentSkipFrame = 0;

    function createImage(src, className) {
        var image = document.createElement("img");
        image.setAttribute("unselectable", "on");
        if (src) {
            image.src = src;
        }
        if (className) {
            image.className = className;
        }
        image.style.zIndex = "100";
        return image;
    }

    function render() {
        // create actor images
        if (actorContainer &&
            actorContainer.childNodes &&
            actorContainer.childNodes.length === 0) {
            // load all images
            theme.parts.forEach(function (part) {
                actorContainer.appendChild(createImage(part.url, part.class));
            });
            actorHead = actorContainer.lastChild;
            actorLegs = actorContainer.firstChild;
            Classes.add(actorHead, "rotateLeft");
            Classes.add(actorLegs, "rotateRight");
        }

        // animate actor
        if (currentSkipFrame === theme.skipFrames) {
            Classes.toggle(actorHead, "rotateLeft");
            Classes.toggle(actorHead, "rotateRight");

            Classes.toggle(actorLegs, "rotateLeft");
            Classes.toggle(actorLegs, "rotateRight");


            currentSkipFrame = 0;
        }

        currentSkipFrame++;
    }

    function switchTheme(themeName) {
        if (tra.hasOwnProperty(themeName)) {
            theme = tra[themeName];
        } else {
            theme = tra.default;
        }
        actorContainer.innerHTML = "";
        currentSkipFrame = 0;
    }

    return {
        "render": render,
        "switchTheme": switchTheme
    }

})();