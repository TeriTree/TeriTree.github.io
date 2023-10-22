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
        description: "Ao AUGURIII frate' siccome me hanno detto che tu nonno sa i dialetti italiani ho pensato di fatte sta lettera di auguri in romano giusto pe magari davve qualcosa da tradurre insieme :DD. Quinni te do i mie più calorosi auguri fratè ed essendoci conosciuti su er server de liam de rocket league te posso solo che di macron sia co te lui è il dio de rocket league l'essere che ha er potere der controller e che fa i backflip in giro pe il campo ancora na volta auguri de bon compleanno ezeriel!!!. (PS the macron thing is a meme that came from me and jas meanwhile we where playing rocket league by encountering a french guy with the nickname macron and he destroyed us using the skill issue button D:, and sorry im not that much used to write birthday letter lmao); hey happy birthday bro!, they told me that your grandpa know the italian dialects so i thought that could be funny to give u this birthday letter wrote in roman just to give u smth different and maybe you can translate that with your grandpa!, so i give you my utmost happy birthday and because we met for the first time on the liam rocket league discord server i can only say that may god macron be with you, he is the one that has the power of gamepad and he is the one that can do the backflips all around the field, so again happy birthday and may all your wishes come true!! (what a coincidence ur french lmao)",
        descriptionOrder: [],
        acquired: false, 
    },
];

export { items }