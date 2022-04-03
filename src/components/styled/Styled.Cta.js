import styled from "styled-components";

export const StyledCta = styled.div`
    border-bottom: solid 2px ${({ theme }) => theme.darkTheme.darkGrey};
    padding-bottom: 2.5rem;

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }

    h1 {
        font-size: 1.75rem;
        margin-bottom: 0.25rem;
    }

    span {
        font-weight: 700;
        display: block;
        color: ${({ theme }) => theme.darkTheme.accentLight};
    }

    p {
        font-size: 1rem;
        color: ${({ theme }) => theme.darkTheme.lightGrey};
        margin-bottom: 2rem;
        font-weight: 300;
    }

    label {
        font-size: 0.85rem;
        font-weight: 300;
        letter-spacing: 1px;
    }

    input {
        width: 50px;
        font-size: 1rem;
        margin-bottom: 1rem;
        border: none;
        background-color: ${({ theme }) => theme.darkTheme.pwBg};
        padding: 0.5em 1rem;
        margin-left: 1rem;
        border-radius: 10px;
        color: ${({ theme }) => theme.darkTheme.white};
    }

    button {
        display: flex;
        align-items: center;
        font-size: 1rem;
        font-weight: 500;
        letter-spacing: 1px;
        padding: 0.75rem 1rem;
        border: none;
        border-radius: 8px;
        background-color: ${({ theme }) => theme.darkTheme.accentDark};
        color: ${({ theme }) => theme.darkTheme.white};
    }

    img {
        width: 14px;
        margin-right: 0.5rem;
        transform: rotate(-15deg);
        filter: invert(100%) sepia(1%) saturate(1079%) hue-rotate(174deg)
            brightness(99%) contrast(98%);
    }

    @media (min-width: 750px) {
        text-align: center;

        h1 {
            font-size: 2.5rem;
            margin-bottom: 1rem;
        }

        p {
            font-size: 1.25rem;
            color: ${({ theme }) => theme.darkTheme.lightGrey};
            margin-bottom: 2rem;
            font-weight: 300;
        }

        button {
            margin: 0 auto;
        }
    }

    @media (min-width: 900px) {
        span {
            display: inline;
        }
    }
`;
