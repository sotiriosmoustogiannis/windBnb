import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import './App.css';

export default function StayList({ stays = stays }) {
  return (<div>
    <div className='title'>
      <h1>Stays in Finland</h1>
      <h2>{stays.length} filtered</h2>
    </div>
    <div className='stayGrid'>
      {stays.map((stay) => (
        <Card key={stay.id} sx={{ width: 450, height: 350, m: 5, display: "flex", borderRadius: 5 }}>
          <CardContent>

            <CardMedia
              component="img"

              src={stay.photo}
              alt="Paella dish"
            />
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {stay.superHost ? 'Super host' : null} {stay.type} {stay.beds} beds {stay.rating}
            </Typography>
            <Typography variant="h6" component="div">{stay.title}</Typography>
          </CardContent>
        </Card>
      ))
      }
    </div></div>
  );
}
