import { ButtonsNavInterface } from "../../../entities/buttons";
import { ButtonsNavTypes } from "../../../entities/buttons";

export const btnNavInitilizer = {
    contentToDisplay: "",
    title: "",
};

// prev = {open: true, buttons: null}
// action = {type: 'tipo de acction'}
const btnNavReducer = (
    prevState: ButtonsNavInterface,
    action: any
): ButtonsNavInterface => {
    let newBtnNavState: ButtonsNavInterface = prevState;

    switch (action.type) {
        case ButtonsNavTypes.wiki:
            newBtnNavState = {
                contentToDisplay: action.type,
                title: "Wiki",
            };
            break;

        default:
            newBtnNavState = btnNavInitilizer;
            break;
    }

    return newBtnNavState;
};

export default btnNavReducer;
