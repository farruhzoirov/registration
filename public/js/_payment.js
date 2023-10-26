import redirect from './_redirect';
import {_config} from "./_config";

export default () => {
    try {
        const userNameElement = document.getElementById('userName');
        const userLetterElement = document.getElementById('userLetter');
        const userPhoneElement = document.getElementById('userPhone');
        const userTariffElement = document.getElementById('userTariff');
        const userTariffPriceElement = document.getElementById('userTariffPrice');
        const { name, phone, tariff } = JSON.parse(localStorage.getItem('user'));

        userNameElement.textContent = name;
        userLetterElement.textContent = name?.charAt(0);
        userPhoneElement.textContent = `+${phone?.slice(0, 3)} ${phone?.slice(3, 5)} ${phone?.slice(5, 8)} ${phone?.slice(8, 10)} ${phone?.slice(10, 12)}`
        userTariffElement.textContent = `${ tariff === '1' ? 'STANDARD' : tariff === '2' ? 'PREMIUM' : 'VIP' }`
        userTariffPriceElement.textContent = `${ tariff === '1' ? '897 000' : tariff === '2' ? '1 297 000' : ' 1 497 000' }`

        // Payment screenshot
        const fileInput = document.querySelector('#file-input');
        const fileNameDisplay = document.querySelector('#fileName');
        const purposesLabels = document.querySelectorAll('.selector-radio');
        const continueButton = document.querySelector('#continueButton');

        let purpose = `To'liq to'ladim`
        purposesLabels.forEach(label => {
            label.addEventListener('change', e => {
                purpose = e.currentTarget.getAttribute('data-value');
            })
        })

        let file;
        fileInput.addEventListener('change', e => {
            file = fileInput.files[0];
            fileNameDisplay.textContent = file.name;
        })

        continueButton.addEventListener('click', async e => {
            if (!file) {
                alert(`To'lovni tasdiqlovchi skrinshot faylni yuklang`);
                return;
            }
            const formData = new FormData();
            formData.append('name', name);
            formData.append('phone', phone);
            formData.append('tariff', tariff === '1' ? 'STANDARD' : tariff === '2' ? 'PREMIUM' : 'VIP');
            formData.append('purpose', purpose);
            formData.append('img', file);

            let response = await fetch(_config.HOST + 'upload-screenshot', {
                method: 'POST',
                body: formData
            })

            response = await response.json();

            if (!response.ok) {
                alert(response?.message);
                return;
            }

            console.log(response)
        })
    } catch (e) {
    }
}
