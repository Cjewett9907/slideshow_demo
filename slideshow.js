
window.onload = function()
{ 
   



function slideShow(){
    let images = document.getElementsByClassName("slideshow-div-img")
    let i = 0

    setInterval(function(){  
        images[i].style.display = "none";

        if (i === images.length - 1){
            i = 0
        } else {
            i += 1
        }
        // console.log("i is:", i)     
        images[i].style.display = "block";
    }, 1000);
}

// This could be accomplished by CSS animations as well
// for demo purposes this is  done in css

function translation(){
    let images2 = document.getElementsByClassName("slideshow-div-img2")
    let i = 0
    let pos = 150
    images2[i].style.left = "0px";

    setInterval(function(){

        if (pos > 300){  
            pos = 0
            images2[i].style.display = "none"

            if (i === images2.length - 1){       
                i = 0     
            } else {    
                i += 1
            }
            images2[i].style.display = "block"
        }
        images2[i].style.left = (pos) + "px"
        pos += 150
        
    }, 1000);


}


slideShow();
translation();

}