import { useParams,useLocation } from "react-router-dom";
import {data} from "../data/data"

function Housing(){
    let location = useLocation();
    let urlParams = useParams();

    console.log(location,urlParams.id)
    const houseData = data.find(data => data.id === urlParams.id)
    console.log(houseData)
    return(
        
        <div>
          {houseData.title}
       
        </div>
    )
}


export default Housing;