import React,{useState} from "react";
import { MobileMenuOpenContext } from "../context/mobileMenuOpenContext";

const MobileMenuOpenProvider = ({children})=>{
    const [mobileMenuOpen,setMobileMenuOpen] = useState(false);
    return(
        <MobileMenuOpenContext.Provider value={{ mobileMenuOpen,setMobileMenuOpen }}>
            {children}
        </MobileMenuOpenContext.Provider>
    )
};

export {MobileMenuOpenProvider};