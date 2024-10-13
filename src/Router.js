import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";

import App from "./App";
import Map from "./Map";
import Resume from "./resume/Resume";
import OtherProjects from "./OtherProjects";


class Router extends React.Component {

    render(){
        return(
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<App />} />
                    <Route path="/Resume" element={<Resume />} />
                    <Route path="/Map" element={<Map />} />
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
          </BrowserRouter>
        )
    }

}

export default Router;