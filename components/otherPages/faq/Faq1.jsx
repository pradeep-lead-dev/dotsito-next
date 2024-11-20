import React from "react";

export default function Faq1({ serviceDetails }) {
  return (
    <div className="accordion" id="accordion">
      {serviceDetails.questions.map((question, index) => (
        <div
          key={index}
          className="accordion-item mb-3 wow fadeInUp"
          data-wow-delay=".3s"
        >
          <h6 className="" >
            <a
              className="accordion-button collapsed"
              type="button"
              style={{textAlign: 'left', fontWeight: 'bold'}}
              data-bs-toggle="collapse"
              data-bs-target={`#faq${index}`}
              aria-expanded="false"
              aria-controls={`faq${index}`}
              
            >
              {question.question}
            </a>
          </h6>
          <div
            id={`faq${index}`}
            className="accordion-collapse collapse"
            data-bs-parent="#accordion"
          >
            <p className="accordion-body faq-accord-body">
              {question.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
