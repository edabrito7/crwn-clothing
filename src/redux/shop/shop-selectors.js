import { createSelector } from 'reselect';




const shopSelect = state => state.shop;



export const selectShopCollections = createSelector(
    [shopSelect],(shop) => shop.collections
)

export const selectCollectionsForPreview = createSelector(
    [selectShopCollections],
    collections => Object.keys(collections).map(key => collections[key])
  );


export const selectCollection = collectionUrlParam =>
    createSelector(
        [selectShopCollections],
        collections => collections[collectionUrlParam]
    )