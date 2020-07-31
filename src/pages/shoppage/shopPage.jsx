import React from 'react';
import { Route } from 'react-router-dom';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CategoryPage from '../categorypage/categorypage';
import './shop.style.scss';


const ShopPage = ({match}) => {
    return(
        <div>
            <Route exact path={`${match.path}`} component={CollectionsOverview}/>
            <Route exact path={`${match.path}/:categoryId`} component={CategoryPage}/>
        </div>
        
    )
   
}



export default ShopPage;