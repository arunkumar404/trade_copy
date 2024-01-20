import styles from './App.module.css'
import BottomContainer from './module/BottomContainer/BottomContainer';
import CustomTab from './module/CustomTab/CustomTab'
import Footer from './module/Footer/Footer';
import Header from './module/Header/Header';
import InfoBox from './module/InfoBox/InfoBox';

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <CustomTab />
      <InfoBox />
      <BottomContainer />
      <Footer />
    </div>
  )
}

export default App;
