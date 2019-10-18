import React from 'react';
import {StyledFooter} from './StyledFooter';
import {Pointer} from '../Pointer/Pointer';

export const Footer = (props) => {
    const date = new Date()
    return(
        <StyledFooter>
            <small>&copy; {date.getFullYear()} {props.brand} All Rights Reserved. </small>
            <Pointer pointerType="button" 
                     background="var(--Orange)" 
                     secondary="var(--White)">Contact</Pointer>
        </StyledFooter>
    )
}