import React from "react";
import { GlobalStyles } from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import { StyledContainer } from "./components/styled/Styled.Container";
import Cta from "./components/Cta";
import { Flex } from "./components/styled/Flex";
import { Password } from "./components/styled/Password";
import { nanoid } from "nanoid";

const theme = {
    darkTheme: {
        bg1: "#1C1C1C",
        bg2: "#1F2937",
        pwBg: "#273549",
        white: "#F9FAFB",
        darkGrey: "#2F3E53",
        lightGrey: "#d1d5db",
        accentDark: "#0284C7",
        accentLight: "#0EA5E9",
        accentLighter: "#38BDF8",
    },
};

function App() {
    const [appData, setAppData] = React.useState({
        passGenerated: false,
        passLength: 0,
        passwords: [],
        errors: false,
    });

    const getInput = (e) => {
        const input = e.target.value;
        console.log(input);
        const isValid = checkInput(input);
        if (isValid) {
            setAppData((oldState) => ({ ...oldState, passLength: input }));
        } else console.log("invalid input");
    };

    const checkInput = (input) => {
        console.log(input);
        const reg = /^-?\d+$/;
        const isValid = reg.test(input);
        return isValid;
    };

    const handleClick = () => {
        const passArr = [];

        if (appData.passLength > 0) {
            for (let i = 0; i < 4; i++) {
                const pass = generatePasswords();
                passArr.push(pass);
            }
            setAppData((oldState) => ({
                ...oldState,
                passwords: passArr,
                passGenerated: true,
            }));
        } else {
            setAppData((oldState) => ({
                ...oldState,
                errors: true,
            }));
        }
    };

    const generatePasswords = (passLength) => {
        passLength = appData.passLength;
        let pass = ``;
        const chars = `0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMGOPQRSTUZWXYZ!"#$%&'()*+,-./:;<=>?@[]^_/`;
        const max = chars.length - 1;
        for (let i = 0; i <= passLength - 1; i++) {
            const randNum = Math.floor(Math.random() * max);
            pass += chars[randNum];
        }
        return pass;
    };

    const passwordElements = appData.passwords.map((pass) => {
        return <Password key={nanoid()}>{pass}</Password>;
    });

    const loadingElements = [];

    for (let i = 0; i < 4; i++) {
        loadingElements.push(
            <Password key={nanoid()}>
                <img src='./images/ellipsis-solid.svg' alt='loading' />
            </Password>
        );
    }

    console.log(appData);

    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />
                <StyledContainer>
                    <Cta
                        getInput={getInput}
                        usrInput={appData.passLength}
                        handleClick={handleClick}
                    />
                    <Flex>
                        {appData.passGenerated
                            ? passwordElements
                            : loadingElements}
                    </Flex>
                </StyledContainer>
            </ThemeProvider>
        </>
    );
}

export default App;
