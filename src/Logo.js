import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-icon truck">
        🚚 {/* Truck emoji */}
      </div>
      <div className="logo-icon airplane flying">
        ✈️ {/* Airplane emoji */}
      </div>
      <div className="logo-text">
        <span className="logo-rb">RB</span>
        <span className="logo-couriers">Couriers</span>
      </div>
    </div>
  );
};

export default Logo;
