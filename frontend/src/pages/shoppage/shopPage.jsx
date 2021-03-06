import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CategoryPage from '../categorypage/categorypage';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';
import { selectIsCollectionFetching, selectCollectionsLoaded } from '../../redux/shop/shop-selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

const ShopPage = ({ fetchCollectionsStart, match, isCollectionsFetching, isCollectionsLoaded } ) => {

    useEffect(() => {

        fetchCollectionsStart(); 
    },[fetchCollectionsStart])

        return(
            <div>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props}/>}/>
                <Route exact path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={!isCollectionsLoaded}{...props}/>}/>
            </div>
            
        )
 

} 

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectCollectionsLoaded,
})

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);