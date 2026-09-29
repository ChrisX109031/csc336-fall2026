let roomRootDiv = document.querySelector('#roomRoot');
let inputElement = document.querySelector("#inputElement");
let passwordButton = document.querySelector("#passwordButton");
let resultDiv = document.querySelector("#resultDiv");
let rooms = {
    entry: {
        name: "Entry-Room",
        description: "This is where the game starts! To leave find the word that sets you free!",
        linkedRooms: ["darkroom", "gym"]
    },
    darkroom: {
        name: "Darkroom",
        description: "Pitch-Black room quiet as it is dark. You feel around the room and find an F scratched into the wall!",
        linkedRooms: ["entry", "treasureroom"]
    },
    treasureroom: {
        name: "Treasure Room",
        description: "Filled with chest to the ceiling to bad you got here late as all the chest are empty! But you find the letters R,E,O scattered accros the room! ",
        linkedRooms: ["darkroom", "throneroom"]
    },
    throneroom: {
        name: "Throne Room",
        description: "A room long abandoned with murals to forgotten kings! On some of the murals you find the letters D,M!",
        linkedRooms: ["treasureroom", "entry"]
    }
};

function visualizeRoom(room) {
    roomRootDiv.innerHTML = "";

    let roomTitle = document.createElement("h1");
    roomTitle.innerHTML = room.name;
    roomRootDiv.append(roomTitle);

    let descriptionP = document.createElement("p");
    descriptionP.innerHTML = room.description;
    roomRootDiv.append(descriptionP);

    for (let i = 0; i < room.linkedRooms.length; i++) {
        let linkedId = room.linkedRooms[i];
        let navButton = document.createElement("button");
        navButton.innerHTML = "Traveling to the " + rooms[linkedId].name;
        navButton.addEventListener("click", function () {
            navButtonClicked(linkedId);
        });
        roomRootDiv.append(navButton);
    }
}

function navButtonClicked(roomId) {
    currentRoom = rooms[roomId];
    visualizeRoom(currentRoom);
}
function passwordButtonClicked() {
    let notCaseSensitive = String(inputElement.value).toLowerCase();
    if (notCaseSensitive === "freedom") {
        resultDiv.innerHTML = "Correct! You win!";
    } else {
        resultDiv.innerHTML = "Not correct!";
    }
}
passwordButton.addEventListener("click", passwordButtonClicked);
let currentRoom = rooms["entry"];
visualizeRoom(currentRoom);