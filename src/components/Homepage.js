import React from 'react';
import { makeStyles } from '@material-ui/core';
const Login = React.lazy(() => import('./userRegistration/Login'));
const SignUp = React.lazy(() => import('./userRegistration/signUp'));
const MemeGeneratorDashboard = React.lazy(() => import('./generatorComp/memegenerator'));
const Header = React.lazy(() => import('./Header'));

const useStyles = makeStyles(() => ({
    root: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#e0d6e0"
    }
}));

function Homepage() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    const [isLoggedIn, setIsLoggedIn] = React.useState(false);
    const classes = useStyles();

    const handleLoginState = (state) => {
        setIsLoggedIn(state);
    }

    return (
        <div className={classes.root}>
            <Header />
            {
                isAuthenticated ? <MemeGeneratorDashboard /> :
                    isLoggedIn ?
                        <Login setIsLoggedIn={handleLoginState} setIsAuthenticated={setIsAuthenticated} /> :
                        <SignUp setIsLoggedIn={handleLoginState} />
            }
        </div>
    );
}

export default Homepage;
