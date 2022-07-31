import styled from "styled-components";
import { Link } from "react-router-dom";
export const Text = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    user-select: none;
    margin: 0;
`;

export const Linked = styled(Link)`
    color: inherit;
    font-size: 1.4rem;
    &:hover {
        cursor: pointer;
    }
`;

export const Image = styled.img`
    user-select: none;
`;
