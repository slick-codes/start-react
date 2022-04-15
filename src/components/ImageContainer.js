

const ImageContainer = function ( props ) {
    console.log(props)
  return (
    <div className="image__container">
      <img src="./683435.JPG" alt="" />
      <div className="title__container">
        <h1 className="top__title"> {props.topValue} </h1>
        <h1 className="bottom__title"> {props.bottomValue} </h1>
      </div>
    </div>
  );
};

export default ImageContainer;
