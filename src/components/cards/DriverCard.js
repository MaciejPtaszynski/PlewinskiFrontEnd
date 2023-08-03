import React, {useState} from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  IconButton,
  Typography
} from "@mui/material";
import Swal from "sweetalert2";
import {useTranslation} from "react-i18next";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";

export default function DriverCard({
                                     firstName,
                                     lastName,
                                     photo,
                                     handleRemove,
                                     onChange,
                                     pesel,
                                     isAvailable,
                                     handleEdit,
                                     identityDocument,
                                     drivingLicenseCategory,
                                     drivingLicenseExpirationDate,
                                   }) {
  const {t} = useTranslation();

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

  const header = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10
  }

  const valueInfoBox = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
    marginBottom: 2
  };

  const divider = {
    width: "100%",
    height: "1px",
    color: "whitesmoke",
    marginTop: 10,
    marginBottom: 1
  }
  return (
    // <Box sx={{
    //   margin: 2,
    //   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
    //   padding: 2,
    //   display: "flex",
    //   flexDirection: "column",
    //   alignItems: "center",
    //   borderRadius: 3
    // }}>
    //   <Avatar src={photo} sx={{ mr: 2 }} />
    //   <Typography sx={{ mr: 1 }}>{firstName}</Typography>
    //   <Typography>{lastName}</Typography>
    //   <Typography>{pesel}</Typography>
    //   <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
    //     <Typography variant="body2" color="text.secondary" mr={0.5}>
    //       {t("available")}: </Typography>
    //     <Typography variant="body2" color={colorTextTernary}>{isDriverAvailableText}</Typography>
    //   </Box>
    //   <Button variant={"contained"} startIcon={<DeleteIcon />} color={"error"} size="small"
    //           onClick={handleRemoveClick}>{t("delete")}</Button>
    //   <Button variant={"contained"} startIcon={<ModeEditIcon />} color={"info"} size="small"
    //           onClick={handleEditClick}>{t("edit")}</Button>
    // </Box>
    <Card sx={{minWidth: 275, width: 375}} elevation={3}>
      <CardContent>
        <Box style={header}>
          <Avatar sx={{width: 56, height: 56}} src={photo}/>
          <IconButton onClick={handleEditClick} color={"info"} size="small">
            <ModeEditIcon/>
          </IconButton>
        </Box>
        <Divider style={divider}/>
        <Box>
          <Box style={valueInfoBox}>
            <Typography sx={{fontWeight: "bold"}}>
              Imie: </Typography>
            <Typography fontWeight={"lighter"}> {firstName}</Typography>
          </Box>
          <Box style={valueInfoBox}>
            <Typography sx={{fontWeight: "bold"}}> Nazwisko:</Typography>
            <Typography> {lastName}</Typography>
          </Box>
          <Box style={valueInfoBox}>
            <Typography sx={{fontWeight: "bold"}}> Pesel:</Typography>
            <Typography> {pesel}</Typography>
          </Box>
          <Box style={valueInfoBox}>
            <Typography sx={{fontWeight: "bold"}}>Nr. dowodu toz.:</Typography>
            <Typography>{identityDocument}</Typography>
          </Box>
          <Box style={valueInfoBox}>
            <Typography sx={{fontWeight: "bold"}}> Kateg. prawojazdy:</Typography>
            <Typography>{drivingLicenseCategory}</Typography>
          </Box>
          <Box style={valueInfoBox}>
            <Typography sx={{fontWeight: "bold"}}> Ważność prawojazdy:</Typography>
            <Typography>{drivingLicenseExpirationDate}</Typography>
          </Box>
        </Box>
        <Divider style={divider}/>
        <Box sx={{marginTop: 1}}>
          <IconButton onClick={handleRemoveClick} color={"error"} size="small">
            <DeleteIcon/>
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  )
};
