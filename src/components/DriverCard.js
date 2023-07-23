import React, {useState} from 'react';
import {Avatar, Box, FormControl, InputLabel, MenuItem, Select, Typography} from "@mui/material";

export default function DriverCard({name, surname, image, handleRemove, onChange, carValue, carList}) {
  const [car, setCar] = useState(""); // Przenieś stan car do komponentu DriverCard

  const handleChangeCar = (event) => {
    setCar(event.target.value);
    onChange(event.target.value); // Przekazanie wartości do komponentu DriversPage
  };
  return (
    <Box sx={{
      margin: 2,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding: 2,
      display: "flex",
      alignItems: "center",
      borderRadius: 3
    }}>
      <Avatar src={image} sx={{mr: 2}}/>
      <Typography sx={{mr: 1}}>{name}</Typography>
      <Typography>{surname}</Typography>
      <FormControl sx={{m: 1, minWidth: 120}} size="small">
        <InputLabel id="demo-select-small-label">Car</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={car}
          label="Car"
          onChange={handleChangeCar}
        >
          {carList.map((car) => (
            <MenuItem key={car.id} value={car.name}>
              {car.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <button onClick={handleRemove}>usun kierowce</button>
    </Box>
  )
};
