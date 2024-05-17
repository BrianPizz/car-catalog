const Car = ({ car }) => {
  return (
    <div>
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
    </div>
  );
};

export default Car;
