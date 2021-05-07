import {createMuiTheme} from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#EAF7DE",
        },
        secondary: {
            main: "#52B69A"
        }
    },
    shape: {
        borderRadius: 8
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 23,
                fontSize: 20
            },
            label : {
                color: "#EAF7DE"
            },   
        },
        MuiTypography: {
            body1: {
                fontSize: 18,
                fontWeight: 600
            }
        },
        MuiButtonBase: {
            root: {
                margin: 10
            }
        },
        MuiSvgIcon: {
            fontSizeLarge: {
                fontSize: 80,
                position: "fixed",
                right: 40,
                top: 500,
            }
        }
    },
    props: {
        MuiButton: {
            color: "secondary",
            variant: "contained",
            disableRipple: true,
        }
    },
    
    
});