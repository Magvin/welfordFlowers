import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer__useful-links">

                <ul>
                    <a href="/">
                        <li>FAQ</li>
                    </a>
                    <a href="/">
                        <li>DELIVERY & RETURNS</li>
                    </a>
                    <a href="/">
                        <li>TERMS & CONDITIONS</li>
                    </a>
                    <a href="/">
                        <li>CONTACT US</li>
                    </a>
                </ul>
            </div>
            <div className="footer__social-links">
                <i className="fab fa-twitter"></i>
                <i className="fab fa-facebook"></i>
                <i className="fab fa-instagram"></i>
            </div>
            <div className="footer__copyright">
                <span>COPYRIGHT 2017</span>
                <span>Made in Yorkshire.</span>
            </div>
        </footer>
    )
}

export default Footer
