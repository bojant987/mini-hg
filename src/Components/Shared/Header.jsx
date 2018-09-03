import React from 'react';
import styled from 'styled-components';

import { headerHeight, light, primary } from '../Styled/variables';
import logo from '../../assets/hg.png';

const HeaderContainer = styled.div`
    height: ${headerHeight};
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0 10px;
    background-color: ${primary};
    color: ${light};
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 10;
`;

const Logo = styled.img`
    max-height: 60%;
    
    @media(min-width: 480px) {
        max-height: 80%;
    }
`;

const Header = () => (
    <HeaderContainer>
        <Logo src={logo} alt="Logo" />
    </HeaderContainer>
);

export default Header;