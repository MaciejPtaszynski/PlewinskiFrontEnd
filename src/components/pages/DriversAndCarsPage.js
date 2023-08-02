import React, {useState} from 'react';
import {Box, Tab} from "@mui/material";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import {useTranslation} from "react-i18next";
import DriverTabPage from "./DriverTabPage";
import CarsTabPage from "./CarsTabPage";


export default function DriversAndCarsPage() {
  const {t} = useTranslation();

  const [value, setValue] = useState("1");

  // funkcja odpowiedzialna za zmianę tabów
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{width: "100%"}}>
      <TabContext value={value}>
        <Box
          sx={{borderBottom: 1, borderColor: 'divider', width: "100%"}}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label={t("drivers")} value={"1"}/>
            <Tab label={t("cars")} value={"2"}/>
          </TabList>
        </Box>
        <TabPanel sx={{display: "flex", justifyContent: "flex-end", position: "relative"}}
                  value="1"><DriverTabPage/></TabPanel>
        <TabPanel sx={{display: "flex", justifyContent: "flex-end"}} value="2"><CarsTabPage/></TabPanel>
      </TabContext>
    </Box>
  )
};
