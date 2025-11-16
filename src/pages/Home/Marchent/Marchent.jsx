import React from "react";
import locationMarchent from "../../../assets/location-merchant.png";
import marchentImg from "../../../assets/be-a-merchant-bg.png";
function Marchent() {
  return (
   <div className="px-4">
     <div className="flex flex-col-reverse md:flex-row items-center relative bg-secondary p-12 rounded-xl mt-8 ">
      <div className="absolute w-full h-full inset-0 z-0">
        <img src={marchentImg} alt="" className="" />
      </div>
      <div className="z-10">
        <h2 className="text-3xl font-bold text-white my-4">
          Merchant and Customer Satisfaction <br /> is Our First Priority
        </h2>
        <p className="text-white">
          We offer the lowest delivery charge with the highest value along with
          100% safety of your product. Pathao courier delivers your parcels in
          every corner of Bangladesh right on time.
        </p>
        <div className="my-3 flex flex-col md:flex-row gap-3 ">
          <button className="cursor-pointer px-8 py-3 rounded-full border bg-primary">
            Become a Merchant
          </button>
          <button className="cursor-pointer px-8 py-3 rounded-full text-primary border border-primary">
            Earn with ZapShift Courier
          </button>
        </div>
      </div>
      <div>
        <img src={locationMarchent} alt="" />
      </div>
    </div>
   </div>
  );
}

export default Marchent;
