import { createContext } from "react";

import { Modal } from "../entities/modal";
import { ButtonsNavInterface } from "../entities/buttons";
import { WikiInterface } from "../entities/wiki";

type GloblContext = {
    /** Modal */
    modalProps: Modal;
    clearModal: any;
    showModal: any;

    /** Btn Nav */
    btnNavProps: ButtonsNavInterface;
    btnNavTo: any;

    /** Wiki */
    wikiProps: WikiInterface;

    /** Geters */
    listDocuments: any;
    getDocument: any;
};

//const MyContext = React.createContext(defaultValue);
const GlobalContext = createContext<GloblContext>({} as GloblContext); //se pasa un valor como predeterminado

export default GlobalContext;
