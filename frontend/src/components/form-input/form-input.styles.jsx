import styled, { css } from 'styled-components';


const mainColor = 'black';
const subColor = 'grey';

const shrinkLabel = css`
    top: -14px;
    font-size: 12px;
    color: ${mainColor};
`;

const isShrink = props => {

    if (props.length) {
        return shrinkLabel;
    }

    return null;
}

export const GroupContainer = styled.div`

    position: relative;
    margin: 45px 0;
`;

const passwordType = css`
    letter-spacing: 0.3em;
`;

const inputType = props => {
    
    if (props.type === 'password') {
        return passwordType
    }
    return null
}

export const Input = styled.input`

    background: none;
    background-color: white;
    color: ${subColor};
    font-size: 18px;
    padding: 10px 10px 10px 5px;
    display: block;
    width: 100%;
    border: none;
    border-radius: 0;
    border-bottom: 1px solid ${subColor};
    margin: 25px 0;
    ${inputType}

    &:focus {
      outline: none;
      
    }

    &:focus ~ label {
        ${shrinkLabel}
      }

   
`;



export const Label = styled.label`

    color: ${subColor};
    font-size: 16px;
    font-weight: normal;
    position: absolute;
    pointer-events: none;
    left: 5px;
    top: 10px;
    transition: 300ms ease all;

    ${isShrink}

    
`;