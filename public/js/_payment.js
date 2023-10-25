import redirect from './_redirect';

export default () => {
    if (window.location.href.includes('gift')) {
        try {
            const user = JSON.parse(localStorage.getItem('user'))

            if (!user || !user?.name?.length || user?.phone?.length !== 12) {
                localStorage.clear();
                redirect('');
                return;
            }
        } catch (e) {
            localStorage.clear();
            redirect('');
        }
    }
}
