import React, { useState } from "react";
import "./Purchase.css";

function EnrollmentForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleStepClick = (step) => {
    setCurrentStep(step);
  };

  const handleNext = () => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setCurrentStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="container">
      <div className="stepwizard">
        <div className="stepwizard-row setup-panel">
          {[1, 2, 3, 4].map((step) => (
            <div key={step} className="stepwizard-step">
              <button
                onClick={() => handleStepClick(step)}
                type="button"
                className={`btn ${
                  step === currentStep ? "btn-primary" : "btn-default"
                } btn-circle`}
                disabled={step > currentStep}
              >
                {step}
              </button>
              <p>Step {step}</p>
            </div>
          ))}
        </div>
      </div>
      <form role="form">
        <div
          className={`row setup-content ${currentStep === 1 ? "show" : "hide"}`}
          id="step-1"
        >
          <div className="col-xs-12">
            <div className="col-md-12">
              <h3>Step 1</h3>
              <div className="form-group">
                <label className="control-label">First Name</label>
                <input
                  maxLength="100"
                  type="text"
                  required="required"
                  className="form-control"
                  placeholder="Enter First Name"
                />
              </div>
              <div className="form-group">
                <label className="control-label">Last Name</label>
                <input
                  maxLength="100"
                  type="text"
                  required="required"
                  className="form-control"
                  placeholder="Enter Last Name"
                />
              </div>
              <button
                className="btn btn-primary nextBtn btn-lg pull-right"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div
          className={`row setup-content ${currentStep === 2 ? "show" : "hide"}`}
          id="step-2"
        >
          <div className="col-xs-12">
            <div className="col-md-12">
              <h3> Step 2</h3>
              <div className="form-group">
                <label className="control-label">Company Name</label>
                <input
                  maxLength="200"
                  type="text"
                  required="required"
                  className="form-control"
                  placeholder="Enter Company Name"
                />
              </div>
              <div className="form-group">
                <label className="control-label">Company Address</label>
                <input
                  maxLength="200"
                  type="text"
                  required="required"
                  className="form-control"
                  placeholder="Enter Company Address"
                />
              </div>
              <button
                className="btn btn-default prevBtn btn-lg pull-left"
                type="button"
                onClick={handlePrev}
              >
                Prev
              </button>
              <button
                className="btn btn-primary nextBtn btn-lg pull-right"
                type="button"
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        </div>
        {/* Steps 3 and 4 content */}
      </form>
    </div>
  );
}

export default EnrollmentForm;
