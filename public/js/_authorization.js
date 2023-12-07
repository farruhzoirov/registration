import redirect from './_redirect';

export default () => {
    try {
        const href = window.location.href;
        const user = JSON.parse(localStorage.getItem('user'));
        const userNotStored = !user || !user?.time || !user?.name?.length || user?.phone?.length !== 12 || !['1', '2', '3'].includes(user?.tariff);

        if (href.includes('payment.html')) {
            localStorage.removeItem('payed');
            if (userNotStored) {
                redirect('');
            }
            return;
        }
        if (href.includes('complete.html')) {
            const payed = localStorage.getItem('payed');
            if (userNotStored || payed !== 'true') {
                redirect('');
            }
            return;
        }
        localStorage.clear();
    } catch (e) {
        redirect('');
    }
}
