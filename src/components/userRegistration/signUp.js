import React, { useState } from "react";
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

const SignUp = (props) => {
    const classes = useStyles();

    const [userDetails, setUserDetails] = React.useState({
        fullname: "",
        email: "",
        password: ""
    })

    const handleSignUp = () => {
        // NEED TO MAKE API CALL
        alert(userDetails.email);
    }

    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setUserDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
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
                        <Typography variant="h6">SIGN-UP</Typography>
                        <Grid item xs={12}>
                            <TextField variant="outlined" label="Full Name" name="fullname" onChange={handleTextChange}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" label="Email" name="email" onChange={handleTextChange}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField variant="outlined" label="Password" type={'password'} name="password" onChange={handleTextChange}></TextField>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth color={"primary"} onClick={handleSignUp}> Sign Up </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Button variant="contained" fullWidth color={"primary"} onClick={() => props.setIsLoggedIn(true)}>Login Page </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </React.Fragment >
    )
}
export default SignUp; 