document.querySelectorAll(".drum")[0].addEventListener("click",function(){
    var audio = new Audio ("sounds/crash.mp3");
        audio.play();
    })
    document.querySelectorAll(".drum")[1].addEventListener("click",function(){
    var audio = new Audio ("sounds/tom-2.mp3");
        audio.play();
    })
    document.querySelectorAll(".drum")[2].addEventListener("click",function(){
    var audio = new Audio ("sounds/snare.mp3");
        audio.play();
    })
    document.querySelectorAll(".drum")[3].addEventListener("click",function(){
    var audio = new Audio ("sounds/tom-3.mp3");
        audio.play();
    })
    document.querySelectorAll(".drum")[4].addEventListener("click",function(){
    var audio = new Audio ("sounds/tom-4.mp3");
        audio.play();
    })
    document.querySelectorAll(".drum")[5].addEventListener("click",function(){
    var audio = new Audio ("sounds/kick-bass.mp3");
        audio.play();
    })
    document.querySelectorAll(".drum")[6].addEventListener("click",function(){
    var audio = new Audio ("sounds/tom-1.mp3");
        audio.play();
    })

    document.addEventListener("keydown",function(event){
     makesound(event.key);
     buttonanimation(event.key);
    })


    function makesound(key){
       
        switch(key){
            case "w":
                var audio = new Audio ("sounds/crash.mp3");
                audio.play();
                break;
                
                case "a":
                var audio = new Audio ("sounds/tom-2.mp3");
                audio.play();
                break;
                case "s":
                var audio = new Audio ("sounds/snare.mp3");
                audio.play();
                break;
                case "d":
                var audio = new Audio ("sounds/tom-3.mp3");
                audio.play();
                break;
                case "j":
                var audio = new Audio ("sounds/tom-4.mp3");
                audio.play();
                break;
                case "k":
                var audio = new Audio ("sounds/kick-bass.mp3");
                audio.play();
                break;
                
                case "l":
                var audio = new Audio ("sounds/tom-1.mp3");
                audio.play();
                break; }
            }
    
    
    function buttonanimation(currentkey){
      var click=  document.querySelector(" ."+ currentkey).classList.add("pressed");
      setTimeout(function(){
        document.querySelector(" ."+ currentkey).classList.remove("pressed");
      },100)

    }
