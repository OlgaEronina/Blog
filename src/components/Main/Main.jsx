import React, {Component} from 'react';
import './Main.css';

export default class Main extends Component {
    static defaultProps = {};

    render() {
        return (
            <div className="main">
                <div className="article">
                    <h2>Note 1</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet autem culpa delectus
                    doloribus dolorum ea esse facere illum ipsa iste modi nam neque non, numquam odio, optio possimus
                    praesentium quis sed suscipit totam ullam vel veniam voluptates! Ad alias animi consequuntur ea hic
                    incidunt nisi placeat quidem repellendus voluptatibus!
                </div>
                <div className="article">
                    <h2>Note 2</h2>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet autem culpa delectus
                    doloribus dolorum ea esse facere illum ipsa iste modi nam neque non, numquam odio, optio possimus
                    praesentium quis sed suscipit totam ullam vel veniam voluptates! Ad alias animi consequuntur ea hic
                    incidunt nisi placeat quidem repellendus voluptatibus!

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci amet autem culpa delectus
                    doloribus dolorum ea esse facere illum ipsa iste modi nam neque non, numquam odio, optio possimus
                    praesentium quis sed suscipit totam ullam vel veniam voluptates! Ad alias animi consequuntur ea hic
                    incidunt nisi placeat quidem repellendus voluptatibus!
                </div>
            </div>
        )
    }
}
