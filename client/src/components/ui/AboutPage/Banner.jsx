import React from 'react';

const Banner = ({ image, title }) => {
    return (
        <div
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.4)), url(${image})`,
                backgroundSize: 'fill',
                backgroundPosition: 'center',
                width: '100%',
                height: '60vh',
                position: 'relative',
            }}
        >
            <div>
                <h1 className="fw-bold" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
                    {title}
                </h1>
            </div>
        </div>
    );
};

export default Banner;
