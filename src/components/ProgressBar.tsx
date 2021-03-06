import React, { useState } from "react";
import Checkpoint from "./Checkpoint";
import styled from "styled-components";
import Container from "./Container";

type ProgressBarProps = {
  steps: number;
};

const Ul = styled.ul`
  display: flex;
`;
const ProgressBar = ({ steps }: ProgressBarProps) => {
  const [activeStep, setActiveStep] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  const checkpoints: any[] = [];

  for (var i = 1; i <= steps; i++) {
    checkpoints.push(
      <Checkpoint
        step={i}
        activeStep={activeStep}
        key={i}
        isLast={i === steps}
        isLoading={activeStep === i && isLoading}
      />
    );
  }
  const moveStep = (currentStep: number) => {
    if (isLoading) {
      return;
    }
    setActiveStep(currentStep);
    setIsLoading(true);
    //Simulates a loader function
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <>
      <Container>
        <Ul>{checkpoints}</Ul>
      </Container>
      <button onClick={() => moveStep(activeStep - 1)}>Prev</button>
      <button onClick={() => moveStep(activeStep + 1)}>Next</button>
    </>
  );
};
export default ProgressBar;
