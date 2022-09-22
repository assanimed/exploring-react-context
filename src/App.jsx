import Navigation from "./components/Navigation";
import SaladMaker from "./components/SaladMaker/SaladMaker";

import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserProvider>
        <Navigation />
        <SaladMaker />
      </UserProvider>
    </>
  );
}

export default App;
