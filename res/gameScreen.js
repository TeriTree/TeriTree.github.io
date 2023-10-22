import { paths } from './paths.js'
import { seq } from './sequence.js'
import { items } from './items.js'
import { buttons } from './movementButtons.js'
import { files } from './files.js'
import {playSequence} from './scenePlayer.js'

function findPathID(id){
    for(var i in paths){
        if(id == paths[i].id){
            return i;
        }
    }
}

function renderPage(path, tile) {
    var gameScreenBG = document.getElementById("gameScreenBG");
        gameScreenBG.setAttribute('src', `./res/${paths[path].id}/bg/${paths[path].tiles[tile].bg}.png`);
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
        button.setAttribute('id', `button_${buttons[path].tiles[tile].destinationTiles[i].text}`)
        button.setAttribute('tile', `${buttons[path].tiles[tile].destinationTiles[i].tile}`);
        button.setAttribute('newpath', `${buttons[path].tiles[tile].destinationTiles[i].newPath}`);
        button.addEventListener("click", changePage);
        button.appendChild(buttonText);
        gameScreen.appendChild(button);
    }
}


//STARTING POINT AFTER LOADING IN
renderPage(4, 5);
sequenceCheck(4, 5);

function unrenderPage(path, tile) {
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
    
    sequenceCheck(newPathID, newTile);
    renderPage(newPathID, newTile);
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
        seq[path].sequence[tile].complete = true;
        //seq[path].sequence[tile].text
    }
    /*else {
        playSequence(seq[null].sequence[null].text);    //  PLAYS DEFAULT SEQ WITH BASIC TEXT ---OPTIONAL---
    }*/
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
