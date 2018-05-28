import React, {Component} from 'react';
import './SideMenu.scss';


export default class SideMenu extends Component {
    static defaultProps = {
        items: []
    };

    render() {
        const {items} = this.props;
        return (
            <ul className = 'aside'>
                {items.map((item) => <li><a href={item.link}>{item.title}</a></li>)}
            </ul>
        )
    }
}