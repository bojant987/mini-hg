import React from 'react';
import { shallow } from 'enzyme';

import { _ArticleDetails as ArticleDetails, DetailsWrapper } from './ArticleDetails';
import Loader from '../Shared/Loader';
import Error from '../Styled/Error';

describe('ArticleDetails', () => {
    const compProps = {
        article: null,
        isLoading: false,
        error: null,
        fetchArticle: () => {},
        location: {
            search: '?id=123'
        }
    };

    test('Shows loader when article is loading', () => {
        const component = shallow(<ArticleDetails {...compProps} isLoading />);

        expect(component.find(Loader).length).toEqual(1);
        expect(component.find(Error).length).toEqual(0);

        component.unmount();
    });

    test('Shows error message when passed', () => {
        const component = shallow(<ArticleDetails {...compProps} error="Whoops!" />);

        expect(component.find(Error).length).toEqual(1);
        expect(component.find(Loader).length).toEqual(0);

        component.unmount();
    });

    test('Shows article details when everything is peachy', () => {
        const article = {
            equipment: [],
            realEstatePictures: [{ url: 'asd' }]
        };
        const component = shallow(<ArticleDetails {...compProps} article={article} />);

        expect(component.find(DetailsWrapper).length).toEqual(1);
        expect(component.find(Error).length).toEqual(0);
        expect(component.find(Loader).length).toEqual(0);

        component.unmount();
    });
});