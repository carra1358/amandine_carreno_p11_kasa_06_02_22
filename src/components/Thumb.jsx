

function Thumb ({id,cover,title}){
    return <div className="thumb" key={id}>
     <img src={cover} alt={title} className="thumb_img"/>
     <p className="thumb_title">{title}</p>
    </div>

}
export default Thumb;