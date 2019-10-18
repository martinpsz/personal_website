import styled from 'styled-components';

export const StyledFooter = styled.footer`
    background: var(--Black);
    padding: 0.5rem 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    
    
    @media screen and (min-width: 767px){
        display: block;
        text-align: center;
    }


    small{
        color: var(--White);
        font-size: 0.625rem;
        margin-left: 0.5rem;

        @media screen and (min-width: 767px){
            font-size: 0.75rem;
            margin-left: 0rem;
        }

        
    }

    button{
        margin-right: 0.5rem;

        @media screen and (min-width: 767px){
            display: none;
        }

    }


    

    


`


