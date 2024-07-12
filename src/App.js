import { Route, Switch } from "react-router-dom";
import harvardArt from "./data/harvardArt";
import GalleryNavigation from "./components/GalleryNavigation";
import GalleryView from "./components/GalleryView";

function App() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <Switch>
        <Route exact path="/">
          <h2> please select a gallery</h2>
        </Route>
        <Route path="/galleries/:galleryId">
          <GalleryView galleries={harvardArt.records} />
        </Route>
        <Route path="*">
          <h1>Bro check the Url we dont have this url here</h1>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
