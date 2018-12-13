var game = {
    situation: "You wake up on a hill having no memory whatsoever of how you got there. You groan as you sit up and look around. You can see a path leading from next to the hill into the distance. You can tell from the sun's position that it is early in the morning. There is a small creek flowing down next to the hill next to a straggled collection of apple trees.",
    options: [{
        action: "You decide to walk down the hill and follow the path to the east.",
        next: {
            situation: "After an hour of walking with nothing notable happening, you discover a small path leading off to the right.",
            options: [{
                action: "You continue along the main path.",
                next: {
                    situation: "In the distance you see a massive castle. It looks evil.",
                    options: [{
                        action: "Turn towards the castle.",
                        next: {
                            situation: "You manage to reach the castle, but you got shot by an Archer",
                            end: true
                        }
                    }, {
                        action: "Continue down the path to god knows where.",
                        next: {
                            situation: "You are forever lost in the Forest",
                            end: true
                        }
                    }, {
                        action: "Continue down the path that felt save",
                        next: {
                            situation: "You still continue down the safe path and you manage to find another path",
                            end: true
                        }
                    }]
                }
            }, {
                action: "You turn on to the path to the right.",
                next: {
                    situation: "Half an hour later you see the entrance to a cave dug into a mountainside. To the left of the cave is a path that leads back in the direction of the path.",
                    options: [{
                        action: "Go into the cave.",
                        next: {
                            situation: "In the cave there was tent and food that would last you for weeks.",
                            end: true
                        }
                    }, {
                        action: "Go along the path to the left.",
                        next: {
                            situation: "Along this path there was an orge and you got killed in the process",
                            end: true
                        }
                    }, {
                        action: "Go back the way you came.",
                        next: {
                            situation: "You couldn't go back to the way you came cause it was blocked off by a huge mysterious huge rock",
                            end: true
                        }
                    }]
                }
            }, {
                action: "You turn around and walk back towards the west.",
                next: {
                    situation: "You start to become dehydrated and disorientated. You can't seem to find any food or water.",
                    options: [{
                        action: "Continue along the path, hoping to reach the hill again.",
                        next: {
                            situation: "You didn't have enough energy to make it up the hill so you died from dehydration",
                            end: true
                        }
                    }, {
                        action: "Take a rest where you are.",
                        next: {
                            situation: "You became well rested enough to move again, but still dehydrated",
                            end: true
                        }
                    }, {
                        action: "Go into the bush looking for food and water.",
                        next: {
                            situation: "Luckily for you there was some thing left on the ground for you. It was food and water",
                            end: true
                        }
                    }]
                }
            }]
        }
    }, {
        action: "You decide to walk down the hill and follow the path to the west.",
        next: {
            situation: "Six hours after starting your trek along the path, you come to a small village named Raven Town. There is an inn called The Raven which has a few empty rooms.",
            options: [{
                action: "Get a room at The Raven for the night.",
                next: {
                    situation: "You have a good sleep, though you have a hangover.",
                    options: [{
                        action: "Have a look around town and socialise with the locals.",
                        next: {
                            situation: "You manage to find out more information about where you are.",
                            end: true
                        }
                    }, {
                        action: "Ignore the rest of the town and go onto the path again to see where it takes you.",
                        next: {
                            situation: "You continue to walk along the path again on a long going Journey",
                            end: true
                        }
                    }, {
                        action: "Find a place to work around town and make a effort living there",
                        next: {
                            situation: "After successfully getting a job and making an effort to live in town. You manage to save up enough coin to obtain your own House.",
                            end: true
                        }
                    }]
                }
            }, {
                action: "Ask a local if you can stay at their place overnight.",
                next: {
                    situation: "...",
                    options: [{
                        action: "...",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "...",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "...",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }]
                }
            }, {
                action: "Continue down the path through the night.",
                next: {
                    situation: "In the darkness you trip over a tree root crossing the path and hit your head hard on a rock. When you wake up, you are in a cave. There are three tunnels. Left, middle and right. To the left you can see a faint glow. In the middle is a seemingly endless dark tunnel. To the right there is a strong glow and soft chatter.",
                    options: [{
                        action: "Go down the left tunnel.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Go down the tunnel in the middle.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Go down the right tunnel.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }]
                }
            }]
        }
    }, {
        action: "You decide to hang around and see if any memories come back to you.",
        next: {
            situation: "You sit at the top of the mountain and watch as the sun rises and then sets. Throughout the day, you slowly get the sense that there is something very very wrong.",
            options: [{
                action: "Sleep on the hillside.",
                next: {
                    situation: "You have a nice peaceful sleep. That is, before you find an arrow sticking out of the side of your head. The last thing you see is a goblin's ugly face.",
                    end: true
                }
            }, {
                action: "Stay up trying to work out what it is that is bothering you so much.",
                next: {
                    situation: "You notice movement on one of the hills, and see a flash of metal.",
                    options: [{
                        action: "Hide behind a tree.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "Run for your life down the the path, following the sun to the west.",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }, {
                        action: "...",
                        next: {
                            situation: "The story hasn't been completed to this point.",
                            end: true
                        }
                    }]
                }
            }, {
                action: "Nothing here, sorry.",
                next: {
                    situation: "The story hasn't been completed to this point.",
                    end: true
                }
            }]
        }
    }]
};

//variable that keeps track of where in the story the player is
var current = game;

//DOM element variables
var situation = document.getElementById('text'),
    button1 = document.getElementById('button1'),
    button2 = document.getElementById('button2'),
    button3 = document.getElementById('button3');

//button press function
function button(index){
    if(!current.end){
        if(index){
            current = current.options[index].next;
        }
        situation.innerHTML = current.situation;
        if(!current.end){
            button1.innerHTML = current.options[0].action;
            button2.innerHTML = current.options[1].action;
            button3.innerHTML = current.options[2].action;
        }else{
            button1.style.display = button2.style.display = button3.style.display = 'none';
        }
    }
}
button()