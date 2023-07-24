import React from "react";

interface ImageProps {
  src: string;
  alt: string;
  width: number;
}

const VariableWidthMasonry: React.FC = () => {
  const images: ImageProps[] = [
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg",
      alt: "",
      width: 1,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg",
      alt: "",
      width: 1,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg",
      alt: "",
      width: 2,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg",
      alt: "",
      width: 1,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg",
      alt: "",
      width: 1,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg",
      alt: "",
      width: 2,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg",
      alt: "",
      width: 2,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg",
      alt: "",
      width: 1,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg",
      alt: "",
      width: 1,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg",
      alt: "",
      width: 2,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg",
      alt: "",
      width: 1,
    },
    {
      src: "https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg",
      alt: "",
      width: 1,
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <Image
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
        />
      ))}
    </div>
  );
};

const Image: React.FC<ImageProps> = ({ src, alt, width }) => {
  const colSpan = width > 1 ? `md:col-span-${width}` : "";

  return (
    <div className={`grid gap-4 ${colSpan}`}>
      <img
        className="h-auto max-w-full rounded-lg w-full"
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default VariableWidthMasonry;
