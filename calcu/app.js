window.addEventListener("load", function() {
  console.log("Hello World!");
});


function handleKeydown(e) {
  console.log(e.key, typeof e.key)
  const {key}=e
  if(Number(key)){
    setValue(Number(key))
  }
  
  
  switch(key) {
    case 'ArrowUp':
      nav(-1);
      break;
    case 'ArrowDown':
      nav(1);
      break;
    case 'ArrowRight':
      nav(1);
      break;
    case 'ArrowLeft':
      nav(-1);
      break;
    case "SoftLeft":
       document.getElementById("num1").value="";
       document.getElementById("num2").value="";
      break;
      case "SoftRight":
       const num1 =Number(document.getElementById("num1").value);
       const num2 = Number(document.getElementById("num2").value);
       calcular(num1, num2);
      break;
  }
}

function calcular(num1, num2){
  const body = document.getElementById("body");
  const suma= num1 +num2;
  const resta= num1-num2;
  const multiplicacion = num1*num2;
  const division = num1/num2;
  const html = `<tr>
          <td>suma:</td>
          <td>${suma}</td>
          </tr> <tr>
          <td>resta:</td>
          <td>${resta}</td>
          </tr><tr>
          <td>multiplicacion:</td>
          <td>${multiplicacion}</td>
          </tr><tr>
          <td>division:</td>
          <td>${division}</td>
          </tr>`
  
  body.innerHTML= html;
}

function nav (move) {
  const currentIndex = document.activeElement.tabIndex;
  const next = currentIndex + move;
  const items = document.querySelectorAll('.items');
  const targetElement = items[next];
  targetElement.focus();
}

function setValue(valor){
  document.activeElement.value += valor ;  
}

document.activeElement.addEventListener
('keydown', handleKeydown);

document.getElementById("formulario").addEventListener("submit",(e)=>{
   e.preventDefault()

   const num1 = document.getElementById("num1").value;
   const num2 = document.getElementById("num2").value;
  console.log(num1,num2)
})


document.getElementById("btnclear").addEventListener("click",(e)=>{
  document.getElementById("num1").value="";
  document.getElementById("num2").value="";
  console.log("limpia")
})



