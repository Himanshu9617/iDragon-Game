        score = 0;
        audio = new Audio('gameover.mp3');
        window.addEventListener('keydown',func);        // to get the value of key pressed
        function func(e){
            console.log(e.keyCode);
            // if uperkey is pressed -- 
            if(e.keyCode == 38)
            {
                dino = document.querySelector("#dino");
                dino.classList.add("animatedDino");
                setTimeout(()=>{
                    dino.classList.remove("animatedDino");
                },700);

            }
            // if right key is pressed --
            if(e.keyCode == 39)
            {
                dino = document.querySelector("#dino");
                dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
                dino.style.left = dinox + 200 + "px";
                console.log(dinox);
            }
            // if left key is pressed
            if(e.keyCode == 37)
            {
                dino = document.querySelector("#dino");
                dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
                dino.style.left = (dinoy - 182) + "px";
                console.log(dinox);
            }

        }
        setInterval(()=>{
            dino = document.querySelector("#dino");
            drag = document.querySelector("#obstacle");
            
            dinox = parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
            dinoy = parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));
            dragx = parseInt(window.getComputedStyle(drag,null).getPropertyValue('left'));
            dragy = parseInt(window.getComputedStyle(drag,null).getPropertyValue('top'));
            
            offsetX = Math.abs(dinox - dragx);
            offsetY = Math.abs(dinoy - dragy);
            sc = document.querySelector("#score")
            //if distance between both of them decreases by the given value
            if(offsetX < 43 && offsetY <62 )
            {
                // console.log("sjfa"); 
                
                obstacle = document.getElementById("obstacle");
                obstacle.classList.remove("obstacleanimation");
                audio.play();
                setTimeout(()=>{
                    audio.pause();
                },1000)
                gameover.style.left = "37vw"
                gameover.innerHTML = "Game Over"
                sc.style.visibility = "hidden";
                fs = document.getElementById("finalScore");
                fs.style.visibility = "visible"                
                document.getElementById("finalScore").innerHTML = "You Scored  " + score ;
                
            }
            else
            {
                score +=1;
                updateScore(score);
            }


        },100)
        
        // to update score
        function updateScore(score){
            document.getElementById("score").innerHTML = "Your Score is " + score ;
        }
    