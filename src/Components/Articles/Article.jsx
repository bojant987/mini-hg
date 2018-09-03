import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Slider from "react-slick";
import styled from 'styled-components';

import showFormattedDate from '../../Redux/util/showFormattedDate';
import { light, lightGray, primary, secondary, tablet, laptop } from '../Styled/variables';
import Thumbnail from '../Styled/Thumbnail';
import { Text } from '../Styled/Util';

const ArticleWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex: 1 0 100%;
    margin-bottom: 20px;
    background-color: ${light};
    cursor: pointer;
    transition: 0.3s;
    overflow: hidden;
    
    @media(min-width: ${tablet}) {
        padding: 10px;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }
    
    &:hover {
        box-shadow: 4px 4px 5px 0px rgb(88,92,99, 0.5);
        transform: translateY(-2px);
    }
`;

const ThumbnailWrapper = styled.div`
    position: relative;
    height: 289px;
    flex: 1 0 100%;
    overflow: hidden;
    margin-bottom: 5px;
    cursor: pointer;
    
    @media(min-width: ${tablet}) {
        margin-bottom: 0;
        max-width: 500px;
        margin-right: 10px;
    }
`;

const Info = styled.div`
    width: 100%;
    position: relative;
    margin-right: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media(min-width: ${tablet}) {
        border-left: 1px solid ${lightGray}; 
    }
    
    @media(min-width: ${laptop}) {
        border-right: 1px solid ${lightGray};
    }
`;

const Description = styled.p`
    overflow: hidden;
`;

const InfoEntry = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    
    @media(min-width: ${tablet}) {
        margin-bottom: 0;
    }
`;

const Details = styled.div`
    flex: 1 0 29%;
    display: none;
    
    @media(min-width: ${laptop}) {
        display: block;
    }
`;

const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
};

const Article = ({ article, history }) => {
    const goToDetails = () => {
        history.push(`/article?id=${article.advId}`);
    };

    return (
        <ArticleWrapper>
            <ThumbnailWrapper>
                <Slider {...settings}>
                    {article.pictures.map(img => (
                        <ThumbnailWrapper key={img} onClick={goToDetails}>
                            <Thumbnail
                                src={img}
                                alt={article.title}
                            />
                        </ThumbnailWrapper>
                    ))}
                </Slider>
            </ThumbnailWrapper>
            <Info onClick={goToDetails}>
                <InfoEntry>
                    <p>Added</p>
                    <Text color={lightGray} fontWeight="500">{showFormattedDate(article.timestamp)}</Text>
                </InfoEntry>
                <InfoEntry>
                    <p>Type</p>
                    <Text fontWeight="bold">{article.objectCategory === 'APPT' ? 'Apartment' : 'House'}</Text>
                </InfoEntry>
                {article.numberRooms &&
                <InfoEntry>
                    <p>Rooms</p>
                    <Text fontWeight="bold">{article.numberRooms}</Text>
                </InfoEntry>}
                <InfoEntry>
                    <p>Street</p>
                    <Text fontWeight="bold">{article.street}</Text>
                </InfoEntry>
                {article.surfaceLiving &&
                <InfoEntry>
                    <p>Surface</p>
                    <Text color={secondary} fontSize="16px" fontweight="bold">{article.surfaceLiving} m&#178;</Text>
                </InfoEntry>}
                <InfoEntry>
                    <p>Contact</p>
                    <Text fontWeight="bold">{article.contactPerson}</Text>
                </InfoEntry>
            </Info>
            <Details onClick={goToDetails}>
                <Text fontWeight="bold" color={primary} margin="0 0 7px">{article.title}</Text>
                <Description>{article.description}</Description>
            </Details>
        </ArticleWrapper>
    );
};

Article.propTypes = {
    article: PropTypes.shape({
        pictures: PropTypes.array,
        objectCategory: PropTypes.string,
        street: PropTypes.string,
        contactPerson: PropTypes.string,
        surfaceLiving: PropTypes.number,
        timestamp: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        numberRooms: PropTypes.number,
        advId: PropTypes.string,
    }),
};

export default withRouter(Article);