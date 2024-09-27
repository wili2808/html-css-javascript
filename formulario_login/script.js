const btn_sign_in = document.getElementById("btn-sign-in");
const btn_sign_up = document.getElementById("btn-sign-up");
const container = document.querySelector(".container");
btn_sign_in.addEventListener("click", () => {
  container.classList.remove("toggle");
});
btn_sign_up.addEventListener("click", () => {
  container.classList.add("toggle");
});
