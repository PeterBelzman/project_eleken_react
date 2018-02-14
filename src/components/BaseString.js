import React, {Component} from 'react';

class BaseString extends Component {

    render() {
        return (

                <div className="insure_card">

                    <div className="insure_card-company">
                        <div className="company_logo">
                            <img src={this.props.data.logo} alt={""}/>
                        </div>
                        <div className="company">
                            <div className="company_name">
                                <p>{this.props.data.company}</p>
                            </div>
                            <div className="company_stars">
                                {
                                    [0, 1, 2, 3, 4].map((item, index)=>{
                                        let startColor = "white";
                                        if (this.props.data.star < index) {
                                            startColor = "yellow";
                                        }
                                        return(
                                            <span className="star star_1" style={{background: startColor}} key={index} > </span>
                                        )
                                    })
                                }
                            </div>
                        </div>

                    </div>

                    <div className="insure_card-covering">
                        <p>{this.props.data.covering}</p>
                    </div>

                    <div className="insure_card-type">
                        <p>{this.props.data.type}</p>
                        <div className="circle circle_question">?</div>
                    </div>

                    <div className="insure_card-metal">
                        <div className="circle circle_color" style={{background: this.props.data.metal.color}} ></div>
                        <p>{this.props.data.metal.name}</p>
                        <div className="circle circle_question">?</div>
                    </div>

                    <div className="insure_card-drugs">
                        <p><span>{this.props.data.drugs}</span></p>
                    </div>

                    <div className="insure_card-visits">
                        <p><span>{this.props.data.primaryCareVisits}</span></p>
                    </div>

                    <div className="insure_card-deduct">
                        <p>$<span>{this.props.data.yearlyDeductible}</span></p>
                    </div>

                    <div className="insure_card-price">
                        <p>$<span>{this.props.data.price}</span>/mon</p>
                    </div>

                    <div className="insure_card-btn">
                        <div className="btn_overview"><a href="">overview</a></div>
                        <div className="btn_buy"><a href="">buy</a></div>
                    </div>

                </div>
        );
    };

}

export default BaseString;

