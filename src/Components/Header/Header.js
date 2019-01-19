import React from 'react'
import Search from '../../img/search.svg'
import Cart from '../../img/cart.svg'



// Function to rotate hamurger menu

function showMenu(e) {

    const menu = document.querySelector('.header__primary-hamburger');
    const navigation = document.querySelector('.header__secondary');
    if (menu.children[1].style.display === '') {
        //variable for navigation


        // 3 spans from menu
        menu.children[0].style.transition = 'all .4s'
        menu.children[0].style.transform = 'translateX(-50%) rotate(40deg)';
        menu.children[0].style.top = '1.5rem'
        menu.children[2].style.transition = 'all .4s'
        menu.children[2].style.transform = 'translateX(-50%) rotate(-40deg)';
        menu.children[2].style.top = '1.5rem';
        menu.children[1].style.display = 'none';
        navigation.style.display = 'block'


    } else if (menu.children[1].style.display === 'none') {
        menu.children[0].style.transform = 'translateX(-50%)';
        menu.children[0].style.top = '0.5rem';
        menu.children[1].style.transition = 'all .4s'
        menu.children[1].style.display = '';
        menu.children[2].style.transform = 'translateX(-50%)';
        menu.children[2].style.top = '2.5rem';
        navigation.style.display = ''



    }

}

function Header() {
    return (
        <div className='header'>
            <div className="header__primary">
                <h1>welford bouquet</h1>
                <div className="header__primary-hamburger" onClick={showMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            <div className="header__secondary">
                <nav>

                    <ul>
                        <img src={Search} alt="search-icon" />
                        <a href="/">
                            <li>Home</li>
                        </a>
                        <a href="/">
                            <li>Shop</li>
                        </a>
                        <a href="/">
                            <li>Our Story</li>
                        </a>
                        <a href="/">
                            <li>Exhibitions</li>
                        </a>
                        <a href="/">
                            <li>Commisions</li>
                        </a>
                        <a href="/">
                            <li>Blog</li>
                        </a>
                        <a href="/">
                            <li>Contact</li>
                        </a>
                        <img src={Cart} alt="cart-icon" />
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
