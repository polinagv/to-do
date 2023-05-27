const state = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

const inputMonday = document.querySelector(".monday-input");
const timetableMonday = document.querySelector(".timetable-monday");
const buttonSubmitMonday = document.querySelector(".button-submit");

const handleClick = (e) => {
  const checkbox = e.target;

  if (checkbox.textContent === "❏") {
    checkbox.textContent = "☑";
  } else {
    checkbox.textContent = "❏";
  }
};

buttonSubmitMonday.addEventListener("click", (e) => {
  const timetableItem = e.target.closest(".timetable-item");
  const ul = timetableItem.querySelector("ul");

  if (inputMonday.value.length > 0) {
    ul.insertAdjacentHTML(
      "beforeend",
      `<li><button class="checkbox">❏</button> ${inputMonday.value}</li>`
    );

    const checkboxes = document.querySelectorAll(".checkbox");
    const targetCheckbox = checkboxes[checkboxes.length - 1];
    targetCheckbox.addEventListener("click", handleClick);

    inputMonday.value = "";
  }
});

const checkboxes = document.querySelectorAll(".checkbox");
checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("click", handleClick);
});

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
