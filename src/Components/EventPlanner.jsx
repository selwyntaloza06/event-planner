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
      <section className="events_category">
        <ul>
          <h2>Wedding Events:</h2>
          <li>Romantic Proposals</li>
          <li>Pre-Wedding Shoots</li>
          <li>Wedding Day Coordination</li>
          <li>Honeymoon Planning</li>
        </ul>
        <ul>
          <h2>Corporate Events:</h2>
          <li>Annual Meetings</li>
          <li>Networking Nights</li>
          <li>Award Ceremonies</li>
          <li>Seminars & Panels</li>
        </ul>
      </section>
      <section></section>
      <section></section>
      <section></section>
    </div>
  );
};

export default EventPlanner;
