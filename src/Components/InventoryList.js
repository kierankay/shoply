import React from 'react';
import Item from "./Item"

class InventoryList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        
        }
    }

    render() {
        const inventory = this.props.inventory.map(i => {
           return <Item item={i} />
        })

        return (
            <div>
                {inventory}
            </div>
        )
    }
}

export default InventoryList;