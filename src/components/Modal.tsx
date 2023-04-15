import { useContext } from "react";

import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import GlobalContext from "../context";
import AboutMeContent from "../content/brand";

const Modal = () => {
    const { modalProps, clearModal } = useContext(GlobalContext);

    return (
        <Grid container>
            <Dialog
                open={modalProps.open}
                onClose={() => clearModal()}
                aria-labelledby="cuadro-de-dialogo-acerca-de-mi"
                aria-describedby={AboutMeContent.replaceAll(" ", "-")}
            >
                {modalProps.title && (
                    <DialogTitle id="id-modal-title">
                        {modalProps.title}
                    </DialogTitle>
                )}

                {modalProps.content && (
                    <DialogContent>
                        <DialogContentText id="id-modal-content">
                            {modalProps.content}
                        </DialogContentText>
                    </DialogContent>
                )}

                <DialogActions>
                    <Button onClick={() => clearModal()} autoFocus>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </Grid>
    );
};

export default Modal;
