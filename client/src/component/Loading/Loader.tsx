import React from "react";
import {Backdrop, CircularProgress, createTheme, ThemeProvider} from "@mui/material";

const theme = createTheme();

const styles = {
    backdrop: {
        zIndex: theme.zIndex.drawer + 1,
        color: '#fff'
    }
};

const Loader = (): JSX.Element => {
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <ThemeProvider theme={theme}>
            <Backdrop sx={styles.backdrop} open={open} onClick={handleClose}>
                <CircularProgress color="inherit"/>
            </Backdrop>
        </ThemeProvider>
    );
};

export default Loader;
