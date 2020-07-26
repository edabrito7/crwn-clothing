import React, { Component } from 'react';
import SHOP_DATA from './shop.data.js.js';
import PreviewCollections from '../../components/Preview-collections/preview-collections';
import './shop.style.scss';


class ShopPage extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            collections: SHOP_DATA,
        }
    }


    render(){
        const { collections } = this.state

        const CollectionsMaping = collections.map(({id, ...otherCollectionProps }) => {
            return <PreviewCollections key={id} {...otherCollectionProps} />
        })
        return(
            <div>
                {CollectionsMaping}
            </div>
        )
    }
}



export default ShopPage;