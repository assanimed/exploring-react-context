import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../../context/UserContext";
import SaladContext from "../../context/SaladContext";

const ItemWrapper = styled.div`
  border: lightgrey solid 1px;
  margin: 20px;
  padding: 25px;
  position: relative;
  text-align: center;
  text-transform: capitalize;
  width: 200px;
`;

const ImageSpan = styled.span`
  font-size: 80px;
`;

const Favorite = styled.span`
  font-size: 20px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const AddButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  &:disabled {
    cursor: not-allowed;
  }
`;

const SaladItem = ({ image, name }) => {
  const [selected, setSelected] = useState(false);
  const user = useContext(UserContext);
  const { addSalad } = useContext(SaladContext);

  const handleClick = () => {
    setSelected(true);
    const id = `${name}--${Math.ceil(Math.random() * 100)}`;
    const salad = { id, name };
    addSalad(salad);
  };

  const favorite = user.favorites.includes(name);
  return (
    <ItemWrapper>
      <h3>{name}</h3>
      <Favorite aria-label={favorite ? "Favorite" : "Not Favorite"}>
        {favorite ? "😋" : ""}
      </Favorite>
      <AddButton onClick={handleClick} disabled={selected}>
        <ImageSpan role="img" aria-label={name}>
          {image}
        </ImageSpan>
      </AddButton>
    </ItemWrapper>
  );
};

export default SaladItem;
