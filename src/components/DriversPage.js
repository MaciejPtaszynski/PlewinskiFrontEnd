import React, {useEffect, useState} from 'react';
import {Box, Typography, useMediaQuery} from "@mui/material";
import {useDrawer} from "../context/drawerContext/DrawerContext";
import img from "../assetss/pobrane.jpeg";
import DriverCard from "./DriverCard";

export default function DriversPage() {

  const[people, setPeople] = useState( [
    {
      id:1,
      firstName: "Anna",
      lastName: "Kowalska",
      photo: img
    },
    {
      id: 2,
      firstName: "Jan",
      lastName: "Nowak",
      photo: img
    },
    {
      id:3,
      firstName: "Katarzyna",
      lastName: "Wiśniewska",
      photo: img
    },
    {
      id:4,
      firstName: "Piotr",
      lastName: "Kowalczyk",
      photo: img
    },
    {
      id:5,
      firstName: "Magdalena",
      lastName: "Kowal",
      photo: img
    }
    ]
  );
  const [newDriver, setNewDriver] = useState(" ");

  const handleAddDriver = () => {
    if(newDriver.trim() !== '') {
      const newItem = {id: Date.now(), firstName: newDriver, lastName: newDriver};
      setPeople([...people,newItem]);
      setNewDriver("")
    }
  };

  const handleRemoveDriver = (id) => {
    const removeDriver = people.filter((item) => item.id !==id);
    setPeople(removeDriver)
  }

  const driversListWrapper = {
    display: 'flex',
    flexDirection: 'column',
  };

  const peopleList = people.map((item) => {
    return <Box>
      <DriverCard
        name={item.firstName}
        surname={item.lastName}
        image={item.photo}
        handleRemove={() => handleRemoveDriver(item.id)}
      />

    </Box>
  });

  return (
    <Box sx={{
      display: "flex",
      flex: 1, alignItems: "center",
      justifyContent: "center",
    }}>
      <form>
        <input
          type="text"
          name="firstName"
          value={newDriver.firstName}
          onChange={(e)=> setNewDriver(e.target.value)}
          placeholder="Imię"
        />
        <input
          type="text"
          name="lastName"
          value={newDriver.lastName}
          onChange={(e)=> setNewDriver(e.target.value)}
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
};
