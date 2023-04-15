import Grid from "@mui/material/Grid";
import ReactMarkdown from "react-markdown";

interface DisplayMDDoc {
    contentToDisplay: any;
}

const DisplayMDDoc = (props: DisplayMDDoc) => {
    const { contentToDisplay } = props;
    return (
        <Grid>
            <ReactMarkdown>{contentToDisplay}</ReactMarkdown>
        </Grid>
    );
};
export default DisplayMDDoc;
