import React, { Component } from 'react';
import headerLogo from '../assets/img/logo.png';
class Header extends Component {
    render() {
        return (
            <header className="main_header" id="main_header">
                <div className="nav">
                    <div className="main_header-logo">
                        <img src={ headerLogo } alt={""}/>
                    </div>
                    <ul className="main_header-menu">
                        <li><a href="">personal plans</a></li>
                        <li><a href="">business plans</a></li>
                        <li><a href="">guide</a></li>
                        <li><a href="">blog</a></li>
                    </ul>
                </div>
            </header>
        );
      };
}

export default Header;
