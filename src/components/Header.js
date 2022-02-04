import React from "react";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        border: "1px solid red",
        width: "50%",
        borderRadius: "0.5rem",
        flexGrow: "0.025"
    }
}));

const Header = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='h3'>
                Meme Generator
            </Typography>
        </div>
    )
}
export default Header; 