import { BrowserRouter } from "react-router-dom";
import Header from "./components/organisms/Header";
import Menu from "./components/organisms/Menu";
import Content from "./components/router/Content";
import "./assets/styles/styles.scss";
import GeneralLayout from "./components/templates/GeneralLayout";

const App = () => {
  return (
    <BrowserRouter>
      <GeneralLayout
        menu={<Menu />}
        content={<Content />}
				header={<Header />}
      />
    </BrowserRouter>
  );
};

export default App;
