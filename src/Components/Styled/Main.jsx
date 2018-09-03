import styled from 'styled-components';

import { headerHeight, footerHeight, passive } from '../Styled/variables';

const Main = styled.main`
    min-height: calc(100vh - ${footerHeight});
    padding-top: ${headerHeight};
    overflow-y: auto;
    display: block;
    background-color: ${passive};
`;

export default Main;