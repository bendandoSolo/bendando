const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="col-md-3">
      <div class="card text-center p-4">
        <div class="card-body">
          <i className={icon}></i>
          <h5 class="card-title my-4">{title}</h5>

          <p class="card-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
