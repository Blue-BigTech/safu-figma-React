import styled from "styled-components";
import { DashboardItem } from "./dashboardItem";
export const Header = (props: any) => {
    const StyledHeader = styled.div`
        background-color: rgb(9, 22, 12);
        border: 1px solid rgb(98, 116, 94);
        border-radius: 10px;
    `;
    const StyledContainer = styled.div`
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
    `;
    return (
        <StyledHeader>
            <StyledContainer>
                <DashboardItem title="SURF Price" content="$199.81" />
                <DashboardItem title="Market Cap" content="$160,269,476" />
                <DashboardItem
                    title="Circulating Supply"
                    content="802,103.05"
                />
                <DashboardItem title="Backed Liquidity" content="100%" />
                <DashboardItem title="Next Rebase" content="00:11:38" />
                <DashboardItem title="Total Supply" content="954,876.23" />
            </StyledContainer>
        </StyledHeader>
    );
};
