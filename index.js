const arrangeBtn = document.getElementById("arrange");
const submitBtn = document.getElementById("submit");
let textarea = document.getElementById("numbers");

arrangeBtn.addEventListener("click", function () {
  let massage = textarea.value;
  let arranged = massage.split(",").join("\r\n");
  document.getElementById("numbers").value = arranged;
  if (massage) {
    arrangeBtn.style.visibility = "hidden";
    submitBtn.style.visibility = "visible";
  } else {
    alert("Please write something.");
  }
});

submitBtn.addEventListener("click", function () {
  document.getElementById("numbers").value = "";
  submitBtn.style.visibility = "hidden";
  arrangeBtn.style.visibility = "visible";
});
