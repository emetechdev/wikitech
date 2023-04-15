import { useContext, useEffect, useState } from "react";

import GlobalContext from "../context";
import { ButtonsNavTypes } from "../entities/buttons";
import Modal from "../components/Modal";
import TopNav from "../components/TopNav";

/** Views */
import DefaultContent from "../components/views/DefaultContent";
import Wiki from "../components/views/Wiki";

const Home = () => {
    const { btnNavProps, listDocuments } = useContext(GlobalContext);
    const [documentList, setDocumentList] = useState<string[]>([]);

    useEffect(() => {
        setDocumentList(listDocuments());
    }, [btnNavProps]);

    return (
        <>
            <TopNav>
                {btnNavProps.contentToDisplay === ButtonsNavTypes.wiki ? (
                    <>
                        {documentList && documentList.length > 0 && (
                            <Wiki documentList={documentList} />
                        )}
                    </>
                ) : (
                    <DefaultContent />
                )}
            </TopNav>

            <Modal />
        </>
    );
};

export default Home;
