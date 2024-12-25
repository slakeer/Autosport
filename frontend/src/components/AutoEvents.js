import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { Tag, Calendar, Clock } from 'lucide-react';
import '../styles/AutoEvents.css';

const avatarUrl = 'https://randomuser.me/api/portraits/men/10.jpg';

const AutoEvents = ({ isLoggedIn, handleLoginSuccess, handleLogout }) => {
    const navigate = useNavigate();

    const imageUrls = [
        'https://focus.ua/static/storage/thumbs/1200x630/8/b0/8d69dafe-be6782b102f73c25b44d9956934d0b08.jpg?v=3526_1',
        'https://focus.ua/static/storage/thumbs/1200x630/8/b0/8d69dafe-be6782b102f73c25b44d9956934d0b08.jpg?v=3526_1',
        'https://focus.ua/static/storage/thumbs/1200x630/8/b0/8d69dafe-be6782b102f73c25b44d9956934d0b08.jpg?v=3526_1,',
        'https://focus.ua/static/storage/thumbs/1200x630/8/b0/8d69dafe-be6782b102f73c25b44d9956934d0b08.jpg?v=3526_1'
    ];

    return (
        <div className="app-container">
            <nav className="navbar">
                <div className="navbar-content">
                    <div className="logo">AUTOSEO</div>
                    <div className="nav-links">
                        <a href="#" className="nav-link">Home</a>
                        <a href="#" className="nav-link">Upcoming</a>
                        <a href="#" className="nav-link">Cart</a>
                    </div>
                    <div className="nav-actions">
                        <button className="cart-button">
                            <ShoppingCart size={24} color="#4a5568" />
                        </button>
                        {isLoggedIn ? (
                            <div className="avatar-container">
                                <img src={avatarUrl} alt="User Avatar" className="avatar" />
                                <button onClick={handleLogout} className="logout-button">Log Out</button>
                            </div>
                        ) : (
                            <button className="login-button" onClick={() => navigate('/login')}>
                                Log in
                            </button>
                        )}
                    </div>
                </div>
            </nav>

            <main className="main-content">
                <div className="hero-section">
                    <div className="hero-content">
                        <h1 className="hero-title">Experience the Thrill of Auto Events Live</h1>
                        <p className="hero-description">
                            Get exclusive access to premium auto shows, racing events, and exhibitions.
                        </p>
                        <div className="hero-buttons">
                            <button className="primary-button">
                                Book Now <ArrowRight size={20} />
                            </button>
                            <button className="secondary-button">View Schedule</button>
                        </div>
                    </div>
                    <div className="hero-image">
                        <div className="image-container">
                            <img
                                src={imageUrls[0]}
                                alt="Featured auto event"
                            />
                        </div>
                    </div>
                </div>

                <div className="features-grid">
                    <div className="feature-card">
                        <Tag className="feature-icon" />
                        <h3 className="feature-title">Early Bird Discounts</h3>
                        <p className="feature-description">Save up to 20% on early bookings for premium events</p>
                    </div>
                    <div className="feature-card">
                        <Calendar className="feature-icon" />
                        <h3 className="feature-title">Upcoming Events</h3>
                        <p className="feature-description">Browse our calendar of exciting auto events</p>
                    </div>
                    <div className="feature-card">
                        <Clock className="feature-icon" />
                        <h3 className="feature-title">Support Hours</h3>
                        <p className="feature-description">Available 9 AM - 6 PM to assist you</p>
                    </div>
                </div>

                <div className="featured-events">
                    <h2 className="featured-title">Featured Events</h2>
                    <div className="events-grid">
                        {imageUrls.slice(1).map((url, index) => (
                            <div key={index} className="event-card">
                                <div className="event-image">
                                    <img src={url} alt={`Event ${index + 1}`} />
                                </div>
                                <h3 className="event-title">Auto Show {index + 1}</h3>
                                <p className="event-date">Coming Soon</p>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default AutoEvents;
