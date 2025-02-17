import styled from 'styled-components';

export const ButtonContainer = styled.button<React.ComponentPropsWithoutRef<'button'>>`
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    
    &:disabled{
        opacity: 0.4;
    }
`