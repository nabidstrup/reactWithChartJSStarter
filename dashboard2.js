import LineChart from './lineChart'
import {Container, Row, Col} from 'react-bootstrap'
import {useEffect, useState} from 'react'
import WeatherChart from './weatherChart'
import PieChart from './pieChart'

export default function Dashbaord() {
    let hoursToChart = []
    let temp = []
    let feelsLike = []
    let windSpeed = []
    let windGust = []

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hourlyWeather, sethourlyWeather] = useState([]);

    // this recipe to fetch came from the following url:
    // https://reactjs.org/docs/faq-ajax.html
    
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=40.235119&lon=-111.662193&exclude=minutely,current,daily,alerts&appid=${WEATHER_API_KEY}`)
          .then(res => res.json())
          .then(
            (result) => {
              setIsLoaded(true);
              sethourlyWeather(result.hourly);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
          )
      }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        
        hourlyWeather.forEach(item => {
            hoursToChart.push(item.dt)
            temp.push(item.temp)
            feelsLike.push(item.feels_like)
            windSpeed.push(item.wind_speed)
            windGust.push(item.wind_gust)
        }
            
        )

        return (
            <>
    
            <Container>
                <Row>
                    <Col md='6' style={{backgroundColor: '#e0f5ff'}}>
                        <LineChart />
                    </Col>
                    <Col md='6'>
                        <PieChart />
                    </Col>
                </Row>
                <Row>
                    <Col md='6' style={{backgroundColor: '#e0f5ff'}}>
                    Add temperature line chart here
                    </Col>
                    <Col md='6' style={{backgroundColor: '#e0f5ff' }}>
                    Add wind speed line chart here
                    </Col>
                </Row>
    
            </Container>
    
            
            </>
        )
    }

    
}