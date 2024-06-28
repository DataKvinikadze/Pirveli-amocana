let addBtn = document.querySelector(".add");
let deleteBtn = document.querySelector(".delete");
let block = document.querySelector(".block");

addBtn.addEventListener("click", () => {
  block.classList.add("visible");
  block.classList.remove("not-visible");
});

deleteBtn.addEventListener("click", () => {
  block.classList.remove("visible");
  block.classList.add("not-visible");
});
