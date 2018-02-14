import React, {Component} from 'react';

class TableHeader extends Component {

    render() {
        return (
            <div className="table_head">
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
        );
    };
}

export default TableHeader;
