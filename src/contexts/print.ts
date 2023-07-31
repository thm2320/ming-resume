import { createContext, useContext } from "react";

interface PrintContextType{
    isPrinting: boolean
    setIsPrinting?: React.Dispatch<React.SetStateAction<boolean>>;
}

const PrintContext = createContext({isPrinting:false} as PrintContextType);

const usePrintContext = ()=>useContext(PrintContext);

export {PrintContext, usePrintContext};