import { seq } from './sequence.js'
import { items } from './items.js'
import { files } from './files.js'

var scenePlayerPath;
var scenePlayerTile;
var sceneCurrent = 0;

var sceneList;

var sceneCheck = {
    text: 0,
    options: 0,
    audio: 0,
    video: 0,
};

function getSceneCheck() {
    var sum = sceneCheck.text + sceneCheck.options + sceneCheck.audio + sceneCheck.video;
    return sum;
}

function playSequence(path, tile) {
    getSequence(path, tile);
    scenes[scenePlayerPath].sequence[scenePlayerTile](scenePlayerPath, scenePlayerTile);
    sceneCurrent = 0;
    nextScene(scenePlayerPath, scenePlayerTile);
}

function getSequence(path, tile) {
    scenePlayerPath = path;
    scenePlayerTile = tile;
}

function getSoundID(path, file) {
    for (var i in files[path].audio) {
        if (file == files[path].audio[i]) {
            return i;
        }
    }
}


function getID(location, variable, value) {
    for (var i in location) {
        if (variable == value) {
            return i;
        }
    }
}

function renderOverlay() {
    var gameScreen = document.getElementById("gameScreen");
    var textOverlay = document.createElement("BUTTON");
    textOverlay.setAttribute('class', 'textOverlay');
    textOverlay.setAttribute('id', 'textOverlay');
    textOverlay.innerHTML = "";
    textOverlay.addEventListener("click", nextScene);
    gameScreen.appendChild(textOverlay);
}

function typeWriter(i, path, tile, line) {
    if (i < seq[path].sequence[tile].text[line].length) {
        document.getElementById('textOverlay').innerHTML += seq[path].sequence[tile].text[line].charAt(i);
        setTimeout(function () {
            typeWriter(i, path, tile, line);
        }, 30)
    }
    i++;
    if (i == seq[path].sequence[tile].text[line].length) { sceneCheck.text -= 1; }
}

function playText(path, tile, line, mode) {
    sceneCheck.text += 1;
    if (mode == 1) { document.getElementById('textOverlay').innerHTML = ""; }
    if (line != 0) { document.getElementById('textOverlay').innerHTML += "<br>"; }
    typeWriter(0, path, tile, line);
}

function playOptions(path, tile) {
    sceneCheck.options += 1;
    var interactions = document.getElementById('interactions');
    for (var i = 0; i < seq[path].sequence[tile].option.length; i++) {
        var optionButton = document.createElement("BUTTON");
        optionButton.innerHTML = seq[path].sequence[tile].option[i];
        optionButton.style.top = 20 + (i * 50) + 'px';
        optionButton.setAttribute('class', `optionButton`);
        optionButton.setAttribute('id', `answer_${i}`);
        optionButton.setAttribute('answer', `${i}`);
        optionButton.addEventListener("click", checkAnswer);
        interactions.appendChild(optionButton);
    }
}

function checkAnswer(click) {
    var path = scenePlayerPath;
    var tile = scenePlayerTile;
    var answer = click.target.getAttribute("answer");
    if (seq[path].sequence[tile].answer == answer) {
        alert("wow ur so good");
    }
    else{
        alert("wow ur bad");
    }
    var interactions = document.getElementById('interactions');
        for (var i = 0; i < seq[path].sequence[tile].option.length; i++) {
            var optionButton = document.getElementById(`answer_${i}`);
            interactions.removeChild(optionButton);
        }
    sceneCheck.options-=1;
}

function playSound(path, file, cooldown) {
    sceneCheck.audio += 1;
    var soundID = getSoundID(path, file);
    var gameScreen = document.getElementById("gameScreen");
    var audio = document.createElement("AUDIO");
    audio.setAttribute('src', `${files[path].folder}${files[path].audio[soundID]}`);
    gameScreen.appendChild(audio);
    setTimeout(function () {
        audio.play();
    }, cooldown);
    audio.onended = function () {
        sceneCheck.audio -= 1;
        gameScreen.removeChild(audio);
    }
}

function clearScene() {
    var gameScreen = document.getElementById("gameScreen");
    var textOverlay = document.getElementById("textOverlay");
    gameScreen.removeChild(textOverlay);
}

