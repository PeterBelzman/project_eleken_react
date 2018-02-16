import React, {Component} from 'react';

import * as stylesFromFile from '../data.js'

class BaseString extends Component {

    render() {

        let classNames = stylesFromFile.classNamesInRow;
        if (this.props.isColumn) {
            classNames = stylesFromFile.classNamesInColumn
        }

        return (
            <div className={classNames.insureCard}>
                <div className={classNames.insureCardCompanyTab}>
                    <div className={classNames.companyLogoTab} >
                        <img src={this.props.dataAsPropsToBaseString.logo} alt={""}/>
                    </div>
                    <div className="company">
                        <div className="company_name">
                            <p>{this.props.dataAsPropsToBaseString.company}</p>
                        </div>
                        <div className="company_stars">
                            {
                                [0, 1, 2, 3, 4].map((item, index)=>{
                                    let starColor = "grey";
                                    if (index + 1 <= this.props.dataAsPropsToBaseString.stars) {
                                        starColor = "#ffc000"
                                    }
                                    return(
                                        <span className="star" style={{color: starColor}} key={index} > </span>
                                    )
                                })
                            }
                        </div>
                    </div>

                </div>

                <div className={classNames.coveringTab}>
                    <p>{this.props.dataAsPropsToBaseString.covering}</p>
                </div>

                <div className={classNames.typeTab}>
                    <p>{this.props.dataAsPropsToBaseString.type}</p>
                    <div className="circle circle_question">?</div>
                </div>

                <div className={classNames.metalSwitchTab}>
                    <div className="circle circle_color" style={{background: this.props.dataAsPropsToBaseString.metal.color}}></div>
                    <p>{this.props.dataAsPropsToBaseString.metal.name}</p>
                    <div className="circle circle_question">?</div>
                </div>

                <div className={classNames.drugsTab}>
                    <p><span>{this.props.dataAsPropsToBaseString.drugs}</span></p>
                </div>

                <div className={classNames.visitsTab}>
                    <p><span>{this.props.dataAsPropsToBaseString.primaryCareVisits}</span></p>
                </div>

                <div className={classNames.deductTab}>
                    <p>$<span>{this.props.dataAsPropsToBaseString.yearlyDeductible}</span></p>
                </div>

                <div className={classNames.priceTab}>
                    <p>$<span>{this.props.dataAsPropsToBaseString.price}</span>/mon</p>
                </div>

                <div className={classNames.btnTab}>
                    <div className={classNames.btnOverview}><a href="">overview</a></div>
                    <div className={classNames.btnBuy}><a href="">buy</a></div>
                </div>

            </div>
        );
    };

}

export default BaseString;

