import redirect from './_redirect';

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
    } catch (e) {
        redirect('')
    }
}
