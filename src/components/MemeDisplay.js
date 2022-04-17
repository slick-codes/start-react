

const ImageContainer = function ( props ) {
  const { topText , bottomText , imageURL } = props 
  
  return (
    <div className="image__container">
      <img src={ imageURL } alt="" />
      <div className="title__container">
        <h1 className="top__title"> {topText} </h1>
        <h1 className="bottom__title"> {bottomText} </h1>
      </div>
    </div>
  );
};

export default ImageContainer;
