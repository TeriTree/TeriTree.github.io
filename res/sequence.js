// EXPLANATION
/*
seq.path - path name {'name'}
seq.sequence.tile - tile id {id}
seq.sequence.type - tile type {'e'/'n'/'s'}
seq.sequence.complete - has the sequence been played {true/false}
seq.sequence.text - sequence text {"text"}
seq.sequence.option - answer options {"text"}
seq.sequence.answer - answer number {num}

--COPY TO EDIT--
{
    path: '',
        sequence: [
            {
                tile: 0,
                type: 'e',
                complete: true,
            },
            {
                tile: 0,
                type: 'n',
                complete: false,
                text: [],
            },
            {
                tile: 0,
                type: 's',
                complete: false,
                text: [],
                textOptions: [],
                answer: 0,
            },
        ],
},
*/

var seq = [
    {
        path: 'Entrance',
        sequence: [
            {
                tile: 1,
                type: 'n',
                complete: false,
                text: [
                    "...", /*0*/
                ],
            },
            {
                tile: 2,
                type: 'n',
                complete: false,
                text: [
                    "Consciousness flows into your mind, your eyes slowly open.", /*1*/
                    "You don't remember how or when you ended up here. " /*2*/,
                    "A sudden, temporary amnesia attack, perhaps? Sounds pretty ඞ.", /*3*/
                    "You instinctively touch your clothes.", /*4*/
                    "Good, at least you're not naked.", /*5*/
                    "Of one thing, you can be sure: your amnesia is not caused by alcohol.", /*6*/
                    "The rest, you can discover only by moving forward.", /*7*/
                    "And thus, you began to walk, as if drawn by the imposing gate before your eyes.", /*8*/
                    "Not a classic gate, no. It is closer to... a portal, an otherwordly boundary.", /*9*/
                    "What lies on the other side is unknown, but worry not.", /*10*/
                    "Its contents will soon be revealed, for...", /*11*/
                    "You're destined to cross it.", /*12*/
                    "...", /*13*/
                    "After a while, you have finally arrived.", /*14*/
                    "You didn't think much of it at first, but now you're starting to have doubts about all this corruption...", /*14*/
                    "You are the center of the Dreaming City.", /*16*/
                    "The...", /*17*/
                    "'Keep of Voices'", /*18*/ 
                ],
            },
            {
                tile: 3,
                type: 'e',
                complete: false,
                text: [
                    "The gate, breaking the silence vehemently only few moments ago is now prey of the silence that swallowed the hallway. It does not move.",
                    "The door does pay no heed to your futile attempts.",
                    "The gate does not respond. It almost looks like the warped light is beckoning you from the reflection of the gate.",
                    "The warped light continues to beckon you to come closer.",
                ],
            },
            {
                tile: 4,
                type: 'n',
                complete: false,
                text: [
                    "You enter through the gate.",
                    "Your vision gets enveloped by an inscrutable darkness.",
                    "The purple inside which was perfectly visible before has seemingly disappeared.",
                    "You hear a distinctive roar as the gate behind you closes itself loudly, sending vibrations across the hallway.",
                    "Your eyes begin to detect a warped light ahead of you, in the distance, illuminating the room.",
                    "The familiar purple has returned...",
                    "Crystals.",
                    "This entire place is carved out of a magnificent geode... at least you think so.",
                    "You remember the warped light, and turn towards the barrier at the other end of this hallway.",
                    "A yes. A no. A straight line. A goal.",
                    "Your heart is filled with anticipation. Will you dare approach this barrier?",
                ],
            },
            {
                tile: 5,
                type: 'n',
                complete: false,
                text: [
                    "You're not sure when it happened, but you have entered a cave.", /*1*/
                    "You immediately notice something rather odd is laying in the middle of it, unsupervised.", /*2*/
                    "Though perplexed at the thought of such a curious object being thrown in here, you have no doubt: it is a... necktie.", /*3*/
                    /*"Though perplexed at the thought of such a curious object being thrown in here, you have no doubt: it is a Senti keychain.",*/
                    /*"You feel more courageous than ever with this keychain, if only it was accompanied with some Yattas!",*/
                    "A horrific, multi-patterned necktie, left on the ground as if the previous owner couldn't put up with it anymore.", /*4*/
                    "Well, neckties are harmless. What could go wrong if you pick it up.", /*5*/
                    "On a whim, you decide to wear it.", /*6*/
                ],
            },
            {
                tile: 6,
                type: 'n',
                complete: false,
                text: [
                    "You start wondering what kind of structure is hiding behind that barrier. A tower? A pearly white palace filled with countless sawblades? A gigantic beehive? All of them, perhaps.",
                    "Curiosity gives you the strength to move your feet towards the barrier.",
                    "...",
                    "...",
                    "As you walk closer, the warped light becomes brighter.",
                    "Brighter... and red...",
                    "Your vision becomes completely enchanted. You can hear screams coming from the shadows all around the corners of your eyes...",
                    "...",
                    "Y O U R M I N D I S B R O K E N--",
                ],
            },
        ],
    },
    {
        path: 'Courtyard',
        sequence: [
            {
                tile: 1,
                type: 'n',
                complete: false,
                text: [
                    "This voice again...",
                    "It felt like death itself was approaching, but...",
                    "Suddenly everything stopped.",
                    "You have done it.",
                    "You've passed through.",
                ],
            },
        ],
    },
    {
        path: 'χ',
        sequence: [
            {
                tile: 1,
                type: 's',
                complete: false,
                text: [
                    "A deep chill welcomes you into this new path...",
                    "Your vision goes blank and in your mind you can see the name:",
                    "χ"
                ],
                option: ["Proceed into the Sunken Pyramid..."],
                answer: 0,
            },
            {
                tile: 2,
                type: 's',
                complete: false,
                text: [""],
                option: ["Light falls.", "Moons shatter.", "Suns fade.",],
                answer: 2,
            },
            {
                tile: 3,
                type: 's',
                complete: false,
                text: [""],
                option: ["Sets you...", "Glimpses you...", "Rebinds you...",],
                answer: 2,
            },
            {
                tile: 4,
                type: 's',
                complete: false,
                text: [""],
                option: ["Infinity.", "Domination unbound.", "Absolute power.",],
                answer: 1,
            },
        ],
    },

    {
        path: 'Sisy',
        sequence: [
            {
                tile: 1,
                type: 'n',
                complete: false,
                text: ["Lassate ogne speranza voiautri ca trasiti. This is the original line.", /*1*/
                       "No for real, check his earlier works, you will see what he thought was the real language of poetry." /*2*/],
            },
            {
                tile: 2,
                type: 'n',
                complete: false,
                text: ["Ok, je suis desolee, as usual I ramble about that topic, I probably spoiled the surprise already anyway."],
            },
            {
                tile: 3,
                type: 's',
                complete: false,
                text: ["It all starts with..."],
                option: ["Hrolfr.", "Rollo.", "Rollon.",],
                answer: 2,
            },
            {
                tile: 4,
                type: 'n',
                complete: false,
                text: ["A great raider, a warlord, and... First to get settled on the northern shores of a country."],
            },
            {
                tile: 5,
                type: 'n',
                complete: false,
                text: ["He embraced the cross, and adopted a new language."],
            },
            {
                tile: 6,
                type: 'n',
                complete: false,
                text: ["And thus his progeny would leave their mark in every land they lived in."],
            },
            {
                tile: 7,
                type: 'n',
                complete: false,
                text: ["Thus... right they travagghianu, up they toil."],
            },
            {
                tile: 8,
                type: 'n',
                complete: false,
                text: ["FAIL: Your ship takes the wrong direction, you end up in Britain, lost in the wilderness."],
            },
            {
                tile: 9,
                type: 'n',
                complete: false,
                text: ["Surely they all took different directions and interesting stories."],
            },
            {
                tile: 10,
                type: 'n',
                complete: false,
                text: ["And they went wild with the differences!"],
            },
            {
                tile: 11,
                type: 's',
                complete: false,
                text: ["Can you guess what a muccaturi is?"],
                option: ["Snot.", "Napkin.",],
                answer: 1,
            },
            {
                tile: 12,
                type: 'n',
                complete: false,
                text: ["Indeed descendant of Rollon, we have so much in common."],
            },
            {
                tile: 13,
                type: 'n',
                complete: false,
                text: ["Continuing the journey proved arduous."],
            },
            {
                tile: 14,
                type: 'n',
                complete: false,
                text: ["But our story is interrupted, that guard looks hungry... Should we continue right?"],
            },
            {
                tile: 15,
                type: 'n',
                complete: false,
                text: ["As I was saying, despite the differences, we're all a big family in the end."],
            },
            {
                tile: 16,
                type: 's',
                complete: false,
                text: ["Would you say you're the only one being called a frog eater?"],
                option: ["Of course, bruh.", "No.",],
                answer: 1,
            },
            {
                tile: 17,
                type: 'n',
                complete: false,
                text: ["What a tragedy that distant cousins would hate one another due to national allegiances."],
            },
            {
                tile: 18,
                type: 'n',
                complete: false,
                text: ["On the right they say sisiri, on the left they say ciciri."],
            },
            {
                tile: 19,
                type: 'n',
                complete: false,
                text: ["MORA MORA LU FRANCISI!"],
            },
            {
                tile: 20,
                type: 'n',
                complete: false,
                text: ["Thus the thread of fate has been severed. But hey, have some soup!",
                       "Chickpea soup obtained!",
                ],
            },
            {
                tile: 21,
                type: 'n',
                complete: false,
                text: [
                    "That guard really liked the soup... Let's go before he notices we didn't bring any bread with us.", /*0*/
                    "Bread? Bro, we don't do that here. Doing meth is what you should do, motherfucker!", /*1*/
                    "You give the tie a sharp look and pretend to have heard nothing.", /*2*/
                    "Hopefully, your friend hasn't noticed anything suspiscious about your tie.", /*3*/
                ],
            },
            {
                tile: 22,
                type: 'n',
                complete: false,
                text: ["Another hungry guard? What's with this place. Oh well, time for another detour it seems."],
            },
            {
                tile: 23,
                type: 'n',
                complete: false,
                text: ["So yeah, you may have guessed it since the beginning, I too am a descendant of Rollon!"],
            },
            {
                tile: 24,
                type: 'n',
                complete: false,
                text: ["And we've been talking about food a lot."],
            },
            {
                tile: 25,
                type: 'n',
                complete: false,
                text: ["So you know which individual you're talking to specifically by now."],
            },
            {
                tile: 26,
                type: 'n',
                complete: false,
                text: ["So now we will go to the meat of the question."],
            },
            {
                tile: 27,
                type: 'n',
                complete: false,
                text: ["The golden treasure of our quest."],
            },
            {
                tile: 28,
                type: 's',
                complete: false,
                text: ["And how shall we refer to it?"],
                option: ["Arancina.", "Arancino.", "Arancinu.",],
                answer: 2,
            },
            {
                tile: 29,
                type: 's',
                complete: false,
                text: ["Indeed, my friend. And what do you put in it?"],
                option: ["Sucu.", "Ragù.", "Pineapple.",],
                answer: 0,
            },
            {
                tile: 30,
                type: 'n',
                complete: false,
                text: ["You have passed the test. Here's a basket of arancini!",
                       "Basket of arancini obtained!", 
            ],
            },
            {
                tile: 31,
                type: 'n',
                complete: false,
                text: ["I think this guard is far happier than the one before, it's suspicious that the guards suddenly showed up though."],
            },
            {
                tile: 32,
                type: 'n',
                complete: false,
                text: ["Anyway... We're almost at the end of the journey, o descendant of Rollon."],
            },
            {
                tile: 33,
                type: 'n',
                complete: false,
                text: ["This was my elaborate setup to make you take a long spiraling journey to..."],
            },
            {
                tile: 34,
                type: 'n',
                complete: false,
                text: ["This beautiful cassata. I know, I know. I'm a walking stereotype."],
            },

            
        ],
    },
    {
        path: 'Leo',
        sequence: [
            {
                tile: 1,
                type: 'n',
                complete: false,
                text: [
                    "You awake from a long sleep.", /*0*/
                    "You're disoriented, confused for...", /*1*/
                    "This is not your comfortable room where you can turn off your brain.", /*2*/
                    "This looks more like... an ancient temple.", /*3*/
                ],
            },
            {
                tile: 2,
                type: 'n',
                complete: false,
                text: [
                    "Suddenly, a voice whispers into your ears:", /*0*/
                    "Hey, you, you are finally awake.", /*1*/
                    "You are at the entrance of the temple, so you gather your courage and decide to discover its secrets, hidden deep within the structure.", /*2*/
                    "Two marble plates indicate the directions you can take.", /*3*/
                    "Which path are you going to take?" /*4*/
                ],
            },
            {
                tile: 3,
                type: 'n',
                complete: false,
                text: [
                    "The doors before you closes on its own, with a loud bang.", /*0*/
                    "A living skeleton ceturion stands before you.", /*1*/
                    "He wants to fight, you cannot refuse as there's no other escape.", /*2*/
                    "You grab an iron sword from the ground, enchanted with sharpness, but...", /*3*/
                    "Righ after picking up the sword, the skeleton rushes towards you and oneshots you.", /*4*/
                    "Want to know why? It's simple.", /*5*/
                    "The skeleton had a full netherite gear, how can you win this?!", /*6*/
                ],
            },
            {
                tile: 4,
                type: 'n',
                complete: false,
                text: [
                    "You hear a loud roar coming from the other room.", /*0*/
                    "This was probably the best choice.", /*1*/
                    "This place is full of tombstones and flowers...", /*2*/
                    "wait, one of these tombstones is dedicated to Himeko?!", /*3*/
                    "Wow, weebs existed even in the Roman Empire era, amazing!", /*4*/
                ],
            },
            {
                tile: 5,
                type: 'n',
                complete: false,
                text: [
                    "A window at the center of the dome lets sunlight penetrate the room.", /*0*/
                    "Around it, you can read the following:", /*1*/
                    "HIC IACENT MILITES QUI PACE ET HONORE PUGNAVERUNT.", /*2*/
                    "You decide to pray for the fallen soldiers.", /*3*/
                    "As you pray, the light changes its direction, to illuminate your path.", /*4*/
                ],
            },
            {
                tile: 6,
                type: 'n',
                complete: false,
                text: [
                    "The light guides you towards a spacious, mossy hall in ruin.",
                    "Multiple rooms are connected to this hall.",
                    "Which direction are you going to take?",
                ],
            },
        ],
    },

    {
        path: 'default',
        sequence: [
            {
                tile: null,
                type: null,
                complete: null,
                text: ["You have already been here."],
            },
        ],
    },
]

export { seq };