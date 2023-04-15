import { useContext, useEffect, useState } from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DescriptionIcon from "@mui/icons-material/Description";

import Loader from "../Loader";
import DisplayMDDoc from "../DisplayMMDoc";
import GlobalContext from "../../context";
import WikiModalMessage from "../../content/wiki";

interface WikiTypes {
    documentList: string[];
}

const Wiki = (props: WikiTypes) => {
    const { documentList } = props;
    const { showModal, getDocument, wikiProps } = useContext(GlobalContext);
    const [loadWikiDoc, setLoadWikiDoc] = useState(true);

    useEffect(() => {
        wikiProps && setLoadWikiDoc(false);
    }, [wikiProps]);

    return (
        <Grid container>
            <Grid xs={12} sm={4} md={3} lg={2}>
                <Typography
                    onClick={() => showModal("About Wiki", WikiModalMessage)}
                    variant="h4"
                    component="h1"
                    color="primary"
                    fontWeight="bold"
                    sx={{ mt: 2 }}
                >
                    Wiki
                </Typography>

                {documentList && documentList.length > 0 && (
                    <List dense={true}>
                        {documentList.map((i: string) => (
                            <ListItem key={i} onClick={() => getDocument(i)}>
                                <ListItemIcon>
                                    <DescriptionIcon />
                                </ListItemIcon>
                                <ListItemText primary={i} />
                            </ListItem>
                        ))}
                    </List>
                )}
            </Grid>
            <Grid xs={12} sm={8} md={9} lg={10}>
                {loadWikiDoc ? (
                    <Loader />
                ) : (
                    <DisplayMDDoc
                        contentToDisplay={wikiProps.contentToDisplay}
                    />
                )}
            </Grid>
        </Grid>
    );
};

export default Wiki;
