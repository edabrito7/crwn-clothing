import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CategoryPage from '../categorypage/categorypage';
import WithSpinner from '../../components/with-spinner/with-spinner';
import { updateCollections } from '../../redux/shop/shop-actions';
import { firestore, convertCollectionsSnapshotToMap }  from '../../firebase/firebase-utils'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CategoryPageWithSpinner = WithSpinner(CategoryPage);

class ShopPage  extends Component {
    constructor(){
        super();
        this.state = {
            isLoading: true
        }
    }

    unSubcribeFromSnapshot = null;


    componentDidMount() {

        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.get().then(snapshot=> {
            console.log(snapshot)
            const collectionMap = convertCollectionsSnapshotToMap(snapshot);
            updateCollections(collectionMap);
            this.setState({ isLoading: false})
        })
        
        
    }

    render() {
        const { match } = this.props
        return(
            <div>
                <Route exact path={`${match.path}`} render={(props) => <CollectionsOverviewWithSpinner isLoading={this.state.isLoading} {...props}/>}/>
                <Route exact path={`${match.path}/:categoryId`} render={(props) => <CategoryPageWithSpinner isLoading={this.state.isLoading}{...props}/>}/>
            </div>
            
        )
    }

} 


const mapDispatchToProps = dispatch => ({
    updateCollections: collectionMap => dispatch(updateCollections(collectionMap))
})


export default connect(null,mapDispatchToProps)(ShopPage);