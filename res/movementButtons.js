// EXPLANATION
/*
buttons.path - path name {'name'}
buttons.tiles - array for paths.tiles (from paths.js)
buttons.tiles.tile - tile id {id}
buttons.tiles.destinationTiles - array for all connected tiles to buttons.tiles.tile
buttons.tiles.destinationTiles.tile - tile that connects to buttons.tiles.tile {id}
buttons.tiles.destinationTiles.text - button text {'text'}
buttons.tiles.destinationTiles.posX - X coordinate of button {num} (top left screen corner + X, goes right) 
buttons.tiles.destinationTiles.posY - Y coordinate of button {num} (top left of screen corner + Y, goes down)
buttons.tiles.destinationTiles.newPath - used to enter/exit Courtyard from/to a path {null/'path id'} (from paths.js)
*/

var buttons = [
    {
        path: 'Entrance',
        tiles: [
            {
                tile: 1,
                destinationTiles:[
                    {
                        tile: 2,
                        text: 'Open your eyes.',
                        posX: 640,
                        posY: 600,
                        newPath: null,
                    },
                ],
            },
            {
                tile: 2,
                destinationTiles:[
                    {
                        tile: 3,
                        text: 'Gate',
                        posX: 640,
                        posY: 100,
                        newPath: null,
                    },
                ],
            },
            {
                tile: 3,
                destinationTiles:[
                    {
                        tile: 2,
                        text: 'Landing zone',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 4,
                        text: 'Hallway',
                        posX: 640,
                        posY: 100,
                        newPath: null,
                    },
                ],
            },
            {
                tile: 4,
                destinationTiles:[
                    {
                        tile: 3,
                        text: 'Gate',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 5,
                        text: 'Cave',
                        posX: 100,
                        posY: 360,
                        newPath: null,
                    },
                    {
                        tile: 6,
                        text: 'Barrier',
                        posX: 640,
                        posY: 100,
                        newPath: null,
                    },
                ],
            },
            {
                tile: 5,
                destinationTiles:[
                    {
                        tile: 4,
                        text: 'Hallway',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                ],
            },
            {
                tile: 6,
                destinationTiles:[
                    {
                        tile: 4,
                        text: 'Hallway',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 1,
                        text: 'Courtyard',
                        posX: 640,
                        posY: 100,
                        newPath: 'Courtyard',
                    },
                ],
            },
        ],
    },
    {
        path: 'Courtyard',
        tiles: [
            {
                tile: 1,
                destinationTiles: [
                    {
                        tile: 5,
                        text: 'Barrier',
                        posX: 640,
                        posY: 620,
                        newPath: 'Entrance',
                    },
                    {
                        tile: 1,
                        text: 'χ',
                        posX: 640,
                        posY: 300,
                        newPath: 'χ',
                    },
                    {
                        tile: 1,
                        text: 'Sisy',
                        posX: 940,
                        posY: 300,
                        newPath: 'Sisy',
                    },
                ],
            },
        ],
    },
    {
        path: 'χ',
        tiles: [
            {
                tile: 1,
                destinationTiles: [
                    {
                        tile: 1,
                        text: 'Courtyard',
                        posX: 640,
                        posY: 620,
                        newPath: 'Courtyard',
                    },
                    {
                        tile: 2,
                        text: 'χ-2',
                        posX: 640,
                        posY: 100,
                        newPath: null,
                    },
                    {
                        tile: 3,
                        text: 'χ-3',
                        posX: 1180,
                        posY: 360,
                        newPath: null,
                    },
                ],
            },
            {
                tile: 2,
                destinationTiles:[
                    {
                        tile: 1,
                        text: 'χ-1',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 4,
                        text: 'χ-4',
                        posX: 1180,
                        posY: 360,
                        newPath: null,
                    },
                    {
                        tile: 5,
                        text: 'χ-5',
                        posX: 100,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
        ],
    },
    {
        path: 'Sisy',
        tiles: [
            {
                tile: 1,
                destinationTiles: [
                    {
                        tile: 1,
                        text: 'Courtyard',
                        posX: 640,
                        posY: 630,
                        newPath: 'Courtyard',
                    },
                    {
                        tile: 2,
                        text: 'Continue',
                        posX: 640,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 2,
                destinationTiles: [
                    {
                        tile: 1,
                        text: 'Go back',
                        posX: 640,
                        posY: 630,
                        newPath: null,
                    },
                    {
                        tile: 3,
                        text: 'Continue',
                        posX: 640,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 3,
                destinationTiles: [
                    {
                        tile: 2,
                        text: 'Go back',
                        posX: 640,
                        posY: 630,
                        newPath: null,
                    },
                    {
                        tile: 4,
                        text: 'Open door',
                        posX: 640,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 4,
                destinationTiles: [
                    {
                        tile: 3,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 5,
                        text: 'Continue',
                        posX: 640,
                        posY: 100,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 5,
                destinationTiles: [
                    {
                        tile: 4,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 6,
                        text: 'Continue',
                        posX: 640,
                        posY: 100,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 6,
                destinationTiles: [
                    {
                        tile: 5,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 7,
                        text: 'Continue',
                        posX: 640,
                        posY: 100,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 7,
                destinationTiles: [
                    {
                        tile: 6,
                        text: 'Go back',
                        posX: 100,
                        posY: 600,
                        newPath: null,
                    },
                    {
                        tile: 8,
                        text: 'Proceed in this direction',
                        posX: 605,
                        posY: 315,
                        newPath: null,
                    },
                    {
                        tile: 9,
                        text: 'Proceed in this direction',
                        posX: 640,
                        posY: 530,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 8,
                destinationTiles: null,
            },
            {
                tile: 9,
                destinationTiles: [
                    {
                        tile: 7,
                        text: 'Go back',
                        posX: 100,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 10,
                        text: 'Go downstairs',
                        posX: 640,
                        posY: 480,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 10,
                destinationTiles: [
                    {
                        tile: 9,
                        text: 'Go back',
                        posX: 100,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 11,
                        text: 'Keep walking',
                        posX: 640,
                        posY: 480,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 11,
                destinationTiles: [
                    {
                        tile: 10,
                        text: 'Go back',
                        posX: 100,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 12,
                        text: 'Open door',
                        posX: 760,
                        posY: 400,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 12,
                destinationTiles: [
                    {
                        tile: 11,
                        text: 'Go back',
                        posX: 100,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 13,
                        text: 'Walk through the door',
                        posX: 730,
                        posY: 400,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 13,
                destinationTiles: [
                    {
                        tile: 12,
                        text: 'Go back',
                        posX: 100,
                        posY: 6200,
                        newPath: null,
                    },
                    {
                        tile: 14,
                        text: 'Keep walking',
                        posX: 760,
                        posY: 400,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 14,
                destinationTiles: [
                    {
                        tile: 13,
                        text: 'Go back',
                        posX: 640,
                        posY: 660,
                        newPath: null,
                    },
                    {
                        tile: 15,
                        text: 'Go right',
                        posX: 1180,
                        posY: 360,
                        newPath: null,
                    },
                    {
                        tile: 21,
                        text: 'Walk past the guard',
                        posX: 670,
                        posY: 400,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 15,
                destinationTiles: [
                    {
                        tile: 14,
                        text: 'Go back',
                        posX: 140,
                        posY: 360,
                        newPath: null,
                    },
                    {
                        tile: 16,
                        text: 'Keep walking',
                        posX: 640,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 16,
                destinationTiles: [
                    {
                        tile: 15,
                        text: 'Go back',
                        posX: 140,
                        posY: 360,
                        newPath: null,
                    },
                    {
                        tile: 17,
                        text: 'Keep walking',
                        posX: 640,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 17,
                destinationTiles: [
                    {
                        tile: 16,
                        text: 'Go back',
                        posX: 140,
                        posY: 360,
                        newPath: null,
                    },
                    {
                        tile: 18,
                        text: 'Keep walking',
                        posX: 640,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 18,
                destinationTiles: [
                    {
                        tile: 17,
                        text: 'Go back',
                        posX: 640,
                        posY: 660,
                        newPath: null,
                    },
                    {
                        tile: 19,
                        text: 'Sisiri',
                        posX: 1220,
                        posY: 450,
                        newPath: null,
                    },
                    {
                        tile: 20,
                        text: 'Ciciri',
                        posX: 30,
                        posY: 450,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 19,
                destinationTiles: [
    
                ]
            },
            {
                tile: 20,
                destinationTiles: [
                    {
                        tile: 18,
                        text: 'Go back',
                        posX: 640,
                        posY: 660,
                        newPath: null,
                    },
    
                ]
            },
            {
                tile: 21,
                destinationTiles: [
                    {
                        tile: 14,
                        text: 'Go back',
                        posX: 640,
                        posY: 650,
                        newPath: null,
                    },
                    {
                        tile: 22,
                        text: 'Walk towards the door',
                        posX: 520,
                        posY: 320,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 22,
                destinationTiles: [
                    {
                        tile: 21,
                        text: 'Go back',
                        posX: 640,
                        posY: 640,
                        newPath: null,
                    },
                    {
                        tile: 23,
                        text: 'Avoid the guard',
                        posX: 780,
                        posY: 220,
                        newPath: null,
                    },
                    {
                        tile: 32,
                        text: 'Walk past the guard',
                        posX: 600,
                        posY: 260,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 23,
                destinationTiles: [
                    {
                        tile: 22,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 24,
                        text: 'Keep walking',
                        posX: 630,
                        posY: 250,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 24,
                destinationTiles: [
                    {
                        tile: 23,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 25,
                        text: 'Keep walking',
                        posX: 630,
                        posY: 250,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 25,
                destinationTiles: [
                    {
                        tile: 24,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 26,
                        text: 'Keep walking',
                        posX: 630,
                        posY: 250,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 26,
                destinationTiles: [
                    {
                        tile: 25,
                        text: 'Go back',
                        posX: 640,
                        posY: 650,
                        newPath: null,
                    },
                    {
                        tile: 27,
                        text: 'Go left',
                        posX: 800,
                        posY: 340,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 27,
                destinationTiles: [
                    {
                        tile: 26,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 28,
                        text: 'Keep walking',
                        posX: 610,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 28,
                destinationTiles: [
                    {
                        tile: 27,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 29,
                        text: 'Keep walking',
                        posX: 610,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 29,
                destinationTiles: [
                    {
                        tile: 28,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 30,
                        text: 'Keep walking',
                        posX: 610,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 30,
                destinationTiles: [
                    {
                        tile: 29,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                    {
                        tile: 31,
                        text: 'Keep walking',
                        posX: 610,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 31,
                destinationTiles: [
                    {
                        tile: 30,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 32,
                destinationTiles: [
                    {
                        tile: 22,
                        text: 'Go back',
                        posX: 1000,
                        posY: 360,
                        newPath: null,
                    },
                    {
                        tile: 33,
                        text: 'Keep walking',
                        posX: 640,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 33,
                destinationTiles: [
                    {
                        tile: 32,
                        text: 'Go back',
                        posX: 100,
                        posY: 280,
                        newPath: null,
                    },
                    {
                        tile: 34,
                        text: 'Access the sacred altar',
                        posX: 620,
                        posY: 360,
                        newPath: null,
                    },
                ]
            },
            {
                tile: 34,
                destinationTiles: [
                    {
                        tile: 33,
                        text: 'Go back',
                        posX: 640,
                        posY: 620,
                        newPath: null,
                    },
                ]
            },
        ],
    },
];

export { buttons }