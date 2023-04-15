import { useReducer, useState } from "react";

import GlobalContext from ".";

/** Dispatchers */
import modalReducer, {
    modalInitilizer,
} from "./helpers/dispatchers/modalDispatcher";
import btnNavReducer, {
    btnNavInitilizer,
} from "./helpers/dispatchers/buttonsNavDispatcher";

/** Services */
import { getDocs, docList } from "../services";

/** Entities */
import GlobalTypes from "../entities/context";
import { ModalActionTypes } from "../entities/modal";
import { WikiInterface } from "../entities/wiki";

const GlobalProvider = ({ children }: GlobalTypes) => {
    const [modalProps, modalDispatcher] = useReducer(
        modalReducer,
        modalInitilizer
    );
    const [btnNavProps, btnNavDispatcher] = useReducer(
        btnNavReducer,
        btnNavInitilizer
    );
    const [wikiProps, setWikiProps] = useState<WikiInterface>({
        title: "",
        contentToDisplay: "",
    });

    /** Modal */
    const clearModal = () => {
        modalDispatcher({ type: ModalActionTypes.clear });
    };
    const showModal = (title?: string, content?: string, buttons?: any) => {
        modalDispatcher({
            type: ModalActionTypes.show,
            modalPayload: {
                title: title,
                content: content,
                buttons: buttons,
            },
        });
    };

    /** Button Navigation */
    const btnNavTo = (navTo: string) => {
        btnNavDispatcher({ type: navTo });
    };

    /** Wiki */
    const getDocument = async (fileName: string) => {
        const doc = await getDocs(fileName);
        setWikiProps(doc);
    };
    const listDocuments = () => {
        return docList();
    };

    return (
        <GlobalContext.Provider
            value={{
                /** Modal */
                modalProps,
                clearModal,
                showModal,

                /** Btn Nav */
                btnNavProps,
                btnNavTo,

                /** Wiki */
                wikiProps,

                /** Geters */
                listDocuments,
                getDocument,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalProvider;
