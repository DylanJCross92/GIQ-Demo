import React from 'react';
import {render} from 'react-dom';
import { Route, Redirect , HashRouter, Switch} from 'react-router-dom'
import Step_1_1FormContainer from './section/1/Step_1_1FormContainer.jsx';
import Step_2_1 from './section/2/Step-2.1.jsx';
import Sidebar from './section/sidebar/Sidebar.jsx';
import SessionError from './errors/sessionError.jsx';
import NoSessionError from './errors/noSessionError.jsx'
import ServerError from './errors/serverError.jsx'
import UWBlock from './errors/UWBlock.jsx'
import Step_2_1FormContainer from "./section/2/Step_2_1FormContainer.jsx";
import Step_2_2FormContainer from "./section/2/Step_2_2FormContainer.jsx";
import Step_3_1FormContainer from "./section/3/Step_3_1FormContainer.jsx";
import Step_3_2FormContainer from "./section/3/Step_3_2FormContainer.jsx";
import Step_3_3FormContainer from "./section/3/Step_3_3FormContainer.jsx";
import Step_3_4FormContainer from "./section/3/Step_3_4FormContainer.jsx";
import Step_3_5FormContainer from "./section/3/Step_3_5FormContainer.jsx";
import Step_4_1FormContainer from "./section/4/Step_4_1FormContainer.jsx";





export default function App ({ hash }) {
    return (

        <div className="content">

            {/*<Match  path="/section=1&step=1.1" component={Step_1_1} /            <Route exact path="/" render={() => <Redirect to={"/section=1&step=1.1"} />} />
             >*/}
            <Route exact path="/" render={() => <Redirect to={hash ? hash : "/section=1&step=1.1"} />} />
            <Route path="/section=1&step=1.1" render={(props) => <Step_1_1FormContainer {...props} />} />
            <Route path="/section=2&step=2.1" render={(props) => <Step_2_1FormContainer {...props} />} />
            <Route path="/section=2&step=2.2" render={(props) => <Step_2_2FormContainer {...props} />} />
            <Route path="/section=3&step=3.1" render={(props) => <Step_3_1FormContainer {...props} />} />
            <Route path="/section=3&step=3.2" render={(props) => <Step_3_2FormContainer {...props} />} />
            <Route path="/section=3&step=3.3" render={(props) => <Step_3_3FormContainer {...props} />} />
            <Route path="/section=3&step=3.4" render={(props) => <Step_3_4FormContainer {...props} />} />
            <Route path="/section=3&step=3.5" render={(props) => <Step_3_5FormContainer {...props} />} />
            <Route path="/section=4&step=4.1" render={(props) => <Step_4_1FormContainer {...props} />} />




            <Route path="/errors/sessionError" component={SessionError} />
            <Route path="/errors/noSessionError" component={NoSessionError} />
            <Route path="/errors/underwriting-block" component={UWBlock} />
            <Route path="/errors/serverError" component={ServerError} />

            <Sidebar sidebar='sidebar'/>
        </div>



    )
}