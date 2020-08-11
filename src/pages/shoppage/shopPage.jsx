import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CategoryPage from '../categorypage/categorypage';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { fecthCollectionsStartAsync } from '../../redux/shop/shop-actions';
import { selectIsCollectionFetching, selectCollectionsLoaded } from '../../redux/shop/shop-selectors';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage  extends Component {


    unSubcribeFromSnapshot = null;


    componentDidMount() {
        const { fecthCollectionsStartAsync } = this.props;
        fecthCollectionsStartAsync()
        
        
    }

    render() {
        const { match, isCollectionsFetching, isCollectionsLoaded} = this.props
        console.log("SELECTOR",this.props);
        return(
            <div>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={isCollectionsFetching} {...props}/>}/>
                <Route exact path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={!isCollectionsLoaded}{...props}/>}/>
            </div>
            
        )
    }

} 

const mapStateToProps = createStructuredSelector({
    isCollectionsFetching: selectIsCollectionFetching,
    isCollectionsLoaded: selectCollectionsLoaded,
})

const mapDispatchToProps = dispatch => ({
    fecthCollectionsStartAsync: () => dispatch(fecthCollectionsStartAsync())
})


export default connect(mapStateToProps,mapDispatchToProps)(ShopPage);