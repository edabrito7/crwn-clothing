import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-items/collection-item';
import { selectCollection } from '../../redux/shop/shop-selectors';

import { CategoryPageContainer, TitleStyle, ItemsContainer } from './categorypage.styles';



const CategoryPage = ({match, collection}) => {
    const category = match.params.categoryId
    const MappingCategory = collection.items.map((item) => {
        return <CollectionItem key={item.id} item={item}/>
    })

    return (
        <CategoryPageContainer>
            <TitleStyle>{category.toUpperCase() }</TitleStyle>
            <ItemsContainer>
            {MappingCategory}
            </ItemsContainer>
            
        </CategoryPageContainer>
    )
}

const MapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})


export default connect(MapStateToProps)(CategoryPage);