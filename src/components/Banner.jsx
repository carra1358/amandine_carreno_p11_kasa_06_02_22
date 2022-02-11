function Banner ({urlImg,texte}){
return (
    <div className="banner" style={{backgroundImage:`url(${urlImg})`}}>
       <div className="banner_text_bg"></div>
       <p className="banner_text"><span>{texte}</span></p>
     
    </div>
)
};

export default Banner;