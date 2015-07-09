//pacman object
pacmanInit = (function (){
    var pacman = {
        x: 5,
        y: 5,
        score: 0,
        lifes: 3,
        direction: 'right',
        drawPacman: function () {
            document.getElementById('world').innerHTML = document.getElementById('world').innerHTML + "<div class='pacman-"+pacman.direction+"' style='top:" + pacman.y * 90 + "px;left:" + pacman.x * 90 + "px'></div>";
        },
        set_pacman_location: function (x,y){
            if(world[((y * 10) + x)] === 0){
                return;
            }

            this.x = x;
            this.y = y;
        },
        set_pacman_direction: function (direction){
                pacman.direction = direction;
        },
        drawScore: function (){
            document.getElementById('score').innerHTML = "Your Score: " + pacman.score;
        },
        reset: function (){
            this.x = 5;
            this.y = 5;
            this.score = 0;
            this.lifes = 3;
            this.direction = 'right';
        }
    };
    return pacman;
})();

var pacman = pacmanInit;
       

pacman.drawPacman();
pacman.drawScore();