import { createContext, useReducer } from "react";

const ingredients = [
  {
    image: "🍎",
    name: "apple",
  },
  {
    image: "🥑",
    name: "avocado",
  },
  {
    image: "🥦",
    name: "broccoli",
  },
  {
    image: "🥕",
    name: "carrot",
  },
  {
    image: "🥧",
    name: "pie",
  },
  {
    image: "🍤",
    name: "Fried Shrimp",
  },
  {
    image: "🍷",
    name: "red wine dressing",
  },
  {
    image: "🍚",
    name: "seasoned rice",
  },
];

const reducer = (state, action) => {
  const { type, payload } = action;
  if (type === "ADD_SALAD") {
    return {
      ...state,
      salad: [...state.salad, payload],
    };
  }
};

const SaladContext = createContext();

const SaladProvider = ({ children }) => {
  const initState = {
    ingredients,
    salad: [],
  };

  const [state, dispatch] = useReducer(reducer, initState);

  const addSalad = (saladItem) => {
    dispatch({
      type: "ADD_SALAD",
      payload: saladItem,
    });
  };

  return (
    <SaladContext.Provider value={{ ...state, addSalad }}>
      {children}
    </SaladContext.Provider>
  );
};

export { SaladProvider };

export default SaladContext;
