import styled from 'styled-components';

export const StyledPointer = styled.div`
    color: ${props => props.secondary};
    background: ${props => props.background};
    border: 1px solid ${props=>props.secondary};
    outline-color: transparent;
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 0.25rem;
    font-size: 0.85rem;
    line-height: 1.5;
    cursor: pointer;
    display: inline-block;
    padding: 0.375rem .75rem;
`

