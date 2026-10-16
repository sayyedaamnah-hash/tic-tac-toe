
    let boxes = document.querySelectorAll(".box");
    let resetgame = document.querySelector("#reset-btn");
    let Newbtn = document.querySelector("#newgame");
    let msgContainer = document.querySelector(".msg-container");
    let msg = document.querySelector("#msg"); 

    let turnO = true;

    const WinPatterns = [
      [0, 1, 2 ],
      [3, 4, 5 ],
      [6, 7, 8 ],
      [0, 3, 6 ],
      [1, 4, 7 ],
      [2, 5, 8 ],
      [0, 4, 8 ],
      [2, 4, 6 ],
    ]  ;
    

    boxes.forEach((box) =>{
      box.addEventListener("click",() =>{
        console.log("you clicked the box");
        if (turnO){
          turnO = false;
          box.innerText = "O";
        }
        else{
          box.innerText = "X";b
          turnO = true;
        }
        
        checkWinner();
      });
    });
    
    const boxDis = ()=>{
      for(let box of boxes){
        box.disabled;
        box.disabled = true;
      }
    };

    const boxEnable = ()=>{
      for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
      }
    };
    

   
    const checkWinner = () =>
    {
      for (let pattern of WinPatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val != ""){
          if(pos1val == pos2val && pos2val == pos3val ){
            console.log("Winner",pos1val);

            showWinner(pos1val);
          }
        }
      }
    };
    const showWinner = (winner) => {
      msg.innerText=`Congratulations,The Winner is ${winner}`;
      msgContainer.classList.remove("hide");
      boxDis();
    } ;
    const resetGame = () => {
      turnO = true;
      boxEnable();
      msgContainer.classList.add("hide");
    };
    
  Newbtn.addEventListener("click",resetGame);
 
 resetgame.addEventListener("click",resetGame);
 
 
 
