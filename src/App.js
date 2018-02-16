import React, {Component} from 'react';

import './App.css';

import headerLogo from './assets/img/logo.png';
import iconPlitkaActive from './assets/img/icon_plitka.png';
import iconPlitkaNoActive from './assets/img/icon_plitka_.png';
import iconListActive from './assets/img/icon_list.png';
import iconListNoActive from './assets/img/icon_list_.png';

import BaseString from "./components/BaseString";

import * as dataFromFile from './data.js'

class App extends Component {

    state = {
        column: false
    };

    render() {


        let imagePlitka = iconPlitkaNoActive;
        let imageList = iconListActive;

        let tableLineClass = "table_line";

        let tableHeader = "table_head";

        if (this.state.column) {
            imagePlitka = iconPlitkaActive;
            imageList = iconListNoActive;

            tableLineClass = "table_line_switch";

            tableHeader = "table_head_switch";
        }


        return (
            <div className="general_root">
                <div className="footer_wrapper">

                    <header className="main_header" id="main_header">
                        <div className="nav">
                            <div className="main_header-logo">
                                <img src={headerLogo} alt={""}/>
                            </div>
                            <ul className="main_header-menu">
                                <li><a href="">personal plans</a></li>
                                <li><a href="">business plans</a></li>
                                <li><a href="">guide</a></li>
                                <li><a href="">blog</a></li>
                            </ul>
                        </div>
                    </header>

                    <section className="main_wrapper">

                        <div className="main_topline">
                            <div className="main_topline-name">
                                <p>Insurance list:</p>
                            </div>
                            <div className="main_topline-view_switch">
                                <div
                                    className="view_switch-list"
                                    style={{
                                        backgroundImage: 'url(' + imageList + ')',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                    onClick={() => {
                                        this.setState({column: false})
                                    }}
                                >
                                    <a href=""> </a>
                                </div>
                                <div
                                    className="view_switch-plitka"
                                    style={{
                                        backgroundImage: 'url(' + imagePlitka + ')',
                                        backgroundRepeat: 'no-repeat'
                                    }}
                                    onClick={() => {
                                        this.setState({column: true})
                                    }}
                                >
                                    <a href=""> </a>
                                </div>
                            </div>
                        </div>


                        <div className="main_table">

                            <div className={tableHeader}>
                                <div className="table_head-company">
                                    <p>company</p>
                                </div>
                                <div className="table_head-covering">
                                    <p>covering</p>
                                </div>
                                <div className="table_head-type">
                                    <p>type</p>
                                </div>
                                <div className="table_head-metal">
                                    <p>metal level</p>
                                </div>
                                <div className="table_head-drugs">
                                    <p>drugs</p>
                                </div>
                                <div className="table_head-visits">
                                    <p>primary<br/>care visits</p>
                                </div>
                                <div className="table_head-deduct">
                                    <p>yearly<br/>deductible</p>
                                </div>
                                <div className="table_head-price">
                                    <p>price</p>
                                </div>
                                <div className="table_head-btn"></div>
                            </div>


                            <div className={tableLineClass}>
                                {
                                    dataFromFile.baseStringData.map((item, index) => {
                                        return (
                                            <div key={index}>
                                                <BaseString dataAsPropsToBaseString={dataFromFile.baseStringData[index]}
                                                            isColumn={this.state.column}/>
                                            </div>
                                        )
                                    })
                                }
                            </div>

                        </div>

                    </section>

                    <div className="footer_wrapper_empty"/>

                </div>
                <footer>
                    <div className="footer_nav">
                        <p className="footer_logo">INSURE. All rights reserved 2017</p>
                        <ul>
                            <li><a href="">Personal plans</a></li>
                            <li><a href="">Business plans</a></li>
                            <li><a href="">Guide</a></li>
                            <li><a href="">Blog</a></li>
                        </ul>

                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
