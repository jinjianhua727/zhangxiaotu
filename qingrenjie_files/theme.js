Theme = (function () {

    var resources = {
        "compatibility": {
            "downloadModernMessage": "It seems you're running older version of the IE, most of the features of this demo won't work. We recommend you try it in a modern hardware accelerated browser:",
            "downloadModernURL": "http://ie.microsoft.com/testdrive/Info/Downloads/Default.html"
        },
        "music": {
            "defaultTrack": "./res/LoveSong.mp3",
            "alternativeTrack": "./res/BackgroundMusic.mp3",
            "autoplay": true, // for debug only
            "showMuteControl": false,
            "buttonAudioLoud": "./res/button_audio_loud_white.png",
            "buttonAudioMute": "./res/button_audio_mute_white.png"
        },
        "particles": {
            "name": "Hearts",
            // initial number of particles
            "defaultCount": 1000,

            // dynamic number of particles 
            "dynamic": {
                // if true - we'll guess the best number of particles for the system
                "active": false,
                // we increment particles with this rate
                "countIncrement": 0.1,
                // we can remove aggressively (to quicker free system resources), 
                // basically we remove at countIncrement*removeFactor rate
                "removeFactor": 2
            },

            // sprites information
            "sprites": {
                "url": "./res/FlutteringHeart.png",
                "count": 1,
                "individualWidth": 40,
                "individualHeight": 40
            },

            // particles motion
            "motion": {
                // particle movement parameters:
                // we'll advance each particle vertically at least by this amount (think gravity and resistance)
                "minVerticalVelocity": -4,
                // we'll advance each particle vertically at most by this amount (think gravity and resistance)
                "maxVerticalVelocity": -2,
                // we'll shift each particle horizontally at least by this amound (think wind and resistance)
                "minHorizontalVelocity": -2,
                // we'll shift each particle horizontally at least by this amound (think wind and resistance)
                "maxHorizontalVelocity": 2,
                // each particle sprite will be scaled down maxScale / this (this < maxScale) at max
                "minScale": 0.4,
                // each particle sprite will be scaled down this / minScale (this > minScale) at max
                "maxScale": 1.25,
                // each particle also "bobs" on horizontal axis (think volumetric resistance) by this amount at least
                "minHorizontalDelta": 2,
                // each particle also "bobs" on horizontal axis (think volumetric resistance) by this amount at most
                "maxHorizontalDelta": 3,
                // each particle is at least this opaque
                "minOpacity": 0.2,
                // each particle is at least this opaque
                "maxOpacity": 0.9,
                // change opacity by at max 1/maxOpacityIncrement
                "maxOpacityIncrement": 50,
                // global speed
                "speedFactor": 0.6
            },

            // postcard landing probability
            "landingProbability": 0.5
        },
        "gradient": {
            "start": {
                "red": 255,
                "green": 250,
                "blue": 250
            },
            "end": {
                "red": 245,
                "green": 105,
                "blue": 125
            },
            "movingStop": {
                "min": 0.25,
                "max": 0.75,
                "increment": 0.0001
            }
        },
        "postcard": {
            "coverColor": "rgb(237,22,106)",
            "fixedBounds": {
                width: 500,
                height: 500
            },
            "image": {
                "defaultMask": "./res/LargeHeartMaskBlurred.png",
                "alternateMask": "./res/LargeBrokenHeartMaskBlurred.png"
            },
            "marks": {
                "minScale": 0.5,
                "maxScale": 2,
                "minOpacity": 0.3,
                "maxOpacity": 0.9
            },
            "message": {
                "default": "张小兔同学：愿你永远年轻漂亮",
                "alternate": "张小兔同学：愿你永远年轻漂亮",
                "ie9": "张小兔同学：愿你永远年轻漂亮",
                "ie8": "张小兔同学：愿你永远年轻漂亮",
                "ie7": "张小兔同学：愿你永远年轻漂亮",
                "ie10": "张小兔同学：愿你永远年轻漂亮",
                "ie11": "张小兔同学：愿你永远年轻漂亮",
                "firefox": "张小兔同学：愿你永远年轻漂亮",
                "chrome": "张小兔同学：愿你永远年轻漂亮",
                // predefined messages
                // those ids need to start with "#!" and be 6 symbols long
                "#!tbtb": "张小兔同学：愿你永远年轻漂亮",
                "#!lmlm": "张小兔同学：愿你永远年轻漂亮",
                "#!awaw": "张小兔同学：愿你永远年轻漂亮",
                "#!gkgk": "张小兔同学：愿你永远年轻漂亮",
                "#!msms": "张小兔同学：愿你永远年轻漂亮",
                "#!twtw": "张小兔同学：愿你永远年轻漂亮",
                "#!ebeb": "张小兔同学：愿你永远年轻漂亮",
                "#!sgsg": "张小兔同学：愿你永远年轻漂亮",
                "#!tbtb": "张小兔同学：愿你永远年轻漂亮",
                "#!lulu": "张小兔同学：愿你永远年轻漂亮",
                "#!mmmm": "张小兔同学：愿你永远年轻漂亮",
                "#!srsr": "张小兔同学：愿你永远年轻漂亮",
                "#!jptj": "张小兔同学：愿你永远年轻漂亮",
                "#!jtjt": "张小兔同学：愿你永远年轻漂亮",
                "#!skks": "张小兔同学：愿你永远年轻漂亮"
            }
        },
        "actor": {
            "defaultTheme": {
                "skipFrames": 20,
                "parts": [{
                    "url": "./res/MonsterLegs.svg",
                    "class": "actorLegs"
                },
                {
                    "url": "./res/EMonster.png",
                    "class": "actorHead"
                }]
            },
            "alternateTheme": {
                "skipFrames": 20,
                "parts": [{
                    "url": "./res/MonsterLegsAlternate.png",
                    "class": "actorLegs"
                },
                {
                    "url": "./res/EMonsterAlternate.png",
                    "class": "actorHead"
                }]
            }
        },
        "lights": [{
            "color": "rgb(255,255,255)",

            "topPosition": 0.6,
            "topRadius": 20,

            "bottomPosition": 0.1,
            "bottomPositionMin": 0.1,
            "bottomPositionMax": 0.7,
            "bottomPositionIncrement": 0.01,
            "bottomRadius": 120,

            "minOpacity": 0.1,
            "maxOpacity": 0.5,
            "opacityIncrement": 0.001,
            "opacity": 0.1
        },
        {
            "color": "rgb(255,255,255)",

            "topPosition": 0.4,
            "topRadius": 15,

            "bottomPosition": 0.8,
            "bottomPositionMin": 0.2,
            "bottomPositionMax": 0.8,
            "bottomPositionIncrement": 0.01,
            "bottomRadius": 150,

            "minOpacity": 0.1,
            "maxOpacity": 0.5,
            "opacityIncrement": 0.001,
            "opacity": 0.5
        }]
    }

    return {
        "initialize": null,
        "resources": resources,
        "apply": null
    }

})();