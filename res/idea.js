/*
//  IDEA EXPLANATION

//  upon opening, video plays, turns into png at the end, 1st gate sequence starts
//  enter COURTYARD (also works as a TILE), new sequence

//  SEQUENCE TEXT PLAYS OUT ONE LINE AT A TIME, REQUIRING MOUSE CLICK EVENT TO PLAY NEXT LINE AND END

//  click on button to enter a PATH
//  more buttons to choose TILE

//  TILES HAVE BUTTONS WITH POSITIONS ASSINGED, CHANGING TILES MEANS THAT TILE'S BUTTONS UNLOAD AND NEW ONES LOAD

function playSequence(text) {
    for (var i in text) {
        //typewriter effect to display text
        //await mouse click event to proceed
        //next line ↻
    }
};

//  each tile has a sequence (text, item, puzzle, can only play once unless item is lost or puzzle spawns randomly)
//  WALKING ONTO ANY TILE FIRST TIME, EXAMPLE: PATH 1 TILE 2
if (path[0].tiles[1].hasSpSeq == true) { // CHECK IF TILE HAS SPECIAL SEQUENCE
    if (seq[path].sequence[tile + 1].complete == false) { //  CHECK IF TILE 2 SP SEQ IS COMPLETE (HAS BEEN PLAYED OUT BEFORE)
        playSequence(seq[path].sequence[tile + 1].text);
    }
}   // IF SP SEQ IS COMPLETE
else if (seq[path].sequence[tile].complete == false) { //   CHECK IF NORMAL SEQ IS COMPLETE
    playSequence(seq[path].sequence[tile].text);
}   //IF N SEQ IS COMPLETE
else {
    playSequence(seq[null].sequence[null].text);    //  PLAYS DEFAULT SEQ WITH BASIC TEXT ---OPTIONAL---
}

//

function playPuzzle(puzzle) { };

//  PUZZLE SPAWNING, EXAMPLE: WALK ONTO PATH 1 TILE 2 (BOTH SEQ COMPLETE)
if (seq[0].sequence[2].complete == true && seq[0].sequence[1].complete == true) {
    //RANDOM CHANCE (1-100)%
    if (random == 1) {
        playPuzzle(puzzle); //  PLAYS PUZZLE IF RANDOM NUMBER IS 1
    }
}

//  DEATH
function death() { };
if (path[0].tile[0].type == 'death') {
    //  PLAYER RESPAWNS IN COURTYARD
}

// TP
function teleport() { };
if (path[0].tile[0].type == 'tp') {
    // INF CYCLE TO CHECK FOR path[rand].tile[rand].isDeadend==false
    // PLAYER TELEPORTS TO path[rand].tile[rand];
}

// TP/DEATH
if (path[0].tile[0].type == 'tp/death') {
    //  RAND (1-2) CHANCE FOR EITHER death(); OR teleport();
}
*/
