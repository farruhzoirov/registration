import redirect from './_redirect';

export default () => {
    try {
        const registerForm = document.querySelector('.registration-form');
        const registerError = document.querySelector('.registration-form__error');
        const registerNameInput = document.querySelector('#name-input');
        const registerPhoneInput = document.querySelector('#phone');
        const registerTariffSelect = document.querySelector('#tariff-select');
        const registerSubmitButton = document.querySelector('#submit-button');

        registerForm.addEventListener('submit', e => {
            e.preventDefault();

            const name = registerNameInput.value.trim();
            const phone = registerPhoneInput.value.replace(/\D/g,'');
            const tariff = registerTariffSelect.value;

            if (!name?.length) {
                registerError.textContent = 'Ismingizni kiriting';
                registerError.classList.add('registration-form__error--show');
                return;
            }
            if (phone?.length !== 12) {
                registerError.textContent = 'Raqamingizni kiriting';
                registerError.classList.add('registration-form__error--show');
                return;
            }
            if (!['1', '2', '3'].includes(tariff)) {
                registerError.textContent = 'Tarifni tanlang';
                registerError.classList.add('registration-form__error--show');
                return;
            }

            registerError.classList.remove('registration-form__error--show');

            localStorage.setItem('user', JSON.stringify({
                name, phone, tariff
            }))

            redirect('payment.html');
        })
    } catch (e) {
    }
}
