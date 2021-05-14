const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="card text-center p-4">
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
