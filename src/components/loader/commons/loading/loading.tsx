import React from 'react';
import './loading.scss';

const Loading = () => (
    <div className="overlay">
        <div className="splash">
            <div className="splash-title">
                <h1 className="tdp-font-hand-35">Cargando...</h1>
                <div className="image-wrapper">
                    <img
                        alt="loader"
                        src={`${process.env.PUBLIC_URL}/assets/images/loader.svg`}
                        width="64"
                        height="64"
                    />
                </div>
            </div>
        </div>
    </div>
);

export default Loading;
