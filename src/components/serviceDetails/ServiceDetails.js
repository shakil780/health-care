import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useServices from "../../hooks/useServices";

function ServiceDetails() {
  const { services } = useServices();
  const [service, setService] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const sv = services.find((service) => service.id === parseInt(id));
    if (sv) {
      setService(sv);
    } else {
      setService({});
    }
  }, [service, id, services]);

  return (
    <div className="container my-5">
      <img className="w-100 mx-auto" src={service?.img} alt="" />
      <section>
        <h1 className="mb-3 mt-5">{service?.name}</h1>
        <p>{service?.description}</p>
      </section>
    </div>
  );
}

export default ServiceDetails;
