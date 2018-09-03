import React from 'react';
import styled from 'styled-components';

import { footerHeight, primary, light } from '../Styled/variables';

const FooterContainer = styled.div`
    height: ${footerHeight};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    background-color: ${primary};
    color: ${light};
`;

const Footer = () => (
    <FooterContainer>
        Made by Bojan Todorovic, September 2018.
    </FooterContainer>
);

export default Footer;