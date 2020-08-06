import React from 'react';
import { withRouter } from 'react-router-dom';

import {MenuItemContainer,
    BackgroundImageContainer,
    ContentContainer,
    Title,
    Subtitle} from './menu-item.styles';




const MenuItem = ({ title, imageUrl, size,  history, linkUrl, match   }) => {
    return (
        <MenuItemContainer size={size} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <BackgroundImageContainer
            background={imageUrl}
            />
            <ContentContainer>
                <Title>{ title.toUpperCase() }</Title>
                <Subtitle className='subtitle'>Shop now</Subtitle>
            </ContentContainer>
         </MenuItemContainer>
    )
}


export default withRouter(MenuItem);



