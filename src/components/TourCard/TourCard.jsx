import React from 'react';
import './TourCard.css';

const TourCard = ({ tour }) => {
  return (
    <div className="tour-card">
      <img src={tour.imageCover} alt={tour.name} className="tour-card__img" />
      <div className="tour-card__details">
        <h3 className="tour-card__title">{tour.name}</h3>
        <p className="tour-card__summary">{tour.summary}</p>
        <p className="tour-card__info"><strong>Duration:</strong> {tour.duration} days</p>
        <p className="tour-card__info"><strong>Group Size:</strong> up to {tour.maxGroupSize} people</p>
        <p className="tour-card__info"><strong>Difficulty:</strong> {tour.difficulty}</p>
        <p className="tour-card__info"><strong>Next Start Dates:</strong> {tour.startDates.slice(0, 3).join(', ')}</p>
        <p className="tour-card__price">From ${tour.price}</p>
        <p className="tour-card__ratings">
          {tour.ratingsAverage} <span>({tour.ratingsQuantity} ratings)</span>
        </p>
      </div>
    </div>
  );
};

export default TourCard;
