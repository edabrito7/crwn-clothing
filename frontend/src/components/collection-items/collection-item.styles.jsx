import styled from 'styled-components';
import CustomButton from '../custom-button/custom-button';



export const CollectionItemsContainer = styled.div`

    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 350px;
    align-items: center;
    position: relative;


    &:hover {
        opacity: 0.8; 
    }

    @media screen and (max-width: 800px)  {
        width: 40vw;

        &:hover {
            opacity: unset; 
        }
    }

`;


export const ImageContainer = styled.div`


    width: 100%;
    height: 95%;
    background-size: cover;
    background-position: center;
    margin-bottom: 5px;
    background-image: url(${props => props.background})

`;


export const CollectionFooterContainer = styled.div`

    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;

`;

export const NameSpan = styled.span`

    width: 90%;
    margin-bottom: 15px;
`;

export const PriceSpan = styled.span`

    width: 10%;
    font-size: 0.8em;
`;

export const AddToCartButton = styled(CustomButton)`

    width: 80%;
    opacity: 0.65;
    position: absolute;
    top: 255px;
    display: none;

    ${CollectionItemsContainer}:hover & {
        display: flex;
    }

    @media screen and (max-width: 800px) {
        display: block;
        opacity: 0.9;
        min-width: unset;
        padding: 0 5px;
    }

`;