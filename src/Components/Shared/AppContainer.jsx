import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import AppHeader from './Header';
import AppFooter from './Footer';
import Main from '../Styled/Main';

const AppContainer = ({ Component }) => (
    <Fragment>
        <AppHeader />
        <Main>
            <Component />
        </Main>
        <AppFooter />
    </Fragment>
);

AppContainer.propTypes = {
    Component: PropTypes.any.isRequired,
};

export default AppContainer;