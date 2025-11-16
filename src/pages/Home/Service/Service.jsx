import React from "react";
import serviceIcon from "../../../assets/service.png";
const services = [
  {
    title: "Express  & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

function Service() {
  return (
    <div className="bg-secondary p-8 rounded-xl">
      <div className="text-center ">
        <h2 className="text-3xl font-bold text-white">Our Services</h2>
        <p className="text-white text-md">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-3 border bg-white rounded-xl my-8 hover:bg-primary cursor-pointer"
            >
              <div className="flex items-center justify-center my-4">
                <img src={serviceIcon} alt="" />
              </div>
              <div className="text-center">
                <p className="text-xl font-bold text-secondary">
                  {service.title}
                </p>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;
