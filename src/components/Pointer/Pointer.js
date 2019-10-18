import React from 'react';
import {StyledPointer} from './StyledPointer';


/* eslint-disable no-unused-vars */
export const Pointer = (props) => (
    <StyledPointer as={props.pointerType} color="var(--White)" background="var(--Orange)">
        {props.children}
    </StyledPointer>
)