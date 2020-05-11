import styled from "styled-components";

const Li = styled.li`
  display: flex;
  align-items: center;

  & .checkpoint {
    background-color: #ddd;
    font-weight: bold;
    font-size: 14px;
    line-height: 14px;
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

export default Li;
