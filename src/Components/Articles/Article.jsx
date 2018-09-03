import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import Slider from "react-slick";
import styled from 'styled-components';

import { light, lightGray, primary, ternary } from '../Styled/variables';
import showFormattedDate from '../../Redux/util/showFormattedDate';

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
    
    @media(min-width: 870px) {
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
    
    @media(min-width: 870px) {
        margin-bottom: 0;
        max-width: 500px;
        margin-right: 10px;
    }
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

const Info = styled.div`
    width: 100%;
    position: relative;
    margin-right: 10px;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    @media(min-width: 870px) {
        border-left: 1px solid ${lightGray}; 
    }
    
    @media(min-width: 1160px) {
        border-right: 1px solid ${lightGray};
    }
`;

const Title = styled.p`
    font-weight: 700;
    color: ${primary};
    margin-bottom: 7px;
    cursor: pointer;
`;

const Description = styled.p`
    overflow: hidden;
`;

const Surface = styled.p`
    font-weight: 700;
    font-size: 16px;
    color: ${ternary};
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

const FieldValue = styled.p`
    font-weight: bold;
`;

const Time = styled.p`
    font-weight: 500;
    color: ${lightGray};
`;

const Details = styled.div`
    flex: 1 0 29%;
    display: none;
    
    @media(min-width: 1160px) {
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
            {/*<ThumbnailWrapper>*/}
                {/*<Thumbnail*/}
                    {/*src={article.pictures[0]}*/}
                    {/*alt={article.title}*/}
                {/*/>*/}
            {/*</ThumbnailWrapper>*/}
            <Info onClick={goToDetails}>
                <InfoEntry>
                    <p>Added</p>
                    <Time>{showFormattedDate(article.timestamp)}</Time>
                </InfoEntry>
                <InfoEntry>
                    <p>Type</p>
                    <FieldValue>{article.objectCategory === 'APPT' ? 'Apartment' : 'House'}</FieldValue>
                </InfoEntry>
                {article.numberRooms &&
                <InfoEntry>
                    <p>Rooms</p>
                    <FieldValue>{article.numberRooms}</FieldValue>
                </InfoEntry>}
                <InfoEntry>
                    <p>Street</p>
                    <FieldValue>{article.street}</FieldValue>
                </InfoEntry>
                {article.surfaceLiving &&
                <InfoEntry>
                    <p>Surface</p>
                    <Surface>{article.surfaceLiving} m2</Surface>
                </InfoEntry>}
                <InfoEntry>
                    <p>Contact</p>
                    <FieldValue>{article.contactPerson}</FieldValue>
                </InfoEntry>
            </Info>
            <Details onClick={goToDetails}>
                <Title>{article.title}</Title>
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