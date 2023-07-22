import React, {useEffect} from 'react';
import {Box, Typography, useMediaQuery} from "@mui/material";
import {useDrawer} from "../context/drawerContext/DrawerContext";
import img from "../assetss/pobrane.jpeg";
import DriverCard from "./DriverCard";

export default function DriversPage() {
  const {toggleDrawer} = useDrawer();
  const isMobile = useMediaQuery('(max-width: 1000px)');

  const driversListWrapper = {
    display: 'flex',
    flexDirection: 'column',

  }

  const people = [
    {
      firstName: "Anna",
      lastName: "Kowalska",
      photo: img
    },
    {
      firstName: "Jan",
      lastName: "Nowak",
      photo: img
    },
    {
      firstName: "Katarzyna",
      lastName: "Wiśniewska",
      photo: img
    },
    {
      firstName: "Piotr",
      lastName: "Kowalczyk",
      photo: img
    },
    {
      firstName: "Magdalena",
      lastName: "Kowal",
      photo: img
    },
    {
      firstName: "Tomasz",
      lastName: "Lewandowski",
      photo: img
    },
    {
      firstName: "Karolina",
      lastName: "Zielińska",
      photo: img
    },
    {
      firstName: "Adam",
      lastName: "Wójcik",
      photo: img
    },
    {
      firstName: "Ewa",
      lastName: "Dąbrowska",
      photo: img
    },
    {
      firstName: "Kamil",
      lastName: "Mazur",
      photo: img
    },
  ];

  const peopleList = people.map((item) => {
    return <DriverCard name={item.firstName} surname={item.lastName} image={item.photo}/>
  })

  return (
    <Box sx={{
      display: "flex",
      flex: 1, alignItems: "center",
      justifyContent: "center",
    }}>
      <Box style={driversListWrapper}>
        {peopleList}
      </Box>
    </Box>
  )
};
