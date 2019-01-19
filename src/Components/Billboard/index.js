import React from 'react'
import AmyShamblen from '../../img/amy-shamblen.jpg'

function Billboard() {
    return (
        <div className='billboard'>
            <div className="billboard__img">
                <img src={AmyShamblen} alt="amy-shamblen-flowers" />
            </div>
            <div className="billboard__action">
                <div className="billboard__action--bck">
                    <div className="billboard__action--bck-text">
                        <span>Take a Look</span>
                        <span>The Whitby Range</span>
                        <span></span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Billboard
