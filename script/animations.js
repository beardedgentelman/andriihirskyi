// header scroll animation

document.addEventListener('DOMContentLoaded', () => {
    const mainIntrodction = document.querySelector('.main__introdction');
    const header = document.querySelector('.header');
    const scrollItems = document.querySelectorAll('.scroll-item');

    
    const scrollAnimation = () => {
        let windowCenter = window.innerHeight + window.scrollY;
        scrollItems.forEach(el => {
            let scrollOffset = el.offsetTop + el.offsetHeight / 4;
            if (windowCenter >= scrollOffset) {
                el.classList.add('animation-class');
            } else {
                el.classList.remove('animation-class');
            }
        });

    };



    const headerFixed = () => {
        let scrollTop = window.scrollY;
        let mainIntrodctionCenter = mainIntrodction.offsetHeight / 4;

        if (scrollTop >= mainIntrodctionCenter) {

            header.style= "background-color: #101010";
            // header.classList.add('fixed');
            // document.getElementsByClassName('mystyle')[0].style= "margin: 50px";
        } else {

            header.style= "background-color: #10101020";
            // header.classList.remove('fixed');
        }
        
    };

    scrollAnimation();
    headerFixed();
    window.addEventListener('scroll', () => {
        scrollAnimation();
        headerFixed();
    });
});