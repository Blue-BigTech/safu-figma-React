import styled from "styled-components";
import { Item } from "./item";
export const Header = (props: any) => {
    const StyledHeaderWrap = styled.div`
        transform: none;
        transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        width: calc(100% + 16px);
        margin: -8px;
        display: flex;
        flex-wrap: wrap;
        box-sizing: border-box;
    `;
    return (
        <StyledHeaderWrap>
            <Item title="Your Balance" content="$0" footer="0 SURF" />
            <Item title="APY" content="383,025.8%" footer="Daily ROI 2.28%" />
            <Item
                title="Next Rebase:"
                content="00:09:38"
                footer="You will earn money soon"
            />
        </StyledHeaderWrap>
    );
};
