let width = screen.width;
let height = screen.height ;
//console.log(width);
var interval = null;
var shape = document.getElementById("square");
var position = 0;
var positionright = width - 105;
var positionbottom = height - 205;
var positionheight = 0;
clearInterval(interval);
interval = setInterval(frame, 5);


function frame() {
    if(position != width - 105){   
        position++;
        shape.style.left = position + 'px'; 
    }else if(position == width - 105 ){
        shape.classList.add("circle");
        if(positionheight != height - 205){
            positionheight++;
            shape.style.top = positionheight + 'px';
        }
    }
    if(position != 0 && positionheight == height - 205){
        shape.classList.add("radius");
        if(positionright != 0){
            positionright--;
            shape.style.left = positionright + 'px';
        }else if(positionright == 0){
            shape.classList.add("square");
            if(positionbottom != 0){
                positionbottom--;
                shape.style.top = positionbottom + 'px';
            }
        }
    }
}