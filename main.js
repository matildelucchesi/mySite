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
    displayInnerSearch();
});

document.addEventListener('click', e => {
    const isDropdownButton = e.target.matches('[data-dropdown-button]');
    const overlay = document.querySelector('.overlay');
    const d = document.querySelector('.dropdown-menu');
    if (!isDropdownButton && e.target.closest('[data-dropdown]') != null) return;

    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest('[data-dropdown]');
        currentDropdown.classList.toggle('active');
        console.log('Dropdown:', currentDropdown, 'active:', currentDropdown.classList.contains('active'));

        if (currentDropdown.classList.contains('active')) {
            d.style.overflowY = 'auto';
            overlay.style.display = 'block';

        } else {
            overlay.style.display = 'none';
            d.style.overflowY = 'hidden';
        }
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
        console.log('Dropdown:', dropdown, 'active:', dropdown.classList.contains('active'));
        overlay.style.display = 'none';
        d.style.overflowY = 'hidden';
    });
});

window.addEventListener('resize', () => {
    displayInnerSearch();
});


document.addEventListener('click', e=>{
    const isDropdownSearch = e.target.matches('[search-dropdown-button]');
    const menu = document.querySelector('.dropdown-search-menu');
    const elements = document.querySelectorAll('[search-menu]');
    let currentDropdown;
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
    const hn = document.querySelector('.hn');
    const second = document.querySelector('#menu-second-nav');
    const third = document.querySelector('#menu-third-nav');
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
            hn.style.height = '55em';

            if(window.innerWidth < 1080){
                second.style.transform = 'translateY(198px)';
                third.style.transform = 'translateY(195px)';
                log.style.transform = 'translateY(144px)';
            }else{
                second.style.transform = 'translateY(120px)';
                third.style.transform = 'translateY(120px)';
                log.style.transform = 'translateY(120px)';
            }

        } else {
            arrow.style.transform = 'rotate(0deg)';
            menu.style.display = 'none';
            menu.style.transform = 'translateY(-1px)';
            hn.style.height = '54em';

            if(window.innerWidth < 1080){
                second.style.transform = 'translateY(75px)';
                third.style.transform = 'translateY(75px)';
                log.style.transform = 'translateY(30px)';
            }else{
                second.style.transform = 'translateY(0px)';
                third.style.transform = 'translateY(0px)';
                log.style.transform = 'translateY(0px)';
            }
        }
    }

    document.querySelectorAll("[sub-menu-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return;
        dropdown.classList.remove('active');
        console.log('Dropdown:', dropdown, 'active:', dropdown.classList.contains('active'));
        arrow.style.transform = 'rotate(0deg)';
        menu.style.display = 'none';
        menu.style.transform = 'translateY(-1px)';
        second.style.transform = 'translateY(0px)';
        third.style.transform = 'translateY(0px)';
        log.style.transform = 'translateY(0px)';
    });

});

function displayInnerSearch(){
    const search = document.querySelector('.search-inner');
    if (window.innerWidth < 1080) {
        search.style.display = 'flex';
    }else{
        search.style.display = 'none';
    }
}

