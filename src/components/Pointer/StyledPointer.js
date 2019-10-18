import styled from 'styled-components';

export const StyledPointer = styled.div`
    color: ${props => props.color};
    background: ${props => props.background};
    border: 1px solid ${props=>props.border};
    text-decoration: none;
    text-transform: uppercase;
    border-radius: 0.25rem;
    border: 1px solid transparent;
    font-size: 0.85rem;
    line-height: 1.5;
    cursor: pointer;
    display: inline-block;
    padding: 0.375rem .75rem;
`

