import React from "react";
import {HashRouter as Router, Route,Switch, Redirect} from "react-router-dom";
import Auth from "../routes/Auth";
import Home from "../routes/Home";
import Navigation from "components/Navigation";
import Profile from "routes/Profile";

const AppRouter = ({ isLoggedIn }) => {
    //React Hook를 사용하는 부분 & default 값으로 false 로 둔다
    // useState(true) 일시 Home 이 Route 된다
    // #2.0 Using Firebase Auth , state(상태) 를 App.js 로 이전 
    return(
        <Router>
            {isLoggedIn && <Navigation/>}
            <Switch>
                {isLoggedIn ? (
                    // <> ... </> 는 fragment로 다수의 element를 route 할때 사용 할 수 있다.
                <>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route exact path="/profile">
                    <Profile/>
                </Route>
                </>
                ) : (
                <>
                    <Route exact path="/">
                        <Auth/>
                    </Route>
                    <Redirect from="*" to="/"/>
                </>
                )}
            </Switch>
        </Router>
    )
}

export default AppRouter;