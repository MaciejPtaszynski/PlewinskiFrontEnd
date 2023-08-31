import React from 'react';
import {Box, useMediaQuery} from "@mui/material";
import {useTranslation} from "react-i18next";
import { LineChart } from '@mui/x-charts/LineChart';
import { width } from '@mui/system';


export default function HomePage() {

  const uData = [4000, 3000, 2000, 2780, 1890, 2390, 3490];
  const pData = [2400, 1398, 9800, 3908, 4800, 3800, 4300];
  const xLabels = [
  'Page A',
  'Page B',
  'Page C',
  'Page D',
  'Page E',
  'Page F',
  'Page G',
]

  const {t, i18n} = useTranslation();
  const isMobile = useMediaQuery('(max-width: 1000px)');
  
  const boxPosition = {width:"calc(100% - 200px)", marginLeft: isMobile ? "0px": "215px",marginTop: "70px", display: "flex", flexDirection: "row", gap: 20, flexWrap: "wrap"}
  const chartContent ={width: "800px", backgroundColor: "whitesmoke", boxShadow: "-2px 8px 16px -5px rgba(66, 68, 90, 1)", borderRadius: "15px", gap: 10}
  
  return (
      <Box style={boxPosition}>
        <Box style={chartContent}>
          <LineChart
            width={750}
            height={400}
            series={[
              { data: pData, label: 'pv' },
              { data: uData, label: 'uv' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
          />
        </Box>
        <Box style={chartContent}>
        <LineChart sx={{width: "800px", backgroundColor: "whitesmoke", boxShadow: "grey", borderRadius: "15px"}}
          width={750}
          height={300}
          series={[
            { data: pData, label: 'pv' },
            { data: uData, label: 'uv' },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
        </Box>
        <Box style={chartContent}>
          <LineChart
            width={750}
            height={400}
            series={[
              { data: pData, label: 'pv' },
              { data: uData, label: 'uv' },
            ]}
            xAxis={[{ scaleType: 'point', data: xLabels }]}
          />
        </Box>
        <Box style={chartContent}>
        <LineChart sx={{width: "800px", backgroundColor: "whitesmoke", boxShadow: "grey", borderRadius: "15px"}}
          width={750}
          height={300}
          series={[
            { data: pData, label: 'pv' },
            { data: uData, label: 'uv' },
          ]}
          xAxis={[{ scaleType: 'point', data: xLabels }]}
        />
        </Box>
      </Box>
  
  )
};
