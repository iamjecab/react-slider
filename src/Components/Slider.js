import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaQuoteRight, FaAngleRight, FaAngleLeft } from "react-icons/fa";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Image = styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid #bcccdc;
    margin: 35px 0 20px 0;
`;

const Name = styled.h3`
    color: #ba5d2c;
    letter-spacing: 2px;
    margin: 15px 0;
    font-size: 1rem;
    text-transform: uppercase;
`;

const Title = styled.h3`
    font-weight: 200;
    margin-bottom: 25px;
`;

const Icons = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: -50px;
    width: 90%;
    @media (min-width: 640px) {
        width: 40%;
    }
`;

const RightBtn = styled(FaAngleRight)`
    font-size: 2rem;
    color: white;
    background-color: #324d67;
    border-radius: 4px;
    cursor: pointer;
`;

const LeftBtn = styled(FaAngleLeft)`
    font-size: 2rem;
    color: white;
    background-color: #324d67;
    border-radius: 4px;
    cursor: pointer;
`;

const Info = styled.p`
    text-align: center;
    max-width: 80%;
    margin: 20px 0;
    @media (min-width: 640px) {
        max-width: 30%;
    }
`;

const QuoteIcon = styled(FaQuoteRight)`
    color: #ba5d2c;
    font-size: 3.4rem;
    margin: 2.5rem;
`;

function Slider({ data }) {
    // const [slides, setSlides] = useState(data);
    const [index, setIndex] = useState(2);
    const { id, name, image, title, quote } = data[index];

    const slideRight = () => {
        const length = data.length - 1;
        index === length ? setIndex(0) : setIndex(index + 1);
    };

    const slideLeft = () => {
        const length = 0;
        index === length ? setIndex(data.length - 1) : setIndex(index - 1);
    };

    useEffect(() => {
        const setSlider = setInterval(slideRight, 3000);
        return () => clearInterval(setSlider);
    }, [index]);

    return (
        <>
            <Container key={id}>
                <Image src={image} alt={name} />
                <Name>{name}</Name>
                <Title>{title}</Title>
                <Icons>
                    <LeftBtn onClick={slideLeft} />
                    <RightBtn onClick={slideRight} />
                </Icons>
                <Info>{quote}</Info>
                <QuoteIcon />
            </Container>
        </>
    );
}

export default Slider;
