import React from "react";
import check from "./check.svg";
import Loading from "./loading";
import styled from "styled-components";
type CheckpointProps = {
  step: number;
  activeStep: number;
  isLast: boolean;
  isLoading: boolean;
};

const Li = styled.li`
  display: flex;
  align-items: center;

  & .checkpoint {
    background-color: #ddd;
    font-weight: bold;
    width: ${(props) => props.theme.dotSize};
    height: ${(props) => props.theme.dotSize};
    align-items: center;
    justify-content: center;
    display: flex;
    transition: all ease 1s;
    border-radius: 50%;
    color: ${(props) => props.theme.primaryColor};

    span {
      display: none;
    }

    .loading {
      height: ${(props) => props.theme.dotSize};
    }
  }
  & .separator {
    width: 31px;
    height: 2px;
    background-color: #ddd;

    .progress-bar {
      height: 100%;
      width: 0;
      background-color: ${(props) => props.theme.primaryColor};
      transition: width ease 1s 0.5s;
    }
  }

  &.state-uncompleted {
    .uncompleted {
      display: block;
    }
  }
  &.state-active {
    .checkpoint {
      background-color: white;
      color: ${(props) => props.theme.primaryColor};
    }
    .active {
      display: block;
    }

    &.state-loading {
      .loading {
        display: block;
      }
      span {
        display: none;
      }
    }
  }

  &.state-completed {
    .checkpoint {
      background-color: ${(props) => props.theme.primaryColor};
    }

    .progress-bar {
      width: 100%;
    }

    .active {
      display: none;
    }
    .completed {
      display: block;
    }
  }
`;
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
      {!isLast ? (
        <div className="separator">
          <div className="progress-bar"></div>
        </div>
      ) : (
        ""
      )}
    </Li>
  );
};
export default Checkpoint;
