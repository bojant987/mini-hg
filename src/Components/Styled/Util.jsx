import styled, { css } from 'styled-components';

export const Text = styled.p`
     ${props => props.fontWeight && css`
        font-weight: ${props.fontWeight};
     `} 
     
     ${props => props.margin && css`
        margin: ${props.margin};
     `}

    ${props =>  props.fontSize && css`
        font-size: ${props.fontSize};   
    `}
    
    ${props => props.center && css`
        text-align: center;
    `}
    
    ${props => props.color && css`
        color: ${props.color};
    `}
`;

export const CenteredContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;