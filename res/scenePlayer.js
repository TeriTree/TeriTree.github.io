import { seq } from './sequence.js'
import { acquireItem } from './items.js'
import { files } from './files.js'
import { paths } from './paths.js'
import {death_event} from './gameScreen.js'
import {bgm} from './gameScreen.js'

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
function getVideoID(path, file) {
    for (var i in files[path].video) {
        if (file == files[path].video[i]) {
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
        //alert("wow ur so good");
    }
    else{
        //alert("wow ur bad");
        death_event();
        clearScene(0);
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

function playVideo(path, file) {
    sceneCheck.video += 1;
    var videoID = getVideoID(path, file);
    var gameScreen = document.getElementById("gameScreen");
    var video = document.createElement("VIDEO");
    video.setAttribute('class','regVideo');
    video.setAttribute('src',`${files[path].folder}${files[path].video[videoID]}`)
    gameScreen.appendChild(video);
    video.play();
    video.onended = function () {
        gameScreen.removeChild(video);
        sceneCheck.video -= 1;
    }
}

function clearScene(success) {
    if(success==1){
        seq[scenePlayerPath].sequence[scenePlayerTile].complete = true;
        if(paths[scenePlayerPath].tiles[scenePlayerTile].hasItem!=null){
            acquireItem(paths[scenePlayerPath].tiles[scenePlayerTile].hasItem);
        }
        bgm.play();
    }
    var gameScreen = document.getElementById("gameScreen");
    var textOverlay = document.getElementById("textOverlay");
    gameScreen.removeChild(textOverlay);
    if(paths[scenePlayerPath].tiles[scenePlayerTile].deadendType=='death'){
        death_event();
    }
}

function nextScene() {
    if (getSceneCheck() == 0) {
        if (sceneCurrent != sceneList.length) {
            for (var i in sceneList[sceneCurrent]) {
                sceneList[sceneCurrent][i][0](...sceneList[sceneCurrent][i][1]);
            };
            sceneCurrent++;
        }
        else { clearScene(1); }
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
                    [[renderOverlay, [null]],[playVideo, [path, 'Zavala.mp4']]],
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
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
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
            function χ_2(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
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
    {
        path: 'Leo',
        sequence: [
            function Leo_1(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    ];
            },
            function Leo_2(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playSound, [path, 'awake.mp3', 0]], [playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    ];
            },
            function Leo_3(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playSound, [path, 'bang.mp3', 0]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                    [[playText, [path, tile, 6, 0]]],
                    ];
            },
            function Leo_4(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playSound, [path, 'roar.mp3', 0]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]], [playSound, [path, 'letyougo.mp3', 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    ];
            },
            function Leo_5(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    ];
            },
            function Leo_6(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    ];
            },
            function Leo_7(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]], [playSound, [path, 'teri.mp3', 0]]],
                    ];
            },
            function Leo_8(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                    ];
            },
            function Leo_9(path, tile) {
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
                    [[playOptions, [path, tile]]],
                    ];
            },
            function Leo_10(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playSound, [path, 'ohyeahbaby.mp3', 0]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    ];
            },
            function Leo_11(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                    [[playText, [path, tile, 6, 0]]],
                    [[playText, [path, tile, 7, 0]]],
                    [[playText, [path, tile, 8, 0]], [playSound, [path, 'ohyeahbaby.mp3', 0]]],
                    [[playText, [path, tile, 9, 0]]],
                    [[playText, [path, tile, 10, 0]]],
                    [[playText, [path, tile, 11, 0]]],
                    [[playText, [path, tile, 12, 0]]],
                    ];
            },
            function Leo_12(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]], [playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playVideo, [path, 'DuduGiftEze.mp4']]],
                    [[playText, [path, tile, 5, 0]], [playSound, [path, 'ohyeahbaby.mp3', 0]]],
                    ];
            },
            function Leo_13(path, tile) {
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
        path: 'Myrin',
        sequence: [
            function Myrin_1(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]], 
                    [[playText, [path, tile, 0, 1]]],
                    [[playText, [path, tile, 1, 1]]],
                    [[playText, [path, tile, 2, 1]]],
                    [[playText, [path, tile, 3, 1]]],
                    [[playText, [path, tile, 4, 1]]],
                    [[playText, [path, tile, 5, 1]]],
                    [[playText, [path, tile, 6, 1]]],
                    [[playText, [path, tile, 7, 1]]],
                    [[playText, [path, tile, 8, 1]]],
                    [[playText, [path, tile, 9, 1]]],
                    [[playText, [path, tile, 10, 1]]],
                    [[playText, [path, tile, 11, 1]]],
                    [[playText, [path, tile, 12, 1]]],
                    [[playText, [path, tile, 13, 1]]],
                    [[playText, [path, tile, 14, 1]]],
                    [[playText, [path, tile, 15, 1]]],
                    [[playText, [path, tile, 16, 1]]],
                    [[playText, [path, tile, 17, 1]]],
                    [[playText, [path, tile, 18, 1]]],
                    [[playText, [path, tile, 19, 1]]],
                    [[playText, [path, tile, 20, 1]]],
                    [[playText, [path, tile, 21, 1]]],
                    [[playText, [path, tile, 22, 1]]],
                    [[playText, [path, tile, 23, 1]]],
                    [[playText, [path, tile, 24, 1]]],
                    [[playText, [path, tile, 25, 1]]],
                    [[playText, [path, tile, 26, 1]]],
                    [[playText, [path, tile, 27, 1]]],
                    [[playText, [path, tile, 28, 1]]],
                    [[playText, [path, tile, 29, 1]]],
                    [[playText, [path, tile, 30, 1]]],
                    [[playText, [path, tile, 31, 1]]],                  
                    [[playText, [path, tile, 32, 1]]],
                    [[playText, [path, tile, 33, 1]]],
                    [[playText, [path, tile, 34, 1]]],
                    [[playText, [path, tile, 35, 1]]],
                    [[playText, [path, tile, 36, 1]]],
                    [[playText, [path, tile, 37, 1]]],
                    [[playText, [path, tile, 38, 1]]],
                    [[playText, [path, tile, 39, 1]]],
                    [[playText, [path, tile, 40, 1]]],
                    [[playText, [path, tile, 41, 1]]],
                    [[playText, [path, tile, 42, 1]]],
                    [[playText, [path, tile, 43, 1]]],
                    [[playText, [path, tile, 44, 1]]],
                    ];
                },
                function Myrin_2(path, tile) {
                    sceneList = [
                        [[renderOverlay, [null]]], 
                        [[playText, [path, tile, 0, 1]]],
                        [[playText, [path, tile, 1, 1]]],
                        [[playText, [path, tile, 2, 1]]],
                        [[playText, [path, tile, 3, 1]]],
                        [[playText, [path, tile, 4, 1]]],
                        [[playText, [path, tile, 5, 1]]],
                        [[playText, [path, tile, 6, 1]]],
                        [[playText, [path, tile, 7, 1]]],
                        [[playText, [path, tile, 8, 1]]],
                        [[playText, [path, tile, 9, 1]]],
                        [[playText, [path, tile, 10, 1]]],
                        [[playText, [path, tile, 11, 1]]],
                        [[playText, [path, tile, 12, 1]]],
                        [[playText, [path, tile, 13, 1]]],
                        [[playText, [path, tile, 14, 1]]],
                        [[playText, [path, tile, 15, 1]]],
                        [[playText, [path, tile, 16, 1]]],
                        [[playText, [path, tile, 17, 1]]],
                        [[playText, [path, tile, 18, 1]]],
                        ];
                },
                function Myrin_3(path, tile) {
                    sceneList = [
                        [[renderOverlay, [null]]], 
                        [[playText, [path, tile, 0, 1]]],
                        [[playText, [path, tile, 1, 1]]],
                        [[playText, [path, tile, 2, 1]]],
                        [[playText, [path, tile, 3, 1]]],
                        [[playText, [path, tile, 4, 1]]],
                        [[playText, [path, tile, 5, 1]]],
                        [[playText, [path, tile, 6, 1]]],
                        [[playText, [path, tile, 7, 1]]],
                        [[playText, [path, tile, 8, 1]]],
                        [[playText, [path, tile, 9, 1]]],
                        [[playText, [path, tile, 10, 1]]],
                        [[playText, [path, tile, 11, 1]]],
                        [[playText, [path, tile, 12, 1]]],
                        [[playText, [path, tile, 13, 1]]],
                        [[playText, [path, tile, 14, 1]]],
                        [[playText, [path, tile, 15, 1]]],
                        [[playText, [path, tile, 16, 1]]],
                        [[playText, [path, tile, 17, 1]]],
                        [[playSound, [path, 'bee.mp3', 0]], [playText, [path, tile, 18, 1]]],
                            ];
                },
                function Myrin_4(path, tile) {
                    sceneList = [
                        [[renderOverlay, [null]]], 
                        [[playText, [path, tile, 0, 1]]],
                        [[playText, [path, tile, 1, 1]]],
                        [[playText, [path, tile, 2, 1]]],
                        [[playText, [path, tile, 3, 1]]],
                        [[playText, [path, tile, 4, 1]]],
                        [[playText, [path, tile, 5, 1]]],
                        [[playText, [path, tile, 6, 1]]],
                        [[playText, [path, tile, 7, 1]]],
                        [[playText, [path, tile, 8, 1]]],
                        [[playText, [path, tile, 9, 1]]],
                        [[playText, [path, tile, 10, 1]]],
                        [[playText, [path, tile, 11, 1]]],
                        [[playText, [path, tile, 12, 1]]],
                        [[playText, [path, tile, 13, 1]]],
                        [[playText, [path, tile, 14, 1]]],
                        [[playText, [path, tile, 15, 1]]],
                        [[playText, [path, tile, 16, 1]]],
                        [[playText, [path, tile, 17, 1]]],
                        [[playText, [path, tile, 18, 1]]],
                        [[playText, [path, tile, 19, 1]]],
                        [[playText, [path, tile, 20, 1]]],
                        [[playText, [path, tile, 21, 1]]],
                        [[playText, [path, tile, 22, 1]]],
                        [[playText, [path, tile, 23, 1]]],
                        [[playText, [path, tile, 24, 1]]],
                        [[playText, [path, tile, 25, 1]]],
                        [[playText, [path, tile, 26, 1]]],
                        [[playText, [path, tile, 27, 1]]],
                        [[playText, [path, tile, 28, 1]]],
                        [[playText, [path, tile, 29, 1]]],
                        [[playText, [path, tile, 30, 1]]],
                        [[playText, [path, tile, 31, 1]]],
                        [[playSound, [path, 'bee.mp3', 0]], [playText, [path, tile, 32, 1]]],
                        ];
                    },
                    function Myrin_5(path, tile) {
                        sceneList = [
                            [[renderOverlay, [null]]], 
                            [[playSound, [path, 'crowd.mp3', 0]], [playText, [path, tile, 0, 1]]],
                            [[playText, [path, tile, 1, 1]]],
                            [[playText, [path, tile, 2, 1]]],
                            [[playText, [path, tile, 3, 1]]],
                            [[playText, [path, tile, 4, 1]]],
                            [[playText, [path, tile, 5, 1]]],
                            [[playText, [path, tile, 6, 1]]],
                            [[playText, [path, tile, 7, 1]]],
                            [[playText, [path, tile, 8, 1]]],
                            [[playText, [path, tile, 9, 1]]],
                            [[playText, [path, tile, 10, 1]]],
                            [[playText, [path, tile, 11, 1]]],
                            [[playText, [path, tile, 12, 1]]],
                            [[playText, [path, tile, 13, 1]]],
                            [[playText, [path, tile, 14, 1]]],
                            [[playText, [path, tile, 15, 1]]],
                            [[playSound, [path, 'bee.mp3', 0]],[playText, [path, tile, 16, 1]]],
                         ];
                    },
                    function Myrin_6(path, tile) {
                        sceneList = [
                            [[renderOverlay, [null]]], 
                            [[playText, [path, tile, 0, 1]]],
                            [[playText, [path, tile, 1, 1]]],
                            [[playText, [path, tile, 2, 1]]],
                            [[playText, [path, tile, 3, 1]]],
                            [[playText, [path, tile, 4, 1]]],
                            [[playText, [path, tile, 5, 1]]],
                            [[playText, [path, tile, 6, 1]]],
                            [[playText, [path, tile, 7, 1]]],
                            [[playText, [path, tile, 8, 1]]],
                            [[playText, [path, tile, 9, 1]]],
                            [[playText, [path, tile, 10, 1]]],
                            [[playText, [path, tile, 11, 1]]],
                            [[playText, [path, tile, 12, 1]]],
                            [[playText, [path, tile, 13, 1]]],
                            [[playText, [path, tile, 14, 1]]],
                            [[playText, [path, tile, 15, 1]]],
                         ];
                    },
                    function Myrin_7(path, tile) {
                        sceneList = [
                            [[renderOverlay, [null]]], 
                            [[playText, [path, tile, 0, 1]]],
                            [[playText, [path, tile, 1, 1]]],
                            [[playText, [path, tile, 2, 1]]],
                            [[playText, [path, tile, 3, 1]]],
                            [[playText, [path, tile, 4, 1]]],
                            [[playText, [path, tile, 5, 1]]],
                            [[playText, [path, tile, 6, 1]]],
                            [[playText, [path, tile, 7, 1]]],
                            [[playText, [path, tile, 8, 1]]],
                            [[playText, [path, tile, 9, 1]]],
                            [[playText, [path, tile, 10, 1]]],
                            [[playText, [path, tile, 11, 1]]],
                            [[playText, [path, tile, 12, 1]]],
                            [[playText, [path, tile, 13, 1]]],
                            [[playText, [path, tile, 14, 1]]],
                            [[playText, [path, tile, 15, 1]]],
                            [[playText, [path, tile, 16, 1]]],
                            [[playText, [path, tile, 17, 1]]],
                            [[playText, [path, tile, 18, 1]]],
                            [[playText, [path, tile, 19, 1]]],
                            [[playText, [path, tile, 20, 1]]],
                            [[playText, [path, tile, 21, 1]]],
                            [[playText, [path, tile, 22, 1]]],
                            [[playText, [path, tile, 23, 1]]],
                            [[playText, [path, tile, 24, 1]]],
                            [[playText, [path, tile, 25, 1]]],
                            [[playText, [path, tile, 26, 1]]],
                            [[playText, [path, tile, 27, 1]]],
                            [[playText, [path, tile, 28, 1]]],
                            [[playText, [path, tile, 29, 1]]],
                            [[playText, [path, tile, 30, 1]]],
                            [[playText, [path, tile, 31, 1]]],
                            [[playText, [path, tile, 32, 1]]],
                            [[playText, [path, tile, 33, 1]]],
                            [[playText, [path, tile, 34, 1]]],
                            [[playSound, [path, 'bee.mp3', 0]],[playText, [path, tile, 35, 1]]],
                        ];
                    },
                    function Myrin_8(path, tile) {
                        sceneList = [
                            [[renderOverlay, [null]]], 
                            [[playText, [path, tile, 0, 1]]],
                            [[playText, [path, tile, 1, 1]]],
                            [[playText, [path, tile, 2, 1]]],
                            [[playText, [path, tile, 3, 1]]],
                            [[playText, [path, tile, 4, 1]]],
                            [[playText, [path, tile, 5, 1]]],
                            [[playText, [path, tile, 6, 1]]],
                            [[playText, [path, tile, 7, 1]]],
                            [[playText, [path, tile, 8, 1]]],
                            [[playText, [path, tile, 9, 1]]],
                            [[playText, [path, tile, 10, 1]]],
                            [[playText, [path, tile, 11, 1]]],
                            [[playText, [path, tile, 12, 1]]],
                            [[playText, [path, tile, 13, 1]]],
                            [[playText, [path, tile, 14, 1]]],
                            [[playText, [path, tile, 15, 1]]],
                            [[playText, [path, tile, 16, 1]]],
                            [[playText, [path, tile, 17, 1]]],
                            [[playText, [path, tile, 18, 1]]],
                            [[playText, [path, tile, 19, 1]]],
                            [[playText, [path, tile, 20, 1]]],
                            [[playText, [path, tile, 21, 1]]],
                            [[playText, [path, tile, 22, 1]]],
                            [[playText, [path, tile, 23, 1]]],
                            [[playText, [path, tile, 24, 1]]],
                            [[playText, [path, tile, 25, 1]]],
                            [[playText, [path, tile, 26, 1]]],
                            [[playText, [path, tile, 27, 1]]],
                            [[playText, [path, tile, 28, 1]]],
                            [[playText, [path, tile, 29, 1]]],
                            [[playText, [path, tile, 30, 1]]],
                            [[playText, [path, tile, 31, 1]]],
                            [[playText, [path, tile, 32, 1]]],
                            [[playText, [path, tile, 33, 1]]],
                            [[playText, [path, tile, 34, 1]]],
                            [[playText, [path, tile, 35, 1]]],
                            [[playText, [path, tile, 36, 1]]],
                        ];
                    },
                    function Myrin_9(path, tile) {
                        sceneList = [
                            [[renderOverlay, [null]]], 
                            [[playText, [path, tile, 0, 1]]],
                            [[playText, [path, tile, 1, 1]]],
                            [[playText, [path, tile, 2, 1]]],
                            [[playText, [path, tile, 3, 1]]],
                            [[playText, [path, tile, 4, 1]]],
                            [[playText, [path, tile, 5, 1]]],
                            [[playText, [path, tile, 6, 1]]],
                            [[playText, [path, tile, 7, 1]]],
                            [[playText, [path, tile, 8, 1]]],
                            [[playText, [path, tile, 9, 1]]],
                            [[playText, [path, tile, 10, 1]]],
                            [[playText, [path, tile, 11, 1]]],
                            [[playText, [path, tile, 12, 1]]],
                            [[playText, [path, tile, 13, 1]]],
                            [[playText, [path, tile, 14, 1]]],
                            [[playText, [path, tile, 15, 1]]],
                            [[playText, [path, tile, 16, 1]]],
                            [[playText, [path, tile, 17, 1]]],
                            [[playText, [path, tile, 18, 1]]],
                            [[playText, [path, tile, 19, 1]]],
                            [[playText, [path, tile, 20, 1]]],
                            [[playText, [path, tile, 21, 1]]],
                            [[playText, [path, tile, 22, 1]]],
                            [[playText, [path, tile, 23, 1]]],
                            [[playText, [path, tile, 24, 1]]],
                            [[playText, [path, tile, 25, 1]]],
                            [[playText, [path, tile, 26, 1]]],
                            [[playText, [path, tile, 27, 1]]],
                            [[playText, [path, tile, 28, 1]]],
                            [[playText, [path, tile, 29, 1]]],
                            [[playText, [path, tile, 30, 1]]],
                            [[playText, [path, tile, 31, 1]]],
                            [[playText, [path, tile, 32, 1]]],
                            [[playText, [path, tile, 33, 1]]],
                            [[playText, [path, tile, 34, 1]]],
                            [[playText, [path, tile, 35, 1]]],
                            [[playText, [path, tile, 36, 1]]],
                            [[playText, [path, tile, 37, 1]]],
                            [[playText, [path, tile, 38, 1]]],
                            [[playText, [path, tile, 39, 1]]],
                            [[playText, [path, tile, 40, 1]]],
                            [[playText, [path, tile, 41, 1]]],
                            [[playText, [path, tile, 42, 1]]],
                            [[playText, [path, tile, 43, 1]]],
                            [[playText, [path, tile, 44, 1]]],
                            [[playText, [path, tile, 45, 1]]],
                            [[playText, [path, tile, 46, 1]]],
                            [[playText, [path, tile, 47, 1]]],
                            [[playText, [path, tile, 48, 1]]],
                            [[playText, [path, tile, 49, 1]]],
                            [[playText, [path, tile, 50, 1]]],
                            [[playText, [path, tile, 51, 1]]],
                            [[playText, [path, tile, 52, 1]]],
                            [[playText, [path, tile, 53, 1]]],
                            [[playText, [path, tile, 54, 1]]],
                            [[playText, [path, tile, 55, 1]]],
                            [[playText, [path, tile, 56, 1]]],
                            [[playText, [path, tile, 57, 1]]],
                            [[playText, [path, tile, 58, 1]]],
                            [[playText, [path, tile, 59, 1]]],
                            [[playText, [path, tile, 60, 1]]],
                            [[playText, [path, tile, 61, 1]]],
                            [[playText, [path, tile, 62, 1]]],
                            [[playText, [path, tile, 63, 1]]],
                            [[playText, [path, tile, 64, 1]]],
                            [[playText, [path, tile, 65, 1]]],
                            [[playText, [path, tile, 66, 1]]],
                            [[playText, [path, tile, 67, 1]]],
                            [[playText, [path, tile, 68, 1]]],
                            [[playText, [path, tile, 69, 1]]],
                            [[playText, [path, tile, 70, 1]]],
                            [[playText, [path, tile, 71, 1]]],
                            [[playText, [path, tile, 72, 1]]],
                        ];
                    },
                    function Myrin_10(path, tile) {
                        sceneList = [
                            [[renderOverlay, [null]]], 
                            [[playText, [path, tile, 0, 1]]],
                            [[playText, [path, tile, 1, 1]]],
                            [[playText, [path, tile, 2, 1]]],
                            [[playText, [path, tile, 3, 1]]],
                            [[playText, [path, tile, 4, 1]]],
                            [[playText, [path, tile, 5, 1]]],
                            [[playText, [path, tile, 6, 1]]],
                            [[playText, [path, tile, 7, 1]]],
                            [[playText, [path, tile, 8, 1]]],
                            [[playText, [path, tile, 9, 1]]],
                            [[playText, [path, tile, 10, 1]]],
                            [[playText, [path, tile, 11, 1]]],
                            [[playText, [path, tile, 12, 1]]],
                            [[playText, [path, tile, 13, 1]]],
                            [[playText, [path, tile, 14, 1]]],
                            [[playText, [path, tile, 15, 1]]],
                            [[playText, [path, tile, 16, 1]]],
                            [[playText, [path, tile, 17, 1]]],
                            [[playText, [path, tile, 18, 1]]],
                            [[playText, [path, tile, 19, 1]]],
                            [[playText, [path, tile, 20, 1]]],
                            [[playText, [path, tile, 21, 1]]],
                            [[playText, [path, tile, 22, 1]]],
                            [[playText, [path, tile, 23, 1]]],
                            [[playText, [path, tile, 24, 1]]],
                            [[playText, [path, tile, 25, 1]]],
                            [[playText, [path, tile, 26, 1]]],
                            [[playText, [path, tile, 27, 1]]],
                            [[playText, [path, tile, 28, 1]]],
                            [[playText, [path, tile, 29, 1]]],
                            [[playText, [path, tile, 30, 1]]],
                            [[playText, [path, tile, 31, 1]]],
                            [[playText, [path, tile, 32, 1]]],
                            [[playText, [path, tile, 33, 1]]],
                            [[playText, [path, tile, 34, 1]]],
                            [[playText, [path, tile, 35, 1]]],
                            [[playText, [path, tile, 36, 1]]],
                            [[playText, [path, tile, 37, 1]]],
                            [[playText, [path, tile, 38, 1]]],
                            [[playText, [path, tile, 39, 1]]],
                            [[playText, [path, tile, 40, 1]]],
                            [[playText, [path, tile, 41, 1]]],
                            [[playText, [path, tile, 42, 1]]],
                            [[playText, [path, tile, 43, 1]]],
                            [[playText, [path, tile, 44, 1]]],
                            [[playText, [path, tile, 45, 1]]],
                            [[playText, [path, tile, 46, 1]]],
                            [[playText, [path, tile, 47, 1]]],
                            [[playText, [path, tile, 48, 1]]],
                            [[playText, [path, tile, 49, 1]]],
                            [[playText, [path, tile, 50, 1]]],
                            [[playText, [path, tile, 51, 1]]],
                            [[playText, [path, tile, 52, 1]]],
                            [[playText, [path, tile, 53, 1]]],
                            [[playText, [path, tile, 54, 1]]],
                            [[playText, [path, tile, 55, 1]]],
                            [[playText, [path, tile, 56, 1]]],
                            [[playText, [path, tile, 57, 1]]],
                            [[playText, [path, tile, 58, 1]]],
                            [[playText, [path, tile, 59, 1]]],
                            [[playText, [path, tile, 60, 1]]],
                            [[playText, [path, tile, 61, 1]]],
                            [[playText, [path, tile, 62, 1]]],
                            [[playText, [path, tile, 63, 1]]],
                            [[playText, [path, tile, 64, 1]]],
                            [[playText, [path, tile, 65, 1]]],
                            [[playText, [path, tile, 66, 1]]],
                            [[playText, [path, tile, 67, 1]]],
                            [[playText, [path, tile, 68, 1]]],
                            [[playText, [path, tile, 69, 1]]],
                            [[playText, [path, tile, 70, 1]]],
                            [[playText, [path, tile, 71, 1]]],
                            [[playText, [path, tile, 72, 1]]],
                            [[playText, [path, tile, 73, 1]]],
                            [[playText, [path, tile, 74, 1]]],
                            [[playText, [path, tile, 75, 1]]],
                            [[playText, [path, tile, 76, 1]]],
                            [[playText, [path, tile, 77, 1]]],
                            [[playText, [path, tile, 78, 1]]],
                            [[playText, [path, tile, 79, 1]]],
                            [[playText, [path, tile, 80, 1]]],
                            [[playText, [path, tile, 81, 1]]],
                            [[playText, [path, tile, 82, 1]]],
                            [[playText, [path, tile, 83, 1]]],
                            [[playText, [path, tile, 84, 1]]],
                            [[playText, [path, tile, 85, 1]]],
                            [[playText, [path, tile, 86, 1]]],
                            [[playText, [path, tile, 87, 1]]],
                            [[playText, [path, tile, 88, 1]]],
                        ];
                    },
                    function Myrin_11(path, tile) {
                        sceneList = [
                            [[renderOverlay, [null]]], 
                            [[playText, [path, tile, 0, 1]]],
                            [[playText, [path, tile, 1, 1]]],
                            [[playText, [path, tile, 2, 1]]],
                            [[playText, [path, tile, 3, 1]]],
                            [[playText, [path, tile, 4, 1]]],
                            [[playText, [path, tile, 5, 1]]],
                            [[playText, [path, tile, 6, 1]]],
                            [[playText, [path, tile, 7, 1]]],
                            [[playText, [path, tile, 8, 1]]],
                            [[playText, [path, tile, 9, 1]]],
                            [[playText, [path, tile, 10, 1]]],
                            [[playText, [path, tile, 11, 1]]],
                         ];
                    },
        ],
    },
    {
        path: 'Érazen',
        sequence: [
            function Érazen_1(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                ];
            },
            function Érazen_2(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                ];
            },
            function Érazen_3(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
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
            function Érazen_4(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
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
                    [[playText, [path, tile, 11, 0]]],
                    [[playText, [path, tile, 12, 0]]],
                ];
            },
            function Érazen_5(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                    [[playText, [path, tile, 6, 0]]],
                    [[playText, [path, tile, 7, 0]]],
                    [[playOptions, [path, tile]]],
                    [[playText, [path, tile, 8, 0]]],
                ];
            },
            function Érazen_6(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playSound, [path, 'gate.mp3', 0]], [playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                ];
            },
            function Érazen_7(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                    [[playSound, [path, 'drunk.mp3', 0]], [playText, [path, tile, 6, 0]]],
                    [[playText, [path, tile, 7, 0]]],
                    [[playSound, [path, 'gotalk.mp3', 0]], [playText, [path, tile, 8, 0]]],
                    [[playText, [path, tile, 9, 0]]],
                ];
            },
            function Érazen_8(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                ];
            },
            function Érazen_9(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                ];
            },
            function Érazen_10(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                ];
            },
            function Érazen_11(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                ];
            },
            function Érazen_12(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                ];
            },
            function Érazen_13(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                    [[playText, [path, tile, 6, 0]]],
                ];
            },
            function Érazen_14(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                ];
            },
            function Érazen_15(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
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
                    [[playText, [path, tile, 11, 0]]],
                    [[playText, [path, tile, 12, 0]]],
                    [[playText, [path, tile, 13, 0]]],
                    [[playText, [path, tile, 14, 0]]],
                    [[playText, [path, tile, 15, 0]]],
                    [[playText, [path, tile, 16, 0]]],
                ];
            },
            function Érazen_16(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                ];
            },
            function Érazen_17(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
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
                    [[playText, [path, tile, 11, 0]]],
                    [[playText, [path, tile, 12, 0]]],
                    [[playText, [path, tile, 13, 0]]],
                    [[playOptions, [path, tile]]],
                ];
            },
            function Érazen_18(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
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
                    [[playText, [path, tile, 11, 0]]],
                    [[playText, [path, tile, 12, 0]]],
                    [[playText, [path, tile, 13, 0]]],
                    [[playText, [path, tile, 14, 0]]],
                    [[playText, [path, tile, 15, 0]]],
                ];
            },
            function Érazen_19(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
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
                    [[playText, [path, tile, 11, 0]]],
                ];
            },
            function Érazen_20(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
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
                    [[playText, [path, tile, 11, 0]]],
                    [[playText, [path, tile, 12, 0]]],
                ];
            },
            function Érazen_21(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                ];
            },
            function Érazen_22(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                ];
            },
        ],
    },
    {
        path: 'Jas',
        sequence: [
            function Jas_1(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                    [[playText, [path, tile, 2, 0]]],
                    [[playText, [path, tile, 3, 0]]],
                    [[playText, [path, tile, 4, 0]]],
                    [[playText, [path, tile, 5, 0]]],
                    [[playText, [path, tile, 6, 0]]],
                    [[playText, [path, tile, 7, 0]]],
                    [[playText, [path, tile, 8, 0]]],
                    [[playText, [path, tile, 9, 0]]],
                ];
            },
            function Jas_2(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
                    [[playText, [path, tile, 1, 0]]],
                ];
            },
        ],
    },
    {
        path: 'Yuma',
        sequence: [
            function Yuma_1(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playText, [path, tile, 0, 0]]],
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
        path: 'Beans',
        sequence: [
            function Beans_1(path, tile) {
                sceneList = [
                    [[renderOverlay, [null]]],
                    [[playVideo, [path, 'YattaFinalCompressed.mp4']]],
                ];
            },
        ],
    },
]

export { playSequence };