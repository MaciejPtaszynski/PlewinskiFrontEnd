import React, {useState} from 'react';
import {Box, Tab} from "@mui/material";
import img from "../assetss/pobrane.jpeg";
import DriverCard from "./DriverCard";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useTranslation} from "react-i18next";


export default function DriversAndCarsPage() {

  const {t} = useTranslation();

  const [value, setValue] = useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [car, setCar] = useState("");

  const carList = [
    {
      id: 1,
      name: 'Toyota Corolla',
      mileage: 80000,
    },
    {
      id: 2,
      name: 'Honda Civic',
      mileage: 65000,
    },
    {
      id: 3,
      name: 'Volkswagen Golf',
      mileage: 72000,
    },
    {
      id: 4,
      name: 'Ford Focus',
      mileage: 55000,
    },
    {
      id: 5,
      name: 'Mazda CX-5',
      mileage: 43000,
    },
  ]

  const [people, setPeople] = useState([
      {
        id: 1,
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
        id: 3,
        firstName: "Katarzyna",
        lastName: "Wiśniewska",
        photo: img
      },
      {
        id: 4,
        firstName: "Piotr",
        lastName: "Kowalczyk",
        photo: img
      },
      {
        id: 5,
        firstName: "Magdalena",
        lastName: "Kowal",
        photo: img
      }
    ]
  );
  const [newDriver, setNewDriver] = useState(" ");


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
  }

  const driversListWrapper = {
    display: 'flex',
    flexDirection: 'column',
  };

  const tabsWrapper = {
    width: "calc(100% + 200px)",
    display: 'flex',
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "column"
  }

  const peopleList = people.map((item) => {
    return <Box key={item.id}>
      <DriverCard
        name={item.firstName}
        surname={item.lastName}
        image={item.photo}
        handleRemove={() => handleRemoveDriver(item.id)}
        carList={carList}
        carValue={item.id === car ? car : ""}
        onChange={(selectedCar) => setCar(selectedCar)}
      />

    </Box>
  });

  return (
    <Box sx={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <Box style={tabsWrapper}>
        <TabContext value={value}>
          <Box
            sx={{borderBottom: 1, borderColor: 'divider', width: "100%"}}>
            <TabList onChange={handleChange} variant={"fullWidth"}>
              <Tab label={t("drivers")} value={1}/>
              <Tab label={t("cars")} value={2}/>
            </TabList>
          </Box>
          <Box sx={{width: "100%", display: "flex",}}>
            <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
          </Box>
        </TabContext>
      </Box>
      {/*<form>*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    name="firstName"*/}
      {/*    value={newDriver.firstName}*/}
      {/*    onChange={(e) => setNewDriver(e.target.value)}*/}
      {/*    placeholder="Imię"*/}
      {/*  />*/}
      {/*  <input*/}
      {/*    type="text"*/}
      {/*    name="lastName"*/}
      {/*    value={newDriver.lastName}*/}
      {/*    onChange={(e) => setNewDriver(e.target.value)}*/}
      {/*    placeholder="Nazwisko"*/}
      {/*  />*/}
      {/*  <button type="button" onClick={handleAddDriver}>*/}
      {/*    Dodaj kierowcę*/}
      {/*  </button>*/}
      {/*</form>*/}
      {/*<Box style={driversListWrapper}>*/}
      {/*  {peopleList}*/}
      {/*</Box>*/}
    </Box>
  )
};
