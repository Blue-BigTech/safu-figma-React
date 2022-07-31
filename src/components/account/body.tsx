import styled from "styled-components";
import { BodyItem } from "./bodyItem";
export const Body = (props: any) => {
    const StyledBody = styled.div`
        transform: none;
        transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        color: rgba(243, 240, 240, 0.87);
        background-color: rgba(0, 0, 0, 0.2);
        justify-content: center;
        padding: 0 5px;
        margin: 30px auto auto;
        border-radius: 10px;
        border: 1px solid #62745e;
        box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
            0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
    `;
    return (
        <StyledBody>
            <BodyItem title="Current SURF Price" content="$200.33" />
            <BodyItem
                title="Next Reward Amount
        "
                content="0 SURF"
            />
            <BodyItem title="Next Reward Amount USD " content="$0" />
            <BodyItem title="Next Reward Yield" content="0.02355%" />
            <BodyItem title="ROI(1-Day Rate) USD" content="$0" />
            <BodyItem title="ROI(5-Day Rate)" content="11.96%" />
            <BodyItem title="ROI(5-Day Rate) USD" content="$0" />
        </StyledBody>
    );
};
