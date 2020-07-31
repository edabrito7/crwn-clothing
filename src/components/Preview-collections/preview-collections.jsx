import React from 'react';
import { withRouter } from 'react-router-dom'
import './preview-collections.styles.scss';
import CollectionItem from '../collection-items/collection-item';


const PreviewCollections = ({title, items, history, match, routeName,...otherProps}) => {

    const itemsFilterMaping = items
    .filter((item, idx) => idx < 4)
    .map((item) => {
        return <CollectionItem key={item.id} item={item}/>
    })
    return(
        <div className='collection-preview'>
            <h1 className='title' onClick={() => history.push(`shop/${routeName}`)}>{ title.toUpperCase() }</h1>

            <div className='preview ' >
            {itemsFilterMaping}
            </div>    
        </div>
    )
}


export default withRouter(PreviewCollections);