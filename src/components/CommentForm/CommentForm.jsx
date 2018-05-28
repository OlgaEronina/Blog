import React, {PureComponent} from 'react';
import './CommentForm.scss';


export default class CommentForm extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {text: this.props.text};
    }

    handlePropertyChange = (propertyName) => (event) => {
        this.setState(
            {[propertyName]: event.target.value}
        )
    };

    handleSendClick = (event) => {
        event.preventDefault();
        const {onSend} = this.props;
        if (typeof onSend === 'function') {
            onSend(this.state);

            this.setState(
                {
                    name: '',
                    text: ''
                }
            )
        }
    };

    render() {
        const {name, text} = this.state;
        return (
            <form id='commentForm'>
                <input onChange={this.handlePropertyChange('name')} type='text' value={name} id='name'
                       placeholder='Your name'/>
                <textarea onChange={this.handlePropertyChange('text')} value={this.state.text} cols='30'
                          rows='10'></textarea>
                <button onClick={this.handleSendClick} className='postMsg'>Send</button>
            </form>
        )
    }
}