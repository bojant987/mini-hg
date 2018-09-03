import actionTypes from '../constants/actionTypes';

const initialState = {
    listLoading: false,
    listError: null,
    data: [],
    oneLoading: false,
    oneError: null,
    activeArticle: null,
};

export default function articles(state = initialState, action) {
    switch (action.type) {
        case actionTypes.FETCH_ARTICLES_REQUEST:
            return {
                ...state,
                listLoading: true,
            };
        case actionTypes.FETCH_ARTICLES_SUCCESS:
            return {
                ...state,
                listLoading: false,
                data: action.data.items,
            };
        case actionTypes.FETCH_ARTICLES_ERROR:
            return {
                ...state,
                listLoading: false,
                listError: action.error.statusText,
            };
        case actionTypes.FETCH_ARTICLE_REQUEST:
            return {
                ...state,
                oneLoading: true,
            };
        case actionTypes.FETCH_ARTICLE_SUCCESS:
            return {
                ...state,
                oneLoading: false,
                activeArticle: action.data,
            };
        case actionTypes.FETCH_ARTICLE_ERROR:
            return {
                ...state,
                oneLoading: false,
                oneError: action.error.statusText,
            };
        default:
            return state;
    }
}