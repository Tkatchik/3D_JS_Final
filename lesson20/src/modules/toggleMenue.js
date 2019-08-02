const toggleMenue = () => {
    const menu = document.querySelector('menu');

    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.body.addEventListener('click', (event) => {
        let target = event.target;

        if (menu.classList.contains('active-menu')) {

            if (target.closest('.active-menu a') || !target.closest('.active-menu')) {
                handlerMenu();
            }

        } else if (target.closest('.menu')) {
            handlerMenu();
        }
    });
}; //const toggleMenue

export default toggleMenue;