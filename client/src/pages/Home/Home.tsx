import React from "react";
import {Box, Container, Typography} from "@mui/material";
import Image from "./open-book.jpeg";

const styles = {
    image: {
        backgroundRepeat: "no-repeat",
        position: "absolute",
        right: "0px",
        bottom: "0px",
        maxHeight: "100vh",
        width: "100%",
        opacity: "0.5",
        zIndex: -1
    },
    quote: {
        paddingTop: "15%"
    }
};

const quote = '“A reader lives a thousand lives before he dies. The man who never reads lives only one.”';
const author = "- George R.R. Martin";

const Home = (): JSX.Element => {

    return <Container>
        <Typography variant="h5" sx={styles.quote}>{quote}</Typography>
        <Box>{author}</Box>
        <Box component="img" src={Image} sx={styles.image} alt="Book"/>
    </Container>
};

export default Home;