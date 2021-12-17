import React from "react";
import { Route, Routes, HashRouter } from "react-router-dom";

import App from "./App";
import Resume from "./Resume";
import OtherProjects from "./OtherProjects";


class Router extends React.Component {

    render(){
        return(
            <HashRouter>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/OtherProjects" element={<OtherProjects />} />
                    <Route
                        path="*"
                        element={
                            <main style={{ padding: "1rem" }}>
                            <p>There's nothing here!</p>
                            </main>
                        }
                    />
                </Routes>
          </HashRouter>
        )
    }

}

export default Router;