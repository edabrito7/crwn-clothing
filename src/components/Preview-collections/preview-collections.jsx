import React from 'react';
import { withRouter } from 'react-router-dom'
import CollectionItem from '../collection-items/collection-item';

import {PreviewCollectionContainer,
    Title,
    PreviewContainer} from './preview-collections.styles';


const PreviewCollections = ({title, items, history, match, routeName,...otherProps}) => {

    const itemsFilterMaping = items
    .filter((item, idx) => idx < 4)
    .map((item) => {
        return <CollectionItem key={item.id} item={item}/>
    })
    return(
        <PreviewCollectionContainer>
            <Title onClick={() => history.push(`shop/${routeName}`)}>{ title.toUpperCase() }</Title>

            <PreviewContainer>
            {itemsFilterMaping}
            </PreviewContainer>    
        </PreviewCollectionContainer>
    )
}


export default withRouter(PreviewCollections);