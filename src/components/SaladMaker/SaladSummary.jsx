import { useContext } from "react";

import styled from "styled-components";

import SaladContext from "../../context/SaladContext";

const Wrapper = styled.div`
  border-top: #787272 solid 3px;
  display: flex;
  padding: 5px 25px;
`;

const UlWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  max-height: 50px;
  & li {
    width: 100px;
  }
`;

const SaladSummary = () => {
  const { salad } = useContext(SaladContext);

  return (
    <Wrapper>
      {salad.length ? <h2>Your Salad : </h2> : <h2> No Item Selected</h2>}
      <UlWrapper>
        {salad.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </UlWrapper>
    </Wrapper>
  );
};

export default SaladSummary;
