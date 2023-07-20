import {PaletteOptions, createTheme, Typography} from "@mui/material"


const palette: PaletteOptions = {
    mode: "dark",
        primary:{
            main: "#fff149"
        },
};

const theme = createTheme ({
    palette,
    components: {
        MuiBotton: {
            styleOverrides: {
                root: {
                    borderRadis: 15
                }
            }
        }
    },
    typography: {
        button: {
            fontSize: '1.3rem'
        }
    }
});

export default theme;