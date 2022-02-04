import { makeStyles } from "@material-ui/core";
export const useStyles = makeStyles(() => ({
    root: {
        flexGrow: "0.8",
        height: "20rem",
        width: "30rem"
    },
    imgHolder: {
        height: "75%",
        width: "100%",
        position:"relative"
    },
    imgContaner: {
        height: "100%",
        width: "100%"
    },
    head: {
        position:"absolute",
        top:"10px",
        left:"25%",
        right:"25%",
        fontSize:"2rem",
    },
    foot: {
        position:"absolute",
        bottom:"10px",
        left:"25%",
        right:"25%",
        fontSize:"2rem",
    },
    actionDiv: {
        display: 'flex',
        flexDirection: "column",
    },
    inputDiv: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "1rem",
        marginTop: "1rem"
    },
    btnDiv: {
        display: "flex",
        justifyContent: "space-between"
    },
    text: {
        width: "47.5%"
    },
    btn: {
        width: "31%"
    }
}));