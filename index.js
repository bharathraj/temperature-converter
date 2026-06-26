const input = document.getElementById("input");
const fahrenheitBtn = document.getElementById("fahrenheitBtn");
const celsiusBtn = document.getElementById("celsiusBtn");
const result = document.getElementById("result");
 

function execute(){
 
  let temp;
  temp = Number(input.value);

  // (0°C × 9/5) + 32 = 32°F

  if(fahrenheitBtn.checked){
    temp = (temp * 9 / 5) + 32 ;
    result.textContent = `${temp.toFixed(2)} °F`;                                    
  }

  // (32°F − 32) × 5/9 = 0°C

  else if(celsiusBtn.checked){
    temp = (temp - 32) * 5/9;
    result.textContent = `${temp.toFixed(2)} °C`;
  }
}
