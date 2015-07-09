//ghost constructor and isntance ghost instance below
function Ghost (x,y){
            this.x = x;
            this.y = y;
}

function getRandomInt(min, max){
            return Math.floor(Math.random() * (max - min)) + min;
        }

Ghost.prototype.updateLocation = function (x,y){
        //dont't let the ghost move if he runs into a wall
         if(world[((y * 10) + x)] === 0){
             return;
            }

        world[((this.y * 10) + this.x)] = 2;

        this.x = x;
        this.y = y;
     

        world[((this.y * 10) + this.x)] = 4;
        console.log('hey');
       
};

Ghost.prototype.drawGhost = function (){
            this.random_ghost_location();
            document.getElementById('world').innerHTML = document.getElementById('world').innerHTML +
            "<div class='blue_ghost' style='top:" + this.y * 90 + "px;left:" + this.x * 90 + "px'></div>";
        };


Ghost.prototype.random_ghost_location = function (ghost){
        var local = getRandomInt(1,5);

        if(local === 1){
            this.updateLocation(this.x - 1, this.y);
        } else if (local === 2){
            this.updateLocation(this.x + 1, this.y);
        } else if (local === 3){
            this.updateLocation(this.x, this.y - 1);
        } else if (local === 4){
            this.updateLocation(this.x, this.y + 1);
            }
};







