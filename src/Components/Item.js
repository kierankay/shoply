import React from 'react';

class Item extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        console.log(this.props.item.id)
        return (
            <p>{this.props.item.details.name}</p>
        )
    }
}

export default Item;