function nextScene() {
    if (getSceneCheck() == 0) {
        if (sceneCurrent != sceneList.length) {
            for (var i in sceneList[sceneCurrent]) {
                sceneList[sceneCurrent][i][0](...sceneList[sceneCurrent][i][1]);
            };
            sceneCurrent++;
        }
        else { clearScene(); }
    }
}

// SEQUENCE FUNCTIONS

//EXPLANATION
/*
scenes.path - path name {'name'}
secenes.sequence - arrway of functions for each sequence {function "Pathname_tile"(path, tile)}
scenes.sequence.function.sceneList - array for scenes:
    renderOverlay, [null]
    playText, ["path", "tile", {seq.sequence.text index}, {0=add line,1=clear text}]
    playSound, ["path", 'filename', {cooldown in ms}]
*/

var scenes = [
    {
        path: 'Entrance',
        sequence: [
            function Entrance_1(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playSound, [path, 'OHEO.mp3', 0]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Entrance_2(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                    [[playText, [path, tile, 6, 0]]],
                    [[playSound, [path, 'footsteps.mp3', 0]], [playText, [path, tile, 7, 1]]],
                    [[playText, [path, tile, 8, 0]]],
                    [[playText, [path, tile, 9, 0]]],
                    [[playText, [path, tile, 10, 0]]],
                    [[playText, [path, tile, 11, 0]]],
                    [[playText, [path, tile, 12, 1]]],
                    [[playText, [path, tile, 13, 0]]],
                    [[playText, [path, tile, 14, 0]]],
                    [[playText, [path, tile, 15, 0]]],
                    [[playText, [path, tile, 16, 0]]],
                    [[playSound, [path, 'Nezarec_1.mp3', 0]], [playText, [path, tile, 17, 1]]],
                ];
            },
            function Entrance_3(path, tile) {
                sceneList = [ 
                ];
            },
            function Entrance_4(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                    [[playText, [path, tile, 6, 0]]],
                    [[playText, [path, tile, 7, 0]]],
                    [[playText, [path, tile, 8, 0]]],
                    [[playText, [path, tile, 9, 0]]],
                    [[playText, [path, tile, 10, 0]]],
                ];
            },
            function Entrance_5(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                ];
            },
            function Entrance_6(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                    [[playText, [path, tile, 6, 0]]],
                    [[playText, [path, tile, 7, 0]]],
                    [[playText, [path, tile, 8, 0]]],
                ];
            },
        ],
    },
    {
        path: 'Courtyard',
        sequence: [
            function Courtyard_1(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playSound, [path, 'Nezarec_2.mp3', 0]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                ];
            },
        ],
    },
    {
        path: 'χ',
        sequence: [
            function χ_1(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playSound, [path, 'Rhulk_1.mp3', 0]], [playSound, [path, 'Rhulk_2.mp3', 4500]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 1]]],
                    [[playOptions, [path, tile]]],
                ];
            },
        ],
    },
    {
        path: 'Sisy',
        sequence: [
            function Sisy_1(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                ];
            },
            function Sisy_2(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_3(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playOptions, [path, tile]]],
                ];
            },
            function Sisy_4(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_5(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_6(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_7(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_8(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_9(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_10(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_11(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playOptions, [path, tile]]],
                ];
            },
            function Sisy_12(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_13(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_14(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_15(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_16(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playOptions, [path, tile]]],
                ];
            },
            function Sisy_17(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_18(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_19(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_20(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playSound, [path, 'ohyeahbaby.mp3', 0]], [playText, [path, tile, 1, 0]]],
                ];
            },
            function Sisy_21(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playSound, [path, 'bread.mp3', 0]], [playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                ];
            },
            function Sisy_22(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_23(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_24(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_25(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_26(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_27(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_28(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playOptions, [path, tile]]],
                ];
            },
            function Sisy_29(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playOptions, [path, tile]]],
                ];
            },
            function Sisy_30(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playSound, [path, 'ohyeahbaby.mp3', 0]], [playText, [path, tile, 1, 0]]],
                ];
            },
            function Sisy_31(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_32(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_33(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
            function Sisy_34(path, tile) {
                sceneList =  [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                ];
            },
        ],
    },
]

export { playSequence };