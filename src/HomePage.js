import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './Cherry_Blossoms_1-scaled.webp';
import petalImage from './petals.png';

function HomePage({ onLogout, user }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/');
  };

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Black Overlay */}
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 1
        }}
      />

      {/* Falling Petals */}
      <div className="petal petal1"></div>
      <div className="petal petal2"></div>
      <div className="petal petal3"></div>
      <div className="petal petal4"></div>

      {/* Main Content */}
      <Container
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2, // Above overlay
          color: '#fff', // White text
          textAlign: 'center',
          textShadow: '1px 1px 2px #000',
        }}
      >
        <h1 style={{ fontFamily: 'cursive', fontSize: '3rem', marginBottom: '20px' }}>
          Welcome, {user?.username}!
        </h1>
        <p style={{ fontFamily: 'Georgia, serif', fontSize: '1.5rem', marginBottom: '30px' }}>
          You are now logged in and surrounded by cherry blossoms! 🌸
        </p>
        <Button
          variant="light"
          size="lg"
          style={{
            backgroundColor: '#f9d5e5',
            borderColor: '#f9d5e5',
            color: '#822659',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            padding: '10px 30px',
            borderRadius: '30px',
            boxShadow: '2px 2px 8px rgba(0,0,0,0.2)'
          }}
          onClick={handleLogout}
        >
          Logout
        </Button>
      </Container>

      {/* Falling Petals Style */}
      <style>{`
        .petal {
          position: absolute;
          width: 30px;
          height: 30px;
          background-image: url(${petalImage});
          background-size: cover;
          background-repeat: no-repeat;
          opacity: 0.8;
          animation: fall 10s linear infinite;
          z-index: 1;
        }
        .petal1 { left: 10%; animation-delay: 0s; }
        .petal2 { left: 30%; animation-delay: 2s; }
        .petal3 { left: 60%; animation-delay: 4s; }
        .petal4 { left: 80%; animation-delay: 6s; }

        @keyframes fall {
          0% { top: -10%; transform: rotate(0deg); }
          50% { transform: rotate(180deg); }
          100% { top: 110%; transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}

export default HomePage;
