const CourseCard = function (props) {
//   console.log(props);

  return (

        <div
          className="courses__card"
          data-aos="fade-up"
          data-aos-duration="500"
        >
          <div className="courses__image-container">
            <img src={props.image} alt="" />
          </div>
          <div className="courses__info">
            <h2 className="card__name">{props.title}</h2>
            {/* <h3 className="card__cert">{props.title}</h3> */}
            <button className="card__button">See Course Details</button>
          </div>
        </div>
  );
};

export default CourseCard;
