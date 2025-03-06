import { styled } from "styled-components";

import { mixins } from "../../styles/mixins";

export const Container = styled.header`
    max-width: 1160px;
    padding: 32px 20px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Aside = styled.aside`
    display: flex;
    gap: 12px;

     div {
        display: flex;
        align-items: center;
        gap: 4px;

        background-color: ${(props) => props.theme["purple-light"]};  
        
        svg {
            color: ${(props) => props.theme["purple"]};
        }

        span {
            color: ${(props) => props.theme["purple-dark"]};
        }
        
        padding: 10px 8px;
        border-radius: 6px;
    }

    a {
        display: flex;
        align-items: center;

        background-color: ${(props) => props.theme["yellow-light"]};
        color: ${(props) => props.theme["yellow-dark"]};

        padding: 8px;
        border-radius: 6px;

        position: relative;

        &[aria-disabled='true'] {
            pointer-events: none;
        }

        span {
            ${mixins.fonts.textS};
            font-weight: bold;
            color: ${(props) => props.theme.white};
            background-color: ${(props) => props.theme["yellow-dark"]};
            border-radius: 50%;
            width: 20px;
            height: 20px;
            display: flex;
            align-items: center;
            justify-content: center;

            position: absolute;
            top: 0px;
            right: 0px;
            transform: translate(50%, -50%);
        }
    }
`