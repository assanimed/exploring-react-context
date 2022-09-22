import styled from "styled-components";
import { useContext } from "react";
import UserContext from "../context/UserContext";

const UserWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 5px 10px;
  border-bottom: 2px solid #746161;
`;

const UserInfo = styled.span`
  font-weight: bold;
  font-size: 20px;
`;

const Navigation = () => {
  const user = useContext(UserContext);
  return (
    <header>
      <UserWrapper className="userInfo">
        <div>
          Welcome, <UserInfo>{user.firstName}</UserInfo>
        </div>
      </UserWrapper>
    </header>
  );
};

export default Navigation;
