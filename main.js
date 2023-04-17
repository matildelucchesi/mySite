function displayDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);
    const container = document.getElementById('bottom-header');
    const paragraph = document.createElement('p');
    paragraph.textContent = date;
    paragraph.classList.add('date');
    container.appendChild(paragraph);
}

document.addEventListener('DOMContentLoaded', function() {
    displayDate();
});

document.addEventListener('click', e=>{
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    const overlay = document.querySelector('.overlay');
    if(!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown
    if(isDropdownButton){
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
        console.log('Dropdown:', currentDropdown, 'active:', currentDropdown.classList.contains('active'));

        if (overlay.style.display === 'block') {
            overlay.style.display = 'none';
        } else {
            overlay.style.display = 'block';
        }
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
        console.log('Dropdown:', dropdown, 'active:', dropdown.classList.contains('active'));
        overlay.style.display = 'none';
    });

});

let currentDropdown;

document.addEventListener('click', e=>{
    const isDropdownSearch = e.target.matches('[search-dropdown-button]');
    const menu = document.querySelector('.dropdown-search-menu');
    const elements = document.querySelectorAll('[search-menu]');
    if(!isDropdownSearch && e.target.closest('[search-dropdown]') != null) return;

    if(isDropdownSearch){
        currentDropdown = e.target.closest('[search-dropdown]');
        if (currentDropdown) {
            currentDropdown.classList.toggle('active');
            console.log('Dropdown:', currentDropdown, 'active:', currentDropdown.classList.contains('active'));

            if (menu && currentDropdown.classList.contains('active')) {
                menu.style.opacity = '1';
                menu.style.transform = 'translateY(1px)';
                elements.forEach(element => {
                    element.style.visibility = 'visible';
                });
            } else if (menu) {
                menu.style.opacity = '0';
                menu.style.transform = 'translateY(-1px)';
                elements.forEach(element => {
                    element.style.visibility = 'hidden';
                });
            }
        }
    }

    if(!e.target.matches('[search-dropdown-button]') && !e.target.matches('[search-menu]')){
        if(currentDropdown) {
            currentDropdown.classList.remove('active');
            console.log('Dropdown:', currentDropdown, 'active:', currentDropdown.classList.contains('active'));
        }
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-1px)';
        elements.forEach(element => {
            element.style.visibility = 'hidden';
        });
    }
});


document.addEventListener('click', e=>{
    const isDropdownButton = e.target.matches('[sub-menu-dropdown-button]');
    const arrow = document.querySelector('.arrow');
    const menu = document.querySelector('.sub-menu-dropdown');
    const elements = document.querySelectorAll('[second-style]');
    const hn = document.querySelector('.hn');
    const log = document.querySelector('.login-container');
    if(!isDropdownButton && e.target.closest('[sub-menu-dropdown]') != null) return;

    let currentDropdown
    if(isDropdownButton){
        currentDropdown = e.target.closest('[sub-menu-dropdown]');
        currentDropdown.classList.toggle('active');
        console.log('Dropdown:', currentDropdown, 'active:', currentDropdown.classList.contains('active'));

        if (currentDropdown.classList.contains('active')) {
            arrow.style.transform = 'rotate(180deg)';
            menu.style.display = 'block';
            menu.style.transform = 'translateY(1px)';
            elements.forEach(element => {
                element.style.transform = 'translateY(190px)';
            });
            log.style.transform = 'translateY(150px)'
            hn.style.height = '55em';
        } else {
            arrow.style.transform = 'rotate(0deg)';
            menu.style.display = 'none';
            menu.style.transform = 'translateY(-1px)';
            elements.forEach(element => {
                element.style.transform = 'translateY(80px)';
            });
            log.style.transform = 'translateY(40px)';
            hn.style.height = '54em';
        }
    }

    document.querySelectorAll("[sub-menu-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
        console.log('Dropdown:', dropdown, 'active:', dropdown.classList.contains('active'));
        arrow.style.transform = 'rotate(0deg)';
        menu.style.display = 'none';
        menu.style.transform = 'translateY(-1px)';
        elements.forEach(element => {
            element.style.transform = 'translateY(80px)';
        });
        log.style.transform = 'translateY(40px)';
    });

});


function resizeDropdownMenu(){
    const search = document.querySelector('.search-inner');
    const header = document.querySelector('.header-nav');
    const second = document.querySelector('#menu-second-nav');
    const third = document.querySelector('#menu-third-nav');
    const log = document.querySelector('.login-container');

    if (window.innerWidth < 1080){
        search.style.display = 'flex';
        header.style.transform = 'translateY(15px)';
        second.style.transform = 'translateY(80px)';
        third.style.transform = 'translateY(70px)';
        log.style.transform = 'translateY(14px)';
    }else{
        search.style.display = 'none';
        header.style.transform = 'translateY(-70px)';
        second.style.transform = 'translateY(-10px)';
        third.style.transform = 'translateY(-10px)';
        log.style.transform = 'translateY(-10px)';
    }
}

window.onload = resizeDropdownMenu;
window.onresize = resizeDropdownMenu;