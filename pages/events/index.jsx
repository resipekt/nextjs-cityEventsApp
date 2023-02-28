import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default function EventsIndexPage({ data }) {
  return (
    <>
      <Header />
      <h2>Top events</h2>

      {data.map((event) => {
        return (
          <a>
            <h2>{event.title}</h2>
            <img src={event.image} height={250} width={250} />
          </a>
        );
      })}
      <Footer />
    </>
  );
}

export async function getStaticProps(context) {
  console.log(context);
  const { events_categories } = await import('/data/data.json');
  console.log(events_categories);
  return {
    props: { data: events_categories }, // will be passed to the page component as props
  };
}
