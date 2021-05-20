const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="col-lg-3 col-sm-6 my-2">
      <div className="service-card card text-center py-4 px-3 shadow-5 mx-3">
        <div className="card-body">
          <i className={icon}></i>
          <h5 className="card-title my-4">{title}</h5>
          <p className="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
