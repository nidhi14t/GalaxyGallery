import FetchImages from "./components/GalaxyView/FetchImages/FetchImages";
import "../node_modules/react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1 className="title">
          Milky Way Gallery<div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </h1>
        <FetchImages />
      </div>
    </div>
  );
}

export default App;
