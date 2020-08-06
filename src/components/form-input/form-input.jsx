import React from 'react';
import './form-input.styles.scss';

import {GroupContainer,
    Input,
    Label} from './form-input.styles';


const FormInput = ({ handleChange, label,...otherProps}) => {
    return(
        <GroupContainer>
            <Input onChange={handleChange} {...otherProps}/>
            {label ?
                (<Label length={otherProps.value.length}>
                    {label}
                </Label>) 
                : null}
        </GroupContainer>
    )
}

export default FormInput;