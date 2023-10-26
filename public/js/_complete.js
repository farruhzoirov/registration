export default () => {
    try {
        if (window.location.href.includes('complete.html')) {
            const userNameElement = document.getElementById('completeUserName');
            const userTariffElement = document.getElementById('completeTariff');
            const { name, tariff } = JSON.parse(localStorage.getItem('user'));

            userNameElement.textContent = name;
            userTariffElement.textContent = `${ tariff === '1' ? 'STANDARD' : tariff === '2' ? 'PREMIUM' : 'VIP' }`
        }
    } catch (e) {
    }
}
