import React from "react";
import doctor from "../../assets/img/doctors.jpg";
import Doctor from "./Doctor";
function Doctors() {
  const doctors = [
    {
      id: 1,
      name: "Shakil Ahmed",
      img: "https://pngimg.com/uploads/doctor/doctor_PNG15988.png",
    },
    {
      id: 2,
      name: "Sabbir Ahmed",
      img: "https://i.pinimg.com/originals/d4/9e/4a/d49e4a1204be7530cbbb135da699beaf.png",
    },
    {
      id: 3,
      name: "Sazzad Khan",
      img: "https://st3.depositphotos.com/10654668/13844/i/1600/depositphotos_138445604-stock-photo-male-doctor-in-hospital.jpg",
    },
  ];
  return (
    <section className="">
      <header>
        <div
          class=" text-center   text-white"
          style={{
            backgroundImage: `url(${doctor})`,
            height: "400px",
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectFit: "cover",
          }}
        >
          <h1 class="display-1 fw-bold">Doctors</h1>
        </div>
      </header>
      <div className="container">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-5 ">
          {doctors.map((doctor) => (
            <Doctor doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Doctors;
