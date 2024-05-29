import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './footer.css';

const Footer = ({ searchTerm }) => {
    console.log(searchTerm);
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <h4>About Us</h4>
                    <p>Discover a world of knowledge at your fingertips with our expansive library website, where every click opens the door to new adventures in literature. From timeless classics to contemporary masterpieces, our library website invites you to explore, learn, and immerse yourself in the magic of words.</p>
                </div>
                <div className="footer-column">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVw7W5Ox_vsg7CCyK6fI1TO1ftT7bOZVk7-Au3gV-S8w&s" alt="" />
                </div>
                <div className="footer-column">
                    <h4>Contact Us</h4>
                    <p>Email:sargis0202@bk.ru</p>
                    <p>Phone:(077)43-05-20</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
