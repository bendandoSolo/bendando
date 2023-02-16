import Image from "next/image";
import { useState } from "react";

const Img = ({ src, alt, lazy, className, fill, hgt }) => {
  const [loaded, setLoaded] = useState(false);

  function initImageLoad() {
    setLoaded(true);
  }

  return (
    <div className="img-container" style={{ height: hgt }}>
      <div className={loaded ? `img-loader loading` : `img-loader`}>
        <span className="img-loader-circle"></span>
        <span className="img-loader-circle"></span>
        <span className="img-loader-circle"></span>
      </div>
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit={fill ? `cover` : `contain`}
        className={loaded ? `${className} loaded` : `${className}`}
        loading={lazy ? `lazy` : `eager`}
        onLoad={initImageLoad}
      />
    </div>
  );
};

export default Img;
