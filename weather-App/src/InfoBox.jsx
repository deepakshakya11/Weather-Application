import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({ info }) {
  const HOT_URL = "https://e1.pxfuel.com/desktop-wallpaper/777/540/desktop-wallpaper-warm-weather-summer-warm-weather-thumbnail.jpg";
  const COLD_URL = "https://images.wallpaperscraft.com/image/single/snow_winter_trees_136654_1920x1080.jpg";
  const RAIN_URL = "https://www.shutterstock.com/shutterstock/videos/3730458511/thumb/1.jpg?ip=x480";

    return (
        <div className="InfoBox">
            <h2>{info.weather}</h2>
      <div className="cardcontainer">
            <Card sx={{ maxWidth: 700, margin: "auto", backgroundColor: "rgb(181, 237, 239)" }}>
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
          <p>Maximum Temperaturee = {info.tempMax}&deg;C</p>
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