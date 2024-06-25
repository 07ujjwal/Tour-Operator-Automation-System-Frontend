import TourCard from "../../components/TourCard/TourCard";
import "./ToursPage.css";
import api from "../../services/api";
import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import SpinnerFullPage from "../../components/Spinner/SpinnerFullPage";
// import useAuthStore from "../../store/authStore";

const ToursPage = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await api.get("/tours");

        const data = response.data;

        if (data && Array.isArray(data)) {
          setTours(data);
        } else {
          setTours(data.data.tours || []);
        }
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  if (loading) {
    return (
      <div>
        <SpinnerFullPage />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <Header />
      <section className="tours-page" id="tours">
        <h2 className="tour">Our Tours</h2>
        <div className="tours-container">
          {tours.map((tour, index) => (
            <TourCard key={index} tour={tour} />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ToursPage;
