import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
  const HOT_URL = "https://media.istockphoto.com/id/598222542/photo/sky-background.jpg?s=612x612&w=0&k=20&c=WBAiCExAztT4SzWh4hIgmQwTG7VMJ5o9oObXHszmm8A=";
  const COLD_URL = "https://images.wallpaperscraft.com/image/single/snow_winter_trees_136654_1920x1080.jpg";
  const RAIN_URL = "https://www.shutterstock.com/shutterstock/videos/3730458511/thumb/1.jpg?ip=x480";

    return (
        <div className="InfoBox">
            { <h2>{info.weather}</h2>}
      <div className="cardcontainer">
            <Card sx={{ maxWidth: 700, margin: "auto", background: "linear-gradient(to right,rgb(126, 235, 210),rgb(123, 204, 227))" }}>
      <CardMedia
        sx={{ height: 250 }}
        image={info.humidity > 80 
          ? RAIN_URL
          : info.temp > 20
          ? HOT_URL 
          : COLD_URL 
        }
        alt="Weather Image"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{
          info.humidity > 80 
           ?<ThunderstormIcon />
           : info.temp > 20
           ? <SunnyIcon /> 
           : <AcUnitIcon />
        }
      
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Minimum Temperature = {info.tempMin}&deg;C</p>
          <p>Maximum Temperature = {info.tempMax}&deg;C</p>
          {/* <p>Feels Like = {info.feelslike}&deg;C</p> */}
          <p>
            The Weather can be described as <b>{info.weather}</b>
          </p>

        </Typography>
      </CardContent>

    </Card>
        </div>
        </div>
    );
}