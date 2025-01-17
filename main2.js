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
