//EXPLANATION
/*
path.id - path name {'name'}
tiles.id - tile number {id}
tiles.hasItem - does the tile have an item {null/'id'} (from items.js)
--PLACEHOLDER--   tiles.hasSeq - does the tile have a normal sequence {true/false}
--PLACEHOLDER--   tiles.hasSpSeq - does the tile have a special sequence {true/false}
tiles.deadendType - is the tile a deadend and what type {null/'death'/'tp'/'tpdeath'}
tiles.hasPuzzle - does the tile have a puzzle and what id {null/id}
*/

import { bgm } from "./gameScreen.js";
import {items } from "./items.js"

var paths = [
    {
        id: 'Entrance',
        name: 'Entrance',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [2],
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
            },
            {
                id: 5,
                hasItem: 'Tie',
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
            },
        ],
    },
    {
        id: 'Courtyard',
        name: 'Courtyard',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'courtyard',
                    file: './res/Courtyard/bgm/testfilepleaseignore.mp3',
                    volume: 0.3,
                },
            },
        ],
    },
    {
        id: 'χ',
        name: 'Frey',
        tiles: [
            {
                id: 1,
                hasItem: 'χ-1',
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'sanctified_mind',
                    file: './res/Frey/bgm/sanctified_mind.mp3',
                    volume: 0.4,
                },
            },
            {
                id: 2,
                hasItem: 'Poem_7',
                deadendType: null,
                hasPuzzle: false,
                bg: [2],
                bgm: {
                    id: 'L',
                    file: './res/Frey/bgm/L.mp3',
                    volume: 0.4,
                },
            },
        ],
    },
    {
        id: 'Sisy',
        name: 'Sisy',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'bards',
                    file: './res/Sisy/bgm/Bards.mp3',
                    volume: 0.5
                }
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [4],
                bgm: {
                    id: 'Rollon',
                    file: './res/Sisy/bgm/Rollon.mp3',
                    volume: 0.5
                }
            },
            {
                id: 5,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [4],
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [4],
            },
            {
                id: 7,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 8,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: false,
                bg : [5],
            },
            {
                id: 9,
                hasItem: 'Poem_1',
                deadendType: null,
                hasPuzzle: false,
                bg: [7],
            },
            {
                id: 10,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [7],
            },
            {
                id: 11,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [7],
            },
            {
                id: 12,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 13,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 14,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [2],
                bgm: {
                    id: 'Guard',
                    file: './res/Sisy/bgm/Guard.mp3',
                    volume: 0.5
                }
            },
            {
                id: 15,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [8],

            },
            {
                id: 16,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [8],
            },
            {
                id: 17,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [8],
            },
            {
                id: 18,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [10],
            },
            {
                id: 19,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: false,
                bg: [10],
            },
            {
                id: 20,
                hasItem: 'Soup',
                deadendType: null,
                hasPuzzle: false,
                bg: [9],
            },
            {
                id: 21,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [12],
                bgm: {
                    id: 'Celtic',
                    file: './res/Sisy/bgm/CelticVonZiegler.mp3',
                    volume: 0.5
                }
            },
            {
                id: 22,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [11],
            },
            {
                id: 23,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg:  [13],
            },
            {
                id: 24,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [13],
            },
            {
                id: 25,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [13],
            },
            {
                id: 26,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [14],
            },
            {
                id: 27,
                hasItem: 'Poem_4',
                deadendType: null,
                hasPuzzle: false,
                bg: [15],
            },
            {
                id: 28,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [15],
            },
            {
                id: 29,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [15],
            },
            {
                id: 30,
                hasItem: 'Arancinu',
                deadendType: null,
                hasPuzzle: false,
                bg: [15],
            },
            {
                id: 31,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [11],
                bgm: {
                    id: 'Montedoro',
                    file: './res/Sisy/bgm/Montedoro.mp3',
                    volume: 0.5
                }
            },
            {
                id: 32,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [16],
            },
            {
                id: 33,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [17],
            },
            {
                id: 34,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [19],
            },
        ],
    },
    {
        id: 'Leo',
        name: 'Leo',
        tiles: [
            {
                id: 1,
                hasItem: 'Poem_6',
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'Awake',
                    file: './res/Leo/bgm/Awake.mp3',
                    volume: 0.5
                }
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [2],
            },
            {
                id: 3,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: false,
                bg: [3],
                bgm: {
                    id: 'Temple',
                    file: './res/Leo/bgm/RomeTemple.mp3',
                    volume: 0.5
                }
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [4],
                bgm: {
                    id: 'Templee',
                    file: './res/Leo/bgm/RomeTemple.mp3',
                    volume: 0.5
                }
            },
            {
                id: 5,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [5],
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 7,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: false,
                bg: [7],
            },
            {
                id: 8,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [8],
                bgm: {
                    id: 'Fishe',
                    file: './res/Leo/bgm/Chocolat.mp3',
                    volume: 0.5
                }
            },
            {
                id: 9,
                hasItem: 'Dudu',
                deadendType: null,
                hasPuzzle: false,
                bg: [9],
                bgm: {
                    id: 'DuduDEA',
                    file: './res/Leo/bgm/Dudu.mp3',
                    volume: 0.5
                }
            },
            {
                id: 10,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [10],
            },
            {
                id: 11,
                hasItem: 'Excalibur',
                deadendType: null,
                hasPuzzle: false,
                bg: [11],
            },
            {
                id: 12,
                hasItem: 'Letter',
                deadendType: null,
                hasPuzzle: false,
                bg: [10],
            },
            {
                id: 13,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [10],
            },
        ],
    },
    {
        id: 'Myrin',
        name: 'Myrin',
        tiles: [
            {
                id: 1,
                hasItem: 'Painting_1',
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },
            {
                id: 2,
                hasItem: 'Painting_2',
                deadendType: null,
                hasPuzzle: false,
                bg: [2],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },
            {
                id: 3,
                hasItem: 'Painting_3',
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },
            {
                id: 5,
                hasItem: 'Painting_4',
                deadendType: null,
                hasPuzzle: false,
                bg: [4],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },
            {
                id: 6,
                hasItem: 'Painting_5',
                deadendType: null,
                hasPuzzle: false,
                bg: [5],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },
            {
                id: 7,
                hasItem: 'Poem_3',
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },
            {
                id: 8,
                hasItem: 'Painting_6',
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },
            {
                id: 9,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },
            {
                id: 10,
                hasItem: 'Painting_7',
                deadendType: null,
                hasPuzzle: false,
                bg: [7],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },
            {
                id: 11,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [8],
                bgm: {
                    id: 'Hive',
                    file: './res/Myrin/bgm/Hive.mp3',
                    volume: 0.5
                }
            },

        ],
    },
    {
        id: 'Érazen',
        name: 'Érazen',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'Elysium_1',
                    file: './res/Érazen/bgm/Elysium_1.mp3',
                    volume: 0.5
                }
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [2],
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 4,
                hasItem: 'Poem_8',
                deadendType: null,
                hasPuzzle: false,
                bg: [4],
            },
            {
                id: 5,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [5],
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
                bgm: {
                    id: 'Rue32B',
                    file: './res/Érazen/bgm/Rue32B.mp3',
                    volume: 0.5
                }
            },
            {
                id: 7,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [7],
                bgm: {
                    id: '8AM',
                    file: './res/Érazen/bgm/8AM.mp3',
                    volume: 0.5
                }
            },
            {
                id: 8,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [7],
            },
            {
                id: 9,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [8],
                bgm: {
                    id: 'ZAUM',
                    file: './res/Érazen/bgm/ZAUM.mp3',
                    volume: 0.5
                }
            },
            {
                id: 10,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [9],
            },
            {
                id: 11,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [10],
            },
            {
                id: 12,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [9],
            },
            {
                id: 13,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [11],
                bgm: {
                    id: '8AM',
                    file: './res/Érazen/bgm/8AM.mp3',
                    volume: 0.5
                }
            },
            {
                id: 14,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [12],
            },
            {
                id: 15,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [13],
                bgm: {
                    id: 'Mini Blues',
                    file: './res/Érazen/bgm/Mini_blues.mp3',
                    volume: 0.5
                }
            },
            {
                id: 16,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [14],
                bgm: {
                    id: 'Live With Me',
                    file: './res/Érazen/bgm/LiveWithMe.mp3',
                    volume: 0.5
                }
            },
            {
                id: 17,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [15],
            },
            {
                id: 18,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [16],
                bgm: {
                    id: 'Polyhedrons',
                    file: './res/Érazen/bgm/Polyhedrons.mp3',
                    volume: 0.5
                }
            },
            {
                id: 19,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [17],
            },
            {
                id: 20,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [18],
                bgm: {
                    id: 'Disco Dancer',
                    file: './res/Érazen/bgm/DiscoDancer.mp3',
                    volume: 0.5
                }
            },
            {
                id: 21,
                hasItem: 'Poem_5',
                deadendType: null,
                hasPuzzle: false,
                bg: [19],
                bgm: {
                    id: 'Saint Brune',
                    file: './res/Érazen/bgm/SaintBrune.mp3',
                    volume: 0.5
                }
            },
            {
                id: 22,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [20],
                bgm: {
                    id: 'Potato song',
                    file: './res/Érazen/bgm/Potato.mp3',
                    volume: 0.5
                }
            },
            
        ],
    },
    {
        id: 'Jas',
        name: 'Jas',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg:[1],
                bgm:{
                    id: 'LastDream',
                    file: './res/Jas/bgm/LastDream.mp3',
                    volume: 0.5
                }
            },
            {
                id: 2,
                hasItem: 'Coordinates',
                deadendType: null,
                hasPuzzle: false,
                bg:[2],
            }
        ],
    },
    {
        id: 'Yuma',
        name: 'Yuma',
        tiles: [
            {
                id: 1,
                hasItem: 'Challenge',
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'Link Click',
                    file: './res/Yuma/bgm/LC.mp3',
                    volume: 0.4
                }
            },
        ],
    },
    {
        id: 'Beans',
        name: 'Beans',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [2],
                bgm: {
                    id: 'Quiz_suspense',
                    file: './res/Beans/bgm/quiz_suspense.mp3',
                    volume: 0.5
                }
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 4,
                hasItem: 'Poem_2',
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 5,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 7,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 8,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 9,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [4],
            },
            {
                id: 10,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 11,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            }
        ],
    },
    {
        id: 'Mika',
        name: 'Mika',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
                bgm: {
                    id: 'tick_tock',
                    file: './res/Mika/bgm/ticktock.mp3',
                    volume: 0.4
                }
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [2],
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [2],
            },
            {
                id: 5,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [2],
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [4],
                bgm: {
                    id: 'tick_tock',
                    file: './res/Mika/bgm/ticktock.mp3',
                    volume: 0.4
                }
            },
            {
                id: 7,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [4],
            },
            {
                id: 8,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [8],
                bgm: {
                    id: 'Kevonia_Forest',
                    file: './res/Mika/bgm/Kevonia_Forest.mp3',
                    volume: 0.4

                }
            },
            {
                id: 9,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
                bgm: {
                    id: 'tick_tock',
                    file: './res/Mika/bgm/ticktock.mp3',
                    volume: 0.4
                }
            },
            {
                id: 10,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 11,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 12,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [3],
            },
            {
                id: 13,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [10],
                bgm: {
                    id: 'tick_tock_eerie',
                    file: './res/Mika/bgm/ticktock_eerie.mp3',
                    volume: 0.4
                } 
            },
            {
                id: 14,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: false,
                bg: [11],
            },
            {
                id: 15,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: false,
                bg: [12],
            },
            {
                id: 16,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [13],
            },
            {
                id: 17,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [1],
            },
            {
                id: 18,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [9],
            },
            {
                id: 19,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [9],
                bgm: {
                    id: 'tick_tock_eerie',
                    file: './res/Mika/bgm/ticktock_eerie.mp3',
                    volume: 0.4
                } 
            },
            {
                id: 20,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [5],
                bgm: {
                    id: 'Kevonia_Forest',
                    file: './res/Mika/bgm/AsBefore_ElysianRealm.mp3',
                    volume: 0.4

                }
            },
            {
                id: 21,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 22,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
                bgm: {
                    id: 'erodedSpace',
                    file: './res/Mika/bgm/erodedSpace.mp3',
                    volume: 1
                }
            },
            {
                id: 23,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 24,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 25,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 26,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 27,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 28,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 29,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 30,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 31,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 32,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 33,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 34,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 35,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 36,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 37,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [6],
            },
            {
                id: 38,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: [7],
                bgm: {
                    id: 'tick_tock',
                    file: './res/Mika/bgm/ticktock.mp3',
                    volume: 0.4
                }
            }    
        ],
    },
    {
        id: 'Samuel',
        name: 'Samuel',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: null,
                bg: [2],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            },
            {
                id: 2,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: null,
                bg: [3],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            },
            {
                id: 3,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: null,
                bg: [3],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            },
            {
                id: 4,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: null,
                bg: [3],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            },
            {
                id: 5,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: null,
                bg: [3],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            },
            {
                id: 6,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: null,
                bg: [3],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            },
            {
                id: 7,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: null,
                bg: [3],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            },
            {
                id: 8,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: null,
                bg: [3],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            },
            {
                id: 9,
                hasItem: null,
                deadendType: 'death',
                hasPuzzle: null,
                bg: [3],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            },
            {
                id: 10,
                hasItem: null,
                deadendType: null,
                hasPuzzle: null,
                bg: [4],
                bgm: {
                    id: null,
                    file: null,
                    volume: null
                }
            },
        ],
    },
    {
        id: 'default',
        tiles: [
        ],
    },
];

export { paths };