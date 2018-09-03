import React from 'react';
import { shallow } from 'enzyme';

import { _ArticleList as ArticleList, NoData, ListWrapper } from './ArticleList';
import Loader from '../Shared/Loader';
import Error from '../Styled/Error';

describe('ArticleList', () => {
    const compProps = {
        articles: [],
        isLoading: false,
        error: null,
        fetchArticles: () => {},
    };

    test('Shows no data message when when no articles available', () => {
        const component = shallow(<ArticleList {...compProps} />);

        expect(component.find(NoData).length).toEqual(1);
        expect(component.find(Loader).length).toEqual(0);
        expect(component.find(Error).length).toEqual(0);
        expect(component.find(ListWrapper).length).toEqual(0);

        component.unmount();
    });

    test('Shows loader when articles are loading', () => {
        const component = shallow(<ArticleList {...compProps} isLoading />);

        expect(component.find(Loader).length).toEqual(1);
        expect(component.find(Error).length).toEqual(0);
        expect(component.find(NoData).length).toEqual(0);
        expect(component.find(ListWrapper).length).toEqual(0);

        component.unmount();
    });

    test('Shows error message when passed', () => {
        const component = shallow(<ArticleList {...compProps} error="Whoops!" />);

        expect(component.find(Error).length).toEqual(1);
        expect(component.find(NoData).length).toEqual(0);
        expect(component.find(Loader).length).toEqual(0);
        expect(component.find(ListWrapper).length).toEqual(0);

        component.unmount();
    });

    test('Shows articles list when everything is peachy', () => {
        const articles = [
            { id: 1 }, { id: 2 }
        ];
        const component = shallow(<ArticleList {...compProps} articles={articles} />);

        expect(component.find(ListWrapper).length).toEqual(1);
        expect(component.find(Error).length).toEqual(0);
        expect(component.find(NoData).length).toEqual(0);
        expect(component.find(Loader).length).toEqual(0);

        component.unmount();
    });
});