window.addEventListener('DOMContentLoaded', () => {

    // Hamburger

    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        });
    });

    // Modal  
    
    function openModal() {
        const modal = document.querySelector('#consultation');
        modal.style.display = 'block';
    }

    openModal();

    function closeModal() {
        const modal = document.querySelector('#consultation');
        modal.style.display = 'none';
    }

    closeModal();

    function modal() {
        const modalTrigger = document.querySelector('.subheader_btn'),
              modal = document.querySelector('#consultation');

        modalTrigger.forEach(button => {
            button.addEventListener('click', (e) => openModal());
        });
    }
});