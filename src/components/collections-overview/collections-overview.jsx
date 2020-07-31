import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector} from 'reselect';
import  {selectCollectionsForPreview} from '../../redux/shop/shop-selectors'
import PreviewCollections from '../Preview-collections/preview-collections'


const CollectionsOverview = ({collections}) => {
    const CollectionsMaping = collections.map(({ id, ...otherCollectionProps }) => (
        <PreviewCollections key={id} {...otherCollectionProps} />
      ))

    return(
        <div>
            {CollectionsMaping}
        </div>
    )
}

const MapStateToProps = createStructuredSelector({
    collections:  selectCollectionsForPreview,
})


export default connect(MapStateToProps)(CollectionsOverview);



