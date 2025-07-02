import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import "./InfoBox.css";

import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';

export default function InfoBox({info}){
    const INIT_URL ="https://plus.unsplash.com/premium_photo-1714923303591-3b262dd1864f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHVzdHklMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D";
    let HOT_URL = "https://media.istockphoto.com/id/2163514261/photo/boy-drinking-water-from-a-bottle-on-a-sunny-hot-day.webp?a=1&b=1&s=612x612&w=0&k=20&c=ADC9cFwz86iJURgop2ZiYNJJ_0JZLkRr6Hp99P95DGc=";
    let COLD_URL = "https://media.istockphoto.com/id/2155725480/photo/morning-bonfire-warmth.webp?a=1&b=1&s=612x612&w=0&k=20&c=O3hxdUb3tOOl30J3Digf5HzfDuQhW6mE0Fh-FxPgwn8=";
    let RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=sw_CRZcGopaGHDWqtT1M8y64k5uCcq-nro55Bw3YzyQ=";
    return(
        <div className="InfoBox">
                <div className="Cardcontainer">
                    <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                    sx={{ height: 140 }}
                    image= {
                        info.humidity > 80
                        ? RAIN_URL
                        : info.temp > 15
                        ? HOT_URL
                        : COLD_URL
                    }
                    title="green iguana"
                    />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {info.city}{
                        info.humidity > 80
                        ? <ThunderstormIcon/>
                        : info.temp > 15
                        ?  <SunnyIcon/>
                        : <AcUnitIcon/>
                    }
                    </Typography>
                    <Typography variant="body2" color= "text.secondary" component={"span"}>
                    <p>Tempreture = {info.temp}&deg; C</p>
                    <p> Humidity = {info.humidity}</p>
                    <p> Min Temp = {info.tempMin}&deg;C</p>
                    <p>Max Temp = {info.tempMax}&deg;C</p>
                    <p> The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C</p>

                    </Typography>
                </CardContent>
            
            </Card>
         </div>
     
    </div>
    );
}