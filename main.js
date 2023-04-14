function displayDate() {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date().toLocaleDateString('en-US', options);
    const container = document.getElementById('bottom_header');
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
    if(!isDropdownSearch && e.target.closest('[search-dropdown]') != null) return;

    if(isDropdownSearch){
        currentDropdown = e.target.closest('[search-dropdown]');
        if (currentDropdown) {
            currentDropdown.classList.toggle('active');
            console.log('Dropdown:', currentDropdown, 'active:', currentDropdown.classList.contains('active'));

            if (menu && currentDropdown.classList.contains('active')) {
                menu.style.opacity = '1';
                menu.style.transform = 'translateY(1px)';
            } else if (menu) {
                menu.style.opacity = '0';
                menu.style.transform = 'translateY(-1px)';
            }
        }
    }

    if(!e.target.matches('[search-dropdown-button]') && !e.target.matches('[search-menu]')){
        currentDropdown.classList.remove('active');
        console.log('Dropdown:', currentDropdown, 'active:', currentDropdown.classList.contains('active'));
        menu.style.opacity = '0';
        menu.style.transform = 'translateY(-1px)';
    }
});