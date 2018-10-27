export const SHOW_LOGO = "SHOW_LOGO";
export const HIDE_LOGO = "HIDE_LOGO";

export const showLogo = () => {
    return {
        type: SHOW_LOGO
    }
}

export const hideLogo = () => {
    return {
        type: HIDE_LOGO
    }
}