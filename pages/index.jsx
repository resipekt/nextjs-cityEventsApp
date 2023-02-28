import styles from '../styles/Home.module.css';
import Footer from '../components/Footer';
import Header from '../components/Header';

import NavBar from '../components/NavBar';

export default function Home({ data }) {
  console.log(data);
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <NavBar />
        <h1>Events</h1>

        {data.map((event) => {
          return (
            <a href={`/events/${event.id}`}>
              <h2>{event.title}</h2>
              <img src={event.image} width={200} height={200} />
              <p>{event.description}</p>
            </a>
          );
        })}
      </main>

      <Footer />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { events_categories } = await import('../data/data.json');

  // console.log(events_categories);
  return {
    props: { data: events_categories }, // will be passed to the page component as props
  };
}

// export async function getStaticProps(context) {
//   const { events_categories } = await import('/data/data.json');
//   console.log(events_categories);
//   return {
//     props: { data: events_categories }, // will be passed to the page component as props
//   };
// }
