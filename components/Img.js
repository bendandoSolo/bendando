import Image from "next/image";

const Img = ({ src, alt, lazy, className }) => {
  return (
    <div className="img-container">
      <div className="img-loader">
        <span className="img-loader-circle"></span>
        <span className="img-loader-circle"></span>
        <span className="img-loader-circle"></span>
      </div>
      <Image
        src=""
        alt=""
        width="0"
        height="0"
        sizes="100vw"
        style={{ height: "100%", width: "auto" }}
        className={className}
        loading={lazy ? "lazy" : "eager"}
      />
    </div>
  );
};

export default Img;
