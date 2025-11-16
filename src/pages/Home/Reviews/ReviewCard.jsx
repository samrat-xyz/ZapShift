import React from "react";
import { ImQuotesLeft } from "react-icons/im";

function ReviewCard({ review }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm  max-w-sm">
      <ImQuotesLeft className="text-3xl text-teal-200 mb-3" />

      <p className="text-gray-600 leading-relaxed mb-6 border-b pb-4">
        {review?.review}
      </p>

      <div className="flex items-center gap-3 mt-4">
        <div className="w-10 h-10 border-2 border-secondary rounded-full">
            <img src={review.user_photoURL} alt="" className="w-full h-full rounded-full"/>
        </div>
        <div>
          <h3 className="font-semibold text-gray-800 text-lg">{review?.userName}</h3>
          <p className="text-gray-500 text-sm">{review?.user_email}</p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
