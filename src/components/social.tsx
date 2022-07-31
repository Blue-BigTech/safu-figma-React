import styled from "styled-components";
import { Linked } from "./common";
import "./style.css";
import { DiscordSvg, TwitterSvg, GithubSvg, SafumediumSvg } from "./images";
export const Social = (props: any) => {
    const SocialRow = styled.div`
        display: flex;
        flex-flow: row;
        justify-content: space-evenly;
        padding: 1.3rem;
        margin-top: 3rem;
    `;
    const StyledLink = styled(Linked)`
        text-decoration: none;
    `;
    return (
        <SocialRow>
            <StyledLink to="#">
                <GithubSvg className="svgFile" />
            </StyledLink>
            <StyledLink to="#">
                <TwitterSvg className="svgFile" />
            </StyledLink>
            <StyledLink to="#">
                <SafumediumSvg className="svgFile" />
            </StyledLink>
            <StyledLink to="#">
                <DiscordSvg className="svgFile" />
            </StyledLink>
        </SocialRow>
    );
};
