import axios from 'axios';

import BASE_URL from '../constants/apiInfo';
import actionTypes from '../constants/actionTypes';

const fetchArticlesRequest = () => ({
    type: actionTypes.FETCH_ARTICLES_REQUEST,
});

const fetchArticlesSuccess = data => ({
    type: actionTypes.FETCH_ARTICLES_SUCCESS,
    data,
});

const fetchArticlesError = error => ({
    type: actionTypes.FETCH_ARTICLES_ERROR,
    error,
});

export const fetchArticles = () => dispatch => {
    dispatch(fetchArticlesRequest());

    return axios({
        url: `${BASE_URL}?loc=Zurich&cht=RENTFLAT`,
        method: 'GET',
        headers: {
            authorization: 'Basic aGdfYW5kcm9pZDo2VmNHVTZjZUNGVGs4ZEZt',
        },
    })
        .then(response => dispatch(fetchArticlesSuccess(response.data)))
        .catch(error => dispatch(fetchArticlesError(error.response)));
};

const fetchArticleRequest = () => ({
    type: actionTypes.FETCH_ARTICLE_REQUEST,
});

const fetchArticleSuccess = data => ({
    type: actionTypes.FETCH_ARTICLE_SUCCESS,
    data,
});

const fetchArticleError = error => ({
    type: actionTypes.FETCH_ARTICLE_ERROR,
    error,
});

export const fetchArticle = id => dispatch => {
    dispatch(fetchArticleRequest());

    return axios({
        url: `${BASE_URL}/${id}?cli=android`,
        method: 'GET',
        headers: {
            authorization: 'Basic aGdfYW5kcm9pZDo2VmNHVTZjZUNGVGs4ZEZt',
        },
    })
        .then(response => dispatch(fetchArticleSuccess(response.data)))
        .catch(error => dispatch(fetchArticleError(error.response)));
};