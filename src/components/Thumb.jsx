import { Link } from "react-router-dom";


function Thumb ({id,cover,title}){
    return (
        <Link to={`housing/${id}`}>
     <div className="thumb" key={id}>
     <img src={cover} alt={title} className="thumb_img"/>
     <p className="thumb_title">{title}</p>
    </div>
    </Link>
    )
   

}
export default Thumb;