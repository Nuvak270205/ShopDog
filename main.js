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

// phần nhận email
const listemmail = ['duong703909@gmail.com'];
const emailForm = document.querySelector('.section4__enter-box');
const emailInput = document.querySelector('.section4__enter-input');
const testemail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function toast({ title = '', message = '', type = 'info', duration = 3000 }) {
    const toastContainer = document.querySelector('.content');
    if (toastContainer) {
        const toast = document.createElement('div');
        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-circle-exclamation',
            error: 'fa-solid fa-circle-xmark'
        };
        const icon = icons[type];
        const autoRemoveTime = duration + 1000;

        toast.className = `toast toast--${type}`;
        toast.innerHTML = `
            <div class="toast__icon">
                <i class="${icon}"></i>
            </div>
            <div class="toast__body">
                <h3 class="toast__title">${title}</h3>
                <p class="toast__msg">${message}</p>
            </div>
            <div class="toast__close">
                <i class="fa-solid fa-xmark"></i>
            </div>
        `;
        
        toastContainer.appendChild(toast);

        // Tự động xóa sau khi hết thời gian
        setTimeout(() => {
            toastContainer.removeChild(toast);
        }, autoRemoveTime);

        // Xóa khi nhấn nút đóng
        toast.querySelector('.toast__close').addEventListener('click', () => {
            toastContainer.removeChild(toast);
        });
    }
}

function showSuccessToast() {
    toast({
        title: 'Success',
        message: 'Đăng ký thành công. Cảm ơn bạn đã đăng ký.',
        type: 'success',
        duration: 2000
    });
}

function showErrorToast() {
    toast({
        title: 'Error',
        message: 'Email không hợp lệ hoặc đã được đăng ký.',
        type: 'error',
        duration: 2000
    });
}

emailForm.addEventListener('submit', function(e) {
    e.preventDefault();

    if (!testemail.test(emailInput.value) || listemmail.includes(emailInput.value)) {
        emailInput.style.setProperty('border', '2px solid rgba(226, 122, 122, 0.93)', 'important');
        showErrorToast();
    } else {
        emailInput.style.setProperty('border', '2px solid rgba(149, 233, 149, 0.93)', 'important');
        showSuccessToast();
        setTimeout(() => {
            emailForm.submit();
        }, 3000);
    }
});

