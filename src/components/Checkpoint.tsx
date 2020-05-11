import React from "react";
import check from "./check.svg";
import Loading from "./loading";
import Li from "./Li";
type CheckpointProps = {
  step: number;
  activeStep: number;
  isLast: boolean;
  isLoading: boolean;
};

const Checkpoint = ({
  step,
  activeStep,
  isLast,
  isLoading,
}: CheckpointProps) => {
  const classes = `
    ${activeStep > step ? "state-completed" : ""}
    ${activeStep === step ? "state-active" : ""}
    ${activeStep < step ? "state-uncompleted" : ""} 
    ${isLoading ? "state-loading" : ""}
  `;
  return (
    <Li className={classes}>
      <div className="checkpoint">
        <span className="completed">
          <img src={check} alt="completed" />
        </span>
        <span className="active uncompleted">{step}</span>
        <span className="loading">
          <Loading />
        </span>
      </div>
      {!isLast && (
        <div className="separator">
          <div className="progress-bar"></div>
        </div>
      )}
    </Li>
  );
};
export default Checkpoint;
