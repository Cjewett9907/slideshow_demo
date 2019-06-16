
window.onload = function(){ 
   
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
// for demo purposes this is done in VanillaDOM Javascript
function translation(){
    let images2 = document.getElementsByClassName("slideshow-div-img2")
    let i = 0

    // displacement is how many pixels per move
    let displacement = 150
    images2[i].style.left = "0px";

    setInterval(function(){

        if (displacement > 300){  
            displacement = 0
            images2[i].style.display = "none"

            if (i === images2.length - 1){       
                i = 0     
            } else {    
                i += 1
            }
            images2[i].style.display = "block"
        }
        images2[i].style.left = (displacement) + "px"
        displacement += 150
        
    }, 1000);
}

function fader(){
    let images3 = document.getElementsByClassName("slideshow-div-img3")
    let i = 0
    let fadeVar = 999
    let fadeSwitch = -1
    images3[i].style.opacity = "0." + fadeVar ;
    
        setInterval(function(){
            if (fadeVar < 100 ) {  
                fadeVar = 101 
                fadeSwitch *= -1 
                images3[i].style.display = "none"
                    if (i === images3.length - 1){       
                        i = 0     
                    } else {    
                        i += 1
                    }
                images3[i].style.opacity = "0." + fadeVar
                
                images3[i].style.display = "block"
            }
            if (fadeVar > 1000){
                images3[i].style.opacity = "1.0"
                fadeSwitch *= -1
            } else {
                images3[i].style.opacity = "0." + fadeVar
            }
            
            console.log("opacity is", "0." + fadeVar)

            // controls the rate of fading 50 = 0.05 opacity per tick 
            fadeVar += (50 * fadeSwitch) 
             
        }, 100);
    
}


slideShow();
translation();
fader();

}