import React from "react";
import bookingIcon from "../../../assets/bookingIcon.png";
const services = [
  {
    title: "Booking Pick & Drop",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Cash On Delivery",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Delivery Hub",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
  {
    title: "Booking SME & Corporate",
    description:
      "From personal packages to business shipments — we deliver on time, every time.",
  },
];

function ServiceCard() {
  return (
    <div className="p-8 ">
      <h3 className="text-3xl font-bold text-secondary">How it Works</h3>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-3">
        {services.map((service,index) => (
          <div key={index} className="rounded-lg p-6 bg-white">
            <div className="flex flex-col items-center">
              <img src={bookingIcon} alt="" />
            </div>
            <p className="text-center text-lg text-secondary font-bold">
              {service.title}
            </p>
            <p className="text-center text-md">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ServiceCard;
