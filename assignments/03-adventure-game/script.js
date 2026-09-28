let roomRootDiv = document.querySelector('#roomRoot');
        let rooms = {
            entry: {
                name: "Entry Room",
                description: "This is where the game starts!",
                linkedRooms: ["classroom", "gym"]
            },
            classroom: {
                name: "Classroom",
                description: "Rows of empty desks face a dusty chalkboard.",
                linkedRooms: ["entry", "library"]
            },
            library: {
                name: "Library",
                description: "Tall shelves of books tower over you.",
                linkedRooms: ["classroom", "gym"]
            },
            gym: {
                name: "Gym",
                description: "A basketball rolls slowly across the floor.",
                linkedRooms: ["library", "entry"]
            }
        };

        function visualizeRoom(room) {
            roomRootDiv.innerHTML = "";   // clear the previous room

            let roomTitle = document.createElement("h1");
            roomTitle.innerHTML = room.name;
            roomRootDiv.append(roomTitle);

            let descriptionP = document.createElement("p");
            descriptionP.innerHTML = room.description;
            roomRootDiv.append(descriptionP);

            for (let i = 0; i < room.linkedRooms.length; i++) {
                let linkedId = room.linkedRooms[i];
                let navButton = document.createElement("button");
                navButton.innerHTML = "Go to " + rooms[linkedId].name;
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

let currentRoom = rooms["entry"];
visualizeRoom(currentRoom);