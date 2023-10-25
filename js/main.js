const elSecondItem  = document.querySelector(".registration-tabs__item:nth-child(2)");
const elThirdItem  = document.querySelector(".registration-tabs__item:nth-child(3)");
const elModalContainer = document.querySelector(".modal-container");
const elModalButton  = document.querySelector(".modal__button");




if (elSecondItem) {
    elSecondItem.addEventListener('click',function () {
           elModalContainer.classList.add("modal-container--open")
    })
}


if (elThirdItem) {
    elThirdItem.addEventListener('click',function () {
        elModalContainer.classList.add("modal-container--open")
    })
}

if (elModalButton) {
    elModalButton.addEventListener('click',function () {
        elModalContainer.classList.remove("modal-container--open")
    })
}

