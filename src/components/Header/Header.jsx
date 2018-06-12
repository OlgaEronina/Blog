import React, {Fragment, PureComponent} from 'react';
import './Header.css'

export default class Header extends PureComponent {
    render() {
        return (
            <Fragment>
                <div className="header">
                    <nav>
                        <ul>
                            <li>Main</li>
                            <li>User list</li>
                            <li>Contacts</li>
                            <li>Click</li>
                        </ul>
                    </nav>
                </div>
            </Fragment>
        )
    }
}