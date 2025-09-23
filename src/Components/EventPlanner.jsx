import React from "react";
import "./EventPlanner.css"; // Import CSS file for styling

const EventPlanner = () => {
  return (
    <div className="event-planner-container">
      <header>
        <h1>Welcome to Event Planner</h1>
      </header>
      <section className="description">
        <p>
          From intimate dinners to grand celebrations, our Event Planner makes
          organizing your special day seamless and stress-free. Focus on the
          memories, and let us handle the details.
        </p>
        <button className="get-started-button">Get Started!</button>
      </section>
      <section></section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default EventPlanner;
