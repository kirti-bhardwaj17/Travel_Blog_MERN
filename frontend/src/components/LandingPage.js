import React from 'react';
import { Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const LandingPage = () => { 
  return (
    <div style={{ background: '#f4f4f4', minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
      <Container maxWidth="md" style={{ textAlign: 'center' }}>
        <Typography variant="h2" gutterBottom>Welcome to Snapwanderer</Typography>
        <Typography variant="body1" paragraph>
          Your ultimate destination for travel inspiration, tips, and stories.
        </Typography>
        <Link to="/auth"style={{ textDecoration: 'none' }}>

        <Button variant="contained" color="primary" size="large" href="/blog">Explore Blog</Button>
        </Link>
      </Container>
    </div>
  );
};

export default LandingPage;
