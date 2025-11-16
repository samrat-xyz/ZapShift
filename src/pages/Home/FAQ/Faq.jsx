import React from "react";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const Questions = [
  {
    title: " How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    title: " How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    title: " How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    title: " How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
];

function Faq() {
  return (
    <div>
      <div className="text-center space-y-3">
        <h1 className="text-3xl font-bold text-secondary">
          Frequently Asked Question (FAQ)
        </h1>
        <p>
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>
      </div>
      <div className="p-8">
        {Questions.map((question, index) => (
          <div
            key={index}
            tabIndex={0}
            className="collapse collapse-arrow bg-base-100 border-base-300 border mt-4"
          >
            <div className="collapse-title font-semibold">{question.title}</div>
            <div className="collapse-content text-sm">{question.answer}</div>
          </div>
        ))}
      </div>
     <div className="flex items-center gap-1 justify-center">
       <button className="px-6 py-3 bg-primary rounded-full font-bold">See More FAQ’s</button>
       <BsArrowUpRightCircleFill size={36}/>

     </div>
    </div>
  );
}

export default Faq;
