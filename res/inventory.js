import { paths } from './paths.js'
import { items } from './items.js'

var ongoingDisplay = false;

var inventory = document.getElementById("inventory");
var buttonGeneratePotisions = [
    { x: 6, y: 22 }, { x: 164, y: 22 }, { x: 6, y: 196 }, { x: 164, y: 196 }, { x: 6, y: 374 }, { x: 164, y: 374 }, { x: 6, y: 548 }, { x: 164, y: 548 },
];

for (var i = 1; i < 9; i++) {
    var button = document.createElement("BUTTON");
    button.style.position = "absolute";
    button.style.width = 150 + 'px';
    button.style.height = 150 + 'px';
    button.style.background = 'none';
    button.style.border = 'none';
    button.style.left = buttonGeneratePotisions[i - 1].x + 'px';
    button.style.top = buttonGeneratePotisions[i - 1].y + 'px';
    button.setAttribute('class', 'inventoryCategory');
    button.setAttribute('id', `${paths[i].id}`);
    button.addEventListener("click", renderInventory);
    inventory.appendChild(button);
}

function renderInventory(click) {
    if (ongoingDisplay == true) {
        unrenderInventory();
    }
    var inventoryPath = click.target.getAttribute("id");
    var gameScreen = document.getElementById('gameScreen');
    var inventoryOverlay = document.createElement("IMG");
    inventoryOverlay.setAttribute("class", "inventoryOverlay");
    inventoryOverlay.setAttribute("id", "inventoryOverlay");
    gameScreen.appendChild(inventoryOverlay);

    var closeInventory = document.createElement("BUTTON");
    closeInventory.setAttribute('class', 'closeInventory');
    closeInventory.setAttribute('id', 'closeInventory');
    closeInventory.addEventListener('click', unrenderInventory);
    gameScreen.appendChild(closeInventory);
    ongoingDisplay = true;
}

function unrenderInventory() {
    var gameScreen = document.getElementById('gameScreen');
    var inventoryOverlay = document.getElementById('inventoryOverlay');
    var closeInventory = document.getElementById('closeInventory');
    gameScreen.removeChild(inventoryOverlay);
    gameScreen.removeChild(closeInventory);
    ongoingDisplay = false;
}