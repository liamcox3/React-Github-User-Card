import React from "react";
import Page from "./components/Page";
import "./components/page.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            card: 3,
        };
    }

    render() {
        return (
            <div className='App'>
                <Page />
            </div>
        );
    }
}

export default App;
