import React from 'react';
import {StyledNav} from './StyledNav';
import {Link} from 'gatsby';
import {Pointer} from '../Pointer/Pointer';


export const Nav = (props) => (
    <StyledNav>
        <Link to="/" className="nav--brand">{props.brand}</Link>
        <p className="nav--byline">{props.byline}</p>
        <Pointer pointerType="button">Contact</Pointer>
    </StyledNav>
)