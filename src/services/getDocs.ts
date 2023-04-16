import { WikiInterface } from "../entities/wiki";
import docList from "./docList";

const getDocs = async (fileName: string): Promise<WikiInterface> => {
    const type = docList().find((i) => {
        if (fileName === i) {
            return {
                title: i,
                contentToDisplay: "",
            };
        }
    });

    /* let docFile2: any;

    const fileReader = new FileReader();
    fileReader.readAsText(arch);
    // Si sale bien es fileReader.onload, sino, para catchear el error es fileReader.onerror
    fileReader.onload = () => {
        docFile2 = fileReader.result;
        console.log("onload: ", fileReader.result);
    };
    fileReader.onerror = () => {
        console.log("onload: ", fileReader.error);
    }; */

    const docFile: WikiInterface = await fetch(`src/docs/${fileName}.md`)
        .then((res) => {
            return res.blob();
        })
        .then((file) => {
            return file.text();
        })
        .then((fileRead) => {
            return {
                title: type,
                contentToDisplay: fileRead,
            };
        })
        .catch((res) => {
            return {
                title: null,
                contentToDisplay: null,
            };
        });

    return docFile;
};

export default getDocs;
