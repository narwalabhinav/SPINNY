import React from "react";
import { connect } from "react-redux";
import { loadMore } from "../actions/imageActions";

const DisplayImages = (props) => {
 
  const capitalize = (str) => {
    const lower = str.toLowerCase();
    return str.charAt(0).toUpperCase() + lower.slice(1);
  };

  const handleClick = (e) => {
    e.preventDefault();
    props.loadMore();
  };

  return (
    <>
      <div className="container-fluid img-cont-wrapper m-0 p-0">
      <br/>
          <br/>
          <br/>
        <div className="row justify-content-between">
          {props.images.map((item) => {
            return (
              <div className=" p-3 col-12 col-sm-6 col-md-4 col-lg-3"  key={item.id}>
              <div className="card "  key={item.id}>
                <img
                  src={item.image_url}
                  className="card-img-top img-container"
                  alt={
                    item.alt_description === null ? "" : item.title
                  }
                />
              <div className="card-body card-body-overide">
                <div className="card-title">
               <b>{item.title}</b>
                </div>
              </div>
              </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-3 d-flex align-items-center justify-content-center">
        <button onClick={handleClick} className="custom-btn load-more-btn">
        &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; &nbsp;&nbsp;Load More...
        </button>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  images: state.image.images,
  total_results: state.image.total_results,
  query: state.search.query,
});

export default connect(mapStateToProps, { loadMore })(DisplayImages);
