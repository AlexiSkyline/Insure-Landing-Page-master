const icono = document.querySelector( '.icon_hamburger' );
const menu = document.querySelector( '.menu' );

icono.addEventListener( 'click', () => {
    menu.classList.toggle( 'active' );
});
icono.addEventListener( 'click', () => {
    icono.classList.toggle( 'active' );
});

