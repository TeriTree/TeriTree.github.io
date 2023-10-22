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
        description: "Replica of the mythical sword that mimics a small fraction of the original weapon's power.",
        descriptionOrder: [],
        acquired: false, 
    },
];

export { items }