import {createMuiTheme} from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#EAF7DE",
        },
        secondary: {
            main: "#52B69A"
        },
        error: {
            main: "#e57373"
        }
    },
    shape: {
        borderRadius: 8
    },
    overrides: {
        MuiButton: {
            root: {
                borderRadius: 23,
            },
            label : {
                color: "#EAF7DE",
                fontSize: 17,
                fontWeight: 600,
            },   
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
        },
        MuiCheckbox: {
            root: {
                color: '#212529'
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