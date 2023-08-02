import React, { useState } from 'react';
import { Avatar, Box, Button, Typography } from "@mui/material";
import Swal from "sweetalert2";
import { useTranslation } from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function DriverCard({ firstName, lastName, photo, handleRemove, onChange, pesel, isAvailable, handleEdit }) {
  const { t } = useTranslation();

  const [car, setCar] = useState(""); // Przenieś stan car do komponentu DriverCard

  const handleChangeCar = (event) => {
    setCar(event.target.value);
    onChange(event.target.value); // Przekazanie wartości do komponentu DriversPage
  };

  let isDriverAvailableText;
  let colorTextTernary;
  if (isAvailable) {
    isDriverAvailableText = t('driverIsAvailable')
    colorTextTernary = "green"
  } else {
    isDriverAvailableText = t('driverIsNotAvailable');
    colorTextTernary = "red"
  }

  const handleRemoveClick = () => {
    Swal.fire({
      icon: 'warning',
      title: t('confirmDeleteTitleDriver'),
      text: t('confirmDeleteTextDriver'),
      showCancelButton: true,
      confirmButtonColor: '#d33',
      confirmButtonText: t('delete'),
      cancelButtonText: t('cancel'),
      customClass: {
        container: 'Swal2-container',
        title: 'Swal2-title',
        content: 'Swal2-content',
        confirmButton: 'Swal2-confirmButton',
        cancelButton: 'Swal2-cancelButton'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleRemove(); // Wywołanie funkcji usuwającej kierowcę
      }
    });
  };

  const handleEditClick = () => {
    handleEdit(); // Wywołanie funkcji edytującej kierowcę
  };

  return (
    <Box sx={{
      margin: 2,
      boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      padding: 2,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      borderRadius: 3
    }}>
      <Avatar src={photo} sx={{ mr: 2 }} />
      <Typography sx={{ mr: 1 }}>{firstName}</Typography>
      <Typography>{lastName}</Typography>
      <Typography>{pesel}</Typography>
      <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <Typography variant="body2" color="text.secondary" mr={0.5}>
          {t("available")}: </Typography>
        <Typography variant="body2" color={colorTextTernary}>{isDriverAvailableText}</Typography>
      </Box>
      <Button variant={"contained"} startIcon={<DeleteIcon />} color={"error"} size="small"
              onClick={handleRemoveClick}>{t("delete")}</Button>
      <Button variant={"contained"} startIcon={<ModeEditIcon />} color={"info"} size="small"
              onClick={handleEditClick}>{t("edit")}</Button>
    </Box>
  )
};
