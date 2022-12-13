// set initial count
let count = 0;

// select value and buttons
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// 콜백함수에 e를 넣는 이유: 현재 대상이 무엇인지 확인하기 위해
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;

    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }
    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
