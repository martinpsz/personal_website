import React from 'react';
import {StyledNav} from './StyledNav';
import {Pointer} from '../Pointer/Pointer';
import {Link} from 'gatsby';

export const Nav = (props) => (
    <StyledNav>
        <Link to="/" className="nav--brand">{props.brand}</Link>
        <p className="nav--byline">{props.byline}</p>
        <Pointer pointerType="button" 
                 background="var(--Orange)" 
                 secondary="var(--White)">Contact</Pointer>
    </StyledNav>
)