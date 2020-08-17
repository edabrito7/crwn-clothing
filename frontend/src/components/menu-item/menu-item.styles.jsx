import styled from 'styled-components';

const ImageSize = props => {
    if (props.size === 'large') {
        return '380px'
    }
    return '240px'
}

export const MenuItemContainer = styled.div`

    min-width: 30%;
    height: ${ImageSize};
    flex: 1 1 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    margin: 0 7.5px 15px;
    overflow: hidden;

    &:first-child {
        margin-right: 7.5px;
      }
    
      &:last-child {
        margin-left: 7.5px;
      }
`;


export const BackgroundImageContainer = styled.div`

    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    background-image: url(${props => props.background});

    ${MenuItemContainer}:hover & {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }
`;


export const ContentContainer = styled.div`

    height: 90px;
    padding: 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    background: white;
    opacity: 0.7;
    position: absolute;

    ${MenuItemContainer}:hover & {
        opacity: 0.9;
    }
    
`;

export const Title = styled.h1`

    font-weight: bold;
     margin-bottom: 6px;
    font-size: 22px;
    color: #4a4a4a;
`;

export const Subtitle = styled.span`

    font-weight: lighter;
    font-size: 16px;
`;