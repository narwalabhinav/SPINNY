import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import DisplayImages from "./components/DisplayImages";
import { connect } from "react-redux";

const App = (props) => {
  return (
    <div className="App">
      <div className="App-header">
        <SearchBar />
      </div>
      <div className="main-wrapper">
        {props.display_images && <DisplayImages />}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  display_images: state.image.display_images,
});

export default connect(mapStateToProps, {})(App);
