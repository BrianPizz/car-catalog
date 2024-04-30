import { useState } from "react";
import CarList from "./components/CarList";
import Filter from "./components/Filter";

function App() {

  const getCars = () => {
    const url = "https://exam.razoyo.com/api/cars"

    return fetch(url)
    .then(response => {
      if(response.ok) {
        return response.json
      } else {
        throw new Error('Response error');
      }
    })
    .then( data => {
      console.log(data)
      return data 
    })
  }

  return (
    <>
      <Filter />
      <CarList/>
    </>
  );
}

export default App;
