let btn = document.querySelector(".btn button");
let inputfeild = document.querySelector(".input_feild input");
let icon = document.querySelector(".input_feild i");

// Generate password
btn.addEventListener("click", () => {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let passwordLength = 12;
  let password = "";

  for (let i = 0; i < passwordLength; i++) {
    let randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  inputfeild.value = password;
});

// Copy to clipboard
icon.addEventListener("click", () => {
  if (!inputfeild.value) return;

  navigator.clipboard.writeText(inputfeild.value);

  // icon change
  icon.classList.remove("fa-copy");
  icon.classList.add("fa-check");

  // create copied text
  let copiedText = document.createElement("span");
  copiedText.innerText = "Copied";
  copiedText.style.position = "absolute";
  copiedText.style.right = "40px";
  copiedText.style.bottom = "8px";
  copiedText.style.color = "green";
  copiedText.style.fontSize = "14px";

  icon.parentElement.appendChild(copiedText);

  // reset after 2 seconds
  setTimeout(() => {
    icon.classList.remove("fa-check");
    icon.classList.add("fa-copy");
    copiedText.remove();
  }, 1000);
});
