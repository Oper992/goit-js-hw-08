var throttle = require('lodash.throttle');
const formRef = document.querySelector('.feedback-form');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const localStorageValue = load(LOCALSTORAGE_KEY);
const inputValue = {};

updateInput(localStorageValue);

const setInputValueForm = e => {
  e.preventDefault();

  const formData = new FormData(formRef);
  formData.forEach((value, key) => {
    if (key === 'email') {
      inputValue.email = value;
    } else {
      inputValue.message = value;
    }
  });

  save(inputValue);
};

function save(obj) {
  try {
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(obj));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
}

function load(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
}

function updateInput(obj) {
  if (obj !== undefined) {
    formRef.elements.email.value = obj.email;
    formRef.elements.message.value = obj.message;
  }
}

const formClear = e => {

  e.preventDefault();
  if (inputValue.email && inputValue.message) {
    formRef.reset();
    localStorage.clear();
    console.log(inputValue);
  } else {
    window.alert("Заполни все поля побратски...")
  }
};

formRef.addEventListener('input', throttle(setInputValueForm, 500));
formRef.addEventListener('submit', formClear);
// console.log(localStorageValue)
