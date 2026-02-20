// let str  = "";
// let buttons= document.querySelectorAll(".button");
// Array.from(buttons).forEach((button)=>{
    
// button.addEventListener('click',(e)=>{

//     if(e.target.innerHTML == '='){
//         str = eval(str);
//         document.querySelector('input').value = str;
//     }
//     else if(e.target.innerHTML == 'C'){
//         str = "";
//         document.querySelector('input').value = str;
//     }
//  else{ str += e.target.innerHTML;
//   console.log(str);  
//   document.querySelector('.input').value = str;
//  }
// })
// })

let str: string = "";

const buttons: NodeListOf<HTMLButtonElement> =
  document.querySelectorAll(".button");

const inputField = document.querySelector("input") as HTMLInputElement;

buttons.forEach((button: HTMLButtonElement) => {

  button.addEventListener("click", (e: MouseEvent) => {

    const target = e.target as HTMLButtonElement;
    const value: string = target.innerHTML;

    if (value === "=") {
      try {
        str = eval(str);
        inputField.value = str;
      } catch {
        inputField.value = "Error";
        str = "";
      }

    } else if (value === "C") {
      str = "";
      inputField.value = str;

    } else {
      str += value;
      inputField.value = str;
    }

  });

});