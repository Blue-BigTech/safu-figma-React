import styled from "styled-components";
import { BodyItem } from "./bodyItem";

export const DashboardBody = (props: any) => {
    const StyledContainer = styled.div`
        width: calc(100% + 16px);
        margin: -8px;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
    `;
    const StyledGrid = styled.div`
        padding: 8px;
        @media (min-width: 600px) {
            flex-grow: 0;
            max-width: 50%;
            flex-basis: 50%;
        }
        @media (min-width: 960px) {
            flex-grow: 0;
            max-width: 50%;
            flex-basis: 50%;
        }
        @media (min-width: 1280px) {
            flex-grow: 0;
            max-width: 50%;
            flex-basis: 50%;
        }
        flex-grow: 0;
        max-width: 100%;
        flex-basis: 100%;
        margin: 0;
        box-sizing: border-box;
    `;
    const StyledGrid1 = styled.div`
        padding: 8px;
        @media (min-width: 600px) {
            flex-grow: 0;
            max-width: 33.333333%;
            flex-basis: 33.333333%;
        }
        @media (min-width: 960px) {
            flex-grow: 0;
            max-width: 33.333333%;
            flex-basis: 33.333333%;
        }
        @media (min-width: 1280px) {
            flex-grow: 0;
            max-width: 33.333333%;
            flex-basis: 33.333333%;
        }
        flex-grow: 0;
        max-width: 100%;
        flex-basis: 100%;
        margin: 0;
        box-sizing: border-box;
    `;
    return (
        <div>
            <StyledContainer>
                <StyledGrid>
                    <BodyItem title="SURF Price" content="$200.84" />
                </StyledGrid>
                <StyledGrid>
                    <BodyItem
                        title="Market Value of Treasury Asset"
                        content="$4,736,995"
                    />
                </StyledGrid>
                <StyledGrid>
                    <BodyItem title="Pool Value" content="$21,422,825" />
                </StyledGrid>
                <StyledGrid>
                    <BodyItem
                        title="SURF Insurance Fund Value"
                        content="$2,456,710"
                    />
                </StyledGrid>
                <StyledGrid1>
                    <BodyItem
                        title="# Value of FirePit"
                        content="152,857.96 SURF"
                    />
                </StyledGrid1>
                <StyledGrid1>
                    <BodyItem
                        title="$ Value of FirePit"
                        content="$30,624,908"
                    />
                </StyledGrid1>
                <StyledGrid1>
                    <BodyItem title="% FirePit : Supply" content="16.00%" />
                </StyledGrid1>
            </StyledContainer>
        </div>
    );
};
