import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import Brand from "./Brand";
import ButtonsNav from "./ButtonsNav";

interface Props {
    children: JSX.Element | JSX.Element[];
}

const TopNav = (props: Props) => {
    const { children } = props;

    return (
        <>
            <AppBar>
                <Toolbar>
                    <Box sx={{ my: 2, mr: 4 }}>
                        <Brand />
                    </Box>

                    <ButtonsNav />
                </Toolbar>
            </AppBar>

            <Container sx={{ mt: 12, ml: -2 }}>{children}</Container>
        </>
    );
};
export default TopNav;
