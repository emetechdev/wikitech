import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Typography from "@mui/material/Typography";

const Loader = () => {
    return (
        <>
            <Box display="flex" justifyContent="center" sx={{ margin: "30px" }}>
                <CircularProgress color="primary" />
            </Box>
            <Box display="flex" justifyContent="center">
                <Typography align="center">Cargando...</Typography>
            </Box>
        </>
    );
};
export default Loader;
