import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { Links } from "./routes";
import { getStore } from "./redux";
import "./assets/fonts/fonts.css";
const GlobalStyle = createGlobalStyle`
    html, body {
        margin: 0;
        padding: 0;
    }

    * {
        box-sizing: border-box;
        outline: none;
        color: rgba(0, 0, 0, 0.87);
    }

    body {
        font-size: 16px;
        overflow: auto;
        line-height: 26px;
        color: white;
    }

    a {
        text-decoration: none;
        &:visited {
        color: inherit;
        }
    }

    a:hover {
        text-decoration: none;
    }
    
    p {
        letter-spacing: .015rem;
        margin: 0;
    }
`;

const store = getStore();

function App() {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <Links />
        </Provider>
    );
}

export default App;
