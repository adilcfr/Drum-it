window.addEventListener('load', () =>{
    const ses = document.querySelectorAll(".ses")
    const boxs =document.querySelectorAll(".boxs div")
    const visual = document.querySelector(".visual");
    const colors = [
    "red","orange","yellow","green","blue","purple"
  ];



    boxs.forEach((pad, index) =>{
        pad.addEventListener('click',function(){
            //console.log(index);
            ses[index].currentTime = 0;
            ses[index].play();
            for (let i = 0; i < 6; i++)
            createBubble(index);
        });
        document.addEventListener('keydown',(event) =>{
            const index = +event.key; 
            if(index>0 && index<7 ){
                ses[index-1].currentTime = 0;
                ses[index-1].play(); 
                createBubble(index-1);
            }
            
            
        });
    });

    const createBubble = index => {
        const bubble = document.createElement("div");
        visual.appendChild(bubble);
        bubble.style.backgroundColor = colors[index];
        const randomCordinate = 10+Math.floor(Math.random() * 80)+"%";
        bubble.style.left = randomCordinate;
        bubble.style.animation = `jump 1s ease`;
        bubble.addEventListener("animationend", function() {
          visual.removeChild(this);
        });
      };
});
