import PhotoCard from "~/components/PhotoCard/photoCard";

export default function Photography() {
  const imgList: string[] = [
    "casa1.jpg",
    "covi1.jpg",
    "covi2.jpg",
    "covi3.jpg",
    "covi4.jpg",
    "planta1.jpg",
    "planta2.jpg",
    "vino1.jpg"
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
