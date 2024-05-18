import { paths } from './paths.js'
import { seq } from './sequence.js'
import { buttons } from './movementButtons.js'
import {playSequence} from './scenePlayer.js'

function findPathID(id){
    for(var i in paths){
        if(id == paths[i].id){
            return i;
        }
    }
}

function getPathName(id){
    var pathName = paths[id].name;
    return pathName;
}

var bgm = document.getElementById('bgm');

function playBgm(path, tile){
    if(paths[path].tiles[tile].bgm!=undefined){
        if(bgm.getAttribute('bgmID') != paths[path].tiles[tile].bgm.id){
            bgm.setAttribute('bgmID', `${paths[path].tiles[tile].bgm.id}`);
            bgm.setAttribute('src', `${paths[path].tiles[tile].bgm.file}`);
            bgm.volume = paths[path].tiles[tile].bgm.volume;
            bgm.play();
        }
        else{
            bgm.play();
        }
    }
}

//STARTING POINT AFTER LOADING IN
renderPage(9, 0);
sequenceCheck(9, 0);

function renderPage(path, tile) {
    var pathName = getPathName(path);
    pathNameBG.setAttribute('src', `./res/${pathName}/pathName.png`);
    var gameScreenBG = document.getElementById("gameScreenBG");
    var randomBG = Math.floor(Math.random() * paths[path].tiles[tile].bg.length) + 1;
    gameScreenBG.setAttribute('src', `./res/${paths[path].name}/bg/${paths[path].tiles[tile].bg[randomBG-1]}.png`);
    if(buttons[path].tiles[tile].destinationTiles==null){return;}
    for (var i in buttons[path].tiles[tile].destinationTiles) {
        var gameScreen = document.getElementById("gameScreen");
        gameScreen.setAttribute('displayedpath', `${buttons[path].path}`)
        gameScreen.setAttribute('displayedtile', `${buttons[path].tiles[tile].tile}`)
        var button = document.createElement("BUTTON");
        var buttonText = document.createTextNode(buttons[path].tiles[tile].destinationTiles[i].text);
        button.style.position = "absolute";
        button.style.left = buttons[path].tiles[tile].destinationTiles[i].posX + 'px';
        button.style.top = buttons[path].tiles[tile].destinationTiles[i].posY + 'px';
        button.setAttribute('class', 'movementButton');
        button.setAttribute('id', `button_${buttons[path].tiles[tile].destinationTiles[i].text}`)
        button.setAttribute('tile', `${buttons[path].tiles[tile].destinationTiles[i].tile}`);
        button.setAttribute('newpath', `${buttons[path].tiles[tile].destinationTiles[i].newPath}`);
        button.addEventListener("click", changePage);
        button.appendChild(buttonText);
        gameScreen.appendChild(button);
    }
    playBgm(path, tile);
}

function unrenderPage(path, tile) {
    if(buttons[path].tiles[tile].destinationTiles.length==0) return;
    for (var i in buttons[path].tiles[tile].destinationTiles) {
        var gameScreen = document.getElementById("gameScreen");
        var button = document.getElementById(`button_${buttons[path].tiles[tile].destinationTiles[i].text}`);
        gameScreen.removeChild(button);
    }
}

function changePage(click) {
    var currentPath = document.getElementById("gameScreen").getAttribute('displayedpath');
    var currentPathID = findPathID(currentPath);
    var currentTile = document.getElementById("gameScreen").getAttribute('displayedtile') - 1;
    unrenderPage(currentPathID, currentTile);
    var newPathID;
    var newTile;
    if(click.target.getAttribute("newpath")!="null"){
        var newPath = click.target.getAttribute("newpath");
        newPathID = findPathID(newPath);
        var newTile = click.target.getAttribute("tile")-1;
        var pathNameBG = document.getElementById("pathNameBG");
        pathNameBG.setAttribute('src', `./res/${newPath}/pathName.png`);
    }
    else{
        newPathID = currentPathID;
        newTile = click.target.getAttribute("tile") - 1;
    }
    renderPage(newPathID, newTile);
    sequenceCheck(newPathID, newTile);
    //console.log(newPathID,newTile);
}

/*function playSound() {
    var gameScreen = document.getElementById("gameScreen");
    var audio = document.createElement("AUDIO");
    audio.setAttribute('src', './Teri Tower_files/Rhulk/Rhulk_1.mp3');
    gameScreen.appendChild(audio);
    audio.play();
    setTimeout(function () {
        audio.setAttribute('src', './Teri Tower_files/Rhulk/Rhulk_2.mp3');
        audio.play();
    }, 5000)
}*/

function sequenceCheck(path, tile) {
    if (seq[path].sequence[tile].complete == false && seq[path].sequence[tile].type != 'e') {
        playSequence(path, tile);
        if(seq[path].sequence[tile].hasAudio == true){
            bgm.pause();
        }
        //seq[path].sequence[tile].complete = true;
        //seq[path].sequence[tile].text
    }
    if (seq[path].sequence[tile].complete == true && paths[path].tiles[tile].deadendType=='death'){
        death_event();
    }
    /*else {
        playSequence(seq[null].sequence[null].text);    //  PLAYS DEFAULT SEQ WITH BASIC TEXT ---OPTIONAL---
    }*/
}

function death_event() {
    var gameScreen = document.getElementById("gameScreen");
    var audio = document.createElement("AUDIO");
    var randomDeath = Math.floor(Math.random() * 14) + 1;
    audio.setAttribute('src', `./res/death_event/${randomDeath}.ogg`);
    gameScreen.appendChild(audio);
    
    var currentPath = document.getElementById("gameScreen").getAttribute('displayedpath');
    var currentPathID = findPathID(currentPath);
    var currentTile = document.getElementById("gameScreen").getAttribute('displayedtile') - 1;

    var video = document.createElement("VIDEO");
    video.setAttribute('class',"deathVideo");
    video.setAttribute('src','./res/death_event/explosion.mp4');
    gameScreen.appendChild(video);
    video.play();
    setTimeout(function () {
        audio.play();
        audio.onended = function () {
            gameScreen.removeChild(audio);
        }
    }, 1000);
    video.onended = function () {
        gameScreen.removeChild(video);
        renderPage(1, 0);
    }

    setTimeout(function () {
        unrenderPage(currentPathID,currentTile)
    }, 100);
}

/*playSequence(path, tile) {
    //for (var i in text) {
        //typewriter effect to display text
        //await mouse click event to proceed
        //next line ↻
    //}
    scenePlayer[path].sequence[tile].Entrance_5();
    seq[path].sequence[tile].complete = true;
};*/

export {death_event};
export {bgm};