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
            {
                tile: 7,
                type: 'n',
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
                complete: false,
                text: [
                    "*Dudu's blessing obtained*",
                    "With Durandal's blessing supporting you, you feel invincible.",
                    "As you keep walking, two doors appear before you.",
                    "The path splits into two possible directions.",
                ],
            },
            {
                tile: 11,
                type: 'n',
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
                complete: false,
                text: [
                    "The door is locked, you require a sword-shaped key to unlock it!", /*0*/
                    "You hear an angelic voice, it's Durandal again!", /*1*/
                    "You survived the ㄥ maze and proved your honor, loyalty and courage, so now it's time to let you go.", /*2*/
                    "But, before that...", /*3*/
                    "She gives you a letter as a gift and tells you to open it.", /*4*/
                    "*Birthday letter acquired*", /*5*/ 
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
                complete: false,
                text: [
                    "Beerin is happy", /*0*/
                    "Beerin is always happy", /*1*/
                    "How could it not be, when it spent everyday hanging out with its friend?", /*2*/
                    "Buzzing about, telling stories and discussing philosphy with Treeze. Yes, Beerin was very happy indeed, to have such a calm and carefree life", /*3*/
                    "No worries, no doubts, just endless days of fun under the sun", /*4*/
                    "Currently, Beerin was flying around a plain of grass", /*5*/
                    "There are no flowers here, but that's alright, since Beerin has the ultimate power of friendship!", /*6*/
                    "In the distant stood its friend, the wise tree Treeze", /*7*/
                    "He swayed in wind, and though Beerin knew Treeze couldn't actually move any of his branches, it imagined he was waving at it", /*8*/
                    "After sufficient buzzing around, Beerin returned to the hill on which Treeze stood", /*9*/
                    "It told the tree about its day of hanging out in the grass", /*10*/
                    "Treeze hums. And told Beerin in turn about his day, in which he stood at the top of the hill and swayed in wind.", /*11*/
                    "Indeed, as Treeze was rooted to his spot, he could not go out and play in the grass and explore the world like Beerin can", /*12*/
                    "Perhaps it was a bit sad, was what Beerin thought", /*13*/
                    "Beerin was happy, but perhaps it wished Treeze could be happy too", /*14*/
                    "He had it for company, but it could decide to fly off anytime it wanted", /*15*/
                    "Even if Treeze wished, he would still be rooted to this spot for all his life", /*16*/
                    "That's why Beerin needed to cheer Treeze up!", /*17*/
                    "But how?, Beerin wondered", /*18*/
                    "There was nothing here, nothing to do in this wide and expansive grass field", /*19*/
                    "There were no flowers, no other trees, there was not even any clouds passing by that one could count", /*20*/
                    "In this unchanging world, there was on the grass and the wind, and of course, that sun shining overhead", /*21*/
                    "But none of these could cheer Treeze up", /*22*/
                    "Beerin was discouraged", /*23*/
                    "What to do?", /*24*/
                    "It sat on one of the grass blades, contemplating", /*25*/
                    "Treeze sees the little bee being dejected", /*26*/
                    "To him, the little bee was trapped here along with him; it never went back to its hive, nor did it ever go buzz around flowers", /*27*/
                    "So he tells the bee:", /*28*/
                    "'Go out there. There will be places to explore and colors to see. I may be rooted here, but you can fly free. So fly high, do not chain yourself to this unchanging plain.'", /*29*/
                    "The little Beerin never fathomed of going outside the grass field", /*30*/
                    "It was like in that moment, an invisible wall inside its head was just broken through", /*31*/
                    "It knew the outside world, of course it did. that was where its hive, its home was, after all", /*32*/
                    "Yet somehow, it never thought of doing what Treeze was suggesting", /*33*/
                    "Somehow, those memories of home and other bees seem so distant", /*34*/
                    "Beerin could not help but question itself just a little bit", /*35*/
                    "But it pushed those thoughts aside, because it decided to stay here, didn't it? No time for regrets!", /*36*/
                    "it was fine with life here. It was peaceful and happy. Even if it was away from home, spending eternity here with its friend was not that bad", /*37*/
                    "Its hive would survive without it", /*38*/
                    "But from this, Beerin also gained a new idea", /*39*/
                    "It may be fine, but Treeze could not possibly bear so much time spent only with the grass, the wind and sun", /*40*/
                    "Thus, Beerin decides. Yes, it will venture into the outside world after all, and it will bring back many wonderful things for Treeze to enjoy", /*41*/
                    "With a world so large, there would surely be something that Treeze would like", /*42*/
                    "And maybe, maybe then, when it bought back something like that", /*43*/
                    "Maybe Treeze can be happy as well.", /*44*/
                ],
            },
            {
                tile: 2,
                type: 'n',
                complete: false,
                text: [
                    "These rivers sure were nice looking, thought Beerin", /*0*/
                    "Watching them flow by slowly was very calm and relaxing", /*1*/
                    "And how the water glittered in sunlight, the way it turned a brilliant white color", /*2*/
                    "It was rather mezmerizing to look at", /*3*/
                    "It was shame, yes, a great shame indeed, that Treeze could not come to look at this river", /*4*/
                    "And when Beerin came near, it could see a double of itself in the flowing water", /*5*/
                    "Perhaps there was a different Beerin living a similar life underwater, pondered Beerin", /*6*/
                    "Perhaps there was a river Treeze somewhere as well", /*7*/
                    "It was shame, yes, a great shame indeed, that Treeze can not come to look at this river", /*8*/
                    "Beerin would bring the river to Treeze, if it could, but alas, though Beerin was powerful and strong, controlling the path of rivers was not within its jurisdiction", /*9*/
                    "Looking at the clone Beerin in the water, Beerin wanted to cross the water to the other side, but it remembered the bee hive's teaching, and how going into bodies of water was forbidden", /*10*/
                    "At the memory of its hive, Beerin stopped", /*11*/
                    "How strange, that it would still obey the hive's teachings when it lived with them no longer", /*12*/
                    "Perhaps there is a part of it that still wished to go back after all", /*13*/
                    "But the hive was then, and this was now", /*14*/
                    "The hive would be fine living without it living by their side", /*15*/
                    "But Beerin would heed their words nonetheless", /*16*/
                    "Perhaps, even when that chapter of life has gone and went by, it could still cherish the memories made there", /*17*/
                    "Beerin decided to resist the temptation to go into the water and pull out a clone Beerin ", /*18*/
                ],
            },
            {
                tile: 3,
                type: 'n',
                complete: false,
                text: [
                    "Now to look for something to bring back, it thinks", /*0*/
                    "Thus Beerin buzzes around the edge of the river, going in the direction it flowed", /*1*/
                    "Until it saw a figure in the distance.", /*2*/
                    "A lumbering creature. It was many times larger than Beerin", /*3*/
                    "It stood upright, and held a strange device near its head", /*4*/
                    "Out of curiosity, Beerin flies over to look at what the creature was looking at", /*5*/
                    "To its shock, it was a mini world, identical to the world it was inhabitating", /*6*/
                    "The world looked the same as outside, from the grass, to the sky, to the river", /*7*/
                    "But in the mini world, everything was still", /*8*/
                    "Beerin had a revelation. Perhaps it could bring a river to Treeze after all", /*9*/
                    "This device, it held inside a river, but was small, and it was something Beerin could pick up", /*10*/
                    "Surely Treeze would be very happy to have a river at where he stayed", /*11*/
                    "Thus Beerin docked on the grass nearby and awaited its oppurtunity ", /*12*/
                    "As the creature sat down, and sat the device aside, Beerin began making its move", /*13*/
                    "The creature was busy doing something with a white thing", /*14*/
                    "Beerin was unsure what, but the creature was staining the white thing with tiny black symbols", /*15*/
                    "Perhaps this was a strange ritual of some kind, Beerin decided, and took the river holding device", /*16*/
                    "It hid among the grass for a long time, slowly making its way away from the strange lumbering creature", /*17*/
                    "And homewards Beerin went", /*18*/
                ],
            },
            {
                tile: 4,
                type: 'n',
                complete: false,
                text: [
                    "Returning to the grassy plains, Beerin presented its finding to Treeze", /*0*/
                    "It seems that Treeze is pleased by the strange device, and he asked about where it came from ", /*1*/
                    "Beerin then regaled him with tales of its adventures", /*2*/
                    "Of the river, the creature and the strange rituals it partook in", /*3*/
                    "Treeze was very curious about all of these strange things Beerin encountered", /*4*/
                    "And they talked for what seemed like forever over what these things could mean", /*5*/
                    "When Beerin mentioned its hive's teaching, Treeze paused", /*6*/
                    "Then he asked Beerin why it decided to leave its hive, when it loved that hive so much", /*7*/
                    "To this, Beerin answered that it wanted to hang out with Treeze", /*8*/
                    "But surely, you can stay at the hive and still visit me, questioned Treeze", /*9*/
                    "This gave the little Beerin a little pause", /*10*/
                    "It was trying to come up with an answer, yet in its mind, there was simply blank space", /*11*/
                    "Why? why did it decide to leave the hive? Beerin did not know", /*12*/
                    "Finally, Beerin answered: you needed me more than the hive did", /*13*/
                    "It was unsure if that was the real answer, but it said it nonetheless", /*14*/
                    "After all, that was the only good explanation", /*15*/
                    "So that must have been what Beerin thought when it left the hive", /*16*/
                    "It was the only explanation that made sense", /*17*/
                    "Treeze hummed, and accepted the answer", /*18*/
                    "Yet it seemed to the little Beerin that there was something still plaguing Treeze", /*19*/
                    "Perhaps there was something wrong with its answer after all? Beerin did not know", /*20*/
                    "Treeze did think about things a lot", /*21*/
                    "Beerin always took him for someone who was not satisfied with just letting things be when there was still doubt", /*22*/
                    "It made sense, somewhat. After all, it's not like there was much to do here except thinking", /*23*/
                    "But even so, if Treeze would not voice his concerns to it, Beerin supposed it can't pry", /*24*/
                    "Still, Beerin was unsettled", /*25*/
                    "Why was its memories so jumbled? It remembered leaving the hive, yet it did not even remember why?", /*26*/
                    "Perhaps it simply forgot since it was a long time ago, Beerin decided", /*27*/
                    "No matter what the reason might have been, it had no bearings on the present anymore", /*28*/
                    "And it moved on from the train of thought", /*29*/
                    "No use lingering on what was long past, after all", /*30*/
                    "The two continued conversing, until they had nothing to converse about", /*31*/
                    "And Beerin departed once more", /*32*/
                ],
            },
            {
                tile: 5,
                type: 'n',
                complete: false,
                text: [
                    "These gatherings sure were crouded. Those big, lumbering creatures love to gather here", /*0*/
                    "Beerin would not blame them, since here was a place of many colors", /*1*/
                    "Like water flowing from a high thin cliff, streams of colors lay nested above these strange poles", /*2*/
                    "They flowed down below, and yet stayed suspended in air", /*3*/
                    "and the tail ends seemed to be flowing in wind", /*4*/
                    "When Beerin landed on one of these color waterfalls, it was astounded to see that it is solid", /*5*/
                    "It was not like the streams of water that would have surely flooded it away by now", /*6*/
                    "Beerin wondered then, if Treeze would like one of these things as decoration", /*7*/
                    "There were a few trees here that seem to have them already", /*8*/
                    "Perhaps it was a fashion statement", /*9*/
                    "Beerin wondered if Treeze liked fashion", /*10*/
                    "Did Treeze even know what fashion was?", /*11*/
                    "Maybe not, since it was the only person around who went to visit Treeze nowadays", /*12*/
                    "There was a weird blue thing at some point, but Beerin guessed it got tired of visiting eventually", /*13*/
                    "Treeze couldn't even look at himself, since there are no lakes around the grass field, and it never rained, so it wasn't as if any kind of puddle can form either", /*14*/
                    "There was the mini lake holding device, but the lake inside was quite small, and did not have a mini river Treeze", /*15*/
                    "So perhaps fashion would not be the biggest of priorities", /*16*/
                ],
            },
            {
                tile: 6,
                type: 'n',
                complete: false,
                text: [
                    "Beerin thought again", /*0*/
                    "What else could it bring back? Food? A shiny rock? One of those paper things the big lumbering creatures seem to carry around?", /*1*/
                    "Suddenly, Beerin was distracted", /*2*/
                    "Out of its field of vision, one of the smaller of the big lumbering creatures was carrying something", /*3*/
                    "It was.... well. Beyond Beerin's ability to describe, really", /*4*/
                    "It was a stick, and on the end, there was a spinning thing", /*5*/
                    "That spinny thing had four colors, and they spun around very prettily", /*6*/
                    "Yes, thought Beerin, I will bring that back to Treeze", /*7*/
                    "And he would be very pleased, the little bee was sure of that", /*8*/
                    "Thus Beerin buzzed over to the creature, and docked on the handle", /*9*/
                    "It attempted to pull the spinning thing from the creature's grip", /*10*/
                    "Hovever, Beerin could not manage it", /*11*/
                    "Yet when the lumbering creature looked down at Beerin, it let out a small scream, and flung the spinning thing, along with Beerin, to the ground", /*12*/
                    "As Beerin looked up back at the creature from where it sat on the ground, it realized the creature was running away", /*13*/
                    "A decisive victory for the little Beerin, it decided", /*14*/
                    "The little Beerin grabs onto the spinning thing, and begins its return to the grassy plain where Treeze resided", /*15*/
                ],
            },
            {
                tile: 7,
                type: 'n',
                complete: false,
                text: [
                    "Returning to the grassy plains, Beerin presented its finding to Treeze", /*0*/
                    "It seemed that Treeze is pleased by the spinning thing, and he asked about where it came from ", /*1*/
                    "Beerin then regaled him with tales of its adventures", /*2*/
                    "Of the gathering, of tree fashion and how it defeated a strange lumbering creature to get the spinning thing", /*3*/
                    "Treeze was very curious about all of these strange things Beerin encountered", /*4*/
                    "And they talked for what seemed like forever over what these things could mean", /*5*/
                    "When Beerin mentioned the gathering, Treeze began to be curious", /*6*/
                    "Do they always gather there?, he asked", /*7*/
                    "No, was Beerin's reply, I have been there a few times and there were not as many lumbering creatures then", /*8*/
                    "How strange, thought Treeze", /*9*/
                    "Did they all come there together?, he asked", /*10*/
                    "No, was Beerin's reply, i saw some arrived later on", /*11*/
                    "Treeze hummed, and pondered, I wonder how they keep track of time, since they seem to know when the gathering was happening", /*12*/
                    "Beerin laughed", /*13*/
                    "They obviously used the cycle of night and day, it said", /*14*/
                    "What is this cycle of day and night, asked Treeze", /*15*/
                    "Beerin freezes, and looks over", /*16*/
                    "When the sun sets and comes back again everyday, when it switches between night and day and day and night again?, was what it said back", /*17*/
                    "But the sun never sets, said Treeze, it has stayed in the spot  on the sky for as long as i remember", /*18*/
                    "Beerin became confused, and looked at the sun", /*19*/
                    "Yes, it was still in the sky, in fact, it was in the same spot as the last time Beerin has seen it", /*20*/
                    "And Beerin could not remember the last time it had been night, or even the last time the sun had been anywhere else but that spot in the sky", /*21*/
                    "In fact, Beerin could not even remember why it thought that a day night cycle ever existed", /*22*/
                    "That was where the sun stayed.... it always has been", /*23*/
                    "The sun does not move, it never has", /*24*/
                    "What was Beerin even talking about?", /*25*/
                    "Nevermind, said Beerin to Treeze, I must have imgined something that wasn't there", /*26*/
                    "Perhaps Beerin mistook something from a dream of its for something in reality", /*27*/
                    "Treeze humed, and accepted the answer", /*28*/
                    "But Beerin could tell that it still bothered Treeze", /*29*/
                    "It did not blame him, this subject bothered it as well", /*30*/
                    "Had Beerin always been such an airheaded person? It seemed like things had been slipping by it all too often lately", /*31*/
                    "And now... inventing things that weren't real? And then acting like they were?", /*32*/
                    "Beerin couldn't help but feel there was a hole where its head should be", /*33*/
                    "Still, they both moved on, and talked about everything else until there was nothing to be talked about", /*34*/
                    "And Beerin departed once again", /*35*/
                ],
            },
            {
                tile: 8,
                type: 'n',
                complete: false,
                text: [
                    "Beerin had seen a few grassfields with wild flowers on its travels before, but this is was something else entirely", /*0*/
                    "Everywhere, from where it was perching, to beyond the horizon, there were only flowers", /*1*/
                    "A sea filled only with golden flowers", /*2*/
                    "In short, a bee's heaven", /*3*/
                    "Beerin was in fact, so entranced by the flower field, that it frolicked around for hours and hours", /*4*/
                    "Perhaps it was simply the nature of bees, to be distracted by flowers, but Beerin forgot its original mission", /*5*/
                    "So it buzzed around until it didn't have the strength to anymore", /*6*/
                    "So Beerin perched on one of the leaves, and took a nap", /*7*/
                    "It was a deep sleep, and after a while, Beerin woke up", /*8*/
                    "But something was different, now", /*9*/
                    "It seemed that while Beerin was sleeping, it had begun to rain", /*10*/
                    "The sky, which was previously perfectly clear, was now covered with dark clouds", /*11*/
                    "And from the heavens came large drops of water", /*12*/
                    "It was less of a drizzle, and more of a complete downpour", /*13*/
                    "How did I sleep through such a big storm?, thought Beerin", /*14*/
                    "Indeed, it was rather unusual, that Beerin had not been awoken prior to this, considering the intensity of the rain", /*15*/
                    "Somewhere near, it heard a terrible thunder", /*16*/
                    "Beerin fled immediately", /*17*/
                    "For some strange reason, Beerin was struck by an strange terror", /*18*/
                    "Beyond just a survival instinct of wanting to flee storms, Beerin felt as though its entire body has been gripped with fear", /*19*/
                    "It was like Beerin had seen something like this before", /*20*/
                    "Beerin took use of the grass, since flying normally would put it at risk of being hit by rainfall", /*21*/
                    "It weaved and dodged, but eventually managed to escape to the one place it knew would be safe: the hive", /*22*/
                    "The hive had a protective barrier, and as Beerin thought, it was strong enough to ward off the storm", /*23*/
                    "It had been a while since Beerin returned to the hive, so naturally it was reluctant", /*24*/
                    "However, the situation demanded this of it, and Beerin had no other choice", /*25*/
                    "But when Beerin entered the hive to greet its former hivemates....", /*26*/
                    "The wor l̶d̶     b̷   r̵ ̶    ̷ ̶ ̴o̵         ̵̖͗k̵ ̵               ̵e̷̒", /*27*/
                    "Beerin woke up, once again in the field of flowers", /*28*/
                    "How strange, it thought", /*29*/
                    "The sky was clear again, the sun was once again in the position it always occupied, and there was no rain in sight", /*30*/
                    "Was that a dream?, wondered Beerin, such a strange dream it was", /*31*/
                    "Beerin flew up from the leaf it was perching on", /*32*/
                    "All seemed well again. No indication of rain or it ever having rained previously", /*33*/
                    "Beerin hummed, it supposed that it must have all been conjured up by its mind", /*34*/
                    "Thus Beerin picked a lone flower, and headed back to Treeze", /*35*/
                    "Even though its mind was plagued by thoughts of that dream the entire way back", /*36*/
                ],
            },
            {
                tile: 9,
                type: 'n',
                complete: false,
                text: [
                    "Returning to the grassy plains, Beerin presented its finding to Treeze", /*0*/
                    "It seems that Treeze is pleased by the strange device, and he asks about where it came from", /*1*/
                    "Beerin then regaled him with tales of its adventures", /*2*/
                    "Of the flower field,... and the dream", /*3*/
                    "Treeze is very curious about all of these strange things Beerin encountered", /*4*/
                    "But he took interest in some particular details", /*5*/
                    "How did you know what that weird water phenomena was called rain?, he asked, After all, the sky here is always clear and no water ever falls, so surely it must be unfamiliar to you", /*6*/
                    "To this, Beerin did not have an answer", /*7*/
                    "Truthfully told, it just... knew. Somehow.", /*8*/
                    "This is why when Treeze continued to stare at it, Beerin just said buzzed nervously", /*9*/
                    "Now that I think of it, I think this isn't the first time you've said something weird and expected me to know about it, Treeze continued, you mentioned a day and night cycle", /*10*/
                    "That was just something its overactive imagination dreamed up, probably", /*11*/
                    "That was what Beerin thought", /*12*/
                    "But Beerin did not respond for a while", /*13*/
                    "It did not know what to say", /*14*/
                    "After a long silence, Beerin said: I probably just named it, and forgot other people didn't know the name", /*15*/
                    "Still, said Treeze, I find it strange, I don't think you're that easily distracted", /*16*/
                    "It's almost as if you came from a completely different world..., Treeze trailed off", /*17*/
                    "Then, Treeze brightened up, even though trees do not have faces and there has been no indication of brightening up, Beerin just knew", /*18*/
                    "It was like a light switch went off in his head", /*19*/
                    "And he decided now was the time to change subjects: Beerin, how come you never visit your hive?", /*20*/
                    "Huh?, was Beerin's dignified response. It was a fairly abrupt change from the previous conversation they were having", /*21*/
                    "What did Beerin's airheadedness have to do with the hive?", /*22*/
                    "Don't you miss it?, Tree inquired", /*23*/
                    "Of course I do!, Beerin huffed", /*24*/
                    "Why do you never visit it, then?, Treeze asked again", /*25*/
                    "Well, I needed to stay here obviously, was the reply", /*26*/
                    "Except,.... was that really it?, wondered Beerin", /*27*/
                    "Do you?, was what Treeze said back, Do you need to stay here?", /*28*/
                    "Obviously! Beerin needed to say here because....", /*29*/
                    "Well, that was unimportant", /*30*/
                    "It was here to keep Treeze company so he doesn't... die from isolation or something", /*31*/
                    "But was that really it?", /*32*/
                    "After all, that... wasn't really reason to not visit the hive, was it?", /*33*/
                    "It could have visited any time", /*34*/
                    "Treeze didn't mind it going places, and Beerin was already going out to fetch items anyways", /*35*/
                    "Doing a detour to the hive wouldn't have been that hard", /*36*/
                    "And Beerin knew its fellow hive members and knew they would have welcomed it", /*37*/
                    "What has Beerin... been doing all this time?", /*38*/
                    "For some strange reason, Beerin felt a strange fear in its heart", /*39*/
                    "It pushed for Beerin to stay here, to never even go near the hive", /*40*/
                    "Why was the little bee feeling this way?", /*41*/
                    "It made no sense, no sense at all", /*42*/
                    "Was there... something there Beerin was avoiding?", /*43*/
                    "Suddenly Treeze spoke once again: I think you should go. I think you'll find the truth there", /*44*/
                    "Perhaps, thought Beerin, perhaps that was what needs to happen", /*45*/
                    "Perhaps there, it could find the truth of this world there", /*46*/
                    "This sunny, almost blindingly perfect world", /*47*/
                    "And perhaps Beerin... could stop lying to itself", /*48*/
                    "But Beerin... was a coward at heart", /*49*/
                    "It had a tiny, weak heart filled with cowardice", /*50*/
                    "And Beerin was afraid", /*51*/
                    "But more than it was afraid, it was tired", /*52*/
                    "Tired of running, of always trying to escape the truth", /*53*/
                    "It had been running this entire time", /*54*/
                    "Perhaps it was time for Beerin to face the inevitable", /*55*/
                    "Still, Beerin did not understand", /*56*/
                    "How could Treeze know what it needed to do?", /*57*/
                    "Treeze had been stuck there, on that hill for his entire life", /*58*/
                    "Did he seriously figure out that something was wrong, just because of some inconsistency with what it said?", /*59*/
                    "More than that, how did he know the hive was related to all this?", /*60*/
                    "When Beerin voiced all its concerns, Treeze smiled", /*61*/
                    "Or, well, he smiled internally. Beerin could still tell anyhow... somehow", /*62*/
                    "I have long suspected there was something wrong with this world, he answered", /*63*/
                    "But your words, your reaction was what i needed to figure out that", /*64*/
                    "Huh, was what Beerin thought to that", /*65*/
                    "Was such a thing even possible? Yes, because Treeze was evidence that it was", /*66*/
                    "Regardless, I think you should go to the hive, said Treeze, even if it had nothing to do with what is wrong with this world", /*67*/
                    "And then he continued: But I have this feeling, strange as it might be, that that is where all our answers lie", /*68*/
                    "Beerin nodded, or more accurately, flew up and down rapidly as a sign of agreement", /*69*/
                    "I will go there, it said, and I will face the truth", /*70*/
                    "I will bring the answers back to you, it did not say, because Beerin did not know there would be a Treeze to bring answers back to", /*71*/
                    "And so Beerin took off towards the hive", /*72*/
                ],
            },
            {
                tile: 10,
                type: 'n',
                complete: false,
                text: [
                    "Beerin flew, though its wings felt weak and its heart felt empty", /*0*/
                    "Through grass fields and riversides and flower gardens", /*1*/
                    "As Beerin came nearer and nearer, storm clouds began to gather", /*2*/
                    "And it began raining, at first just a light drizzle, and it became more and more intense before Beerin could barely flap its wings a few times before almost being murdered by oncoming rainfall", /*3*/
                    "There was thunder somewhere distant", /*4*/
                    "Beerin carried on, it couldn't stop there", /*5*/
                    "Until it arrived to the hive once more", /*6*/
                    "It flew through the forcefield, and through the entrance", /*7*/
                    "And it perched there, for a long while, until it had the courage to continue walking", /*8*/
                    "Time to face the truth, the thing which Beerin had been denying all this time", /*9*/
                    "But when it saw what was inside, Beerin's legs gave out", /*10*/
                    "It did not have the strength to support itself and fell to the floor", /*11*/
                    "This was the truth that Beerin had been so desperate to escape", /*12*/
                    "In front of the bee, was the pollen filled corpses of its brethren", /*13*/
                    "The hivelings,the vessel, even the strange blue thing", /*14*/
                    "They were dead, all dead", /*15*/
                    "All across the floor was pollen, unending pollen", /*16*/
                    "Corpses scattered the halls, their eyes clouded with a sickly yellow", /*17*/
                    "It was a horrible scene, but Beerin knew, it had seen this before", /*18*/
                    "This was nothing new, and yet it still felt new nevertheless", /*19*/
                    "That shock, that pain, it had been like Beerin had discovered this for the first time all over again", /*20*/
                    "...Why?", /*21*/
                    "Why?", /*22*/
                    "And... Beerin remembered", /*23*/
                    "It did not want to, but it remembered", /*24*/
                    "Beerin remembered", /*25*/
                    "Beerin rememberedBeerin rememberedBeerin rememberedBeerin rememberedBeerin rememberedBeerin remembered", /*26*/
                    "And the wor l̶d̶     b̷   r̵ ̶    ̷ ̶ ̴o̵         ̵̖͗k̵ ̵               ̵e̷̒", /*27*/
                    "...", /*28*/
                    "Beerin awoke once again, though this time the scenery around it stayed the same this time", /*29*/
                    "It wished it had all been a dream", /*30*/
                    "Well, it was a dream, but the reality of what it had done was not", /*31*/
                    "There was something that did change, though", /*32*/
                    "Beerin remembered its body being healthy and hale", /*33*/
                    "But at the moment, Beerin felt like its insides had been pierced through a thousand times", /*34*/
                    "This was what that strange pollen does to bees, Beerin supposed", /*35*/
                    "At the very least, it knew what the other hive members had gone through before dying", /*36*/
                    "Unlike them, it seems that Beerin was still alive", /*37*/
                    "For how much longer, Beerin did not know how ", /*38*/
                    "This was all its fault, it thought", /*39*/
                    "To think, that it had been the one to bring that pollen here", /*40*/
                    "That it had been the one to doom the hive", /*41*/
                    "That this had been brought about through its actions alone", /*42*/
                    "And now, Beerin was the only one left", /*43*/
                    "Is this repentment?", /*44*/
                    "Is this pain, this suffering the price it alone is paying for causing the downfall of the hive?", /*45*/
                    "If bees could weep, it would at this moment", /*46*/
                    "But it layed there, staring, staring at the future it had created", /*47*/
                    "As Beerin lay dying, all it could feel was regret", /*48*/
                    "And to think, all this time Beerin had been attempting to escape the reality of its actions", /*49*/
                    "It dared to dream of a world where it would not have to suffer, all while it's fellow hive members suffered and died", /*50*/
                    "This is the truth, all of it", /*51*/
                    "The inevitability it would have had to face, sooner or later", /*52*/
                    "Perhaps Beerin thought that by staying in that dream, this future could simply.. not be", /*53*/
                    "Out of sight, out of mind", /*54*/
                    "How morbid, thought Beerin", /*55*/
                    "Somehow, it made the bee want to scream and wail even more", /*56*/
                    "That dream,...", /*57*/
                    "was any of it real?", /*58*/
                    "That grassy hill, that cloudless sunny sky, and that tree upon the hill", /*59*/
                    "Were they real?", /*60*/
                    "Beerin did not know", /*61*/
                    "But Beerin, wanted... wanted to know", /*62*/
                    "Perhaps even if its hive was dead, at least one friend on Beerin's could live on out there, perhaps not quite happy nor free, but alive", /*63*/
                    "Alive and not doomed with this horrible fate by Beerin's actions", /*64*/
                    "Treeze... perhaps...", /*65*/
                    "Even if Beerin's heart was filled utterly with regret, it could die peacefully, after seeing its friend one last time", /*66*/
                    "Beerin thought, even if Treeze was not the same as the one from the dream, it would still want to see him nonetheless", /*67*/
                    "With the last of its strength, Beerin flapped its wings and flew", /*68*/
                    "Its wings nearly failed many times along the journey, but it arrived at the grassy hill at last", /*69*/
                    "But when Beerin looked ahead, all it could see was an empty hill where Treeze should have stood", /*70*/
                    "As sickly yellow clouded Beerin's visioned, it screamed", /*71*/
                    "Ah, Beerin thought, so this is the truth", /*72*/
                    "It seems its pollen addled mind had invented Treeze after all", /*73*/
                    "It had hope, that perhaps that Treeze had been based on someone real, someone who was still living", /*74*/
                    "But it seems, if there was one thing Beerin's mind was good at, it was creating false hope", /*75*/
                    "It wasn't real, none of it was ever real", /*76*/
                    "Beerin was truly pathetic to have thought otherwise", /*77*/
                    "It seems Beerin was right after all, there was never a Treeze to bring answers back to, because Treeze had always been a lie", /*78*/
                    "A very cruel lie, that even made Beerin believe was living, was thinking, was real", /*79*/
                    "Beerin screamed", /*80*/
                    "For all it had done, screamed at the world for doing unto it this fate, at Treeze for making it believe it could have peace", /*81*/
                    "Screamed at horrible the pollen, screamed at the storm, and screamed at itself", /*82*/
                    "Until Beerin could not scream any longer", /*83*/
                    "Eventually its body gave up on it, and Beerin layed in the grass with its last flicker of life", /*84*/
                    "Treeze, the hive, the queen, Beerin recounted everyone it knew", /*85*/
                    "I'm sorry, was what Beerin thought, the very last thought it would ever have", /*86*/
                    "And then it laid dead, never to wake again.", /*87*/
                    "*Myrin's letter obtained*", /*88*/
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
                complete: false,
                text: [
                    "As you come out from the other side of the portal, you open your eyes.", /*0*/
                    "To your surprise, you found yourself in the middle of a cultivated field. You wonder how this place is even connected to the courtyard you just left behind your back.", /*1*/
                    "However, what puzzles you the most is the smell that pierces your nose.",  /*2*/
                    "Still numb after the inter-dimensional travel (or it felt like one at least) that teleported you in this field, you realize the smell is familiar, but all the attempts to recognize it are to no avail.", /*3*/
                    "You've smelled it before, you've tasted it before, and yet, that name appears to be covered in thiccc fog.", /*4*/
                    "For now, you decide to stop overthinking. You realize you've been standing on the field, alone and immobile, for several minutes. Before anyone notices you being awkward, you switfly hop among the crops and, rapidly get out, after giving one last look of goodbye to the field that welcomed you to this path.", /*5*/
                ],
            },
            {
                tile: 3,
                type: 'n',
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