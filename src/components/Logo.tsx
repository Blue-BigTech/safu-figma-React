import styled from "styled-components";
import { Linked, Image, Text } from "./common";
import { LogoImage } from "./images";

export const Logo = (props: any) => {
    const StyledLogo = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-decoration: none;
        margin: 25px 0 35px;
    `;
    const StyledImage = styled(Linked)`
        text-decoration: none;
    `;
    const StyledLogoImage = styled(Image)`
        width: 170px;
        height: 170px;
    `;
    return (
        <StyledLogo>
            <StyledImage to="/">
                <StyledLogoImage src={LogoImage} />
            </StyledImage>
        </StyledLogo>
    );
};
