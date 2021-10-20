import React from "react";
import useServices from "../../hooks/useServices";
import Service from "./Service";

function Services() {
  const { services } = useServices();
  return (
    <section className="mt-5">
      <h1>Our Services</h1>
      <div class="row row-cols-1 row-cols-md-3 g-4 ">
        {services.map((service) => (
          <Service service={service} />
        ))}
      </div>
    </section>
  );
}

export default Services;
