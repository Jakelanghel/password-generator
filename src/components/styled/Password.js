import styled from "styled-components";

export const Password = styled.button`
    width: 100%;
    height: 65px;
    font-size: 1.15rem;
    letter-spacing: 2px;
    background-color: ${({ theme }) => theme.darkTheme.pwBg};
    color: ${({ theme }) => theme.darkTheme.accentLighter};
    border: none;
    margin-bottom: 1.25rem;
    border-radius: 5px;

    img {
        width: 20px;
        filter: invert(0%) sepia(27%) saturate(609%) hue-rotate(324deg)
            brightness(109%) contrast(78%);
    }

    @media (min-width: 750px) {
        width: 48%;
        margin-bottom: 1.5rem;
    }
`;
