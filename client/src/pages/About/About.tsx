import React, {useEffect, useState} from "react";
import Loader from "../../component/Loading/Loader";
import {Box, Card, CardContent, Typography} from "@mui/material";
import {get, HttpStatus} from "../../utils/api/Api";
import Image from "./group-picture.jpeg";
import {API_CONFIG} from "../../api-config";
import {MyFeatures} from "../../utils/MyFeatures";
import {FeatureToggle, Off, On} from "../../component/FeatureToggle/FeatureToggle";

const styles = {
    root: {
        width: "inherit",
    },
    title: {
        fontSize: 30,
        paddingTop: "2%",
    },
    contentGrid: {
        marginTop: "5%",
    },
    image: {
        width: "100%",
        zIndex: -1
    }
};

const About = (): JSX.Element => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [loadedContent, setContent] = useState<string>("");

    useEffect(() => {
        (async () => {
            const result: { message: string } = await get(API_CONFIG.about.url, [HttpStatus.OK]);
            setContent(result.message);
            setIsLoading(false)
        })();
    }, []);

    return (
        <div>
            {isLoading ? <Loader/> : card(loadedContent)}
        </div>
    )
};

const card = (loadedContent: string) =>
    <Card sx={styles.root}>
        <CardContent>
            <Typography sx={styles.title} color="textSecondary" gutterBottom>
                About Us
            </Typography>
            <Typography id="content" variant="body2" component="p">
                {loadedContent}
            </Typography>
            <FeatureToggle name={MyFeatures.ABOUT_IMAGE}>
                <On>
                    <Box component="img" src={Image} sx={styles.image} alt="Group"/>
                </On>
                <Off>
                    <Typography variant="body2" component="p" sx={styles.contentGrid}>About us image coming
                        soon...</Typography>
                </Off>
            </FeatureToggle>
        </CardContent>
    </Card>;

export default About;
