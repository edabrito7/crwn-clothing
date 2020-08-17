import styled from 'styled-components';



export const SignInContainer = styled.div`

    width: 30vw;
    display: flex;
    flex-direction: column;


    @media screen and (max-width: 800px) {
        width: 100%;
    } 
`;


export const TitleStyles = styled.h1`

    margin: 10px 0px;
`;


export const ButtomContainer = styled.div`

    display: flex;
    justify-content: space-between;


    @media screen and (max-width: 800px) {
        height: 30vw;
        flex-direction: column;
       
    } 
`;