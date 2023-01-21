let count = 0;
let randomNumber = Math.floor(Math.random() * 100) + 1;
let key_event = document.querySelector("#try").onkeypress;

function check_enter(event) {
  if(event.keyCode == 13) {
    check_number();
  }
}

function check_number() {
  let userInput = document.querySelector("#try").value; 
  
  if(userInput >= 1 && userInput <= 100) {
    if(randomNumber > userInput) {
      document.querySelector("#display").innerText = "⬆︎";
    } else if (randomNumber < userInput) {
      document.querySelector("#display").innerText = "⬇︎";
    } else {
      document.querySelector("#display").innerText = "정답입니다";
    }
    document.querySelector("#previousInput").innerText = "방금 전 입력한 값 : " + userInput;
    document.querySelector("#try").value = "";
    count++; 
    document.querySelector("#count").innerHTML = "시도횟수 : " + count + "회";
  }
  else {
    alert('1에서 100까지 사이의 숫자를 입력하세요.');
  }
}