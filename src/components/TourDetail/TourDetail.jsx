import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./TourDetail.css";
import api from "../../services/api";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Spinner from "../Spinner/Spinner";
import SpinnerFullPage from "../Spinner/SpinnerFullPage";

const TourDetail = () => {
  const { id } = useParams();
  const [tour, setTour] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTour = async () => {
      try {
        const response = await api.get(`/tours/${id}`);
        const data = response.data;
        console.log(data);

        if (data && data.message === "success" && data.data && data.data.tour) {
          setTour(data.data.tour);
          setLoading(false);
        } else {
          setError("Tour not found");
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTour();
  }, [id]);

  if (loading) {
    return <SpinnerFullPage />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!tour) {
    return <div>Tour not found</div>;
  }

  return (
    <>
      <Header />
      <div className="tour-detail">
        <h2>{tour.name}</h2>
        <img
          src={tour.imageCover}
          alt={tour.name}
          className="tour-detail__img"
        />
        <p>{tour.description}</p>
        <p>
          <strong>Duration:</strong> {tour.duration} days
        </p>
        <p>
          <strong>Group Size:</strong> up to {tour.maxGroupSize} people
        </p>
        <p>
          <strong>Difficulty:</strong> {tour.difficulty}
        </p>
        {tour.startDates && (
          <p>
            <strong>Next Start Dates:</strong>{" "}
            {tour?.startDates
              .map((date) => new Date(date).toLocaleDateString())
              .join(", ")}
          </p>
        )}
        <p>
          <strong>Price:</strong> ${tour.price}
        </p>
        <p>
          <strong>Ratings:</strong> {tour.ratingsAverage} (
          {tour.ratingsQuantity} ratings)
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TourDetail;
