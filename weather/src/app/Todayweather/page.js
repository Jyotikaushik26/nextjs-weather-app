'use client';
import Image from "next/image";
import { useState } from "react";


export default function Home() {
  const [searchText, setSearchText] = useState('');
  const [weather, setWeather] = useState(null);
  

  const fetchWeather = async () => {
    if (!searchText) return;
    try {
      const apiKey = "9505fd1df737e20152fbd78cdb289b6a"; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=${apiKey}&units=metric`;

      const res = await fetch(url);
      const data = await res.json();

      if (data.cod === 200) {
        setWeather(data);
      } else {
        alert("City not found!");
      }
    } catch (err) {
      console.error(err);
    }
  };


      
    
  

  return (
    <main style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      textAlign: "center",
      backgroundImage: "url('/sunset.jpg')",
      backgroundSize: "cover",
    }}>
      
      
      <input
        type="text"
        placeholder="Search for city..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && fetchWeather()}
        style={{
          padding: "12px 18px",
          borderRadius: "20px",
          textAlign: "center",
          border: "1px solid gray",
          fontSize: "17px",
          outline: "none",
          marginBottom: "35px"
        }}
      />

    
      {weather && (
        <div style={{
          marginTop: "20px",
          background: "rgba(255, 255, 255, 0.6)",
          padding: "20px 30px",
          borderRadius: "16px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}>
          <h2 style={{ fontSize: "35px", marginBottom: "10px", display: "flex", alignItems: "center", justifyContent: "center", gap: "10px" }}>
            {weather.name}, {weather.sys.country}
            
           
            <img 
              src={`https://flagsapi.com/${weather.sys.country}/shiny/32.png`}
              alt="flag"
              style={{ width: "40px", height: "40px", borderRadius: "4px" }}
            />
          </h2>
        
          <img src={`http://openweathermap.org/img/wn/10d@4x.png`}  alt="weather icon" />

          <p style={{ fontSize: "35px", margin: "5px 0" }}>
            {weather.main.temp} °C
          </p>
          <p style={{ fontSize: "25px", color: "gray" }}>
            {weather.weather[0].main}
          </p>

          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "25px",
            marginTop: "15px",
            fontSize: "17px"
          }}>
            <div>☁ Clouds: {weather.clouds.all}%</div>
            <div>💧 Humidity: {weather.main.humidity}%</div>
            <div>🌡 Pressure: {weather.main.pressure} hPa</div>
          </div>
        </div>
      )}
    </main>
  );
}
