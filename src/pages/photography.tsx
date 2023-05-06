import PhotoCard from "~/components/PhotoCard/photoCard";

export default function Photography() {
  const imgList: string[] = [
    "/casa1",
    "/covi1",
    "/covi2",
    "/covi3",
    "/covi4",
    "/planta1",
    "/planta2",
    "/vino1"
  ];

return (
    <div className="photographyPageContainer">
        {imgList.map((imgSrc, index) => (
          <PhotoCard
            key={index}
            imgSrc={imgSrc}
            title="titulo"
            description="descripcion"
          />
        ))}
    </div>
  );
}
