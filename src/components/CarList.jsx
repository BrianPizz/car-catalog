import Car from "./Car";

const CarList = ({ cars }) => {
  return (
    <>
      {cars.map((car, index) => (
        <Car key={index} car={car} />
      ))}
    </>
  );
};

export default CarList;
