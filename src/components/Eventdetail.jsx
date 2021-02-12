import React from "react";
import {useParams} from "react-router";
import Details from "./Eventdet";
import Finaldetail from "./Detailfinal";
function Edetail()
{
    let {id}=useParams();
    let Last=
        Details.map((details) => 
        {
            if(details.eventname===id)
               return (<Finaldetail eventname={details.eventname} aboutevent={details.aboutevent} img1={details.img1} hostman={details.hostman}
                   category={details.category} host={details.host} date={details.time} detail={details.detail} platform={details.platform} title={details.title} index={details.index} first={details.first} second={details.second} third={details.third} o={details.o}
                   oo={details.oo} ooo={details.ooo}
               />);
        });
    return(
        <div>
            {Last}
        </div>
    );
}
export default Edetail;