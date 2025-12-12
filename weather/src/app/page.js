'use client';
import { useRouter } from 'next/navigation';
import './globals.css';

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log("Button clicked");
    router.push('/Todayweather');
  };

  return (
    <div style={{

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: "url('/sunset.jpg')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center"



    }}>


      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "rgba(255, 255, 255, 0.6)",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
        }}
      >


        <h1 style={{ marginBottom: "30px", fontSize: "3.2rem" }}>Weather App 🌤️</h1>
        <button
          onClick={handleClick}
          style={{
            marginBottom: "15px",
            padding: '10px 20px',
            backgroundColor: '#bfc9a0ff',
            color: '#12063bff',
            fontSize: '16px',
            cursor: 'pointer',
            fontSize: "1.5rem"
          }}
        >
          Lets Check What Weather Says

        </button>
      </div>
    </div>
  );
}
