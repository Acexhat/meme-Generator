import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { FacebookShareButton, WhatsappShareButton, TwitterShareButton } from "react-share";
import { FacebookIcon, WhatsappIcon, TwitterIcon } from 'react-share';

export default function ShareDialog(props) {
    const [open, setOpen] = React.useState(props.state);
    return (
        <div>
            <Dialog
                open={open}
                onClose={props.handleClose}
            >
                <DialogTitle id="alert-dialog-title">
                    Share to the social media
                </DialogTitle>
                <DialogContent style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <FacebookShareButton
                        url={'https://github.com/Acexhat'}
                        hashtag="#memes"
                    >
                        <FacebookIcon logoFillColor="white" round={true} />
                    </FacebookShareButton>
                    <WhatsappShareButton
                        url={'https://github.com/Acexhat'}
                        hashtag="#memes"
                    >
                        <WhatsappIcon logoFillColor="white" round={true} />
                    </WhatsappShareButton>
                    <TwitterShareButton
                        url={'https://github.com/Acexhat'}
                        hashtag="#memes"
                    >
                        <TwitterIcon logoFillColor="white" round={true} />
                    </TwitterShareButton>
                </DialogContent>
            </Dialog>
        </div>
    );
}
