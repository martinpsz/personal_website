import React from 'react';
import {StyledPointer} from './StyledPointer';


/* eslint-disable no-unused-vars */
export const Pointer = (props) => (
    <StyledPointer as={props.pointerType} background={props.background} secondary={props.secondary}>
        {props.children}
    </StyledPointer>
)