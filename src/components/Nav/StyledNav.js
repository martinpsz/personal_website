import styled from 'styled-components';

export const StyledNav = styled.nav`
    background: var(--Black);
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr;
    grid-template-areas: 'brand'
                         'byline';
    position: sticky;
    top: 0;
    left: 0;
    right: 0;

    @media screen and (min-width: 767px){
        grid-template-columns: repeat(3, 1fr);
        grid-template-areas: '. brand button'
                            '. byline button';

    }

    

    .nav--brand, .nav--byline{
        color: var(--White);
    }

    .nav--brand{
        text-decoration: none;
        font-family: var(--RockSalt);
        font-size: 1.5rem;
        grid-area: brand;
        
    }

    .nav--byline{
        font-size: 0.75rem;
        margin-top: -0.5rem;
        padding-bottom: 0.5rem;
        margin-bottom: 0;
        grid-area: byline;
        
        
    }

    button{
        display: none;
    }

    @media screen and (min-width: 767px){
        button{
            display: block;
            grid-area: button;
            justify-self: end;
            margin-right: 1rem;
         }
    }




`