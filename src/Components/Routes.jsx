import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import AppContainer from './Shared/AppContainer';

import ArticleList from './Articles/ArticleList';
import ArticleDetails from './ArticleDetails/ArticleDetails';

const Routes = () => (
    <HashRouter>
        <Switch>
            {/* Articles */}
            <Route exact path="/">
                <AppContainer Component={ArticleList} />
            </Route>
            {/* Article details */}
            <Route exact path="/article">
                <AppContainer Component={ArticleDetails} />
            </Route>
        </Switch>
    </HashRouter>
);

export default Routes;
