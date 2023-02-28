import Footer from '../components/Footer';
import Header from '../components/Header';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <NavBar />
      <Main />
      <Footer />
    </div>
  );
}
