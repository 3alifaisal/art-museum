import { useParams, Link } from "react-router-dom";
function ArtDescription({ gallery }) {
  console.log(gallery);
  let { artId } = useParams();
  let objects = gallery.objects;

  let art = objects.find((object) => {
    return object.id === parseInt(artId);
  });
  console.log(art);

  return (
    <div>
      <Link to={`/galleries/${gallery.id}`}>Back To Galleries</Link>
      <div>{art.creditline}</div>
      <div>{art.id}</div>
    </div>
  );
}
export default ArtDescription;
