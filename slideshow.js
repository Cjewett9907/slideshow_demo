
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
// for demo purposes this is done in VanillaDOM Javascript
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

function fader(){
    let images3 = document.getElementsByClassName("slideshow-div-img3")
    let i = 0
    let fadeVar = 9999
    let fadeSwitch = -1
    images3[i].style.opacity = "0." + fadeVar ;
    console.log(fadeVar)
    
        setInterval(function(){
            if (fadeVar < 1000 ) {  
                fadeVar = 1001 
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
            if (fadeVar > 10000){
                images3[i].style.opacity = "1.0"
                fadeSwitch *= -1
            } else {
                images3[i].style.opacity = "0." + fadeVar
            }
            
            console.log("opacity is", "0." + fadeVar)
            fadeVar += (500 * fadeSwitch) 
             
        }, 100);
    
}


slideShow();
translation();
fader();

}