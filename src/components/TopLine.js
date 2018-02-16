import React, {Component} from 'react';

import iconPlitkaActive from '../assets/img/icon_plitka.png';
import iconPlitkaNoActive from '../assets/img/icon_plitka_.png';
import iconListActive from '../assets/img/icon_list.png';
import iconListNoActive from '../assets/img/icon_list_.png';

// let switchList = {
//     backgroundImage: 'url(' + iconPlitkaNoActive + ')',
// };

class TopLine extends Component {

    render() {

        let imagePlitka = iconPlitkaActive;
        let imageList = iconListNoActive;

        if (this.props.list) {
            imagePlitka = iconPlitkaNoActive;
            imageList = iconListActive
        }

        return (
            <div className="main_topline">
                <div className="main_topline-name">
                    <p>Insurance list:</p>
                </div>
                <div className="main_topline-view_switch"  >
                    <div
                        className="view_switch-list"
                        style={{
                            backgroundImage: 'url(' + imageList + ')',
                            backgroundRepeat  : 'no-repeat'
                        }}
                    >
                        <a href=""> </a>
                    </div>
                    <div
                        className="view_switch-plitka"
                        style={{
                            backgroundImage: 'url(' + imagePlitka + ')',
                            backgroundRepeat  : 'no-repeat'
                        }}
                    >
                        <a href=""> </a>
                    </div>
                </div>
            </div>
        );
    };

}

export default TopLine;

