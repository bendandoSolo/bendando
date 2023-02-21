const ServiceCard = ({ icon, title, text, text2, link, linkText }) => {
  return (
    <div className="col-lg-3 col-sm-6 my-2">
      <div className="service-card card text-center py-4 px-3 shadow-5 mx-3">
        <div className="card-body">
          <i className={icon}></i>
          <h3 className="card-title my-4">{title}</h3>
          <p className="card-text">{text}</p>
          <p className="card-text">{text2}</p>
          <p>
            <a className="service-link" href={link} target="_blank">
              {linkText}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
