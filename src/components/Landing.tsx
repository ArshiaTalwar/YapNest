import React from 'react';
import Navbar from './Navbar'
import yapnest from "../preview.png";
import  { useEffect, useState } from "react";
import Feedback from './Feedback';
import Footer from './Footer';

const Counter = ({ count }) => {
  const [currentCount, setCurrentCount] = useState(0);

  useEffect(() => {
    const incrementStep = Math.max(1, Math.floor(count / 200)); // Adjust speed dynamically
    const interval = 10; // Interval duration in milliseconds

    const intervalId = setInterval(() => {
      setCurrentCount((prev) => {
        const nextValue = prev + incrementStep;
        if (nextValue >= count) {
          clearInterval(intervalId);
          return count; // Stop at the target count
        }
        return nextValue;
      });
    }, interval);

    return () => clearInterval(intervalId); // Cleanup on component unmount
  }, [count]);

  const formatCount = (value) => {
    if (value >= 1000) {
      return `${(value / 10000).toFixed(1)}K+`;
    } else if (value >= 100) {
      return `${(value / 1000).toFixed(1)}K+`;
    }
    return value;
  };

  return <span>{formatCount(currentCount)}</span>;
};



export default function Landing() {
  return (
    <div className="outer-frame" style={{backgroundColor:"plum"}}>
      <div className="inner-frame" style={{backgroundColor:"#FDECF0"}}>
      <Navbar/>
      
      <div
  className="carousel-inner"
  style={{
    display:"flex",
    alignItems: "center",
    justifyContent: "center",
    height:"500px",
     // Full viewport height
 
    backgroundColor: "#FDECF0", // Optional background color
  }}
>
 {/* <h5
    style={{
      fontFamily: "'Ewert', cursive", // Stylish font
      color: "gray",
      textAlign: "center",
      fontSize: "5.5rem",
      }}
  >
    Rizz Drip Yap
  </h5> 
  */}
  <img
    src={yapnest}
    alt="landing-img"
    id="hero-img"
    style={{
      width: "100%", // Adjust width for responsiveness
    
      height: "500px",
      objectFit: "cover",
      borderRadius: "15px",
      marginBottom: "0 1rem", // Space between image and text
       // Add a subtle shadow for aesthetics
    }}
  />

  {/* Text below image */}
 
</div>


<h5
    style={{
      fontFamily: "'Ewert', cursive", // Stylish font
      color: "gray",
      textAlign: "center",
      fontSize: "5.5rem",
      }}
  >
    Rizz Drip Yap
  </h5> 

        {/* About Section */}
        <div
          className="about my-3 mx-3 "
          id="about"
          style={{
            backgroundColor: '#fff',
            fontFamily: 'Dancing Script',
            height: '400px'
          }}
        >
          <div className="container" data-aos="zoom-in-up">
            <h2>
              <strong>Disclaimer</strong>
            </h2>
            <hr className="border border-danger border-2 opacity-50 w-50" />
            <p style={{ textAlign: 'center', margin: '40px', fontSize: '18px' }}>
            <i><strong>Welcome to YapNest!!</strong> </i><br/> A space where Gen Z shares their stories, ideas, and creativity! We believe in the power of voices and experiences, whether through insightful blogs, thought-provoking opinions, or fun stories.Join a community where everyones voice matters.
              Share your passions, explore new perspectives, and let's inspire each other every day!<br/>
            <button
              className="btn col-2  my-4"
              type="button"
              style={{ backgroundColor: 'plum' }}>
              Explore
            </button>
            </p>
          </div>
        </div>
        
        {/* <div className="user-countborder" style={{
            backgroundColor: '#fff',
            fontFamily: 'Dancing Script',
            height: '200px',padding:"70px",fontSize:"40px"
          }}> */}
         <div className="counters" style={{ padding: "2em 0", backgroundColor: "#fff" }}>
  <h2 style={{ textAlign: "center", marginBottom: "1em",fontFamily:"fantasy" }}>Our Impact</h2>
  <div className="d-flex justify-content-around">
    <div className="counter-wrapper text-center">
      <span className="counter-icon" style={{ fontSize: "2em" }}>👨‍👩‍👧‍👦</span>
     <h1>Users {" "}
        <Counter count={15000000} />
      </h1>
      
    </div>
    <div className="counter-wrapper text-center">
      <span className="counter-icon" style={{ fontSize: "2em" }}>💼</span>
      <h1>Blogs{" "}
        <Counter count={2200} />
      </h1>
      
    </div>
  
  </div>
</div>


        {/* Card Grid Section */}
        <div className="container mt-5">
          <h1 style={{fontFamily:"Whisper",color:"black",fontSize:"60px"}}>Blogs</h1>
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
            {/* Card 1 */}
            <div className="col" >
              <div className="card text-bg " >
                <img
                  src="https://i.pinimg.com/originals/3f/02/3e/3f023e890362abdab7e0336e9b749fd6.gif"
                  className="card-img"
                  alt="Card 1"
                  style={{ objectFit: 'cover', height: '100%', width: '100%'}}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Stay sassy</h5>
                  <p className="card-text">Supporting text for card 1.</p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col">
              <div className="card text-bg" style={{backgroundColor:"pink"}}>
                <img
                  src="https://i.pinimg.com/originals/47/e1/93/47e193e639342b3a35724e8ed9991716.gif"
                  className="card-img"
                  alt="Card 2"
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Todayss</h5>
                  <p className="card-text">Supporting text for card 2.</p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="col">
              <div className="card text-bg">
                <img
                  src="https://i.pinimg.com/564x/58/ab/6e/58ab6ee262f2cbf7e968595a03670376.jpg"
                  className="card-img"
                  alt="Card 3"
                  style={{ objectFit: 'cover', height: '100%', width: '100%' }}
                />
                <div className="card-img-overlay">
                  <h5 className="card-title">Bonjour!</h5>
                  <p className="card-text">Supporting text for card 3.</p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </div>

            {/* Placeholder Cards */}
            {[...Array(3)].map((_, index) => (
              <div className="col" key={index + 4}>
                <div className="card text-bg-dark ">
                  <img
                    src="https://i.pinimg.com/474x/db/12/5a/db125a5c4bd824c8cb750dd3a63601fc.jpg"
                    className="card-img"
                    alt={`Card ${index + 4}`}
                    style={{
                      objectFit: 'cover',
                      height: '100%',
                      width: '100%',
                    }}
                  />
                  <div className="card-img-overlay">
                    <h5 className="card-title"> Delulu Zone</h5>
                    <p className="card-text">
                      Supporting text for card {index + 4}.
                    </p>
                    <p className="card-text">
                      <small>Last updated 3 mins ago</small>
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>
            <button className="my-4 col-2" type='button' >Read more</button>
        </div>
        <Feedback/>
        <Footer/>
      </div>
    </div>
  );
}
