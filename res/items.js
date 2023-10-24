// EXPLANATION
/*
items.id - item id {'id'}
items.name - item name {'name'}
items.description - set description {"text"}
items.descriptionOrder - array for set order of descriptions to be added into item.description {'text'}
items.acquired - is item acquired {true/false}
*/

var items = [
    {
        id: 'Tie',
        name: 'Horrific Necktie',
        description: "A greenish, garish piece of cloth. It is now your friend, your best friend. You would never take it off, right? Right? No one is saying the multi-patterned tie can talk. No one. It must be merely imagination, but...", 
        /*"Herrscher of Sentience watches over you... sometimes you can hear a loud 'Yatta!' in your head.",*/
        descriptionOrder: [],
        acquired: false,
    },
    {
        id: 'Soup',
        name: 'Chickpea Soup',
        description: "Troppu bona ie.",
        descriptionOrder: [],
        acquired: false,
    },
    {
        id: 'Arancinu',
        name: 'Basket of arancini',
        description: "T'arricrii a vita.",
        descriptionOrder: [],
        acquired: false,
    },
    {
        id: 'χ-1',
        name: 'Aura Core',
        description: "Reduces the effect of χ by 5% while on χ path, 1% otherwise.",
        descriptionOrder: [],
        acquired: false,
    },
    {
        id: 'Dudu',
        name: "Dudu's blessing",
        description: "A sort of umbrella-shaped lance that can help you fend off particularly aggressive enemies you may encounter in your journey.",
        descriptionOrder: [],
        acquired: false, 
    },
    {
        id: 'Excalibur',
        name: "Excalibur",
        description: "Replica of the mythical sword that mimics a small fraction of the original weapon's power. It can also be used as a key to open certain doors.",
        descriptionOrder: [],
        acquired: false, 
    },
    {
        id: 'Letter',
        name: "Birthday letter from Leo",
        description: "Ao AUGURIII frate' siccome me hanno detto che tu nonno sa i dialetti italiani ho pensato di fatte sta lettera di auguri in romano giusto pe magari davve qualcosa da tradurre insieme :DD. Quinni te do i mie più calorosi auguri fratè ed essendoci conosciuti su er server de liam de rocket league te posso solo che di macron sia co te lui è il dio de rocket league l'essere che ha er potere der controller e che fa i backflip in giro pe il campo ancora na volta auguri de bon compleanno ezeriel!!!. (P.S. The Macron thing is a meme that originated from me and Jas while playing Rocket League, because we encountered a French guy whose nickname was Macron and he destroyed us using the skill issue button D:, and sorry I'm not that much used to write birthday letters, lmao); ENG: hey happy birthday bro! They told me that your grandpa is knowledgeable about the Italian dialects so I thought that it could be funny to give u this birthday letter written in Roman just to give u something different and maybe you can translate that with your grandpa! So, I give you my utmost happy birthday and because we met for the first time on Liam's Rocket League Discord server I can only say that may God Macron be with you, he is the one that has the power of gamepad and he is the one that can do the backflips all around the field, so again happy birthday and may all your wishes come true!! (what a coincidence ur French lmao).",
        descriptionOrder: [],
        acquired: false, 
    },
    {
        id: 'Myra',
        name: "Myrin's letter",
        description: [
            "Hallo Eze :D",
            "Happy birthday, or. well. Happy late birthday, i suppose. I want you to know that you're a very dear friend of mine. Talking to you is always fun, whether it's about philosophy or games. It's always been super engaging to chat with you and you always brighten my day a lot. And I wanted to do something nice, since it's your birthday. Well, near enough to your birthday, anyways. This was what I ended up coming up with.",
            "I hope you liked the story i wrote. As you can probably tell, it was a fanfiction of your fanfiction. Fanficception, if you will. I really loved what you wrote for my birthday, so naturally, i couldn't give you anything for your birthday except my own interpretation of your story ._. I would say i hope you weren't too bummed out by the ending, but that would be lying, considering that i wrote that ending specifically to bum you out. I hope that story didn't scar you for life?",
            "I actually wanted to write something from Treeze's perspective, where he figures out slowly that he was living in a dream world and he himself is just a figment of Beerin's imagination. But since I made Treeze, well, a tree, it was just too hard, since then the entire story would just be Treeze and Beerin talking to eachother. And I wasn't sure how to give that story an ending. That's why you ended up reading what you did. Of course, that was before i found out you were a bee/tree/philosopher, but oh well. If you were one of the bees you would have died anyways.",
            "If you can, please write back to me whenever to tell me what you thought of the story, since I am absolutely dying to know. Or not, idk maybe you're busy. Other than that, have a nice day :D",
            "Sincerely, Myra",
        ],
        descriptionOrder: [],
        acquired: false, 
    },
];

export { items }