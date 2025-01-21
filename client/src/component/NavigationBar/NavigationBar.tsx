import {AppBar, Box, IconButton, Toolbar} from "@mui/material";
import {Link} from "react-router-dom";
import InfoIcon from '@mui/icons-material/Info';

const styles = {
    root: {
        flexGrow: 1,
    },
    grow: {
        flexGrow: 1,
    },
    navBar: {
        background: "#303030",
    },
    title: {
        flexGrow: 1,
        color: "white"
    },
    icon: {
        color: "white"
    }
};

const NavigationBar = (): JSX.Element => {

    return <AppBar position="static" sx={styles.navBar}>
        <Toolbar sx={styles.root}>
            <Link to="/" style={{textDecoration: 'none'}} aria-label="Home">
                <IconButton edge="start" id="homeIcon" sx={styles.title}>
                    TheBookStore
                </IconButton>
            </Link>
            <Box sx={styles.grow}/>
            <Link to="/about" style={{textDecoration: 'none'}} aria-label="About">
                <IconButton id="aboutIcon" sx={styles.icon}>
                    <InfoIcon/>
                </IconButton>
            </Link>
        </Toolbar>
    </AppBar>
};

export default NavigationBar;
