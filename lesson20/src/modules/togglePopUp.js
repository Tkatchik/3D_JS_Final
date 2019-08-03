const togglePopUp = () => {
    let popUp = document.querySelector('.popup'),
        popUpContent = document.querySelector('.popup-content'),
        popUpBtn = document.querySelectorAll('.popup-btn'),
        count = 0,
        moveAnimation;

    const popUpAnimate = () => {
        moveAnimation = requestAnimationFrame(popUpAnimate);

        if (count < 50) {
            count += 1;
            popUpContent.style = `transform: translateY(-${count}px)`; // counter, moving
        } else {
            cancelAnimationFrame(moveAnimation);
        }
    };
    const getAnim = () => {
        if (screen.width > 760) {
            popUp.style = `display: block`;
            popUpAnimate();
        } else {
            popUp.style = `display: block`;
        }
    };
    popUpBtn.forEach((item) => {
        item.addEventListener('click', () => {
            getAnim();
        });
    });
    popUp.addEventListener('click', (event) => {
        let target = event.target;

        if (target.classList.contains('popup-close')) {
            popUp.style.display = 'none';
            count = 0;
        } else {
            target = target.closest('.popup-content');

            if (!target) {
                popUp.style.display = 'none';
            }
        }
    });
}; //const togglePopUp

export default togglePopUp;