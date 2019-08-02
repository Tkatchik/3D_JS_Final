const validationPhone = () => {
    const phone = document.querySelectorAll('.form-phone');
    phone.forEach((elem) => {
        elem.addEventListener('input', (item) => {
            item.target.value = item.target.value.replace(/[^\+\d]/g, '');

        });
    });
};
validationPhone();

const validationForm = () => {
    document.body.addEventListener('input', (event) => {
        if (event.target.matches('.form-name, #form2-name, .mess')) {
            event.target.value = event.target.value.replace(/[^а-я]/gi, '');
        }
    });

};

export default validationForm;