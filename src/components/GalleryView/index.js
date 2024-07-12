import { useParams, Route, Switch } from "react-router-dom";
import ArtImageTile from "../ArtImageTile";
import ArtDescription from "../ArtDescription";

function GalleryView({ galleries }) {
  const { galleryId } = useParams();

  const gallery = galleries.find(
    (gallery) => gallery.id === parseInt(galleryId)
  );

  let art = gallery.objects;

  return (
    <div>
      <h2>{gallery.name}</h2>
      <p>{gallery.labeltext}</p>
      <Switch>
        <Route exact path={`/galleries/${galleryId}`}>
          <ul>
            {art.map((object) => {
              return (
                <li key={object.id}>
                  <ArtImageTile art={object} galleryId={galleryId} />
                </li>
              );
            })}
          </ul>
        </Route>
        <Route path={`/galleries/${galleryId}/art/:artId`}>
          <ArtDescription gallery={gallery} />
        </Route>
      </Switch>
    </div>
  );
}
export default GalleryView;
