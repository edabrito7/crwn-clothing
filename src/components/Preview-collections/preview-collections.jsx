import React from 'react';
import './preview-collections.styles.scss';
import CollectionItem from '../collection-items/collection-item';


const PreviewCollections = ({title, items}) => {
    const itemsFilterMaping = items
    .filter((item, idx) => idx < 4)
    .map(({id, ...otherItemProps}) => {
        return <CollectionItem key={id} {...otherItemProps}/>
    })
    return(
        <div className='collection-preview'>
            <h1 className='title'>{ title.toUpperCase() }</h1>
            <div className='preview ' >
            {itemsFilterMaping}
            </div>    
        </div>
    )
}


export default PreviewCollections;