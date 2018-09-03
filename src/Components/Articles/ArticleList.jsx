import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { fetchArticles } from '../../Redux/actionCreators/articlesActionCreators';
import Container from '../Styled/Container';
import Loader from '../Shared/Loader';
import Error from '../Styled/Error';
import Article from './Article';

const Heading = styled.h2`
    text-align: center;
    margin: 0;
    margin-bottom: 30px;
`;

export const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    max-width: 1280px;
    margin: 0 auto;
`;

const Feedback = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const NoData = styled.p`
    text-align: center;
`;

 export class _ArticleList extends Component {
     static propTypes = {
         articles: PropTypes.array.isRequired,
         isLoading: PropTypes.bool.isRequired,
         error: PropTypes.string,
         fetchArticles: PropTypes.func.isRequired,
     };

    componentDidMount() {
        if (!this.props.articles.length > 0) {
            this.props.fetchArticles();
        }
    }

    render() {
        const { articles, isLoading, error } = this.props;

        return (
            <Container>
                <Heading>Latest listings</Heading>
                {articles.length > 0 &&
                <ListWrapper>
                    {articles.map(article => (
                        <Article key={article.advId} article={article} />
                    ))}
                </ListWrapper>}
                <Feedback>
                    {isLoading && <Loader />}
                    {error && <Error>{error}</Error>}
                    {articles.length === 0 && !isLoading && !error && <NoData>No articles available.</NoData>}
                </Feedback>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    articles: state.articles.data,
    isLoading: state.articles.listLoading,
    error: state.articles.listError,
});

const mapDispatchToProps = dispatch => ({
    fetchArticles: () => dispatch(fetchArticles()),
});

export default connect(mapStateToProps, mapDispatchToProps)(_ArticleList);