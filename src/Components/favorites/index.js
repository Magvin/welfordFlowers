import React from 'react'

function Favorites() {
    return (
        <div className='favorites'>
            <div className="favorites__heading">
                <h2>our favorites</h2>
                <span>Lorem ipsum dolor sit amet.</span>

            </div>
            <div className="favorites__products">
                <div className="favorites__products-box">
                    <div className="favorites__products-box-img-one">
                        <div className="sales__tag">
                            <span>Sale</span>
                        </div>

                    </div>
                    <span>WEST CLIFF</span>
                    <div className="favorites__products-box--price">
                        <del>£ 290.00</del>
                        <span>£ 250.00</span>
                    </div>

                </div>
                <div className="favorites__products-box">
                    <div className="favorites__products-box-img-two">


                    </div>
                    <span>ESK</span>
                    <div className="favorites__products-box--price">
                        <span>£ 110.00</span>
                    </div>

                </div>
                <div className="favorites__products-box">
                    <div className="favorites__products-box-img-three">
                    </div>
                    <span>SANDSEND</span>
                    <div className="favorites__products-box--price">
                        <span>£ 360.00</span>
                    </div>

                </div>
                <div className="favorites__products-box">
                    <div className="favorites__products-box-img-four">

                    </div>
                    <span>WEST CLIFF CUSHION</span>
                    <div className="favorites__products-box--price">
                        <span>£ 250.00</span>
                    </div>

                </div>


            </div>


        </div>
    )
}

export default Favorites
