//slider section9
document.addEventListener('DOMContentLoaded', () => {
    const items9 = document.querySelectorAll('.section9__list-img');
    const indexs9 = document.querySelectorAll('.index__list-box');
    const customer = document.querySelector('.section9__customer-img');
    
    let section9__count = items9[1].clientWidth;  
    let section9__lenght = customer.clientWidth; 
    const style = window.getComputedStyle(customer);
    let gap = parseInt(style.getPropertyValue('gap')); 
    let count = 0;
    const totalItems = items9.length;

    customer.setAttribute('tabindex', '-1');

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }

    function updateSlide(newCount) {
        let cnt = newCount - Math.floor((section9__lenght / (section9__count + gap))-1);
        if(section9__lenght < (section9__count + gap) * (newCount + 1)){
            if(newCount == totalItems - 1){
                customer.style.transform = `translateX(${-cnt * (section9__count + gap) + (section9__lenght - ((section9__count + gap) *
                Math.floor(section9__lenght / (section9__count + gap)) - gap))}px)`; 
            }else{
                customer.style.transform = `translateX(${-cnt * (section9__count + gap)}px)`;
            }
        } else if(section9__lenght > (section9__count + gap) * (newCount + 1)){
            customer.style.transform = `translateX(0px)`; 
        }

        items9[count].classList.remove('section9__list-img-active');
        indexs9[count].classList.remove('index__list-active');
        count = newCount;
        items9[count].classList.add('section9__list-img-active');
        indexs9[count].classList.add('index__list-active');
    }

    function slideRight() {
        if (count < totalItems - 1) {
            updateSlide(count + 1);
        }
    }

    function slideLeft() {
        if (count > 0) {
            updateSlide(count - 1);
        }
    }

  
    let hasListenerAdded = false;


   
    window.addEventListener('scroll', () => {
        if (isInViewport(customer) && !hasListenerAdded) {
            customer.focus();
            document.addEventListener('keydown', (e) => {
                if (e.key === 'ArrowRight') {
                    slideRight();
                } else if (e.key === 'ArrowLeft') {
                    slideLeft();
                }
            });
            hasListenerAdded = true; 
        }
    });
});
