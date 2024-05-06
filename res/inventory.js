import { items } from './items.js'

var ongoingInventoryDisplay = false;
var ongoingItemDisplay = false;

var inventory = document.getElementById("inventory");
var buttonGeneratePotisions = [
    { x: 4, y: 22 }, { x: 162, y: 22 }, { x: 4, y: 196 }, { x: 162, y: 196 }, { x: 4, y: 374 }, { x: 162, y: 374 }, { x: 4, y: 548 }, { x: 162, y: 548 },
];

var itemGeneratePositions = [
    { x: 130, y: 137 }, { x: 415, y: 137 }, { x: 701, y: 137 }, { x: 986, y: 137 }, { x: 130, y: 429 }, { x: 415, y: 429 }, { x: 701, y: 429 }, { x: 986, y: 429 }
]

var itemCategories = [
    'Entrance',
    'Frey',
    'Sisy',
    'Leo',
    'Myrin',
    'Yuma',
    'Jas',
    'Enigma'
]

var displayedCategory = null;
var itemCategory = null;
var selectedInventory = null;

function getCategoryId(name) {
    for (var i in items) {
        if (items[i].category == name)
            return i;
    }
}

function getItemId(name) {
    for (var i in items) {
        for (var j in items[i].item) {
            if (items[i].item[j].id == name)
                return j;
        }
    }
}

for (var i = 0; i < 8; i++) {
    var button = document.createElement("BUTTON");
    button.style.left = buttonGeneratePotisions[i].x + 'px';
    button.style.top = buttonGeneratePotisions[i].y + 'px';
    button.setAttribute('class', 'inventoryCategory');
    button.setAttribute('id', `${itemCategories[i]}`);
    button.addEventListener("click", renderInventory);
    inventory.appendChild(button);
}

function renderInventory(click) {
    if (ongoingInventoryDisplay == true) {
        unrenderInventory();
    }
    if (ongoingItemDisplay == true) {
        unrenderItem();
    }
    var gameScreen = document.getElementById('gameScreen');
    var inventoryOverlay = document.createElement("IMG");
    inventoryOverlay.setAttribute("class", "inventoryOverlay");
    inventoryOverlay.setAttribute("id", "inventoryOverlay");
    gameScreen.appendChild(inventoryOverlay);

    itemCategory = click.target.getAttribute("id");
    selectedInventory = getCategoryId(itemCategory);
    displayedCategory = selectedInventory;

    for (var i in items[selectedInventory].item) {
        var image = document.createElement("IMG");
        image.style.left = itemGeneratePositions[i].x + 'px';
        image.style.top = itemGeneratePositions[i].y + 'px';
        image.setAttribute('class', 'itemButton');
        image.setAttribute('id', `${items[selectedInventory].item[i].id}`);
        image.setAttribute('src', `./res/items/${itemCategory}/${items[selectedInventory].item[i].id}.png`)
        image.addEventListener("click", renderItem);
        if(items[selectedInventory].item[i].acquired==false){
            var itemBlock = document.createElement("IMG");
            itemBlock.style.left = itemGeneratePositions[i].x + 'px';
            itemBlock.style.top = itemGeneratePositions[i].y + 'px';
            itemBlock.setAttribute("class", 'itemBlock');
            itemBlock.setAttribute("id", `block_${items[selectedInventory].item[i].id}`);
            gameScreen.appendChild(itemBlock);
        }
        gameScreen.appendChild(image);
    }

    var closeInventory = document.createElement("IMG");
    closeInventory.setAttribute('class', 'closeInventory');
    closeInventory.setAttribute('id', 'closeInventory');
    closeInventory.addEventListener('click', unrenderInventory);
    gameScreen.appendChild(closeInventory);
    ongoingInventoryDisplay = true;
}

function renderItem(click) {
    var gameScreen = document.getElementById('gameScreen');
    var itemOverlay = document.createElement("IMG");
    itemOverlay.setAttribute("class", "itemOverlay");
    itemOverlay.setAttribute("id", "itemOverlay");
    itemOverlay.setAttribute("src", "./res/items/itemOverlay.png");
    gameScreen.appendChild(itemOverlay);

    var itemID = getItemId(click.currentTarget.getAttribute("id"));
    var itemImage = document.createElement("IMG");
    itemImage.setAttribute("class", 'itemImage');
    itemImage.setAttribute("id", 'itemImage');
    itemImage.setAttribute("src", `./res/items/${itemCategory}/${items[selectedInventory].item[itemID].id}.png`);
    gameScreen.appendChild(itemImage);

    var itemName = document.createElement("p");
    itemName.innerHTML = items[selectedInventory].item[itemID].name;
    itemName.setAttribute("class",'itemName');
    itemName.setAttribute("id",'itemName');
    gameScreen.appendChild(itemName);
    
    var itemDescription = document.createElement("p");
    itemDescription.innerHTML = items[selectedInventory].item[itemID].description;
    itemDescription.setAttribute("class",'itemDescription');
    itemDescription.setAttribute("id",'itemDescription');
    gameScreen.appendChild(itemDescription);

    var closeItem = document.createElement("IMG");
    closeItem.setAttribute('class', 'closeItem');
    closeItem.setAttribute('id', 'closeItem');
    closeItem.addEventListener('click', unrenderItem);
    gameScreen.appendChild(closeItem);
    ongoingItemDisplay = true;
}

function unrenderItem() {
    var gameScreen = document.getElementById('gameScreen');
    var itemOverlay = document.getElementById('itemOverlay');
    var itemImage = document.getElementById('itemImage');
    var itemName = document.getElementById('itemName');
    var itemDescription = document.getElementById('itemDescription');
    var closeItem = document.getElementById('closeItem');
    gameScreen.removeChild(itemOverlay);
    gameScreen.removeChild(itemImage);
    gameScreen.removeChild(itemName);
    gameScreen.removeChild(itemDescription);
    gameScreen.removeChild(closeItem);
    ongoingItemDisplay = false;
}

function unrenderInventory() {
    var gameScreen = document.getElementById('gameScreen');
    var inventoryOverlay = document.getElementById('inventoryOverlay');
    var itemBlock = document.getElementById('itemBlock');
    var closeInventory = document.getElementById('closeInventory');
    gameScreen.removeChild(inventoryOverlay);
    gameScreen.removeChild(closeInventory);
    for(var i in items[displayedCategory].item){
        var item = document.getElementById(`${items[selectedInventory].item[i].id}`);
        gameScreen.removeChild(item);
        if(items[selectedInventory].item[i].acquired == false){
            var itemBlock = document.getElementById(`block_${items[selectedInventory].item[i].id}`);
            gameScreen.removeChild(itemBlock);
        }
    }
    displayedCategory = null;
    itemCategory = null;
    selectedInventory = null;
    ongoingInventoryDisplay = false;
}