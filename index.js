var namee;
var xor = 1;
document.addEventListener(
  "keyup",
  (event) => {
    namee = event.key;
    var code = event.code;
    if (namee == "k" && xor == 1) {
      console.log(namee + " is pressed " + xor);
      document.getElementById("para").innerHTML = "Alluhayb";
      xor = -1;
    } else if (namee == "k" && xor == -1) {
      console.log(namee + " is pressed " + xor);
      document.getElementById("para").innerHTML = "Abdulaziz";
      xor = 1;
    }
    // Alert the key name and key code on keydown
    //alert(`Key pressed ${namee} \r\n Key code value: ${code}`);
  },
  false
);

let section = document.querySelectorAll("section");
let menu = document.querySelectorAll("header nav a");

window.onscroll = () => {
  section.forEach((i) => {
    let top = window.scrollY;
    let offset = i.offsetTop - 580;
    let height = i.offsetHeight;
    let id = i.getAttribute("id");

    if (top >= offset && top < offset + height) {
      menu.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
