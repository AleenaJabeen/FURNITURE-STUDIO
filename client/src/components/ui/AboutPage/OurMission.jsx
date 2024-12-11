import React from 'react';
import { mission } from '../../../assets';

const OurMission = () => {
    return (
        <div
            className="d-flex align-items-center justify-content-center text-white text-center"
            style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.4)), url(${mission})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                width: '100%',
                height: window.innerWidth < 768?"100vh":"90vh",
                position: 'relative',

            }}
        >
            <div className='mission col-lg-6 col-9' style={{background:"#000000",padding:innerWidth<768?"1rem":"4rem"}}>
                <h2 className="display-4 py-4" style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',color:"#caa571"
                 }}>
                    Our Mission
                </h2>
                <p className='text-white' style={{lineHeight:"1.5"}}>Furniture Studio grandstands the best in the work of art when it comes to delivering an extravagant interior to your living spaces. Our opulent collections are made by widely acclaimed manufacturers from all around the world and virtuoso glassmakers.</p>
            </div>
        </div>
    );
};

export default OurMission;
