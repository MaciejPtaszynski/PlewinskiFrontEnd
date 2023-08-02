import React from 'react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import DeleteIcon from '@mui/icons-material/Delete';
import Swal from 'sweetalert2';

export default function CarCard({name, year, mileage, isAvailable, plate, img, handleRemove, handleEdit}) {
  const {t} = useTranslation();

  let isCardAvailableText;
  let colorTextTernary;
  if (isAvailable) {
    isCardAvailableText = t('carIsAvailable')
    colorTextTernary = "green"
  } else {
    isCardAvailableText = t('carIsNotAvailable');
    colorTextTernary = "red"
  }

  const handleRemoveClick = () => {
    Swal.fire({
      icon: 'warning',
      title: t('confirmDeleteTitleCar'),
      text: t('confirmDeleteTextCar'),
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
        handleRemove(); // Wywołanie funkcji usuwającej auto
      }
    });
  };

  return (
    <Card elevation={3} sx={{maxWidth: 500, minWidth: 340}}>
      <CardMedia
        component="img"
        alt="car photo"
        height="160"
        image={img}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="body2">
          {plate}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("yearOfProduction")}: {year}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t("mileage")}: {mileage} km
        </Typography>
        <Box sx={{display: "flex", flexDirection: "row", alignItems: "center"}}>
          <Typography variant="body2" color="text.secondary" mr={0.5}>
            {t("available")}: </Typography>
          <Typography variant="body2" color={colorTextTernary}>{isCardAvailableText}</Typography>
        </Box>
        <CardActions sx={{display: "flex", justifyContent: "space-between", marginTop: 2}}>
          <Button variant={"contained"} startIcon={<DeleteIcon/>} color={"error"} size="small"
                  onClick={handleRemoveClick}>{t("delete")}</Button>
          <Button variant={"contained"} startIcon={<ModeEditIcon/>} color={"info"} size="small"
                  onClick={handleEdit}>{t("edit")}</Button>
        </CardActions>
      </CardContent>
    </Card>
  )
};
