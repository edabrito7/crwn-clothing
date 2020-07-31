import React from 'react';
import { connect } from 'react-redux';
import CollectionItem from '../../components/collection-items/collection-item';
import { selectCollection } from '../../redux/shop/shop-selectors';

import './category.styles.scss';


const CategoryPage = ({match, collection}) => {
    const category = match.params.categoryId
    const MappingCategory = collection.items.map((item) => {
        return <CollectionItem key={item.id} item={item}/>
    })

    return (
        <div className='category-page'>
            <h1 className='title'>{category.toUpperCase() }</h1>
            <div className='items'>
            {MappingCategory}
            </div>
            
        </div>
    )
}

const MapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.categoryId)(state)
})


export default connect(MapStateToProps)(CategoryPage);