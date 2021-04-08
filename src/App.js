import React from "react";
import styled from "styled-components";

import GlobalStyles from "./Components/GlobalStyles";
import people from "./data";
import Slider from "./Components/Slider";

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: white;
    color: #324d67;
`;

const Title = styled.h1`
    text-align: center;
    padding-top: 5%;
    font-size: 2.5rem;
`;

function App() {
    return (
        <>
            <GlobalStyles />
            <Wrapper>
                <Title>Reviews</Title>
                <Slider data={people}></Slider>
            </Wrapper>
        </>
    );
}

export default App;
