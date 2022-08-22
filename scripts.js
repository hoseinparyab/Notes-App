let addBtn = document.getElementById("add");
let notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((note) => {
    addNewNote(note);
  });
}
addBtn.addEventListener("click", function () {
  addNewNote();
});

function addNewNote(text = "") {
  let note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
              <div class="notes">
              <div class="tools">
                <button class="edit">
                  <i class="fas fa-edit"></i>
                </button>
                <button class="delete">
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
              <div class="main hidden"></div>
              <textarea></textarea>
            </div> 
        `;

  let editBtn = note.querySelector(".edit");
  let deleteBtn = note.querySelector(".delete");

  let textArea = note.querySelector("textarea");

  textArea.value = text;

  let main = note.querySelector(".main");
  editBtn.addEventListener("click", function () {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  deleteBtn.addEventListener("click", function () {
    note.remove();
  });

  textArea.addEventListener("click", function (e) {
    const {
      value
    } = e.target;
    main.innerHTML = marked(value);
  });
  document.body.appendChild(note);
}

function updateLS() {
  let notesText = document.querySelectorAll("textarea");
  let notes = [];
  notesText.forEach((note) => {
    notes.push(note.value);
  });
}