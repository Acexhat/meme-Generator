import React, { useEffect, useState } from "react";
import {
    Checkbox,
    Grid,
    TextField,
    FormControlLabel,
    Paper,
    Button,
    Typography
} from '@material-ui/core';
import { useStyles } from './styles';
import userData from '../../user_local_Database/userData.json';
import axios from "axios";

const Login = (props) => {
    const classes = useStyles();
    const [userDetails, setUserDetails] = React.useState({
        email: "",
        password: ""
    })

    const handleEmailChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    const callLoginFunc = () => {
        // Api Calls to check user can login or not "For now we'll do through local sample database"
        console.log(userData);
        let user = userData.find((elem) => elem.email == userDetails.email);
        // checking if user exists
        if (user) {
            // Now user is available but check for password is correct or not
            if (user.password != userDetails.password) {
                handleErrorAlert("WRONG PASSWORD");
            } else {
                // Password also get matched so user will get logged in
                props.setIsAuthenticated(true);
            }
        } else {
            // user will not exists
            handleErrorAlert("EMAIL NOT REGISTERED");
        }
    }

    const handleErrorAlert = (error) =>{
         // this will alert every time if we get any error
         alert(error);
    }

    return (
        <React.Fragment>
            <div className={classes.loginMainDiv}>
                <Paper classes={{
                    root: classes.muiPaperRoot
                }}>
                    <Grid
                        container
                        spacing={3}
                        direction={'column'}
                        justify={'center'}
                        alignItems={'center'}
                    >
                        <Typography>LOGIN</Typography>
                        <Grid item xs={12}>
                            <TextField onChange={handleEmailChange} variant="outlined" label="Email" name="email"></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField onChange={handleEmailChange} variant="outlined" label="Password" type={'password'} name="password"></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth color={"primary"} onClick={callLoginFunc}> Login </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth color={"primary"} onClick={() => props.setIsLoggedIn(false)}>SignUp Page </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </React.Fragment >
    )
}
export default Login; 