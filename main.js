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







