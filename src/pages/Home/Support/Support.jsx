import React from "react";



const supports = [
  {
    title: "Live Parcel Tracking",
    image : "https://i.ibb.co/CSBhHMD/live-tracking.png",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
    
  },
  {
    title: "100% Safe Delivery",
    image : "https://i.ibb.co/v6w0wBTH/safe-delivery.png",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    title: "24/7 Call Center Support",
    image : "https://i.ibb.co/v6w0wBTH/safe-delivery.png",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

function Support() {
  return (
    <div className="grid grid-cols-1 gap-7 border-y border-dashed border-secondary py-18 mt-16 px-4">
      {supports.map((support, index) => (
        <div key={index} className=" flex flex-col md:flex-row gap-8 p-4 rounded-xl bg-white">
         <div className="md:border-r border-secondary border-dashed p-8">
            <img src={support.image} alt=""className="w-64" />
         </div>
         <div className="p-3 ">
            <h3 className="text-xl font-bold text-secondary">{support.title}</h3>
            <p className="mt-6">{support.description}</p>
         </div>
        </div>
      ))}
    </div>
  );
}

export default Support;
