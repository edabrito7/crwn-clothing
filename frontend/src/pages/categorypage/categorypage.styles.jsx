import styled from 'styled-components';


export const CategoryPageContainer = styled.div`

    display: flex;
    flex-direction: column;
`;


export const TitleStyle = styled.h1`
    
    font-size: 38px;
    margin: 0 auto 30px;
`;


export const ItemsContainer = styled.div`

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 10px;
    & .collection-item {
        margin-bottom: 30px;
      }


      @media screen and (max-width: 800px) {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 40px 20px;
          justify-items: center;

      }
`;