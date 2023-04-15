/** Interfaces */
export interface Modal {
    open: boolean;
    title?: string;
    content?: string;
    buttons: any;
}

/** Types */
export const ModalActionTypes = {
    show: "show",
    clear: "clear",
};
