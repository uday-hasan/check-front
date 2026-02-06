import React from "react";

const Questions = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto space-y-5 my-6 px-4 py-8  ">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-500">Frequently Asked Questions</h2>

      <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
        <input type="radio" name="faq-accordion" defaultChecked />
        <div className="collapse-title font-semibold text-primary">
          How can I order my medicines online?
        </div>
        <div className="collapse-content text-sm">
          Simply browse our catalog, add your required medicines to the cart, and checkout with your delivery details. We’ll handle the rest!
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-primary">
          How long does delivery take?
        </div>
        <div className="collapse-content text-sm">
          Most orders are delivered within 24-48 hours. Delivery times may vary depending on your location.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-primary">
          Is my personal and medical information safe?
        </div>
        <div className="collapse-content text-sm">
          Yes! We take privacy seriously. All your personal and medical information is securely stored and never shared with third parties.
        </div>
      </div>

      <div className="collapse collapse-plus bg-base-100 border border-base-300 rounded-lg">
        <input type="radio" name="faq-accordion" />
        <div className="collapse-title font-semibold text-primary">
          What payment methods do you accept?
        </div>
        <div className="collapse-content text-sm">
          We accept cash on delivery for your convenience.
        </div>
      </div>

      
    </div>
    </div>
  );
};

export default Questions;
