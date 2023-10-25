export default () => {
    try {
        const registrationInfoTabs = document.querySelectorAll('.registration-tabs__item--hint');
        const modalBackdrop = document.querySelector('.modal-container');
        const modalCloserElements = document.querySelectorAll('[data-modal-closer]')

        const closeModal = () => {
            modalBackdrop.classList.remove('modal-container--open');
        }

        modalCloserElements.forEach(el => {
            el.addEventListener('click', e => {
                if (e.target.hasAttribute('data-modal-closer')) {
                    closeModal();
                }
            })
        })

        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') {
                closeModal();
            }
        })

        registrationInfoTabs.forEach(el => {
            el.addEventListener('click', () => {
                modalBackdrop.classList.add('modal-container--open');
            })
        })
    } catch (e) {}
}

