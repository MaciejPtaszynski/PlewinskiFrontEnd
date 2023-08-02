import React, {useState} from 'react';
import {Box} from "@mui/material";
import DriversDb from "../../dataBase/Drivers";
import CarsDB from "../../dataBase/Cars";
import DriverCard from "../cards/DriverCard";

export default function DriverTabPage() {

  const [newDriver, setNewDriver] = useState(" ");
  const [people, setPeople] = useState(DriversDb);
  const [car, setCar] = useState("");

  const handleAddDriver = () => {
    if (newDriver.trim() !== '') {
      const newItem = {id: Date.now(), firstName: newDriver, lastName: newDriver};
      setPeople([...people, newItem]);
      setNewDriver("")
    }
  };

  const handleRemoveDriver = (id) => {
    const removeDriver = people.filter((item) => item.id !== id);
    setPeople(removeDriver)
  };

  const peopleList = people.map((item) => {
    return <Box key={item.id}>
      <DriverCard
        name={item.firstName}
        surname={item.lastName}
        image={item.photo}
        handleRemove={() => handleRemoveDriver(item.id)}
        carList={CarsDB}
        carValue={item.id === car ? car : ""}
        onChange={(selectedCar) => setCar(selectedCar)}
      />
    </Box>
  });

  const driversListWrapper = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: "80%"
  };

  return (
    <Box sx={{width: "80%"}}>
      <form>
        <input
          type="text"
          name="firstName"
          value={newDriver.firstName}
          onChange={(e) => setNewDriver(e.target.value)}
          placeholder="Imię"
        />
        <input
          type="text"
          name="lastName"
          value={newDriver.lastName}
          onChange={(e) => setNewDriver(e.target.value)}
          placeholder="Nazwisko"
        />
        <button type="button" onClick={handleAddDriver}>
          Dodaj kierowcę
        </button>
      </form>
      <Box style={driversListWrapper}>
        {peopleList}
      </Box>
    </Box>
  )
}
