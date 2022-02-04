import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';
import { useStyles } from './styles';
import * as htmlToImage from 'html-to-image';
import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';
import downloadjs from 'downloadjs';
import ShareDialog from '../atomic_components/sharePopup';

function MemeGeneratorDashboard() {
    const classes = useStyles();
    const [imgSrc, setImgSrc] = useState("");
    const [imgUrl, setImgUrl] = React.useState("");
    const [shareDialogState, setShareDialogState] = React.useState(false);
    const [memeText, setMemeText] = useState({
        first: "",
        last: ""
    })
    /***
     * @summary Handle the input change real-time and update it over the image
     */
    const handleTextChange = (e) => {
        const { name, value } = e.target;
        setMemeText(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    /**
     * @summary Will make Api call from this function and get new random meme template
     */
    const generateRandomImg = () => {
        var options = {
            method: 'GET',
            url: 'https://api.imgflip.com/get_memes',
        };
        axios.request(options).then(function (response) {
            // Randomly getting one image URL
            let random = Math.floor(Math.random() * 8)
            let temp_url = response.data.data.memes[random].url;
            setImgSrc(temp_url);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const onDownloadClick = () => {
        htmlToImage.toPng(document.getElementById('meme'))
            .then(function (dataUrl) {
                downloadjs(dataUrl, 'meme.png');
            });
    }

    // Generic function which will close the dialog everytime invoked
    const handleDialogClose = () => {
        setShareDialogState(false);
    }

    const onShareClick = () => {
        setShareDialogState(true);
        htmlToImage.toPng(document.getElementById('meme'))
            .then(function (dataUrl) {
                setImgUrl(dataUrl);
            });
    }

    React.useEffect(() => {
        generateRandomImg()
        // Do the unmount funtionalities
        return () => {
            // Will close the dialog state when moving out from dashboard
            handleDialogClose();
        }
    }, [])

    return (
        <div className={classes.root}>
            <div className={classes.imgHolder} id="meme">
                <img src={imgSrc} className={classes.imgContaner} />
                <h2 className={classes.head}>{memeText.first}</h2>
                <h2 className={classes.foot}>{memeText.last}</h2>
            </div>
            <div className={classes.actionDiv}>
                <div className={classes.inputDiv}>
                    <TextField className={classes.text} onChange={handleTextChange} variant="outlined" label="First Text" name="first"></TextField>
                    <TextField className={classes.text} onChange={handleTextChange} variant="outlined" label="Last Text" name="last"></TextField>
                </div>
                <div className={classes.btnDiv}>
                    <Button className={classes.btn} variant="contained" fullWidth color={"primary"} onClick={generateRandomImg}> Random Image </Button>
                    <Button className={classes.btn} variant="contained" fullWidth color={"primary"} onClick={onDownloadClick}> Save </Button>
                    <Button className={classes.btn} variant="contained" fullWidth color={"secondary"} onClick={onShareClick}> Share </Button>
                </div>
            </div>
            {shareDialogState ? <ShareDialog state={shareDialogState} handleClose={handleDialogClose} url={imgUrl} /> : null}
        </div>
    );
}

export default MemeGeneratorDashboard;
