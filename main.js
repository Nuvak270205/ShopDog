// Mở phần tìm kiếm
const search = document.querySelector('.js__search');
const searchElement = document.querySelector('.sub__search');
const searchbox = document.querySelector('.sub__search');
const searchInput = document.querySelector('.sub__search-input');

const openSearch = function(){
    search.style.opacity = '0';
    searchElement.classList.add('open');
}
const closeSearch = function(){
    searchElement.classList.remove('open');
    search.style.opacity = '1';
}
search.addEventListener('click', openSearch);

document.querySelector('.RegisterNow__icon').addEventListener('click', closeSearch);

searchbox.addEventListener('click', closeSearch);

searchInput.addEventListener('click', function(event){
    event.stopPropagation();
});


// Phần menu

const menu = document.querySelector('.menu-icon');
const menuElement = document.querySelector('.sub__menu-list');
const menuBox = document.querySelector('.sub__menu-list');
const menuBody = document.querySelector('.menu__body');

const openMenu = function(){
    search.style.opacity = '0';
    menuElement.classList.add('open');
}

const closeMenu = function(){
    menuElement.classList.remove('open');
    search.style.opacity = '1';
}

menu.addEventListener('click', openMenu);

document.querySelector('.RegisterNow__icon').addEventListener('click', closeMenu);

menuBox.addEventListener('click', closeMenu);

menuBody.addEventListener('click', function(event){
    event.stopPropagation();
});

// Phần mở bộ lọc

const filter = document.querySelector('.section6__filter-header');
const filterElement = document.querySelector('.section6__filter-body');

const openFilter = function(){
    filterElement.classList.toggle('open');
}
const closeFilter = function(){
    filterElement.classList.remove('open');
}


filter.addEventListener('click', openFilter);
if(filterElement.classList.contains('open')){
    document.addEventListener('click', closeFilter);
}

let items = document.querySelectorAll('.body__items');
let itemsSex = document.querySelectorAll('.js__sex');
let itemsColor = document.querySelectorAll('.items__body-color');
let itemsSize = document.querySelectorAll('.items__body-size');
const inputElements = document.querySelectorAll('.filter__body-check input[type="radio"]');

function filterItems() {
    let gioiTinh = '';
    let mauSac = '';
    let kichThuoc = '';

    for (let ip of inputElements) {
        if (ip.checked) {
            if (ip.value === 'Cái' || ip.value === 'Đực') {
                gioiTinh = ip.value.toLowerCase();
            } else if (ip.value === 'Xám' || ip.value === 'Đen' || ip.value === 'Trắng') {
                mauSac = ip.value.toLowerCase();
            } else {
                kichThuoc = ip.value.toLowerCase();
            }
        }
    }


    let filteredItems = Array.from(items); 
    filteredItems.forEach((item, index) => {
        const sexText = itemsSex[index].innerText.trim().toLowerCase();
        const colorText = itemsColor[index].innerText.trim().toLowerCase();
        const sizeText = itemsSize[index].innerText.trim().toLowerCase();

    
        if (
            (gioiTinh && !sexText.includes(gioiTinh)) ||
            (mauSac && !colorText.includes(mauSac)) ||
            (kichThuoc && !sizeText.includes(kichThuoc))
        ) {
            item.style.display = 'none';
        } else {
            item.style.display = 'block';
        }
    });
}


inputElements.forEach((input) => {
    input.addEventListener('change', filterItems);
});



