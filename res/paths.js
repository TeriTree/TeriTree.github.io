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

var paths = [
    {
        id: 'Entrance',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 2,
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 5,
                hasItem: 'Tie',
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
        ],
    },
    {
        id: 'Courtyard',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
        ],
    },
    {
        id: 'χ',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 2,
                hasItem: 'χ-1',
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 5,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 7,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 8,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 9,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 10,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 11,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 12,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 13,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
            {
                id: 14,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
            },
        ],
    },
    {
        id: 'Sisy',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 4,
            },
            {
                id: 5,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 4,
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 4,
            },
            {
                id: 7,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 3,
            },
            {
                id: 8,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg : 5,
            },
            {
                id: 9,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 7,
            },
            {
                id: 10,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 7,
            },
            {
                id: 11,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 7,
            },
            {
                id: 12,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 6,
            },
            {
                id: 13,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 6,
            },
            {
                id: 14,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 2,
            },
            {
                id: 15,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 8,
            },
            {
                id: 16,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 8,
            },
            {
                id: 17,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 8,
            },
            {
                id: 18,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 10,
            },
            {
                id: 19,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 10,
            },
            {
                id: 20,
                hasItem: 'Soup',
                deadendType: null,
                hasPuzzle: false,
                bg: 9,
            },
            {
                id: 21,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 12,
            },
            {
                id: 22,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 11,
            },
            {
                id: 23,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 13,
            },
            {
                id: 24,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 13,
            },
            {
                id: 25,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 13,
            },
            {
                id: 26,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 14,
            },
            {
                id: 27,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 15,
            },
            {
                id: 28,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 15,
            },
            {
                id: 29,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 15,
            },
            {
                id: 30,
                hasItem: 'Arancinu',
                deadendType: null,
                hasPuzzle: false,
                bg: 15,
            },
            {
                id: 31,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 11,
            },
            {
                id: 32,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 16,
            },
            {
                id: 33,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 17,
            },
            {
                id: 34,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 19,
            },
        ],
    },
    {
        id: 'Leo',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 2,
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 3,
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 4,
            },
            {
                id: 5,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 5,
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 6,
            },
            {
                id: 7,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 7,
            },
            {
                id: 8,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 8,
            },
            {
                id: 9,
                hasItem: 'Dudu',
                deadendType: null,
                hasPuzzle: false,
                bg: 9,
            },
            {
                id: 10,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 10,
            },
            {
                id: 11,
                hasItem: 'Excalibur',
                deadendType: null,
                hasPuzzle: false,
                bg: 11,
            },
            {
                id: 12,
                hasItem: 'Letter',
                deadendType: null,
                hasPuzzle: false,
                bg: 10,
            },
        ],
    },
    {
        id: 'Myrin',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 2,
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 3,
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 5,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 4,
            },
            {
                id: 6,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 5,
            },
            {
                id: 7,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 8,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 6,
            },
            {
                id: 9,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 10,
                hasItem: 'Myra',
                deadendType: null,
                hasPuzzle: false,
                bg: 7,
            },
        ],
    },
    {
        id: 'Érazen',
        tiles: [
            {
                id: 1,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 1,
            },
            {
                id: 2,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 2,
            },
            {
                id: 3,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 3,
            },
            {
                id: 4,
                hasItem: null,
                deadendType: null,
                hasPuzzle: false,
                bg: 4,
            },
        ],
    },
    {
        id: 'Jas',
        tiles: [
        ],
    },
    {
        id: 'Samuel',
        tiles: [
        ],
    },
    {
        id: 'default',
        tiles: [
        ],
    },
];

export { paths };