import styled from "styled-components";

const StyledTh = styled.th`
  background: #3eb6ff;
  padding: 8px;
  font-size: 12px;
  color: #ffffff;

  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding-left: 16px;
  }

  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-left-radius: 4px;
    padding-right: 16px;
  }
`;

export default StyledTh;