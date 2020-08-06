import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-actions';

import {CollectionItemsContainer,
    ImageContainer,
    CollectionFooterContainer,
    NameSpan,
    PriceSpan,
    AddToCartButton} from './collection-item.styles';



const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
    return(
        <CollectionItemsContainer>
            <ImageContainer
            background={imageUrl}
            />
            <CollectionFooterContainer>
                <NameSpan>{name}</NameSpan>
                <PriceSpan>{price}</PriceSpan>
            </CollectionFooterContainer>
            <AddToCartButton inverted={true} onClick={() => addItem(item)}>ADD TO CART</AddToCartButton>
        </CollectionItemsContainer>
    )
}


const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem);