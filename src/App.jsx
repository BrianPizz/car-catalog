import { useState, useEffect } from "react";
import CarList from "./components/CarList";
import Filter from "./components/Filter";

function App() {

  useEffect(() => {
    const fetchCars = async () => {
      const url = "https://exam.razoyo.com/api/cars";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCars(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  return (
    <>
      <Filter />
      <CarList/>
    </>
  );
}

export default App;
