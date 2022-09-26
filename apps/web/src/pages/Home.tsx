import styles from '#/styles/Home.module.scss'

import { Header } from '#/components/Header'

const Home = () => {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <h4>.home</h4>
      </div>
    </>
  );
};

export default Home;
