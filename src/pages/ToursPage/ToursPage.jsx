import TourCard from "../../components/TourCard/TourCard";
import toursData from "../../data/toursData";
import "./ToursPage.css";

const ToursPage = () => {
  return (
    <section className="tours-page" id="tours">
      <h2 className="tour">Our Tours</h2>
      <div className="tours-container">
        {toursData.map((tour, index) => (
          <TourCard key={index} tour={tour} />
        ))}
      </div>
    </section>
  );
};

export default ToursPage;
