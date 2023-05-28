// const myStorage = window.localStorage;
const state = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

// ПОКА ЧТО ТОЛЬКО ДЛЯ ПОНЕДЕЛЬНИКА:
const timetableMonday = document.querySelector(".timetable-monday");
const inputMonday = document.querySelector(".monday-input");
const buttonSubmitMonday = document.querySelector(".button-submit");
// КОНЕЦ

// ДЛЯ КНОПОК CHECKBOX:
const handleClickCheckbox = (e) => {
  const checkbox = e.target;

  if (checkbox.textContent === "❏") {
    checkbox.textContent = "☑";
  } else {
    checkbox.textContent = "❏";
  }
};

const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleClickCheckbox);
});
// КОНЕЦ

// ДЛЯ КНОПОК DELETE:
const handleClickDelete = (e) => {
  const deleteButton = e.target;
  const li = deleteButton.closest("li");
  li.remove();
};

const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", handleClickDelete);
});
// КОНЕЦ

// ДЛЯ КНОПОК SUBMIT (ОСНОВНОЙ ДВИЖ):
buttonSubmitMonday.addEventListener("click", (e) => {
  const timetableItem = e.target.closest(".timetable-item");
  const ul = timetableItem.querySelector("ul");

  if (inputMonday.value.length > 0) {
    ul.insertAdjacentHTML(
      "beforeend",
      `<li>
      <button class="checkbox">❏</button>
      ${inputMonday.value}
      <button class="edit">✎</button>
      <button class="delete"><img class="img-delete" src="/images/delete.png" alt=""></button>
      </li>`
    );

    state.monday.push(inputMonday.value);
    // myStorage.setItem(`monday`, state.monday);

    const checkboxes = document.querySelectorAll(".checkbox");
    const targetCheckbox = checkboxes[checkboxes.length - 1];
    targetCheckbox.addEventListener("click", handleClickCheckbox);

    const deleteButtons = document.querySelectorAll(".delete");
    const targetDeleteButton = deleteButtons[deleteButtons.length - 1];
    targetDeleteButton.addEventListener("click", handleClickDelete);

    // state.monday.pop(); - в какое условие необходимо засунуть эту строчку?
    // как узнать, что клик по кнопке удаления состоялся? или нужно что-то другое для условия?

    inputMonday.value = "";
  }
});
// КОНЕЦ

// inputMonday.addEventListener('keyup', (event) => {
//   if(event.key === 'Enter') {
//     console.log('enter was pressed');
//   };
// });

// inputMonday.addEventListener('keyup', (e) => {
//   e.preventDefault();
//   // const form = inputMonday.closest('form');
//   console.log(inputMonday.value);

//   // inputMonday.replaceWith(inputMonday.value);
//   // inputMonday.remove();
//   // form.insertAdjacentHTML('beforeend', '<input class="input-monday" type="text">');
// });
