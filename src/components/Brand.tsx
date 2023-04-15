import { useContext } from "react";

import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import GlobalContext from "../context";
import AboutMeContent from "../content/brand";

const Brand = () => {
    const { showModal } = useContext(GlobalContext);

    return (
        <Stack>
            <Typography
                variant="h4"
                align="center"
                color="white"
                component="div"
            >
                emetechdev
            </Typography>

            <Typography
                onClick={() => showModal("About me", AboutMeContent)}
                variant="body2"
                align="center"
                color="white"
                component="h1"
            >
                About me
            </Typography>
        </Stack>
    );
};

export default Brand;
