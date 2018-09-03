import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import Slider from "react-slick";
import styled from 'styled-components';

import { fetchArticle } from '../../Redux/actionCreators/articlesActionCreators';
import Loader from '../Shared/Loader';
import Container from '../Styled/Container';
import { Text } from '../Styled/Util';
import Error from '../Styled/Error';
import { light } from '../Styled/variables';

const DetailsWrapper = styled.div`
    padding: 30px 0;
    max-width: 800px;
    margin: 0 auto;
`;

const ThumbnailWrapper = styled.div`
    position: relative;
    height: 300px;
    overflow: hidden;
    margin-bottom: 15px;
    cursor: pointer;
    margin-bottom: 15px;
`;

const Thumbnail = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`;

const InfoWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const BlockSmall = styled.div`
    background-color: ${light};
    width: 100%;
    margin-bottom: 15px;
    padding: 10px;
    
    @media(min-width: 480px) {
        width: 48%;
    }
`;

const BlockBig = styled.div`
    background-color: ${light};
    padding: 10px;
`;

const InfoEntry = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    
    @media(min-width: 870px) {
        margin-bottom: 0;
    }
`;

const Feedback = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

class ArticleDetails extends Component {
    static propTypes = {
        article: PropTypes.shape({
            advID: PropTypes.string,
            realEstatePictures: PropTypes.array,
            propertyStreet: PropTypes.string,
            propertyCityname: PropTypes.string,
            propertyZip: PropTypes.string,
            offerType: PropTypes.string,
            sellingPrice: PropTypes.number,
            objectCategory: PropTypes.string,
            numberRooms: PropTypes.number,
            floor: PropTypes.number,
            availableFromStr: PropTypes.string,
            equipment: PropTypes.array,
            title: PropTypes.string,
            adDescription: PropTypes.string,
        }),
        error: PropTypes.string,
        isLoading: PropTypes.bool,
    };

    componentDidMount() {
        const id = this.props.location.search.split('=')[1];

        this.props.fetchArticle(id);
    }

    render() {
        const { article, isLoading, error } = this.props;

        return (
            <Container>
                <Feedback>
                    {isLoading && <Loader />}
                    {error && <Error>{error}</Error>}
                </Feedback>
                {!isLoading && article &&
                <DetailsWrapper>
                    <ThumbnailWrapper>
                        <Slider {...settings}>
                            {article.realEstatePictures.map(img => (
                                <ThumbnailWrapper key={img.url}>
                                    <Thumbnail
                                        src={img.url}
                                        alt={article.title}
                                    />
                                </ThumbnailWrapper>
                            ))}
                        </Slider>
                    </ThumbnailWrapper>
                    <InfoWrapper>
                        <BlockSmall>
                            <Text fontWeight="bold" margin="0 0 10px">{article.propertyStreet}</Text>
                            <p>{article.propertyZip} {article.propertyCityname}</p>
                        </BlockSmall>
                        <BlockSmall>
                            <Text fontWeight="bold" margin="0 0 10px">{article.offerType}</Text>
                            <Text fontWeight="bold" margin="0 0 10px">CHF {article.sellingPrice}</Text>
                        </BlockSmall>
                        <BlockSmall>
                            <InfoEntry>
                                <p>Type</p>
                                <Text fontWeight="bold" margin="0 0 10px">{article.objectCategory}</Text>
                            </InfoEntry>
                            <InfoEntry>
                                <p>Rooms</p>
                                <Text fontWeight="bold" margin="0 0 10px">{article.numberRooms}</Text>
                            </InfoEntry>
                            <InfoEntry>
                                <p>Floor</p>
                                <Text fontWeight="bold" margin="0 0 10px">{article.floor}</Text>
                            </InfoEntry>
                            <InfoEntry>
                                <p>Available</p>
                                <Text fontWeight="bold">{article.availableFromStr}</Text>
                            </InfoEntry>
                        </BlockSmall>
                        {article.equipment.length > 0 &&
                        <BlockSmall>
                            {article.equipment.map(item => (
                                <Text key={item.label} margin="0 0 10px">{item.label}</Text>
                            ))}
                        </BlockSmall>}
                        <BlockBig>
                            <Text fontWeight="bold" margin="0 0 20px">{article.title}</Text>
                            <p>{article.adDescription}</p>
                        </BlockBig>
                    </InfoWrapper>
                </DetailsWrapper>}
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    article: state.articles.activeArticle,
    isLoading: state.articles.oneLoading,
    error: state.articles.oneError,
});

const mapDispatchToProps = dispatch => ({
    fetchArticle: id => dispatch(fetchArticle(id)),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleDetails));