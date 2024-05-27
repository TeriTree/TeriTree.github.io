// EXPLANATION
/*
seq.path - path name {'name'}
seq.sequence.tile - tile id {id}
seq.sequence.type - tile type {'e'/'n'/'s'}
hasAudio: false,seq.sequence.
complete - has the sequence been played {true/false}
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
                hasAudio: false,
                complete: true,
            },
            {
                tile: 0,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [],
            },
            {
                tile: 0,
                type: 's',
                hasAudio: false,
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
                hasAudio: true,
                complete: false,
                text: [
                    "...", /*0*/
                ],
            },
            {
                tile: 2,
                type: 'n',
                hasAudio: true,
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
                type: 'n',
                hasAudio: false,
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
                hasAudio: false,
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
                hasAudio: false,
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
                hasAudio: false,
                complete: false,
                text: [
                    "You start wondering what kind of structure is hiding behind that barrier. A tower? A pearly white palace filled with countless sawblades? A gigantic beehive? All of them, perhaps.",
                    "Curiosity gives you the strength to move your feet towards the barrier.",
                    "...",
                    "...",
                    "As you walk closer, the warped light becomes brighter.",
                    "Brighter... and red...","Your vision becomes completely enchanted. You can hear screams coming from the shadows all around the corners of your eyes...",
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
                hasAudio: false,
                complete: true,
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
                hasAudio: false,
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
                hasAudio: false,
                complete: false,
                text: [""],
                option: ["Light falls.", "Moons shatter.", "Suns fade.",],
                answer: 2,
            },
            {
                tile: 3,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [""],
                option: ["Sets you...", "Glimpses you...", "Rebinds you...",],
                answer: 2,
            },
            {
                tile: 4,
                type: 's',
                hasAudio: false,
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
                hasAudio: false,
                complete: false,
                text: ["Lassate ogne speranza voiautri ca trasiti. This is the original line.", /*1*/
                       "No for real, check his earlier works, you will see what he thought was the real language of poetry." /*2*/],
            },
            {
                tile: 2,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["Ok, je suis desolee, as usual I ramble about that topic, I probably spoiled the surprise already anyway."],
            },
            {
                tile: 3,
                type: 's',
                hasAudio: false,
                complete: false,
                text: ["It all starts with..."],
                option: ["Hrolfr.", "Rollo.", "Rollon.",],
                answer: 2,
            },
            {
                tile: 4,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["A great raider, a warlord, and... First to get settled on the northern shores of a country."],
            },
            {
                tile: 5,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["He embraced the cross, and adopted a new language."],
            },
            {
                tile: 6,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["And thus his progeny would leave their mark in every land they lived in."],
            },
            {
                tile: 7,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["Thus... right they travagghianu, up they toil."],
            },
            {
                tile: 8,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["FAIL: Your ship takes the wrong direction, you end up in Britain, lost in the wilderness."],
            },
            {
                tile: 9,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["Surely they all took different directions and interesting stories."],
            },
            {
                tile: 10,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["And they went wild with the differences!"],
            },
            {
                tile: 11,
                type: 's',
                hasAudio: false,
                complete: false,
                text: ["Can you guess what a muccaturi is?"],
                option: ["Snot.", "Napkin.",],
                answer: 1,
            },
            {
                tile: 12,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["Indeed descendant of Rollon, we have so much in common."],
            },
            {
                tile: 13,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["Continuing the journey proved arduous."],
            },
            {
                tile: 14,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["But our story is interrupted, that guard looks hungry... Should we continue right?"],
            },
            {
                tile: 15,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["As I was saying, despite the differences, we're all a big family in the end."],
            },
            {
                tile: 16,
                type: 's',
                hasAudio: false,
                complete: false,
                text: ["Would you say you're the only one being called a frog eater?"],
                option: ["Of course, bruh.", "No.",],
                answer: 1,
            },
            {
                tile: 17,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["What a tragedy that distant cousins would hate one another due to national allegiances."],
            },
            {
                tile: 18,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["On the right they say sisiri, on the left they say ciciri."],
            },
            {
                tile: 19,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["MORA MORA LU FRANCISI!"],
            },
            {
                tile: 20,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["Thus the thread of fate has been severed. But hey, have some soup!",
                       "Chickpea soup obtained!",
                ],
            },
            {
                tile: 21,
                type: 'n',
                hasAudio: false,
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
                hasAudio: false,
                complete: false,
                text: ["Another hungry guard? What's with this place. Oh well, time for another detour it seems."],
            },
            {
                tile: 23,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["So yeah, you may have guessed it since the beginning, I too am a descendant of Rollon!"],
            },
            {
                tile: 24,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["And we've been talking about food a lot."],
            },
            {
                tile: 25,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["So you know which individual you're talking to specifically by now."],
            },
            {
                tile: 26,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["So now we will go to the meat of the question."],
            },
            {
                tile: 27,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["The golden treasure of our quest."],
            },
            {
                tile: 28,
                type: 's',
                hasAudio: false,
                complete: false,
                text: ["And how shall we refer to it?"],
                option: ["Arancina.", "Arancino.", "Arancinu.",],
                answer: 2,
            },
            {
                tile: 29,
                type: 's',
                hasAudio: false,
                complete: false,
                text: ["Indeed, my friend. And what do you put in it?"],
                option: ["Sucu.", "Ragù.", "Pineapple.",],
                answer: 0,
            },
            {
                tile: 30,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["You have passed the test. Here's a basket of arancini!",
                       "Basket of arancini obtained!", 
            ],
            },
            {
                tile: 31,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["I think this guard is far happier than the one before, it's suspicious that the guards suddenly showed up though."],
            },
            {
                tile: 32,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["Anyway... We're almost at the end of the journey, o descendant of Rollon."],
            },
            {
                tile: 33,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: ["This was my elaborate setup to make you take a long spiraling journey to..."],
            },
            {
                tile: 34,
                type: 'n',
                hasAudio: false,
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
                hasAudio: false,
                complete: false,
                text: [
                    "You awake from a long sleep.", /*0*/
                    "You're disoriented, confused for...", /*1*/
                    "This is not your comfortable room where you can turn off your brain.", /*2*/
                    "This looks more like... the ruins of an ancient temple.", /*3*/
                ],
            },
            {
                tile: 2,
                type: 'n',
                hasAudio: false,
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
                hasAudio: true,
                complete: false,
                text: [
                    "The door before you closes on its own, with a loud bang.", /*0*/
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
                hasAudio: false,
                complete: false,
                text: [
                    "You hear a loud roar coming from the other room.", /*0*/
                    "Taking this route was probably the best choice.", /*1*/
                    "This place is full of tombstones and flowers...", /*2*/
                    "wait, one of these tombstones is dedicated to Himeko?!", /*3*/
                    "Wow, weebs existed even in the Roman Empire era, amazing!", /*4*/
                ],
            },
            {
                tile: 5,
                type: 'n',
                hasAudio: false,
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
                hasAudio: false,
                complete: false,
                text: [
                    "The light guides you towards a spacious, mossy hall in ruin.",
                    "Multiple rooms are connected to this hall.",
                    "Which direction are you going to take?",
                ],
            },
            {
                tile: 7,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You enter a dilapitated, crumbling room.", /*0*/
                    "You try to move carefully, but the floor starts shaking.", /*1*/
                    "Everything is collapsing, so you start running back...", /*2*/
                    "I'm sorry, but you died crushed by a big, ancient Teri Teri statue.", /*3*/
                    "At least your last words can be TERI TERI MASU MASU KAWAII!!", /*4*/
                ],
            },
            {
                tile: 8,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Unexpectedly, in this room you can see a scale model of the Eiffel Tower with...", /*0*/
                    "A shop selling baguettes?", /*1*/
                    "The owner of the shops offers you a free sandwich, which you accept gladly.", /*2*/
                    "After eating, you feel satisfied and satiated.", /*3*/
                    "This room, however, didn't actually give you anything helpful for the exploration.", /*4*/
                    "Well, at least you can continue without being hungry anymore." /*5*/
                ],
            },
            {
                tile: 9,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "Something is not right, in this room.", /*0*/
                    "You feel a simp vibe in here that not even I, the narrator, can't explain well.", /*1*/
                    "WAIT.", /*2*/
                    "IN FRONT OF YOU APPEARS A GODDESS.", /*3*/
                    "IT'S DURANDAL! (Dudu for friends)", /*4*/
                    "She wants to offer her blessing, a sort of umbrella(?) to help you.", /*5*/
                    "So, do you accept it or not?", /*6*/
                    "Just to clarify, if you say no, I'm gonna kill you with my own narrator hands.", /*7*/
                    ">:(", /*8*/
                ],
                option: ["Yes.", "No.",],
                answer: 0,
            },
            {
                tile: 10,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "*Dudu's blessing obtained*",
                    "With Durandal's blessing supporting you, you feel invincible.",
                    "As you keep walking, two doors appear before you.",
                    "The path splits into two possible directions, but apparently Felix Natalis is locked.",
                ],
            },
            {
                tile: 11,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You smell a repulsive smell of blood.", /*0*/
                    "A giant armored troll is in here, standing before the corpses of countless soldiers that have bravely tried to fight it.", /*1*/
                    "The troll notices your presence, and begins to charge towards you...", /*2*/
                    "As the troll is ready to hit you with its enormous axe, the umbrella that Durandal gave you emits an intense light.", /*3*/
                    "The light temporarily blinds you and the troll. The effect lasts for a few, yet interminable seconds.", /*4*/
                    "As you open your eyes, you notice that you're not alone anymore, for...", /*5*/
                    "THE BROS AND SIS ARE HERE TO HELP YOU DEFEAT THIS MOTHERFUCKER", /*6*/
                    "Dudu's blessing summoned the whole Teri Tower server!", /*7*/
                    "The rusty sword you had picked up earlier has evolved into a new, mythical sword enchanted with the power of friendship: Excalibur! *Excalibur acquired*", /*8*/
                    "The troll rushes towards you, but this time you have nothing to fear, and begin to rush towards the troll.", /*9*/
                    "You scream EXCALIBUUUUUUUUUUR just like Saber has taught you.", /*10*/
                    "The troll evaporates almost instantly, consumed by the light beam generated by your sword.", /*11*/
                    "The battle is over, you type ez gg wp in chat and leave, after thanking Dudu and Teri Tower server that gave you the power to defeat the (Mr.) Beast.", /*12*/
                ],
            },
            {
                tile: 12,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Finally, you reached the end!", /*0*/
                    "You hear an angelic voice, it's Durandal again!", /*1*/
                    "You survived the ㄥ maze and proved your honor, loyalty and courage, so now it's time to let you go.", /*2*/
                    "But, before that...", /*3*/
                    "She gives you a letter as a gift and tells you to open it.", /*4*/
                    "*Birthday letter acquired*", /*5*/ 
                ],
            },
            {
                tile: 13,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Ao AUGURIII frate' siccome me hanno detto che tu nonno sa i dialetti italiani ho pensato di fatte sta lettera di auguri in romano giusto pe magari davve qualcosa da tradurre insieme :DD.", /*0*/
                    "Quinni te do i mie più calorosi auguri fratè ed essendoci conosciuti su er server de liam de rocket league te posso solo che di:", /*1*/
                    " macron sia co te lui è il dio de rocket league l'essere che ha er potere der controller e che fa i backflip in giro pe il campo ancora na volta auguri de bon compleanno ezeriel!!!.", //2 
                    "(P.S. The Macron thing is a meme that originated from me and Jas while playing Rocket League, because we encountered a French guy whose nickname was Macron and he destroyed us using the skill issue button D:", //3 
                    "And sorry I'm not that much used to write birthday letters, lmao)", //4
                    "ENG: hey happy birthday bro! They told me that your grandpa is knowledgeable about the Italian dialects so I thought that it could be funny to give u this birthday letter written in Roman just to give u something different and maybe you can translate that with your grandpa!", //5
                    "So, I give you my utmost happy birthday and because we met for the first time on Liam's Rocket League Discord server I can only say:", // 6 
                    "that may God Macron be with you, he is the one that has the power of gamepad and he is the one that can do the backflips all around the field", //7 
                    "so again happy birthday and may all your wishes come true!! (what a coincidence ur French lmao).", //8
                ],
            },
        ],
    },
    {
        path: 'Myrin',
        sequence: [
            {
                tile: 1,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Beerin is happy.", /*0*/
                    "Beerin is always happy.", /*1*/
                    "How could it not be, when it spent everyday hanging out with its friend?", /*2*/
                    "Buzzing about, telling stories and discussing philosphy with Treeze. Yes, Beerin was very happy indeed, to have such a calm and carefree life.", /*3*/
                    "No worries, no doubts, just endless days of fun under the sun.", /*4*/
                    "Currently, Beerin was flying around a plain of grass.", /*5*/
                    "There are no flowers here, but that's alright, since Beerin has the ultimate power of friendship!", /*6*/
                    "In the distant stood its friend, the wise tree Treeze.", /*7*/
                    "He swayed in wind, and though Beerin knew Treeze couldn't actually move any of his branches, it imagined he was waving at it.", /*8*/
                    "After sufficient buzzing around, Beerin returned to the hill on which Treeze stood.", /*9*/
                    "It told the tree about its day of hanging out in the grass.", /*10*/
                    "Treeze hums. And told Beerin in turn about his day, in which he stood at the top of the hill and swayed in wind.", /*11*/
                    "Indeed, as Treeze was rooted to his spot, he could not go out and play in the grass and explore the world like Beerin can.", /*12*/
                    "Perhaps it was a bit sad, was what Beerin thought.", /*13*/
                    "Beerin was happy, but perhaps it wished Treeze could be happy too.", /*14*/
                    "He had it for company, but it could decide to fly off anytime it wanted.", /*15*/
                    "Even if Treeze wished, he would still be rooted to this spot for all his life.", /*16*/
                    "That's why Beerin needed to cheer Treeze up!", /*17*/
                    "But how?, Beerin wondered.", /*18*/
                    "There was nothing here, nothing to do in this wide and expansive grass field.", /*19*/
                    "There were no flowers, no other trees, there was not even any clouds passing by that one could count.", /*20*/
                    "In this unchanging world, there was on the grass and the wind, and of course, that sun shining overhead.", /*21*/
                    "But none of these could cheer Treeze up.", /*22*/
                    "Beerin was discouraged.", /*23*/
                    "What to do?", /*24*/
                    "It sat on one of the grass blades, contemplating.", /*25*/
                    "Treeze sees the little bee being dejected.", /*26*/
                    "To him, the little bee was trapped here along with him; it never went back to its hive, nor did it ever go buzz around flowers.", /*27*/
                    "So he tells the bee:", /*28*/
                    "'Go out there. There will be places to explore and colors to see. I may be rooted here, but you can fly free. So fly high, do not chain yourself to this unchanging plain.'", /*29*/
                    "The little Beerin never fathomed of going outside the grass field.", /*30*/
                    "It was like in that moment, an invisible wall inside its head was just broken through.", /*31*/
                    "It knew the outside world, of course it did. that was where its hive, its home was, after all.", /*32*/
                    "Yet somehow, it never thought of doing what Treeze was suggesting.", /*33*/
                    "Somehow, those memories of home and other bees seem so distant.", /*34*/
                    "Beerin could not help but question itself just a little bit.", /*35*/
                    "But it pushed those thoughts aside, because it decided to stay here, didn't it? No time for regrets!", /*36*/
                    "it was fine with life here. It was peaceful and happy. Even if it was away from home, spending eternity here with its friend was not that bad.", /*37*/
                    "Its hive would survive without it.", /*38*/
                    "But from this, Beerin also gained a new idea.", /*39*/
                    "It may be fine, but Treeze could not possibly bear so much time spent only with the grass, the wind and sun.", /*40*/
                    "Thus, Beerin decides. Yes, it will venture into the outside world after all, and it will bring back many wonderful things for Treeze to enjoy.", /*41*/
                    "With a world so large, there would surely be something that Treeze would like.", /*42*/
                    "And maybe, maybe then, when it bought back something like that.", /*43*/
                    "Maybe Treeze can be happy as well.", /*44*/
                ],
            },
            {
                tile: 2,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "These rivers sure were nice looking, thought Beerin.", /*0*/
                    "Watching them flow by slowly was very calm and relaxing.", /*1*/
                    "And how the water glittered in sunlight, the way it turned a brilliant white color.", /*2*/
                    "It was rather mezmerizing to look at.", /*3*/
                    "It was shame, yes, a great shame indeed, that Treeze could not come to look at this river.", /*4*/
                    "And when Beerin came near, it could see a double of itself in the flowing water.", /*5*/
                    "Perhaps there was a different Beerin living a similar life underwater, pondered Beerin.", /*6*/
                    "Perhaps there was a river Treeze somewhere as well.", /*7*/
                    "It was shame, yes, a great shame indeed, that Treeze can not come to look at this river.", /*8*/
                    "Beerin would bring the river to Treeze, if it could, but alas, though Beerin was powerful and strong, controlling the path of rivers was not within its jurisdiction.", /*9*/
                    "Looking at the clone Beerin in the water, Beerin wanted to cross the water to the other side, but it remembered the bee hive's teaching, and how going into bodies of water was forbidden.", /*10*/
                    "At the memory of its hive, Beerin stopped.", /*11*/
                    "How strange, that it would still obey the hive's teachings when it lived with them no longer.", /*12*/
                    "Perhaps there is a part of it that still wished to go back after all.", /*13*/
                    "But the hive was then, and this was now.", /*14*/
                    "The hive would be fine living without it living by their side.", /*15*/
                    "But Beerin would heed their words nonetheless.", /*16*/
                    "Perhaps, even when that chapter of life has gone and went by, it could still cherish the memories made there.", /*17*/
                    "Beerin decided to resist the temptation to go into the water and pull out a clone Beerin.", /*18*/
                ],
            },
            {
                tile: 3,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Now to look for something to bring back, it thinks.", /*0*/
                    "Thus Beerin buzzes around the edge of the river, going in the direction it flowed.", /*1*/
                    "Until it saw a figure in the distance.", /*2*/
                    "A lumbering creature. It was many times larger than Beerin.", /*3*/
                    "It stood upright, and held a strange device near its head.", /*4*/
                    "Out of curiosity, Beerin flies over to look at what the creature was looking at.", /*5*/
                    "To its shock, it was a mini world, identical to the world it was inhabitating.", /*6*/
                    "The world looked the same as outside, from the grass, to the sky, to the river.", /*7*/
                    "But in the mini world, everything was still.", /*8*/
                    "Beerin had a revelation. Perhaps it could bring a river to Treeze after all.", /*9*/
                    "This device, it held inside a river, but was small, and it was something Beerin could pick up.", /*10*/
                    "Surely Treeze would be very happy to have a river at where he stayed.", /*11*/
                    "Thus Beerin docked on the grass nearby and awaited its oppurtunity.", /*12*/
                    "As the creature sat down, and sat the device aside, Beerin began making its move.", /*13*/
                    "The creature was busy doing something with a white thing.", /*14*/
                    "Beerin was unsure what, but the creature was staining the white thing with tiny black symbols.", /*15*/
                    "Perhaps this was a strange ritual of some kind, Beerin decided, and took the river holding device.", /*16*/
                    "It hid among the grass for a long time, slowly making its way away from the strange lumbering creature.", /*17*/
                    "And homewards Beerin went.", /*18*/
                ],
            },
            {
                tile: 4,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Returning to the grassy plains, Beerin presented its finding to Treeze.", /*0*/
                    "It seems that Treeze is pleased by the strange device, and he asked about where it came from.", /*1*/
                    "Beerin then regaled him with tales of its adventures.", /*2*/
                    "Of the river, the creature and the strange rituals it partook in.", /*3*/
                    "Treeze was very curious about all of these strange things Beerin encountered.", /*4*/
                    "And they talked for what seemed like forever over what these things could mean.", /*5*/
                    "When Beerin mentioned its hive's teaching, Treeze paused.", /*6*/
                    "Then he asked Beerin why it decided to leave its hive, when it loved that hive so much.", /*7*/
                    "To this, Beerin answered that it wanted to hang out with Treeze.", /*8*/
                    "But surely, you can stay at the hive and still visit me, questioned Treeze.", /*9*/
                    "This gave the little Beerin a little pause.", /*10*/
                    "It was trying to come up with an answer, yet in its mind, there was simply blank space.", /*11*/
                    "Why? why did it decide to leave the hive? Beerin did not know.", /*12*/
                    "Finally, Beerin answered: you needed me more than the hive did.", /*13*/
                    "It was unsure if that was the real answer, but it said it nonetheless.", /*14*/
                    "After all, that was the only good explanation.", /*15*/
                    "So that must have been what Beerin thought when it left the hive.", /*16*/
                    "It was the only explanation that made sense.", /*17*/
                    "Treeze hummed, and accepted the answer.", /*18*/
                    "Yet it seemed to the little Beerin that there was something still plaguing Treeze.", /*19*/
                    "Perhaps there was something wrong with its answer after all? Beerin did not know.", /*20*/
                    "Treeze did think about things a lot.", /*21*/
                    "Beerin always took him for someone who was not satisfied with just letting things be when there was still doubt.", /*22*/
                    "It made sense, somewhat. After all, it's not like there was much to do here except thinking.", /*23*/
                    "But even so, if Treeze would not voice his concerns to it, Beerin supposed it can't pry.", /*24*/
                    "Still, Beerin was unsettled.", /*25*/
                    "Why was its memories so jumbled? It remembered leaving the hive, yet it did not even remember why?", /*26*/
                    "Perhaps it simply forgot since it was a long time ago, Beerin decided.", /*27*/
                    "No matter what the reason might have been, it had no bearings on the present anymore.", /*28*/
                    "And it moved on from the train of thought.", /*29*/
                    "No use lingering on what was long past, after all.", /*30*/
                    "The two continued conversing, until they had nothing to converse about.", /*31*/
                    "And Beerin departed once more.", /*32*/
                ],
            },
            {
                tile: 5,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "These gatherings sure were crouded. Those big, lumbering creatures love to gather here.", /*0*/
                    "Beerin would not blame them, since here was a place of many colors.", /*1*/
                    "Like water flowing from a high thin cliff, streams of colors lay nested above these strange poles.", /*2*/
                    "They flowed down below, and yet stayed suspended in air.", /*3*/
                    "and the tail ends seemed to be flowing in wind.", /*4*/
                    "When Beerin landed on one of these color waterfalls, it was astounded to see that it is solid.", /*5*/
                    "It was not like the streams of water that would have surely flooded it away by now.", /*6*/
                    "Beerin wondered then, if Treeze would like one of these things as decoration.", /*7*/
                    "There were a few trees here that seem to have them already.", /*8*/
                    "Perhaps it was a fashion statement.", /*9*/
                    "Beerin wondered if Treeze liked fashion.", /*10*/
                    "Did Treeze even know what fashion was?", /*11*/
                    "Maybe not, since it was the only person around who went to visit Treeze nowadays.", /*12*/
                    "There was a weird blue thing at some point, but Beerin guessed it got tired of visiting eventually.", /*13*/
                    "Treeze couldn't even look at himself, since there are no lakes around the grass field, and it never rained, so it wasn't as if any kind of puddle can form either.", /*14*/
                    "There was the mini lake holding device, but the lake inside was quite small, and did not have a mini river Treeze.", /*15*/
                    "So perhaps fashion would not be the biggest of priorities.", /*16*/
                ],
            },
            {
                tile: 6,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Beerin thought again.", /*0*/
                    "What else could it bring back? Food? A shiny rock? One of those paper things the big lumbering creatures seem to carry around?", /*1*/
                    "Suddenly, Beerin was distracted.", /*2*/
                    "Out of its field of vision, one of the smaller of the big lumbering creatures was carrying something.", /*3*/
                    "It was.... well. Beyond Beerin's ability to describe, really.", /*4*/
                    "It was a stick, and on the end, there was a spinning thing.", /*5*/
                    "That spinny thing had four colors, and they spun around very prettily.", /*6*/
                    "Yes, thought Beerin, I will bring that back to Treeze.", /*7*/
                    "And he would be very pleased, the little bee was sure of that.", /*8*/
                    "Thus Beerin buzzed over to the creature, and docked on the handle.", /*9*/
                    "It attempted to pull the spinning thing from the creature's grip.", /*10*/
                    "Hovever, Beerin could not manage it.", /*11*/
                    "Yet when the lumbering creature looked down at Beerin, it let out a small scream, and flung the spinning thing, along with Beerin, to the ground.", /*12*/
                    "As Beerin looked up back at the creature from where it sat on the ground, it realized the creature was running away.", /*13*/
                    "A decisive victory for the little Beerin, it decided.", /*14*/
                    "The little Beerin grabs onto the spinning thing, and begins its return to the grassy plain where Treeze resided.", /*15*/
                ],
            },
            {
                tile: 7,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Returning to the grassy plains, Beerin presented its finding to Treeze.", /*0*/
                    "It seemed that Treeze is pleased by the spinning thing, and he asked about where it came from.", /*1*/
                    "Beerin then regaled him with tales of its adventures.", /*2*/
                    "Of the gathering, of tree fashion and how it defeated a strange lumbering creature to get the spinning thing.", /*3*/
                    "Treeze was very curious about all of these strange things Beerin encountered.", /*4*/
                    "And they talked for what seemed like forever over what these things could mean.", /*5*/
                    "When Beerin mentioned the gathering, Treeze began to be curious.", /*6*/
                    "Do they always gather there?, he asked.", /*7*/
                    "No, was Beerin's reply, I have been there a few times and there were not as many lumbering creatures then.", /*8*/
                    "How strange, thought Treeze.", /*9*/
                    "Did they all come there together?, he asked.", /*10*/
                    "No, was Beerin's reply, i saw some arrived later on.", /*11*/
                    "Treeze hummed, and pondered, I wonder how they keep track of time, since they seem to know when the gathering was happening.", /*12*/
                    "Beerin laughed.", /*13*/
                    "They obviously used the cycle of night and day, it said.", /*14*/
                    "What is this cycle of day and night, asked Treeze.", /*15*/
                    "Beerin freezes, and looks over.", /*16*/
                    "When the sun sets and comes back again everyday, when it switches between night and day and day and night again?, was what it said back.", /*17*/
                    "But the sun never sets, said Treeze, it has stayed in the spot  on the sky for as long as i remember.", /*18*/
                    "Beerin became confused, and looked at the sun.", /*19*/
                    "Yes, it was still in the sky, in fact, it was in the same spot as the last time Beerin has seen it.", /*20*/
                    "And Beerin could not remember the last time it had been night, or even the last time the sun had been anywhere else but that spot in the sky.", /*21*/
                    "In fact, Beerin could not even remember why it thought that a day night cycle ever existed.", /*22*/
                    "That was where the sun stayed.... it always has been.", /*23*/
                    "The sun does not move, it never has.", /*24*/
                    "What was Beerin even talking about?", /*25*/
                    "Nevermind, said Beerin to Treeze, I must have imagined something that wasn't there.", /*26*/
                    "Perhaps Beerin mistook something from a dream of its for something in reality.", /*27*/
                    "Treeze humed, and accepted the answer.", /*28*/
                    "But Beerin could tell that it still bothered Treeze.", /*29*/
                    "It did not blame him, this subject bothered it as well.", /*30*/
                    "Had Beerin always been such an airheaded person? It seemed like things had been slipping by it all too often lately.", /*31*/
                    "And now... inventing things that weren't real? And then acting like they were?", /*32*/
                    "Beerin couldn't help but feel there was a hole where its head should be.", /*33*/
                    "Still, they both moved on, and talked about everything else until there was nothing to be talked about.", /*34*/
                    "And Beerin departed once again.", /*35*/
                ],
            },
            {
                tile: 8,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Beerin had seen a few grassfields with wild flowers on its travels before, but this is was something else entirely.", /*0*/
                    "Everywhere, from where it was perching, to beyond the horizon, there were only flowers.", /*1*/
                    "A sea filled only with golden flowers.", /*2*/
                    "In short, a bee's heaven.", /*3*/
                    "Beerin was in fact, so entranced by the flower field, that it frolicked around for hours and hours.", /*4*/
                    "Perhaps it was simply the nature of bees, to be distracted by flowers, but Beerin forgot its original mission.", /*5*/
                    "So it buzzed around until it didn't have the strength to anymore.", /*6*/
                    "So Beerin perched on one of the leaves, and took a nap.", /*7*/
                    "It was a deep sleep, and after a while, Beerin woke up.", /*8*/
                    "But something was different, now.", /*9*/
                    "It seemed that while Beerin was sleeping, it had begun to rain.", /*10*/
                    "The sky, which was previously perfectly clear, was now covered with dark clouds.", /*11*/
                    "And from the heavens came large drops of water.", /*12*/"It was less of a drizzle, and more of a complete downpour.", /*13*/
                    "How did I sleep through such a big storm?, thought Beerin.", /*14*/
                    "Indeed, it was rather unusual, that Beerin had not been awoken prior to this, considering the intensity of the rain.", /*15*/
                    "Somewhere near, it heard a terrible thunder.", /*16*/
                    "Beerin fled immediately.", /*17*/
                    "For some strange reason, Beerin was struck by an strange terror.", /*18*/
                    "Beyond just a survival instinct of wanting to flee storms, Beerin felt as though its entire body has been gripped with fear.", /*19*/
                    "It was like Beerin had seen something like this before.", /*20*/
                    "Beerin took use of the grass, since flying normally would put it at risk of being hit by rainfall.", /*21*/
                    "It weaved and dodged, but eventually managed to escape to the one place it knew would be safe: the hive.", /*22*/
                    "The hive had a protective barrier, and as Beerin thought, it was strong enough to ward off the storm.", /*23*/
                    "It had been a while since Beerin returned to the hive, so naturally it was reluctant.", /*24*/
                    "However, the situation demanded this of it, and Beerin had no other choice.", /*25*/
                    "But when Beerin entered the hive to greet its former hivemates....", /*26*/
                    "The wor l̶d̶     b̷   r̵ ̶    ̷ ̶ ̴o̵         ̵̖͗k̵ ̵               ̵e̷̒", /*27*/
                    "Beerin woke up, once again in the field of flowers.", /*28*/
                    "How strange, it thought.", /*29*/
                    "The sky was clear again, the sun was once again in the position it always occupied, and there was no rain in sight.", /*30*/
                    "Was that a dream?, wondered Beerin, such a strange dream it was.", /*31*/
                    "Beerin flew up from the leaf it was perching on.", /*32*/
                    "All seemed well again. No indication of rain or it ever having rained previously.", /*33*/
                    "Beerin hummed, it supposed that it must have all been conjured up by its mind.", /*34*/
                    "Thus Beerin picked a lone flower, and headed back to Treeze.", /*35*/
                    "Even though its mind was plagued by thoughts of that dream the entire way back.", /*36*/
                ],
            },
            {
                tile: 9,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Returning to the grassy plains, Beerin presented its finding to Treeze.", /*0*/
                    "It seems that Treeze is pleased by the strange device, and he asks about where it came from.", /*1*/
                    "Beerin then regaled him with tales of its adventures.", /*2*/
                    "Of the flower field,... and the dream.", /*3*/
                    "Treeze is very curious about all of these strange things Beerin encountered.", /*4*/
                    "But he took interest in some particular details.", /*5*/
                    "How did you know what that weird water phenomena was called rain?, he asked, After all, the sky here is always clear and no water ever falls, so surely it must be unfamiliar to you.", /*6*/
                    "To this, Beerin did not have an answer.", /*7*/
                    "Truthfully told, it just... knew. Somehow.", /*8*/
                    "This is why when Treeze continued to stare at it, Beerin just said buzzed nervously.", /*9*/
                    "Now that I think of it, I think this isn't the first time you've said something weird and expected me to know about it, Treeze continued, you mentioned a day and night cycle.", /*10*/
                    "That was just something its overactive imagination dreamed up, probably.", /*11*/
                    "That was what Beerin thought.", /*12*/
                    "But Beerin did not respond for a while.", /*13*/
                    "It did not know what to say.", /*14*/
                    "After a long silence, Beerin said: I probably just named it, and forgot other people didn't know the name.", /*15*/
                    "Still, said Treeze, I find it strange, I don't think you're that easily distracted.", /*16*/
                    "It's almost as if you came from a completely different world..., Treeze trailed off.", /*17*/
                    "Then, Treeze brightened up, even though trees do not have faces and there has been no indication of brightening up, Beerin just knew.", /*18*/
                    "It was like a light switch went off in his head.", /*19*/
                    "And he decided now was the time to change subjects: Beerin, how come you never visit your hive?", /*20*/
                    "Huh?, was Beerin's dignified response. It was a fairly abrupt change from the previous conversation they were having.", /*21*/
                    "What did Beerin's airheadedness have to do with the hive?", /*22*/
                    "Don't you miss it?, Tree inquired.", /*23*/
                    "Of course I do!, Beerin huffed.", /*24*/
                    "Why do you never visit it, then?, Treeze asked again.", /*25*/
                    "Well, I needed to stay here obviously, was the reply.", /*26*/
                    "Except,.... was that really it?, wondered Beerin.", /*27*/
                    "Do you?, was what Treeze said back, Do you need to stay here?", /*28*/
                    "Obviously! Beerin needed to say here because....", /*29*/
                    "Well, that was unimportant.", /*30*/
                    "It was here to keep Treeze company so he doesn't... die from isolation or something.", /*31*/
                    "But was that really it?", /*32*/
                    "After all, that... wasn't really reason to not visit the hive, was it?", /*33*/
                    "It could have visited any time.", /*34*/
                    "Treeze didn't mind it going places, and Beerin was already going out to fetch items anyways.", /*35*/
                    "Doing a detour to the hive wouldn't have been that hard.", /*36*/
                    "And Beerin knew its fellow hive members and knew they would have welcomed it.", /*37*/
                    "What has Beerin... been doing all this time?", /*38*/
                    "For some strange reason, Beerin felt a strange fear in its heart.", /*39*/
                    "It pushed for Beerin to stay here, to never even go near the hive.", /*40*/
                    "Why was the little bee feeling this way?", /*41*/
                    "It made no sense, no sense at all.", /*42*/
                    "Was there... something there Beerin was avoiding?", /*43*/
                    "Suddenly Treeze spoke once again: I think you should go. I think you'll find the truth there.", /*44*/
                    "Perhaps, thought Beerin, perhaps that was what needs to happen.", /*45*/
                    "Perhaps there, it could find the truth of this world there.", /*46*/
                    "This sunny, almost blindingly perfect world.", /*47*/
                    "And perhaps Beerin... could stop lying to itself.", /*48*/
                    "But Beerin... was a coward at heart.", /*49*/
                    "It had a tiny, weak heart filled with cowardice.", /*50*/
                    "And Beerin was afraid.", /*51*/
                    "But more than it was afraid, it was tired.", /*52*/
                    "Tired of running, of always trying to escape the truth.", /*53*/
                    "It had been running this entire time.", /*54*/
                    "Perhaps it was time for Beerin to face the inevitable.", /*55*/
                    "Still, Beerin did not understand.", /*56*/
                    "How could Treeze know what it needed to do?", /*57*/
                    "Treeze had been stuck there, on that hill for his entire life.", /*58*/
                    "Did he seriously figure out that something was wrong, just because of some inconsistency with what it said?", /*59*/
                    "More than that, how did he know the hive was related to all this?", /*60*/
                    "When Beerin voiced all its concerns, Treeze smiled.", /*61*/
                    "Or, well, he smiled internally. Beerin could still tell anyhow... somehow.", /*62*/
                    "I have long suspected there was something wrong with this world, he answered.", /*63*/
                    "But your words, your reaction was what i needed to figure out that.", /*64*/
                    "Huh, was what Beerin thought to that.", /*65*/
                    "Was such a thing even possible? Yes, because Treeze was evidence that it was.", /*66*/
                    "Regardless, I think you should go to the hive, said Treeze, even if it had nothing to do with what is wrong with this world.", /*67*/
                    "And then he continued: But I have this feeling, strange as it might be, that that is where all our answers lie.", /*68*/
                    "Beerin nodded, or more accurately, flew up and down rapidly as a sign of agreement.", /*69*/
                    "I will go there, it said, and I will face the truth.", /*70*/
                    "I will bring the answers back to you, it did not say, because Beerin did not know there would be a Treeze to bring answers back to.", /*71*/
                    "And so Beerin took off towards the hive.", /*72*/
                ],
            },
            {
                tile: 10,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Beerin flew, though its wings felt weak and its heart felt empty.", /*0*/
                    "Through grass fields and riversides and flower gardens.", /*1*/
                    "As Beerin came nearer and nearer, storm clouds began to gather.", /*2*/
                    "And it began raining, at first just a light drizzle, and it became more and more intense before Beerin could barely flap its wings a few times before almost being murdered by oncoming rainfall.", /*3*/
                    "There was thunder somewhere distant.", /*4*/
                    "Beerin carried on, it couldn't stop there.", /*5*/
                    "Until it arrived to the hive once more.", /*6*/
                    "It flew through the forcefield, and through the entrance.", /*7*/
                    "And it perched there, for a long while, until it had the courage to continue walking.", /*8*/
                    "Time to face the truth, the thing which Beerin had been denying all this time.", /*9*/
                    "But when it saw what was inside, Beerin's legs gave out.", /*10*/
                    "It did not have the strength to support itself and fell to the floor.", /*11*/
                    "This was the truth that Beerin had been so desperate to escape.", /*12*/
                    "In front of the bee, was the pollen filled corpses of its brethren.", /*13*/
                    "The hivelings,the vessel, even the strange blue thing.", /*14*/
                    "They were dead, all dead.", /*15*/
                    "All across the floor was pollen, unending pollen.", /*16*/
                    "Corpses scattered the halls, their eyes clouded with a sickly yellow.", /*17*/
                    "It was a horrible scene, but Beerin knew, it had seen this before.", /*18*/
                    "This was nothing new, and yet it still felt new nevertheless.", /*19*/
                    "That shock, that pain, it had been like Beerin had discovered this for the first time all over again.", /*20*/
                    "...Why?", /*21*/
                    "Why?", /*22*/
                    "And... Beerin remembered.", /*23*/
                    "It did not want to, but it remembered.", /*24*/
                    "Beerin remembered.", /*25*/
                    "Beerin rememberedBeerin rememberedBeerin rememberedBeerin rememberedBeerin rememberedBeerin remembered.", /*26*/
                    "And the wor l̶d̶     b̷   r̵ ̶    ̷ ̶ ̴o̵         ̵̖͗k̵ ̵               ̵e̷̒", /*27*/
                    "...", /*28*/
                    "Beerin awoke once again, though this time the scenery around it stayed the same this time.", /*29*/
                    "It wished it had all been a dream.", /*30*/
                    "Well, it was a dream, but the reality of what it had done was not.", /*31*/
                    "There was something that did change, though.", /*32*/
                    "Beerin remembered its body being healthy and hale.", /*33*/
                    "But at the moment, Beerin felt like its insides had been pierced through a thousand times.", /*34*/
                    "This was what that strange pollen does to bees, Beerin supposed.", /*35*/
                    "At the very least, it knew what the other hive members had gone through before dying.", /*36*/
                    "Unlike them, it seems that Beerin was still alive.", /*37*/
                    "For how much longer, Beerin did not know how.", /*38*/
                    "This was all its fault, it thought.", /*39*/
                    "To think, that it had been the one to bring that pollen here.", /*40*/
                    "That it had been the one to doom the hive.", /*41*/
                    "That this had been brought about through its actions alone.", /*42*/
                    "And now, Beerin was the only one left.", /*43*/
                    "Is this repentment?", /*44*/
                    "Is this pain, this suffering the price it alone is paying for causing the downfall of the hive?", /*45*/
                    "If bees could weep, it would at this moment.", /*46*/
                    "But it layed there, staring, staring at the future it had created.", /*47*/
                    "As Beerin lay dying, all it could feel was regret.", /*48*/
                    "And to think, all this time Beerin had been attempting to escape the reality of its actions.", /*49*/
                    "It dared to dream of a world where it would not have to suffer, all while it's fellow hive members suffered and died.", /*50*/
                    "This is the truth, all of it.", /*51*/
                    "The inevitability it would have had to face, sooner or later.", /*52*/
                    "Perhaps Beerin thought that by staying in that dream, this future could simply.. not be.", /*53*/
                    "Out of sight, out of mind.", /*54*/
                    "How morbid, thought Beerin.", /*55*/
                    "Somehow, it made the bee want to scream and wail even more.", /*56*/
                    "That dream,...", /*57*/
                    "was any of it real?", /*58*/
                    "That grassy hill, that cloudless sunny sky, and that tree upon the hill.", /*59*/
                    "Were they real?", /*60*/
                    "Beerin did not know.", /*61*/
                    "But Beerin, wanted... wanted to know.", /*62*/
                    "Perhaps even if its hive was dead, at least one friend on Beerin's could live on out there, perhaps not quite happy nor free, but alive.", /*63*/
                    "Alive and not doomed with this horrible fate by Beerin's actions.", /*64*/
                    "Treeze... perhaps...", /*65*/
                    "Even if Beerin's heart was filled utterly with regret, it could die peacefully, after seeing its friend one last time.", /*66*/
                    "Beerin thought, even if Treeze was not the same as the one from the dream, it would still want to see him nonetheless.", /*67*/
                    "With the last of its strength, Beerin flapped its wings and flew.", /*68*/
                    "Its wings nearly failed many times along the journey, but it arrived at the grassy hill at last.", /*69*/
                    "But when Beerin looked ahead, all it could see was an empty hill where Treeze should have stood.", /*70*/
                    "As sickly yellow clouded Beerin's visioned, it screamed.", /*71*/
                    "Ah, Beerin thought, so this is the truth.", /*72*/
                    "It seems its pollen addled mind had invented Treeze after all.", /*73*/
                    "It had hope, that perhaps that Treeze had been based on someone real, someone who was still living.", /*74*/
                    "But it seems, if there was one thing Beerin's mind was good at, it was creating false hope.", /*75*/
                    "It wasn't real, none of it was ever real.", /*76*/
                    "Beerin was truly pathetic to have thought otherwise.", /*77*/
                    "It seems Beerin was right after all, there was never a Treeze to bring answers back to, because Treeze had always been a lie.", /*78*/
                    "A very cruel lie, that even made Beerin believe was living, was thinking, was real.", /*79*/
                    "Beerin screamed.", /*80*/
                    "For all it had done, screamed at the world for doing unto it this fate, at Treeze for making it believe it could have peace.", /*81*/
                    "Screamed at horrible the pollen, screamed at the storm, and screamed at itself.", /*82*/
                    "Until Beerin could not scream any longer.", /*83*/
                    "Eventually its body gave up on it, and Beerin layed in the grass with its last flicker of life.", /*84*/
                    "Treeze, the hive, the queen, Beerin recounted everyone it knew.", /*85*/
                    "I'm sorry, was what Beerin thought, the very last thought it would ever have.", /*86*/
                    "And then it laid dead, never to wake again.", /*87*/
                    "*Myrin's letter obtained*", /*88*/
                ],
            },
            {
                tile: 11,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Hallo Eze :D", /*0*/
                    "Happy birthday, or. well. Happy late birthday, i suppose. I want you to know that you're a very dear friend of mine.", //1
                    "Talking to you is always fun, whether it's about philosophy or games. It's always been super engaging to chat with you and you always brighten my day a lot.", //2
                    "And I wanted to do something nice, since it's your birthday. Well, near enough to your birthday, anyways. This was what I ended up coming up with.", //3
                    "I hope you liked the story i wrote. As you can probably tell, it was a fanfiction of your fanfiction. Fanficception, if you will.", //4
                    ". I really loved what you wrote for my birthday, so naturally, i couldn't give you anything for your birthday except my own interpretation of your story ._.", //5
                    "._. I would say i hope you weren't too bummed out by the ending, but that would be lying, considering that i wrote that ending specifically to bum you out. I hope that story didn't scar you for life?", //6
                    "I actually wanted to write something from Treeze's perspective, where he figures out slowly that he was living in a dream world and he himself is just a figment of Beerin's imagination.", //7
                    "But since I made Treeze, well, a tree, it was just too hard, since then the entire story would just be Treeze and Beerin talking to eachother. And I wasn't sure how to give that story an ending.", //8
                    "That's why you ended up reading what you did. Of course, that was before i found out you were a bee/tree/philosopher, but oh well. If you were one of the bees you would have died anyways.", //9
                    "If you can, please write back to me whenever to tell me what you thought of the story, since I am absolutely dying to know. Or not, idk maybe you're busy. Other than that, have a nice day :D", //10
                    "Sincerely, Myra.", //11
                ],
            },
        ],
    },
    {
        path: 'Érazen',
        sequence: [
            {
                tile: 1,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "The Courtyard is a comfortable place for you, so much so that you almost long for a break, sitting below the Teri statue, resting while staring in awe at all the portals around you.", /*0*/
                    "And yet, deep within your heart, something is burning ardently: a thirst for knowledge, a natural attraction towards the mystery, a desire for challenge.", /*1*/
                    "You know you can't stop, and that is the reason why you're here.", /*2*/
                    "The [>]'s path was calling you, and you finally answered.", /*3*/
                ],
            },
            {
                tile: 2,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "As you come out from the other side of the portal, you open your eyes.", /*0*/
                    "To your surprise, you found yourself in the middle of a cultivated field. You wonder how this place is even connected to the courtyard you just left behind your back.", /*1*/
                    "However, what puzzles you the most is the smell that pierces your nose.",  /*2*/
                    "Still numb after the inter-dimensional travel (it felt like one at least) that teleported you to this field, you realize the smell is familiar, but all the attempts to recognize it are to no avail.", /*3*/
                    "You've smelled it before, you've tasted it before, and yet, that name appears to be covered in thiccc fog.", /*4*/
                    "For now, you decide to stop overthinking. You realize you've been standing on the field, alone and immobile, for several minutes. Before anyone notices you being awkward, you switfly hop among the crops and, rapidly get out, after giving one last look of goodbye to the field that welcomed you to this path.", /*5*/
                ],
            },
            {
                tile: 3,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You keep walking and walking on the sidewalk of a road, looking around for any traces of civilization, barring cars and the familiar cultivated fields.",
                    "Yes, all you can see in the distance is cultivated fields, as far as your can go. Your horizon is made of cultivated fields.",
                    "A sudden thought crosses your mind: you have a dog!",
                    "You begin to think about your dog. Ah, it would be nice if she were here, accompanying you. It would make walking less tedious.",
                    "Although tired from hours of walking, and the distracting thoughts of your dog, you don't fail to notice another odd detail that startles you.",
                    "The cars passing by the road share the same, repeating features: dirt-yellow color, oval shape, and they seem to emit a particular smell, typical of the cultivated fields that extend to the horizon and beyond.",
                    "Have you been teleported to another dimension, perhaps? Is it just a dream?",
                    "There is only one certain evidence, something is off with the area you've found yourself into.",
                    "Digging deep into the secrets of this world requires further investigations, so you begin to take action.",
                ],
            },
            {
                tile: 4,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You lost count of how many hours of walking it took you to finally catch a glimpse of buildings.", /*0*/
                    "It looks like a city whose structures are colored in a way that seems to match perfectly all the elements of the landscape. It is a color you have seen quite frequently.", /*1*/
                    "You now know where your next investigation is going to be conducted.", /*2*/
                    "You're tired, drenched in sweat after... who knows, you lost count of the hours that have passed since you started walking.", /*3*/
                    "It is night, but the goal you were chasing for so long is within your reach, at long last.", /*4*/
                    "Or so you thought.", /*5*/
                    "Before the gates, you can see two men, guarding all the movements to and from and the city.", /*6*/
                    "You approach them, but they don't let you pass through the gates.", /*7*/
                    "No matter how many times you say please, or pretty please, or pwetty pwease :3, they don't seem to waver.", /*8*/
                    "A foreigner must show a P-Pass to access the city, they say.", /*9*/
                    "Then, you ask what a P-Pass is, but only silence came afterwards.", /*10*/
                    "Without a P-Pass, you can't enter the city.", /*11*/
                    "You can stare at the wall, or the floor, as expected from the Herrscher of Floors. Or, you can find another solution.", /*12*/
                ],
            },
            {
                tile: 5,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You raise your arm, your thumb is up. Now, it is only a matter of waiting.", /*0*/
                    "The first man that notices you raises his thumb back, leaving you puzzled.", /*1*/
                    "Not much later, another driver stopped in front of you. He kindly lets you sit in the car.", /*2*/
                    "An expensive car to boot, although its color is the same as any other car passing by. Weird.", /*3*/
                    "The man looks like to be an aristocratic, presumably.", /*4*/
                    "'Are you interested in art, perhaps?', the driver asks.", /*5*/
                    "'An art exhibition has been organized in my city. The finest masterpieces will be shown there.'", /*6*/
                    "'I guess that is why a foreigner like you is trying to enter without a P-Pass?'", /*7*/
                    "This is a chance to investigate about the strangeness of this area, so you decide to play along.", /*8*/
                ],
                option: ["To be honest, no.", "Of course, I love art and colors!",],
                answer: 1,
            },
            {
                tile: 6,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "The noble man is energetically greeted by the guards in front of the city gate. He must be popular around here.", /*0*/
                    "His P-Pass is checked, the gates open.", /*1*/
                    "You're finally in!", /*2*/
                    "Alas, the aristocrat can't stick any longer, for business is calling him.", /*3*/
                    "You greet him and part ways.", /*4*/
                    "You are ready to explore the odd, yellowish city.", /*5*/
                ],
            },
            {
                tile: 7,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You sit down on bench, watching people frenetically pass by, yellowish cars stopping as the traffic lights switch to an intense yellow color.", /*0*/
                    "You hear kids shouting at you from the other side of the park.", /*1*/
                    "One of them has kicked the ball so far that it almost hit you.", /*2*/
                    "'Pass the pall, sir!'", /*3*/
                    "As you're about to kick the ball back, you realize... pall?", /*4*/
                    "What's wrong with these kids?", /*5*/
                    "'Is this kid drunk, bro?'", /*6*/
                    "Even your tie is baffled, yet it appears to have grown curious towards this path, as well.", /*7*/
                    "'Please go talk to him, see what's this about.'", /*8*/
                    "Should you really trust your tie?", /*9*/
                ],
            },
            {
                tile: 8,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Pushed by your tie, you decide to join in for a refreshing footpall match with the kids in the park.", /*0*/
                    "However, the pall feels unexpectedly heavy to your touch.", /*1*/
                    "So heavy that it could easily knock down even an adult, a 21 year old (now almost 22) guy.", /*2*/
                    "And no, it is not a coincidence.", /*3*/
                    "One of the kids clumsily kicked the pall, which almost killed your petit soldat.", /*4*/
                    "The unfortunate event causes you to pass out, ending up in hospital. You should have been more careful! ", /*5*/
                ],
            },
            {
                tile: 9,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Looking for some rest, you decide to head to a hotel nearby.", /*0*/
                    "Fortunately, customers don't seem to be required to show a P-Pass or anything of that sort.", /*1*/
                ],
            },
            {
                tile: 10,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Room P0530 was assigned to you. Finally, some sleep!", /*0*/
                    "That is, if you can manage to ignore the omnipresent piercing smell of... root vegetables.", /*1*/
                    "You got used to it outdoor, but it feels even concentrated and condensed inside the hotel rooms.", /*2*/
                    "How can people even live with this odor, you wonder.", /*3*/
                    "Whatever the answer is, this smell is gonna be your companion for the whole journey.", /*4*/
                ],
            },
            {
                tile: 11,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You close your eyes. After a long fight between the annoying odor and your nose, the latter emerges victorious.", /*0*/
                    "You finally fall asleep.", /*1*/
                    "zZz zZz zZz...", /*2*/
                ],
            },
            {
                tile: 12,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Your energy has been fully repleshined.", /*0*/
                    "You're now ready to explore even more!", /*1*/
                ],
            },
            {
                tile: 13,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "[P-Pass REQUIRED TO ENTER]", /*0*/
                    "The hospital looks fairly normal, if you ignore the yellowish floor.", /*1*/
                    "As the Herrscher of Floors, you're disgusted at such a poorly stylistic choice.", /*2*/
                    "Well, at least the intensity of the smell is lower, in here.", /*3*/
                    "The waiting line is considerably long, maybe there's a plague ongoing.", /*4*/
                    "One would expect a variety of symptoms and diseases, and yet... there is one that seems to be mentioned again, again and again.", /*5*/
                    "Hyposolanumtuberosumosis", /*6*/
                ],
            },
            {
                tile: 14,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "The last memory you have is that of a pall knocking you off.", /*0*/
                    "You wake up inside an unfamiliar environment.", /*1*/
                    "A hospital.", /*2*/
                    "You don't even know how much time has passed since then.", /*3*/
                    "There is no doctor around, and you seem to have recovered well", /*4*/
                    "I guess you don't need to be supervised anymore.", /*5*/
                ],
            },
            {
                tile: 15,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "The door creaks open.", /*0*/
                    "A relaxing music is playing.", /*1*/
                    "Albeit short, the music manages to set the proper ambiance for a pub.", /*2*/
                    "You recognize the beats. It must be blues. A short blues piece. A Mini Blues.", /*3*/
                    "You ask the cocktail server for a drink and find a comfortable spot on one of the counter chairs.", /*4*/
                    "A few minutes go by, vibing to the music, to the atmosphere.", /*5*/
                    "An elder woman quietly sits beside you.", /*6*/
                    "Between one sip and the other, your eyes are caught by the brochure that the woman you is reading, while drinking her Härdöpfeler.", /*7*/
                    "Then, your eyes met with hers.", /*8*/
                    "'Are you interested in art, perhaps?', she says.", /*9*/
                    "Déjà-vu.", /*10*/
                    "With a gesture of her hand, she tells you to take the brochure and read it yourself.", /*11*/
                    "An art exhibition. Not the first time you hear about this.", /*12*/
                    "Alas, you don't have a P-Pass, so you can't participate.", /*13*/
                    "'You look sad. Are you hungry, perhaps?'", /*14*/
                    "Just like a typical granny, she offers to make dinner for you.", /*15*/
                    "You happily accept the offer and follow her to her house.", /*16*/
                ],
            },
            {
                tile: 16,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "The apartment is a modest one, spacious enough for an old couple.", /*0*/
                    "However, she seems to live alone. A widow, perhaps.", /*1*/
                    "Your hunch is proven correct few seconds later, when you catch a glimpes at an old picture of a couple, on an old, dusty shelf.", /*2*/
                    "She does not ask you any questions about you, as if she already knows you're foreigner. Perhaps, she is waiting for you to begin the question battle.", /*3*/
                    "Whatever the granny is cooking, it smells amazing, albeit similar to the smell that permeates the air, both in the city and the fields.", /*4*/
                ],
            },
            {
                tile: 17,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "The dish is finally served: gnocchi, coated in bechamel. But, there is more.", /*0*/
                    "Her specialty, according to the granny: 'Arsh taters' gateau.", /*1*/
                    "'The ingredients I used come directly from my native country, Ireland', she says.", /*2*/
                    "Although embarrassed, you ask which country you two are in, right now.", /*3*/
                    "'France. I emigrated at a young age', the granny responds.", /*4*/
                    "Intrigued by the granny's past, you want to dig deeper into this story. So, you ask for details.", /*5*/
                    "'I wanted to devote my life to my God, and this city has the biggest church in the world, so I decided to leave behind my country and my wealth.', she says.", /*6*/
                    "'I worship my God every day, in every way. Even through food. You must be thankful, it's thanks to it that we can have such a fine dinner.', she adds.", /*7*/
                    "'Is the peculiar smell, the redundant color of this city also a cause of the presence of this God you speak of?', you finally inquire.", /*8*/
                    "'Yes, it is but a blessing from our benevolent God.'", /*9*/
                    "In the meantime, you finished your portion of dinner. You ate so fast it almost felt like you drank it. Such is the power of hunger.", /*10*/
                    "You decide to ask one last question before taking your leave, that is: the location of the church.", /*11*/
                    "To which, she replied: 'Why, young man, you want to devote your life to our God, as well? Oh, I've never thought I'd meet such a passionate foreigner!'.", /*12*/
                ],
                option: ["I want to uncover the truth behind this cult.", "Yes, I want to convert to the religion you speak of!"],
                answer: 1,
            },
            {
                tile: 18,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Daydreaming about the vibrant colors you're about to lay your eyes on, you try to cross the porch that leads to the exhibition's main room.", /*0*/
                    "The digital lock requires a P-Pass to let you enter.", /*1*/
                    "You were waiting for this moment since the very first time you hear about the P-Passes.", /*2*/
                    "You pull out your P-Pass with pride, swipe it and look at the digital lock with an evil grin, as it unlocks.", /*3*/
                    "You're finally in.", /*4*/
                    "The granny, the aristocrat. Everyone is here!", /*5*/
                    "Though, they seem extremely focused on staring at the art.", /*6*/
                    "So much so that they don't even notice your presence.", /*7*/
                    "They almost look... hypnotized.", /*8*/
                    "Now, it's your turn to feast your eyes on art.", /*9*/
                    "One by one, you lay your eyes on every work of art that is hanging on the strangely not yellow walls, careful not to miss a single one.", /*10*/
                    "However, it doesn't take you long to realize that all art pieces have something in common.", /*11*/
                    "It's not about colors. It's not about art style either.", /*12*/
                    "Rather, it's about the contents.", /*13*/
                    "All the works selected for this exhibition seem to portray similar scenarios, similar subjects.", /*14*/
                    "In every angle of this exhibition you can see portraits of numerous, poor family having a modest meal." /*15*/
                ],
            },
            {
                tile: 19,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "New room, same contents.", /*0*/
                    "Among the sea of repetitive works, your eyes stop at a particular painting.", /*1*/
                    "It's title is: De Aardappeleters", /*2*/
                    "You're more than sure. This one is a Van Gogh's. Good taste.", /*3*/
                    "Since you are here, you may as well ask the organizer the reason for this particular choice of theme that connects all the paintings in this exhibition.", /*4*/
                    "Nonetheless, the answer does not sastisfy you. 'What do you mean, it has always been like this', was their answer, laughing off at the seemingly weird question you asked.", /*5*/
                    "You don't even have the time to utter the second question, another art appreciator quickly interrupts you:", /*6*/
                    "'It has always been like this. Our God has decided it must be like this.'", /*7*/
                    "Once again, this myserious God has been mentioned.", /*8*/
                    "You realize, perhaps too late, that everyone, no one excluded, is a goddamn fanatic, in this city.", /*9*/
                    "With an excuse, you quickly leave the place before upsetting other obsessive believers.", /*10*/
                    "Fed up with this world, you know where the last step towards the truth is going to be: the church.", /*11*/
                ],
            },
            {
                tile: 20,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You run towards the church, impatient to leave this abormal, distorted reality.", /*0*/
                    "The P-Pass lets you unlock the doors, which you subsequently slammed open.", /*1*/
                    "The church looks brilliantly illuminated, yet empty, perhaps on purpose. This is a fated meeting afterall.", /*2*/
                    "Every choice, every meeting, every place you'v visited. Eveything you have experienced has been guiding you to this place.", /*3*/
                    "'SHOW YOURSELF, I KNOW YOU CAN HEAR ME', you scream on top of your lungs.", /*4*/
                    "To no avail.", /*5*/
                    "You scream again.", /*6*/
                    "Nothing.", /*7*/
                    "Nobody's gonna show up? What an anti-climatic ending, it would be.", /*8*/
                    "Just as you're about to give up, a loud voice unexpectedly penetrates inside your head.", /*9*/
                    "'For the eyes to see, the heart must first learn to see beyond the veil of Maya', a sweet and sugary, unknown voice says.", /*10*/
                    "Hazy words began to appear in the air, right before your eyes, as if the clouds suddenly gained the intelligence to form words.", /*11*/
                    "LIFE IS POTATO. POTATO IS LIFE. I WAS BORN FROM A FIELD AND ASCENDED TO HEAVEN. I FEED HUMANITY AT A LOW PRICE. POTATO IS GOD. YOU ARE POTATO." /*12*/
                ],
            },
            {
                tile: 21,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "The brainwashing has begun. Not even a philosopher with remarkable introspective skills like you can resist.", //0
                    "You begin to feel... admiration, adoration, obsession towards potatoes.", //1
                    "French fries, boiled Potatoes, fried Potatoes, Potatoes au gratin, bechamel, Irish potatoes. Never have you ever felt such a strong urge to consume potatoes.", //2
                    "Your body automatically prostrates itself, for the Potato has descended upon you.", //3
                    "And thus, you've become the the most zealous Potato's priest.", /*4*/
                ],
            },
            {
                tile: 22,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "As such, it is your duty to teach other people about the greatness, the magnificence of God Potato." /*0*/
                ],
            },
        ],
    },
    {
        path: 'Jas',
        sequence: [
            {
                tile: 1,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "If on a Spring's night a philosopher", //0
                    "Outside the familiar Solar System", //1 
                    "Leaning from the cockpit of a Vessel", //2                
                    "Without fear of supernovas", //3
                    "Looks down at the rotating rock", //4
                    "In a network of memories that resurface", //5 
                    "In a network of hallways that intersect", //6
                    "On the carpet of trees illuminated by the twins", //7
                    "Around a temple", //8
                    "What story down there awaits its reader?", //9
                ],
            },
            {
                tile: 2,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Contact me.", //0
                    "¿’", //1 
                ],
            },
        ],
    },
    {
        path: 'Yuma',
        sequence: [
            {
                tile: 1,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Happy Birthday eze! Today is your special day, and i wish you an amazing day!", //0
                    "I hope everything you wish for comes true and that you'll achieve everything you want! you're our eze, and i'kk wush you everything good.<3", //1
                    "sometimes life might get hard, it feels like going up against an though Elden ring boss,", //2
                    "but instead of overthinking or wishing to dive back in time, our eze stays strong, pushes trough and beats every challenge in front of him!", //3
                    "And also, there will always bei your friends from the teri tower! They'll always be there, no matter what happens.", //4
                    "Even if you're stuck in a closed room, they will always help you find a way out with their red truth.~", //5
                    "But even tho there's hardships sometimes, i hope you life will be filled with joy, fun, memes, even chess, here and there and just a lot of good times!", //6
                    "speaking of chess! i have a little chess puzzle for you! its a though nut to crack, but i believe in you! as an hint, the placements of certain pieces is crucial! Check my items for details.", //7
                    "Again, Happy birhtday Eze!<3", //8

                ]
            }
        ]
    },
    {
        path: 'Beans',
        sequence: [
            {
                tile: 1,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "What is this type of snack called?"
                ],
                option: ["Pain au chocolat", "Chocolatine", "Croissant", "Jesus"],
                answer: 1,
            },
            {
                tile: 2,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "What is 9 + 10?"
                ],
                option: ["19", "21", "Deez nuts", "90"],
                answer: 1,
            },
            {
                tile: 3,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "What came first, the chicken or the egg?"
                ],
                option: ["The chicken", "The egg", "Ur mom", "Soup"],
                answer: 1,
            },
            {
                tile: 4,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "What doth life?"
                ],
                option: ["42", "Egg", "The friends we made along the way", "Eat, sleep, shit, repeat"],
                answer: 1,
            },
            {
                tile: 5,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "Would you keep the blindfold on?"
                ],
                option: ["Yes", "No", "Keep it on but peek", "Would you?"],
                answer: 1,
            },
            {
                tile: 6,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "Who is responsible for the incident?"
                ],
                option: ["Bush", "Obama", "Jas", "The gnomes in my garden"],
                answer: 1,
            },
            {
                tile: 7,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "What did I shove up my ass in 1984?"
                ],
                option: ["Burger King Foot lettuce", "KFC Fryer Rat", "El  gato", "A ruler"],
                answer: 1,
            },
            {
                tile: 8,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "Why are we still here?"
                ],
                option: ["To suffer", "To do a quiz", "Does it matter?", "It is my birthday"],
                answer: 1,
            },
            {
                tile: 9,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "No yatta?"
                ],
                option: ["Live a life of pain", "Find a brick", "Call for an old timer", "Cry in a corner"],
                answer: 1,
            },
            {
                tile: 10,
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "Can you define normal?"
                ],
                option: ["A majority standard", "Me", "Nothing", "The size of my cock"],
                answer: 1,
            },
            {
                tile: 11,
                type: 'n',
                hasAudio: true,
                complete: false,
                text: [

                ],
            },
        ]
    },
    {
        path: 'Mika',
        sequence: [
            {
                tile: 1,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You enter a room and a sense of unease fills you as if something is watching." //0
                ]
            },
            {
                tile: 2,
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "The room is a study. To your right is a desk sitting in front of a huge window leading out to the grounds.", //0
                    "To your left, a wall of books decorated with assorted items and lamps set to illuminate their dusty spines.", //1
                    "Directly in front of you at the other end of the room is another door, to the left of that stands a suit of armour.", //2
                    "I should look at:" //3
                ], //desk (3), book (9) , suit of armor (13), door (17)
            },
            {
                tile: 3, //desk
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "On the desk, you spot several papers filled with sketches and text. You also notice the desk has several drawers.", //0
                    "You choose to examine:" //1
                ], //page with text (4), page with sketch (5), drawers (6)
            },
            {
                tile: 4, //page with text
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "The page is heavy with text, almost uniform in appearance. You quickly realize the page repeats a single sentence:", //0
                    "'All work and no bitter melon juice makes Teri Teri ree.'", //1
                    "You put the paper down and make a mental note to make a trip to the shops when you get out.", //2
                ],
            },
            {
                tile: 5, //page with sketch
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You see an image of a goddess, a nun with a heavy chest which brings about an air of fear, sainthood and an emotion that will surely get you bonked should it escape.", //0
                    "The bottom of the sketch has the word Kevonia written. You decide that it is too sacred for mortal eyes and pocket it.", //1
                ],
            },
            {
                tile: 6, //drawers
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You start to tug at the drawers, reaching the last drawer before something gives and the drawer slides open. Inside sits a single key.", //0
                    "It’s gold, and its bow is a blue heart with wings. You reach for the key but hearing a tapping coming from behind you. You…", //1
                ], //ignore (7) or turn arround (8)
            },
            {
                tile: 7, //ignore
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You pick the key up, surprised by its weight, before checking behind you and seeing nothing but the forest that sits at the end of the property covered in a dull glow.", //0
                    "Looking closer towards the windows, you notice rose bushes tapping on the window and assume that was the cause.", //1 //add key item
                ],
            },
            {
                tile: 8, //turn arround [BG change]
                type: 's',
                hasAudio: false,
                complete: false,
                text: [
                    "You turn around and see a butterfly glowing and pulsing in a blue light, looking behind it to notice something in the forest glowing in the same hue.", //0
                    "Before you have time to think, you realize you are following the butterfly towards the source of the forest’s luminescence.", //1
                    "Coming to a stop in a clearing, you come across a sight of lovecraftian beauty. It’s her, Kevonia.", //2
                    "No words come from her mouth, but you can hear her as she tells you what you already know.", //3
                    "'Pray, pray for me, my dear Eze' she whispered in your mind." //4
                ],
                option: ["Pray"],
                answer: 1,
            },
            {
                tile: 9, //Books
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You start working your way through the books. Titles of every nature fill the shelves:", //0
                    "Forensics, physics, programming, computer science, philosophy.", //1
                    "Countless subjects you could form degrees on. However, there are some books that are odd, they don't fit just on their titles. Such as:" //2
                    //Pokémon and pornography (10), the life and times of Teri tower (11) or Honkai trivia book (12)
                ],
            },
            {
                tile: 10, //Pokémon and pornography
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Did you know that in terms of male human and female Pokémon breeding, vaporeon is the most compatible Pokémon?", //0
                    "Of course, you did, everyone does. But did you know that it’s not the most attractive Pokémon to humans, based on the quantity of pornography produced?", //1
                    "In fact, Vaporeon ranks 14th out of the 905 Pokémon spanning generations 1 to 8.", //2
                    "The no.1 Pokémon based on sexual attraction is Lucario with over 11,000 pieces of media putting it in a league of its own.", //3
                    "Rounding out the top 5 is in order Gardevoir, Pikachu, Umbreon and Charizard with media ranging between 5 and 10 thousand.", //4
                    "This study only discovered 7 Pokémon that did not have pornography made of it…..", //5
                    "the words trail off as your brain tries to make sense of what you just said." //6
                ],
            },
            {
                tile: 11, //The life and times of Teri Tower
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Teri Tower, a community of people that began life as an attempt to enter the void for Teri,", //0
                    "became a cult that has accepted everything from arson to fusion with household objects such as coffee machines and fridges to asking: would you leave the blindfold on?", //1
                    "The history of Teri tower is as complicated as the day is long, it all began on that fateful day, March 5th…." //2
                ],
            },
            {
                tile: 12, //Honkai trivia book
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "Hello captain. It's me, St. Freya’s principal Theresa Apocalypse and when I was asked to write this book, I thought Kiana had forgotten to revise for her exams again.", //0
                    "That girl never ceases to not be a headache for me or Himeko much like her dad, but that's the kaslana’s for you but enough rambling, you’re reading this because unlike her,", //1
                    "you want to know interesting facts like Benares having a high physical resistance or that the ultimate of my Celestial Hymn battle suit reduces the defensive stats of my enemies by 75%.", //2
                    "Unfortunately, the fact-checkers wouldn't believe me when I said that the evasion skill brainwashes everyone into becoming TeRiRI fans,", //3
                    "but I'll make them believe me I mean believe in TeRiRI World’s #1 cutest if it's the last thing they do so help….", //4
                    "You stop reading as it feels like you're swallowing bitter melon juice trying to read through it." //5
                ],
            },
            {
                tile: 13, //Armour <-- that's Bri'ish for Armor
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You approach a full set of armour that glistens under the lights of the room, it looks clean yet somehow used with cuts, dents and scrapes having left their marks on the polished metal.", //0
                    "The breast adorned with a crest of gold made to look like a pair of wings made with cogs. Taking in the sight before you, your hand instinctively reaches for..." //1
                ], //helmet (14), chestplate (15) or sword (16)
            },
            {
                tile: 14, //Helmet
                type: 'n',
                hasAudio: false,//add a velonia laugh track here :meistare:
                complete: false,
                text: [
                    "You gaze upon the helmet sitting atop the piece, and questions fill your head about whether it fits.", //0
                    "You lift it off the mannequin's head and with a bit of effort slide it onto your own.", //1
                    "The fit is perfect, with its only downside being the lack of sight due to its visor being stuck in place due to the mechanism's lack of maintenance.", //2
                    "It is at this point you once again feel like you're being watched, but with the limited vision you can only see so much.", //3
                    "Without warning, a sharp feeling hits you in your stomach. You clutch at the pain, only to feel something there. You look down to see a tentacle protruding where the pain radiates.", //4
                    "You look to see where its owner is connected, only to find it's phasing through the floor.", //5
                    "Just as quickly as it sheathed itself inside your lower abdomen, it removes itself before slinking back through the floor as it draws blood and viscera from you.", //6
                    "You fall to the ground, clutching your now open abdomen before feeling a searing pain in your hands, it's acid whatever has pierced you has hit your stomach.", //7
                    "You realize that it's eating away at your insides. You slump over as you breathe your last breaths and just as the light begins to fade.", //8
                    "You hear a voice laughing, it's a woman's, and you only catch one word before you die.", //9
                    "'Seele'." //10
                ],
            },
            {
                tile: 15, //Chestplate
                type: 'n',
                hasAudio: false,
                complete: false,
                text: [
                    "You brush your hands across the golden emblem on the chest plate, admiring the craftsmanship of blacksmiths long since dead, when you once again feel like you are being watched.", //0
                    "It's only then you notice something in the reflection of yourself on the armour. It's thin, long and moving towards you.", //1
                    "You continue to watch it through the breastplate, waiting for its next move. It begins to rear its head back, ready to strike like a snake.", //2
                    "It lunges forward, you move at the last second, narrowly avoiding being impaled in the skull. You fall to the side, turning to look at the being head on.", //3
                    "You realize it has no head, it is a black tentacle protruding through the floor radiating a reddish hue.", //4
                    "The ground quickly begins to bubble with the same appearance as the tentacle as several more tentacles you bolt for the door that led you here, but it's locked", //5
                    "It wasn't locked when you entered. Whatever this thing is, it wants you.", //6
                    "You make a dash for the other door, however a tentacle wraps around your ankles during the sprint, bolo tying you, sending you crashing to the floor once again.", //7
                    "Quickly the tentacles' envelop you, their weight increasingly pressing on you, constricting you of motion bar your head till that too is being suppressed.", //8
                    "Your life flashes before your eyes as it squeezes the breath with each one you take. A single tear forms, as in the distance a muffled call can be heard from the tentacle's source.", //9
                    "Its sole words, 'this is to protect her, to protect Seele'." //10
                ],
            },
            {
                tile: 16, //Sword
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "You look down at the sword and free it from its former owner's hands.", //0
                        "It is as unique for its age far too big to be a longsword and far too decorated and heavy to be compared to a Sicilian rapier but yet somehow befitting for its period.", //1
                        "You look towards The hilt forged of a black metal that almost seems unnatural were it not in your hands.", //2
                        "Its guard runs from the end of its handle, over its holder's hand before integrating itself into its blade. Its centrepiece is 4 jewels.", //3
                        "A deep red, cool blue and a vibrant yellow jewel all crown a much larger brighter red jewel. This red carries on along the blade, only stopping where its edge begins to form.", //4
                        "It's while you are studying this beautiful weapon when you notice a shadow reflected in its blade. Whatever stood behind you. It bore no human shape, moving like a snake looking for its next prey.", //5
                        "On instinct, you swing the blade towards your assailant. You feel no resistance as you cut through its body, which is when you notice it has no body, no features, it didn't even make a sound as it was separated in two.", //6
                        "As the rest of its still attached body slinked through the floor, it once came. You hear someone's cries echoing around you.", //7
                        "'Don't hurt my Seele, please. Don't hurt her!'", //8
                        "You try to locate its source, but no one is around. You look at where the tentacle once stood, nothing remains, not even the part removed.", //9
                        //item acquired:sword
                    ],
                },
                {
                    tile: 17, //Door
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                       "You try the door at the other end of the room. It's locked. You scour the door looking for some kind of mechanism or clue as to if it can be opened before noticing a blue heart on the door,", //0
                       "it seems familiar, but you can't quite put your finger on it" //1
                    ], //leave it (18), use key (notify eze he needs find key first) (19)
                },
                {
                    tile: 18, //Use key --> from here linear path continues
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "You fish the key you found from the desk out of your pocket and insert it into the lock.", //0
                        "It fits, and you twist it to unlock the door. Opening it to find nothing but pitch black, not even the studies lights illuminate the darkness it holds.", //1
                        "Having come this far, you take a deep breath before stepping into the depths before you." //2
                    ],
                },
                {
                    tile: 19, //dark room
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "You traverse the darkness, not once making contact with any object, person or thing. The only sounds are your footsteps in this empty space.", //0
                        "Just as you're about to give up and turn back, you realize you can't turn back, you don't even see the door you came in by.", //1
                        "Alone in the dark with nothing surrounding you. You stop dead in your tracks.", //2
                        "Fearing it was the end or maybe out of hope this was just a bad dream, you shut your eyes, hoping it would be over soon.", //3
                        "You suddenly hear a quiet humming noise. The first sound this room has produced. You open your eyes, seeing a faint blue glow in the distance.", //4
                        "You walk toward this glow as you get closer and closer. Your heart starts to beat harder and harder in anticipation.", //5
                        "Your walking turns into jogging, which turns into full sprinting as the glow becomes larger and larger.", //6
                        "You become so desperate to escape, you don't even hesitate to take in what's in front of you. To describe it as a door would be wrong as a door.", //7
                        "It didn’t open on a hinge, it just grew open. The only identifiable thing was an image floating in the middle of what you hoped was an exit.", //8
                        "The image of a crystal flower…" //9
                    ],
                },
                {
                    tile: 20, //Ely in distance holding bow
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Light flashes before your eyes, eventually settling, so you can take in the surrounding site.", //0
                        "You’re standing in a courtyard surrounded by ornate masonry built to house water features and beautiful landscaping filled with aromatic and vibrant flowers.", // 1
                        "You move to have a closer look before pain radiates in your knee. You look down to see a pink arrow embedded in your knee, which quickly disappears.", //2
                        "You look towards the direction where the arrow came from to spot a girl dressed in black, blue and gold. Her eyes are a pinkish red that encrusts a sunrise orange pupil.", //3
                        "Her hair is a shade of blue that matches her dress, and just poking through it are her pointed ears.", //4
                        "'Hi~'. For someone who just shot you in the leg, she doesn’t have an ounce of malice in her voice.", //5
                    ],
                },
                {
                    tile: 21, //Ely but close up :elysmug:
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "You: 'err. Hi? Was that you?'", //0
                        "Pink Elf: 'Yes, I don't take kindly to visitors, especially ones with weapons on them'", //1
                        "You: 'Weapon?'", //2
                        //With sword:
                        "You: 'Oh… this?'", //3
                        "She nods before the weapon in my hand disintegrates in a cluster of green blocks.", //4
                        "Pink Elf: 'Much better, at least I know you're honest from the start, now you've done something for me…'", //5
                        "With a flick of her wrist the same green squares that removed the sword, surrounded my injured knee and an immediate relief fell over my knee", //6
                        "Before once again dissipating to show the wound once bleeding now completely healed leaving only the hole and dried blood caused by the arrow.", //7
                         //dialogue merges back to singular outcome:
                        "Pink Elf: 'Now that we got that out the way, who are you?'", //8
                        "Eze: 'E…Eze'", //9
                        "Pink Elf: 'Eze? Hmm, it kind of rhymes with someone dear to me.'", //10
                        "The girl in blue seems a bit lost in her own thoughts.", //11
                        "Elysia: 'Anyway, my name is Elysia. Well it would be Elysia if everything went to plan you can call me Ely. Now, why are you here?'" //12
                    ],
                },
                {
                    tile: 22,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Eze: 'I found this key in a desk that opened a door, that eventually led me to another door that led to here, wherever here is.'", //0
                        "Elysia: 'This this is Elysium. A world thought up by the other me and one I also tried to hold, pretty isn't?'" //1
                    ],
                    option: ["Very","Not as much as you"], //theres dialogue for picking "Very" but it holds little substance, maybe just insta die upon picking it, like on Sisy's path ¯\_(ツ)_/¯
                    answer: 1,
                },
                {
                    tile: 23,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Elysia: 'He-he, eveeen after what happened you couldn’t resist could you Eze?. Not many can, to be fair, but it won’t grant you any stay of execution.'", //0
                        "Eze: 'Execution?. What do you mean by execution?'", //1
                        "Elysia: 'Oh he-he, but the issue is Eze, you shouldn't be here. Which makes you an anomaly and anomalies must be removed permanently.'", //2
                        "She starts drawing her bow.", //3
                        "Eze: 'Wwwait don't kill me, what did I do wrong…  you appeared to me, I didn't ask for this!!'", //4
                        "Elysia: 'Hmmmm, fine, I'll give you a chance. But first, how about a change of scene?'", //5
                        //Elysia doesnt Errgh does she? wouldnt it be better if she did a pondering "hmmmm" in her typical tone?
                    ],
                },
                {
                    tile: 24,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Ely jumps down, and the environment instantly changes to take the form of a theme park. A podium stands in front of me, with a second forming in front of her.", //0
                        "Ely: 'Ahh, I love playing games, do you?'", //1
                        "Eze: 'Ones where my life isn't at threat, yes…",
                        "Ely: 'Ahh, don't be angry. This isn't a thing against you specifically, in fact I'm giving you more of a chance than most.'", //2
                        "Ely: 'Now, then, the game. It's a rather simple one, but sometimes the simple ones are the most fun. A quiz, I ask, you answer. 3 wrong answers and you're terminated. Easy right?'", //3
                        "Eze: 'I guess'", //4
                        "Ely: 'I’ll take that as a yes.'" //5
                        //at this point a form of 3 lives quiz starts and im not sure how you'd implement it.
                    ],
                },
                {
                    tile: 25,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Question 1: Who was in the forest?" //0
                    ],
                    option: ["Aponia", "Kevonia", "Mobponia"],
                    answer: 1
                },
                {
                    tile: 26,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Question 2: When you were attacked by tentacles, what colour did they glow?" //0
                    ],
                    option: ["Red", "Green", "Blue"],
                    answer: 0
                },
                {
                    tile: 27,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Question 3: Who did the tentacles belong to?" //0
                    ],
                    option: ["Möbius", "Seele", "Mika"],
                    answer: 1
                },
                {
                    tile: 28,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "I’m impressed you haven't completely failed off the bat.", //0
                        "The last one did not last this round at all. I remember them fondly.", //1
                        "They went a bit mad at the end, screaming about what will happen to the foxes and the floof.", //2
                        "I told them that I'm sure they'll make a nice coat, and then I sent the arrow through their heart.", //3
                        "I think they went by like Toby fox, possibly. Strange you can remember actions but never their names…like a stone on a beach, it just erodes away over time as new waves come crashing in.", //4
                    ],
                },
                {
                    tile: 29,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Time for Round 2 Eze. Let’s see how good your general knowledge is.", //0
                        "Question 1: What Pokémon is the most Rule 34’d?", //1
                    ],
                    option: ["Vaporeon", "Gardevoir", "Lucario"],
                    answer: 2
                },
                {
                    tile: 30,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Question 2: When was Teri Tower founded?" //0
                    ],
                    option: ["March 7th", "March 5th", "March 12th"],
                    answer: 1
                },
                {
                    tile: 31,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Question 3: Which of the following properties does the celestial hymn battle-suit hold?" //0
                    ],
                    option: ["ULT induces 75% debuff on enemy def", "Passive builds Teri World Domination", "Combo increases CH Phys Resistance"],
                    answer: 0
                },
                {
                    tile: 32,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "I have to admit I'm surprised you even got to this far, but I’m afraid your time will come too in our final round, let's begin!" //0
                    ]
                },
                {
                    tile: 33,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Question 1: Who wrote the guide for St. Freya?" //0
                    ],
                    option: ["Rita", "Sin Mal", "Theresa"],
                    answer: 2
                },
                {
                    tile: 34,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Question 2: What shape was the key that brought you here?" //0
                    ],
                    option: ["Heart-shaped with wings", "A crystalline flower", "Flamechaser’s symbol"],
                    answer: 0
                },
                {
                    tile: 35,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Final question, Eze. Time to decide whether you live or die. What is my name?" //0
                    ],
                    option: ["[REDACTED]", "[REDACTED]", "[REDACTED]"],
                    answer: 2
                },
                {
                    tile: 36,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "HA HA HA HA Did you honestly think I would let you win this easily? You are in my domain.", //0
                        "Why do you think that room was so unkempt, why no one knew about that door?", //1
                        "IT'S BECAUSE NO ONE EVER SURVIVED PASSING THROUGH IT NOT BECAUSE THEY LOST BUT BECAUSE I NEVER LET THEM?", //2
                        "I like playing with my food eze and that is what you are.", //3
                        "You are my food, something for me to consume, and now I will do just that.", //4
                    ],
                },
                {
                    tile: 37,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "HoC proceeds to draw its Bow, and as she looses, your vision becomes engulfed in a pink light as you feel your eyelids fall.", //0
                        "The last thing you register was the sound of a girl giggling before she proudly states: 'Let this place become more beautiful!'." //1 
                    ]
                },
                {
                    tile: 38,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text:
                    [
                        "You wake up slumped on the desk with a blanket draped over you.", //0
                        "You question what you just saw and look around the room but nothing is out of place.", //1
                        "You even look at the door you went through to find that thing only to see it's just a door, no blue heart embossed on it, nothing out of place.", //2
                        "You stand up and fold the blanket onto the chair you were once sitting on and walk around hoping to find something from before.", //3
                        "The odd books, the pink glow from the woods, you even mess around with the suit of armour hoping to conjure that tentacled monster. But nothing, it's as if nothing has happened.", //4
                        "You turn to the door that led out to the main hall.", //5
                        "As you’re about to walk out the door back into the main hall you look back in the room one more time, sticking your hand in your trouser pocket.", //6
                        "As you do so, only for your fingers to meet a cold thin metal object.", //7
                        "You remove the item from your pocket to find the key that unlocked the door, only instead of a blue heart sitting between its wings.", //8
                        "This heart was pink.", //9
                    ]
                }
            ]
        },
        {
            path: 'Samuel',
            sequence: [
                {
                    tile: 1,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Who said those mots juteux?" //0
                    ],
                },
                {
                    tile: 2, //Beans,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [

                    ],
                },
                {
                    tile: 3, //Frey,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [

                    ],
                },
                {
                    tile: 4, //Sisy,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [

                    ],
                },
                {
                    tile: 5, //Myra,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [

                    ],
                },
                {
                    tile: 6, //Leo,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [

                    ],
                },
                {
                    tile: 7, //Era,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [

                    ],
                },
                {
                    tile: 8, //Jas,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [

                    ],
                },
                {
                    tile: 9, //Mika,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [

                    ],
                },
                {
                    tile: 10, //Samuel,
                    type: 's',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "Will you accept?" //0
                    ],
                    option: ["Yes.", "No"],
                    answer: 0
                },
            ],
        },
        {
            path: 'Packi',
            sequence: [
                {
                    tile: 1,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "As you look around, you notice that you've found yourself in a forest, the birds are chirping, you feel refreshed as a scent of petrichor enters your nose." //0
                    ]
                },
                {
                    tile: 2,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "You walk a bit in the forest, aimlessly, until you hear the sound of a trashbin falling over." //0
                    ]
                },
                {
                    tile: 3,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "You turn arround and decided to move onwards, it is probably some squirrels looking for nuts.", //0
                        "Step after step, you suddenly snap out of your trance-like state and realize: you've been walking full circle and came back where you started.", //1

                    ]
                },
                {
                    tile: 4,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        "As you approach the trashbin, you find out the source of the suspicious sounds that accompanied you during the stroll were cause by a little fox that rummaged trough the trash.", //0
                        "The little foxy looks at you. Bewildered that they don't run away, you pat them on the head.", //1
                        "The fox, looking pleased, suddenly speaks with a deep voice:", //2
                        "Mr. Fox: 'Thank you, kind stranger, you seem like a gentle, pure soul.'", //3
                        "In awe and taken aback by this sudden twist, you sink in deep thoughts... (a fox that can talk?! I have so many questions, what should I ask them, I don't even know where to start!)", //4
                        "Mr Fox: 'Is there something wrong mister?'", //5
                        'You: "No, it\'s nothing. I was just suprised to hear you talk, that is all."', //6
                        'You: "Can I ask you some questions?"', //7
                        'Mr Fox: "Sure, why not, ask away."', //8
                    ]
                },
                {
                    tile: 5,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        '"I am a Kitsune, a fox spirit that serves my master, I welcome visitors and I deliver gifts people leave behind as offerings."', //0
                    ]
                },
                {
                    tile: 6,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        '"I am not allowed to speak of my master\'s divine Excellence, I am sorry."', //0
                    ]
                },
                {
                    tile: 7,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        '"No, that would be silly. They are just ordinary animals, afterall."', //0
                    ]
                },
                {
                    tile: 8,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        'Mr Fox: "I saw a child bring a nice figurine with them, the child was making a lot of noise while playing with it!"', //0
                        'Mr Fox: "But alas, their parent had enough, and took it away from their child, then threw it in the trash."', //1
                        'Mr Fox: "I followed them for a while, then my master commanded me to pull a sly prank on the parent."', //2
                        'Mr Fox: "They are gone now, the parent received their deserved karma."', //3
                        'Mr Fox: "The kid did not know what happened and ran out of the forest right away, unfortunately."', //4
                        'Mr Fox: "I thought that, with all that taken care of, to throw away this figurine would be such a shame, so I came back here to obtain it."', //5
                        'Mr Fox: "Look how cute she is!"', //6
                    ]
                },
                {
                    tile: 9,
                    type: 'n',
                    hasAudio: false,
                    complete: false,
                    text: [
                        'You: "That is indeed adorable, damn."', //0
                        'Mr Fox: "You can have it if you want, it was nice talking to you, I\'m sure Master wouldn\'t mind."', //1
                        'You: "Really? that\'s really nice of you!"', //2
                        'Mr Fox: "Don\'t mention it."', //3
                        'Mr Fox: "Now then, I must return to my master. I bid you farewell, you give off a scent of adventure, I wish you best of luck with that."', //4
                        'You: "Thank you"', //5
                    ]
                },
            ]
        },
    {
        path: 'default',
        sequence: [
            {
                tile: null,
                type: null,
                hasAudio: false,
                complete: null,
                text: ["You have already been here."],
            },
        ],
    },
]

export { seq };