import React from 'react';
import ProfilPhoto from "./profile/ProfilPhoto.js";
import FullName from "./profile/FullName.js";
import Address from "./profile/Address.js";
import "./Main.css";
const Main=() => {return(
    <div className="Main">
    <FullName/>
    <Address/>
    <ProfilPhoto/>
    </div>
);
}
export default Main;