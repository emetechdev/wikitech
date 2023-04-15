import { useContext } from "react";

/** MUI Icons */
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HomeIcon from "@mui/icons-material/Home";

/** MUI Components */
import Stack from "@mui/material/Stack";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

/** Locals */
import GlobalContext from "../context";
import { ButtonsNavTypes } from "../entities/buttons";

const ButtonsNav = () => {
    const { btnNavTo } = useContext(GlobalContext);

    return (
        <Stack>
            <BottomNavigation
                showLabels
                onChange={(e, newValue) => {
                    btnNavTo(newValue);
                }}
                sx={{ bgcolor: "transparent" }}
            >
                <BottomNavigationAction
                    sx={{ color: "white" }}
                    value={ButtonsNavTypes.home}
                    label="Home"
                    icon={<HomeIcon />}
                />
                <BottomNavigationAction
                    sx={{ color: "white" }}
                    value={ButtonsNavTypes.wiki}
                    label="Wiki"
                    icon={<MenuBookIcon />}
                />
            </BottomNavigation>
        </Stack>
    );
};
export default ButtonsNav;
