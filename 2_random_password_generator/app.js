
let generateBtn = document.querySelector(".generate");
let inp = document.getElementById("inp-text");
let copyBtn = document.getElementById("copyBtn");
function generatePassword() {
    var length = 12,
    charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*~",
    retVal = "";
    n = charset.length;
    for (var i = 0; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    inp.value = retVal;
}


generateBtn.addEventListener("click",generatePassword);
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(inp.value);
  alert("Copied!");
});


