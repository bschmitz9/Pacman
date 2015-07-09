//diagrams the initial world, which is turned into coins, cherries, bricks, or spaces
var world = [
    0,0,0,0,0,0,0,0,0,0,
    0,1,1,0,3,1,1,1,3,0,
    0,1,1,0,1,1,1,1,1,0,
    0,1,3,1,3,1,1,1,3,0,
    0,3,0,0,1,1,1,0,1,0,
    0,3,1,0,3,2,1,0,3,0,
    0,1,1,1,1,0,0,1,3,0,
    0,1,1,1,1,3,3,1,1,0,
    0,1,1,0,3,1,1,1,1,0,
    0,0,0,0,0,0,0,0,0,0
];

var ghost = new Ghost(4,5);
var ghost2 = new Ghost(1,1);
var ghost3 = new Ghost(6,6);
var ghost4 = new Ghost(3,4);


//resets the world when pacman runs into a ghost
function reset_game () {
     world = [
    0,0,0,0,0,0,0,0,0,0,
    0,1,1,0,3,1,1,1,3,0,
    0,1,1,0,1,1,1,1,1,0,
    0,1,3,1,3,1,1,1,3,0,
    0,3,0,0,1,1,1,0,1,0,
    0,3,1,0,3,1,1,0,3,0,
    0,1,1,1,1,0,0,1,3,0,
    0,1,1,1,1,3,3,1,1,0,
    0,1,1,0,3,1,1,1,1,0,
    0,0,0,0,0,0,0,0,0,0
];
    
    pacman.reset();
    pacman.drawPacman();
    pacman.drawScore();
    drawWorld();
    ghost.drawGhost();
    ghost2.drawGhost();
    ghost3.drawGhost();
    ghost4.drawGhost();

}

//creates our gameboard
function drawWorld(){
    document.getElementById('world').innerHTML = "";
    for(var i = 0; i < world.length; i++){
        if(world[i] === 0){
            document.getElementById('world').innerHTML = document.getElementById('world').innerHTML + "<div class='brick' style='top:" + Math.floor(i/10) * 90 + "px;left:" + (i%10) * 90 + "px'></div>";
        } else if (world[i] === 1){
            document.getElementById('world').innerHTML = document.getElementById('world').innerHTML + "<div class='coin' style='top:" + Math.floor(i/10) * 90 + "px;left:" + (i%10) * 90 + "px'></div>";
        } else if (world[i] === 2){
             document.getElementById('world').innerHTML = document.getElementById('world').innerHTML + "<div class='space' style='top:" + Math.floor(i/10) * 90 + "px;left:" + (i%10) * 90 + "px'></div>";
        } else if (world[i] === 3){
             document.getElementById('world').innerHTML = document.getElementById('world').innerHTML + "<div class='cherry' style='top:" + Math.floor(i/10) * 90 + "px;left:" + (i%10) * 90 + "px'></div>";
        }
    }

    pacman.drawPacman();

}

//erase the world when the number of lives reaches 0 for pacman
function eraseWorld(){
    console.log('here');
    var node = document.getElementById('world');
    while(node.hasChildNodes()){
        node.removeChild(node.firstChild);
    }
}
       
drawWorld();
pacman.drawPacman();
ghost.drawGhost();
ghost2.drawGhost();
ghost3.drawGhost();
ghost4.drawGhost();


// function set_ghost_location (x,y) {
//     if(world[((ghost.y * 10) + ghost.x)] === 0){
//              return;
//             }

//     world[((ghost.y * 10) + ghost.x)] = 2;

//     ghost.x = x;
//     ghost.y = y;
     

//     world[((ghost.y * 10) + ghost.x)] = 4;
// }

//keyboard event moves pacman anyway the user wants to move 
document.onkeydown = function (e){
    if(e.keyCode === 37){
        pacman.set_pacman_location(pacman.x - 1, pacman.y);
        pacman.set_pacman_direction("left");
    } else if(e.keyCode === 39){
        pacman.set_pacman_location(pacman.x + 1, pacman.y);
        pacman.set_pacman_direction("right");
    } else if(e.keyCode === 38){
        pacman.set_pacman_location(pacman.x, pacman.y - 1);
        pacman.set_pacman_direction("up");
    } else if(e.keyCode === 40){
        pacman.set_pacman_location(pacman.x, pacman.y + 1);
        pacman.set_pacman_direction("down");
    }

    if(world[((pacman.y * 10) + pacman.x)] === 1){
        world[((pacman.y * 10) + pacman.x)] = 2;
        pacman.score += 5;
    }
    if(world[((pacman.y * 10) + pacman.x)] === 3){
        world[((pacman.y * 10) + pacman.x)]  = 2;
        pacman.score += 10;
    }
    if(world[((pacman.y * 10) + pacman.x)] === 4){
            pacman.lifes--;
            if(pacman.lifes === 0){
                alert("Game Over!");
                eraseWorld();
                reset_game();
            } else {
                alert('You ran into the enemy! Only ' + pacman.lifes + ' life(s) left');
            }
    }


drawWorld();
pacman.drawPacman();
pacman.drawScore();
ghost.drawGhost();
ghost2.drawGhost();
ghost3.drawGhost();
ghost4.drawGhost();

};


