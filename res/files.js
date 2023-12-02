// EXPLANATION
/*
files.path - what path the files will be used in {'id'} (from paths.js)
files.folder - folder in which the files are held {'folder'}
files.image - array for image files {'file.ext'}
files.audio - array for audio files {'file.ext'}
files.video - array for video files {'file.ext'}
*/

var files = [
    {
        path: 'Entrance',
        folder: './res/Entrance/',
        audio:[
            'Nezarec_1.mp3',
            'OHEO.mp3',
            'footsteps.mp3',
        ],
        bg: [
            'bg2.png'
        ]
    },
    {
        path: 'Courtyard',
        folder: './res/Courtyard/',
        audio:[
            'Nezarec_2.mp3',
        ]
    },
    {
        path: 'χ',
        folder: './res/χ/',
        audio:[
            'Rhulk_1.mp3',
            'Rhulk_2.mp3',
            'Rhulk_3.mp3',
            'Rhulk_4.mp3',
            'Rhulk_5.mp3',
            'Rhulk_6.mp3',
            'Rhulk_7.mp3',
            'Rhulk_8.mp3',
            'Rhulk_9.mp3',
            'Rhulk_10.mp3',
            'Rhulk_11.mp3',
            'Rhulk_12.mp3',
            'Rhulk_13.mp3',
            'Rhulk_14.mp3',
            'Rhulk_15.mp3',
            'Rhulk_16.mp3',
            'Rhulk_17.mp3',
            'Rhulk_18.mp3',
        ],
    },
    {
        path: 'Sisy',
        folder: './res/Sisy/',
        audio:[
            '1.mp3',
            'bread.mp3',
            'ohyeahbaby.mp3',
            
        ],
    },
    {
        path: 'Leo',
        folder: './res/Leo/',
        audio:[
            'ohyeahbaby.mp3',
            'awake.mp3',
            'bang.mp3',
            'letyougo.mp3',
            'teri.mp3',
            'roar.mp3',
        ],
    },
    {
        path: 'Myrin',
        folder: './res/Myrin/',
        audio:[
            'crowd.mp3',
            'bee.mp3',
        ],
    },
    {
        folder: './res/Érazen/',
        path: 'Érazen',
        audio:[
            'drunk.mp3',
            'gotalk.mp3',
            'gate.mp3',
        ],
    },
];

export {files}