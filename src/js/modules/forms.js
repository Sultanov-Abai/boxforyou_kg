const forms = (formSelector, formIdSelector, formNameSelector, formPhoneSelector, formSumSelector,thanksFormSelector, grossSelector) => {
    const form = document.querySelector(formSelector),
          formId = document.querySelector(formIdSelector),
          formName = document.querySelector(formNameSelector),
          formPhone = document.querySelector(formPhoneSelector),
          formSum = document.querySelector(formSumSelector),
          thanksForm = document.querySelector(thanksFormSelector),
          gross = document.querySelector(grossSelector);
    let id = 1;
    
    const addId = () => {
        formId.value = id;
    };

    addId();

    form.addEventListener('submit', e => {
        e.preventDefault();
        
        let formData = new FormData(form);
        let request = new XMLHttpRequest();

        request.open('POST', 'mailer/smart.php', true);
        request.send(formData);

        formName.value = '';
        formPhone.value = '';
        formSum.value = '';

        id = id + 1;
        addId();

        gross.style.display = 'none';
        thanksForm.style.display = 'block';
    });
};

export default forms;