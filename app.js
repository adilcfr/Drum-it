window.addEventListener('load', () =>{
    const ses = document.querySelectorAll(".ses")
    const boxs =document.querySelectorAll(".boxs div")
    boxs.forEach((pad, index) =>{
        pad.addEventListener('click',function(){
            //console.log(index);
            ses[index].currentTime = 0;
            ses[index].play();
        });
        document.addEventListener('keypress',(event) =>{
            const index = event.key; 
            if(index>0 && index<5 ){
                ses[index-1].currentTime = 0;
                ses[index-1].play(); 
            }
            
        });
    });
});
