// EXPLANATION
/*
category - item category
item - array for items
item.id - item id {'id'}
item.name - item name {'name'}
item.description - set description {"text"}
item.descriptionOrder - array for set order of descriptions to be added into item.description {'text'}
item.acquired - is item acquired {true/false}
*/

function acquireItem(id) {
    for (var i in items) {
        for (var j in items[i].item) {
            if (items[i].item[j].id == id) {
                items[i].item[j].acquired = true;
                break;
            }
        }
    }
}

var items = [
    {
        category: 'Entrance',
        item: [
            {
                id: 'Tie',
                name: 'Horrific Necktie',
                description: "A greenish, garish piece of cloth. It is now your friend, your best friend. You would never take it off, right? Right? No one is saying the multi-patterned tie can talk. No one. It must be merely imagination, but...",
                /*"Herrscher of Sentience watches over you... sometimes you can hear a loud 'Yatta!' in your head.",*/
                acquired: false,
            },
        ]
    },
    {
        category: 'Frey',
        item: [
            {
                id: 'χ-1',
                name: 'Test Item Please Ignore',
                description: "It looks cool",
                acquired: false,
            },
        ]
    },
    {
        category: 'Sisy',
        item: [

            {
                id: 'Soup',
                name: 'Chickpea Soup',
                description: "Troppu bona ie.",
                acquired: false,
            },
            {
                id: 'Arancinu',
                name: 'Basket of arancini',
                description: "T'arricrii a vita.",
                acquired: false,
            },
        ]
    },
    {
        category: 'Leo',
        item: [
            {
                id: 'Dudu',
                name: "Dudu's blessing",
                description: "A sort of umbrella-shaped lance that can help you fend off particularly aggressive enemies you may encounter in your journey.",
                acquired: false,
            },
            {
                id: 'Excalibur',
                name: "Excalibur",
                description: "Replica of the mythical sword that mimics a small fraction of the original weapon's power. It can also be used as a key to open certain doors.",
                acquired: false,
            },
            {
                id: 'Letter',
                name: "Birthday letter from Leo",
                description: "Ao AUGURIII frate'",
                acquired: false,
            },
        ]
    },
    {
        category: 'Myrin',
        item: [
            {
                id: 'Painting_1',
                name: "Beyond These Grassy Plains",
                description: "",
                acquired: false,
            },
            {
                id: 'Painting_2',
                name: "Beyond These Grassy Plains - Camera 1",
                description: "",
                acquired: false,
            },
            {
                id: 'Painting_3',
                name: "Beyond These Grassy Plains - Camera 2",
                description: "",
                acquired: false,
            },
            {
                id: 'Painting_4',
                name: "Beyond These Grassy Plains - Paper",
                description: "",
                acquired: false,
            },
            {
                id: 'Painting_5',
                name: "Beyond These Grassy Plains - Windmill",
                description: "",
                acquired: false,
            },
            {
                id: 'Painting_6',
                name: "Beyond These Grassy Plains - Yellow Flower",
                description: "",
                acquired: false,
            },
            {
                id: 'Painting_7',
                name: "The End",
                description: "",
                acquired: false,
            },
        ]
    },
    {
        category: 'Yuma',
        item:[
            {
                id: 'Challenge',
                name: "Yuma's Challenge",
                description: '<a target="_blank" href="https://lichess.org/analysis/n2Bqk2/5p1p/Q4KP1/p7/8/8/8/8_w_-_-_0_1?color=white">Challenge</a>',
                acquired: false
            }

        ]
    },
    {
        category: 'Jas',
        item:[
            {
                id: 'Coordinates',
                name: 'Galactic coordinates',
                description: 'Mysterious coordinates that lead towards the unknown.',
                acquired: false
            }
        ]
    },
    {
        category: 'Enigma',
        item:[
            {
                id: 'Poem_1',
                name: '?',
                description: 'A creature of lust was born from the waves\nCry he did not, as tears befell the sky\nTheir waking came with with a thundering fall\nThe sea called and the land met with a cementing roar\nBlue were their skin, fins adorned like the sirens that call',
                acquired: false
            },
            {
                id: 'Poem_2',
                name: '??',
                acquired: false,
                description: 'Crashed through the woods peril with fear\nThe warrior had none to trust, none to see, none to bear\nLost in a woods facing their sins\nThe creature of lust could not find its kin'
            },
            {
                id: 'Poem_3',
                name: '???',
                acquired: false,
                description: 'Grand was its majesty that has met his eyes\nBrave through nature, his destiny lies\nYou are the chosen one, the world tree cries\nThus the warrior raced the very skies\nHis quest to walk the world, freedom his side'
            },
            {
                id: 'Poem_4',
                name: '????',
                acquired: false,
                description: 'The greatest challenge had yet to conquered.\nThe monster stood by the lake to stare his reflection, his self\nMocking was it his image\nRepression his demon\nHis ideals were matched\nHis dreams cracked\nBut he resolved himself on his path,\nHis determination surpassing the fate before him.',
            },
            {
                id: 'Poem_5',
                name: '?????',
                acquired: false,
                description: 'He was caught in the web of the tavern in the rocks,\nA kind man\'s offering, a beer and a talk\nShuckle laughed at the confusion shown\n"The world\'s a big place, there\'s a lot of stories to be taught"\nThey spoke of the dangers the world bestows\nThe gods amongst them, laws bending to their rule\nThe ones of whom legends are born and told\nVaporeon vowed to etch his names in the books\nMay none say he wasn\'t as bold',
            },
            {
                id: 'Poem_6',
                name: '??????',
                acquired: false,
                description: 'The echoes of war reared their gears \n Countless died at the wave of their hands\nA kingdom broke under onslaught they dealt\nThe world tree expanded their roots, surturing the lands, nurturing the lost\nNone could have seen through the truth\nA ploy had been cast, a hex been told\nWeakened they are, poisoned they have been\nThe world tree perished from the villains rule ',
            },
            {
                id: 'Poem_7',
                name: '???????',
                acquired: false,
                description: 'The champion stood blessed by the gods\nHe faced the Warrior, his lover, and dog\nCome! The fighter called, prove themselves the heroes had to do.\nTribulation came, thunder had roared.\nA challenge had to be crossed, for the sake of the world\nFletchings made can\'t change destiny born.',
            },
            {
                id: 'Poem_8',
                name: '????????',
                acquired: false,
                description: 'He was not human, not a beast, nor truly an elemental\nVaporeon, born of the Eevee and the essence of the seas.\nNo. Water was his body, the reflection was him.\nTo face his sins, resolute his dreams\nHereby he swore to his reflection, nay, he swore to himself.\nI will make the world smile\nI will make sinners fall\nI shall explore the world\nAnd be the greatest of all',
            }
            
        ]
    },
];

export {acquireItem};
export {items};