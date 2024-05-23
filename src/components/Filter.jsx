import { useState } from 'react';

const Filter = ({ onChange }) => {
  const [selectedMake, setSelectedMake] = useState('');

  const handleSelectChange = (event) => {
    setSelectedMake(event.target.value);
    onChange(event.target.value);
  };

  return (
    <div>
      <label htmlFor="make">Filter by Make:</label>
      <select id="make" value={selectedMake} onChange={handleSelectChange}>
        <option value="">All Makes</option>
        <option value="Toyota">Toyota</option>
        <option value="Honda">Honda</option>
        <option value="Ford">Ford</option>
        {/* Add more options for other car makes */}
      </select>
    </div>
  );
};

export default Filter;
