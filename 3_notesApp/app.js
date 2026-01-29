let create_note = document.querySelector(".btn");
let notesContainer = document.querySelector(".notes-container");
let notes = document.querySelectorAll(".input-box");


function saveData() {
    localStorage.setItem("notes",notesContainer.innerHTML);
}
function showNotes() {
    notesContainer.innerHTML = localStorage.getItem("notes");
}
showNotes();
create_note.addEventListener("click",()=>{
    let p = document.createElement("p");
    let img = document.createElement("img");

    p.className = "input-box";
    p.setAttribute("contenteditable","true");

    img.src = "images/delete.png";
    notesContainer.appendChild(p).appendChild(img);

    saveData();
} );

notesContainer.addEventListener("click",function(e){
    if(e.target.tagName === "IMG"){
        e.target.parentElement.remove();
        saveData();
    }
    else if(e.target.tagName === "P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt => {
            nt.onkeyup = function(){ //Add Auto-Save While Typing,When user releases any key (types something):
                saveData();
            }
        })
    }
});


document.addEventListener("keydown",event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})