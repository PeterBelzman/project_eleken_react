import React, {Component} from 'react';

import logo1 from './assets/img/logo1.jpg';
import logo2 from './assets/img/logo2.jpg';
import logo3 from './assets/img/logo3.jpg';
import logo4 from './assets/img/logo4.jpg';

import './App.css';

import Header from "./components/Header";
import TableHeader from "./components/TableHeader";
import TopLine from "./components/TopLine";
import BaseString from "./components/BaseString";

import * as dataFromFile from './data'

class App extends Component {

    state = {
        list: true
    };

    render() {
        return (
                <div className="footer_wrapper">

                    <Header/>

                    <section className="main_wrapper">

                        <TopLine list={this.state.list}/>

                        <div className="main_table">

                            <TableHeader/>

                            <div className="table_line">
                            {
                                dataFromFile.data.map((item, index) => {
                                    return (
                                        <div key={index}>
                                            <BaseString data={dataFromFile.data[index]}/>
                                        </div>
                                    )
                                })
                            }
                            </div>

                        </div>

                    </section>

                    <div className="footer_wrapper_empty"></div>

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
