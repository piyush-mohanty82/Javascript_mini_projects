let toastBox = document.getElementById("toastBox");
let sucessMsg = '<i class="fa-solid fa-circle-check"></i> Successfully submitted';
let errorMsg = '<i class="fa-solid fa-circle-xmark"></i> error occurred';
let invalidMsg = '<i class="fa-solid fa-circle-exclamation"></i> invalid input';
function showToast(msg){
    let toast = document.createElement("div");
    toast.classList.add("toast");
    toast.innerHTML = msg;
    toastBox.appendChild(toast);

    if(msg.includes('error')){
        toast.classList.add('error');
    }
    if(msg.includes('invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(() => {
        toast.remove();
    }, 6000);
}