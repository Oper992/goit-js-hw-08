const formRef = document.querySelector('.feedback-form');

const setInputValueForm = e => {
    e.preventDefault()

    const inputValue = {}
    // if(e.type !== "input"){
    //     return
    // }
    const formData = new FormData(formRef)
formData.forEach((value, key) => console.log({value, key}))
    

    inputValue.email = e.currentTarget.value
    inputValue.message = e.data

    console.log(inputValue)
  localStorage.setItem("feedback-form-state", )
};

formRef.addEventListener('input', setInputValueForm);

