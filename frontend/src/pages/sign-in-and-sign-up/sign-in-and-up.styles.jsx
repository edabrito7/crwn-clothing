import styled from 'styled-components';


export const SignInAndUpContainer = styled.div`

    width: 80vw;
    display: flex;
    justify-content: space-between;
    margin: 50px auto;


    @media screen and (max-width: 800px) {
        flex-direction: column;
        width: unset;
        align-items: center;
        > *:first-child {
          margin-bottom: 50px;
        }

`;