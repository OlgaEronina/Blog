import React, {PureComponent} from 'react';
import './Main.scss';
import Article from '../Article';

export default class Main extends PureComponent {
    static defaultProps = {};

    render() {
        return (
            <div className='main'>
                <Article />
                <div className='clearfix'></div>
            </div>
        )
    }
}
