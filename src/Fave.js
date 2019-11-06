import React, { Component } from 'react'

class Fave extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // isFave: false,

        };
    }

    handleClick = (e) => {
        console.log("handling Fave click!");
        e.stopPropagation();
        this.props.onFaveToggle()
    };

    render() {
        const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
        console.log("isFave", isFave, this.props.isFave)
        return (
            <div className={"film-row-fave " + isFave} onClick={this.handleClick}>
                <p className="material-icons">{(this.props.isFave) ? "remove_from_queue" : "add_to_queue"}</p>
            </div>
        );
    }
}

export default Fave;