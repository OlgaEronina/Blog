import React, {Component} from 'react';
import './Menu.scss';


export default class Menu extends Component {
    static defaultProps = {
        items: []
    };

    render() {
        const {items} = this.props;
        return (
            <ul className = 'menu'>
                {items.map((item) => <li><a href={item.link}>{item.title}</a></li>)}
            </ul>
        )
    }
}