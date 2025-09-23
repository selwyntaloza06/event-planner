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
      <section className="events_categories">
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
      <section className="features">
        <h2>Features:</h2>

        <ul>
          <li>Personalized Event Planning Dashboard</li>
          <li>Real-Time Guest RSVP Updates</li>
          <li>Trusted Vendor Recommendations</li>
          <li>Interactive Seating Arrangements</li>
          <li>Comprehensive Budget Tracker</li>
          <li>Dedicated Event Coordinator</li>
        </ul>
      </section>
      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial">
          <p>
            "Our wedding was magical! The planning team made everything flow
            smoothly from start to finish."
          </p>
          <p>
            <strong>- Andrea & Miguel</strong>
          </p>
        </div>
        <div className="testimonial">
          <p>
            "Professional and detail-oriented. Our corporate gala impressed all
            our partners and guests."
          </p>
          <p>
            <strong>- Daniel Cruz</strong>
          </p>
        </div>
      </section>
      <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <input type="text" placeholder="Your Full Name" />
          <input type="email" placeholder="Your Email Address" />
          <textarea placeholder="Tell us about your event"></textarea>
          <button className="submit-button">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default EventPlanner;
