import styled from 'styled-components';

const Thumbnail = styled.img`
    height: 100%;
    width: 100%;
    object-fit: cover;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
`;

export default Thumbnail;