import { Modal } from "../../../entities/modal";
import { ModalActionTypes } from "../../../entities/modal";

export const modalInitilizer = {
    open: false,
    buttons: null,
};

const modalReducer = (prevState: Modal, action: any): Modal => {
    let newModalState: Modal = prevState;

    switch (action.type) {
        case ModalActionTypes.show:
            newModalState = {
                open: true,
                title: action.modalPayload.title,
                content: action.modalPayload.content,
                buttons: action.modalPayload.buttons,
            };
            break;

        default:
            newModalState = modalInitilizer;
            break;
    }

    return newModalState;
};

export default modalReducer;
