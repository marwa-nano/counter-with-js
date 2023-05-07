const btns = document.querySelectorAll(".btn");
const num = document.querySelector(".number");
let count = 0;

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (btn.innerHTML === "Increase") {
      count++;
      num.style.color = "#df205c";
      num.innerHTML = count;
    } else if (btn.innerHTML === "Decrease") {
      count--;
      num.style.color = "#80054e";
      num.innerHTML = count;
    } else {
      count = 0;
      num.style.color = "#6629be";
      num.innerHTML = count;
    }
  })
);
