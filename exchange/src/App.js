import { BrowserRouter } from 'react-router-dom';
import styles from './App.module.scss';
import Header from './components/organisms/Header';
import Menu from './components/organisms/Menu';
import Content from './components/templates/Content';
import "./assets/styles/styles.scss";

const App = ({}) => {
   return (
      <BrowserRouter>
         <div className={styles.wrapper}>
            <div className={styles.page}>
               <Menu />
               <div className={styles.main}>
                  <Header />
                  <Content />
               </div>
            </div>	
		   </div>
      </BrowserRouter>
   );
}

export default App;
