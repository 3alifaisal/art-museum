import { Link } from "react-router-dom";
function ArtImageTile({ art, galleryId }) {
  const firstImage = art.images.length > 0 ? art.images[0] : "";

  return (
    <Link to={`/galleries/${galleryId}/art/${art.id}`}>
      <img src={firstImage.baseimageurl} alt={art.creditline} />
    </Link>
  );
}

export default ArtImageTile;
