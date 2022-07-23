
import throttle from "lodash.throttle";

const KEY = "feedback-form-state";

const refs = {

    form: document.querySelector('.feedback-form'),
    input: document.querySelector('[name="email"]'),
    textarea: document.querySelector('[name="message"]'),
}

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

const savedData = JSON.parse(localStorage.getItem(KEY));

if(savedData !== null){

 refs.input.value = savedData.email;
 refs.textarea.value = savedData.message;  // використовуємо атрибут name
};

function onFormInput(event){

    let data = { 
        email: '',
        message: '',
    };

    const obj = JSON.parse(localStorage.getItem(KEY));
    
    if(obj !== null){

    data = obj;

    };

    data[event.target.name] = event.target.value;

    // таке рішення викор. коли завчасно невідомо назви полів 

    localStorage.setItem(KEY, JSON.stringify(data));

};

function onFormSubmit(event){

event.preventDefault();

event.target.reset();
console.log(JSON.parse(localStorage.getItem(KEY)));
localStorage.removeItem(KEY);

};

