import React from 'react';

const Layout = props => 
  <div className="r3dux">
    <div className="r3dux__container">
      <header className="r3dux__header header">
        <h1 className="header__title">r3dux Series</h1>
      </header>
      <div className="r3dux__main">
        {props.children}
      </div>
    </div>
  </div>;

export default Layout;
