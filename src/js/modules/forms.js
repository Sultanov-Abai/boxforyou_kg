const forms = (formSelector, formIdSelector, formNameSelector, formPhoneSelector, formSumSelector,thanksFormSelector, grossSelector) => {
    const form = document.querySelector(formSelector),
          formId = document.querySelector(formIdSelector),
          formName = document.querySelector(formNameSelector),
          formPhone = document.querySelector(formPhoneSelector),
          formSum = document.querySelector(formSumSelector),
          thanksForm = document.querySelector(thanksFormSelector),
          gross = document.querySelector(grossSelector);

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        let formData = new FormData(form),
            request = new XMLHttpRequest(),
            idNum = localStorage.getItem('orderId');

        request.open('POST', 'mailer/smart.php', true);
        request.send(formData);

        formName.value = '';
        formPhone.value = '';
        formSum.value = '';

        idNum =  localStorage.setItem('orderId', +idNum + 1);
        formId.value = +localStorage.getItem('orderId');
        // console.log(localStorage.setItem('orderId', +idNum + 1));
        // console.log(idNum);

        gross.style.display = 'none';
        thanksForm.style.display = 'block';
    });
};

export default forms;