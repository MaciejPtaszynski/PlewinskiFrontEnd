import React, {useEffect, useState} from 'react';
import {Box, Button, Checkbox, Modal, TextField, Typography} from "@mui/material";
import DriversDb from "../../dataBase/Drivers";
import DriverCard from "../cards/DriverCard";
import img from "../../assetss/pobrane.jpeg";
import Swal from "sweetalert2";
import AddIcon from "@mui/icons-material/Add";
import {useTranslation} from "react-i18next";
import noImageAvailable from "../../assetss/NoImageAvailable.jpeg";
import {Close} from "@mui/icons-material";

const defaultCarImage = noImageAvailable;
const zIndexModal = 1400; // Wartość z-indeksu dla modalu
const zIndexSwal = 1300; // Wartość z-indeksu dla Swal

export default function DriverTabPage() {

  const {t} = useTranslation();

  const [newDriver, setNewDriver] = useState(" ");
  const [people, setPeople] = useState(DriversDb);
  const [isFormValid, setIsFormValid] = useState(false);
  const [editDriverIndex, setEditDriverIndex] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [isModalConfirmed, setIsModalConfirmed] = useState(false); // Dodajemy zmienną isModalConfirmed

  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditDriverIndex(-1);
    setFormValues({
      firstName: "",
      lastName: "",
      pesel: "",
      isAvailable: true,
    });
    setIsModalConfirmed(false); // Resetujemy zmienną isModalConfirmed po zamknięciu modalu
  };

  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    pesel: "",
    isAvailable: true,
  });

  const handleAddDriver = () => {
    const {firstName, lastName, pesel, isAvailable} = formValues;
    if (firstName.trim() !== "" && lastName.trim() !== "" && pesel.trim() !== "") {
      Swal.fire({
        icon: "question",
        title: t("confirmation"),
        text: t("areYouSureWantToAddADriver"),
        showCancelButton: true,
        confirmButtonText: t("yes"),
        cancelButtonText: t("cancel"),
        customClass: {
          container: "Swal2-container",
          title: "Swal2-title",
          content: "Swal2-content",
          confirmButton: "Swal2-confirmButton",
          cancelButton: "Swal2-cancelButton",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          // Po potwierdzeniu przez użytkownika dodajemy kierowcę
          const newItem = {
            id: Date.now(),
            firstName: firstName,
            lastName: lastName,
            pesel: pesel,
            isAvailable: isAvailable,
            photo: defaultCarImage,
          };
          setPeople([...people, newItem]);
          setFormValues({
            firstName: "",
            lastName: "",
            isAvailable: true,
            pesel: "",
          });
          setIsFormValid(false);
        }
      });
    }
  };


  useEffect(() => {
    setIsFormValid(
      formValues.firstName.trim() !== "" &&
      formValues.lastName.trim() !== "" &&
      formValues.pesel.trim() !== ""
    );
  }, [formValues]);

  const handleEditDriver = (index) => {
    setEditDriverIndex(index);
    setFormValues(people[index]);
    handleOpenModal();
  };

  const fireEditSwal = () => {
    Swal.fire({
      icon: 'success',
      title: t('editConfirmed'),
      text: t('editModified'),
      confirmButtonColor: '#d33',
      confirmButtonText: "OK",
      customClass: {
        container: 'Swal2-container',
        title: 'Swal2-title',
        content: 'Swal2-content',
        confirmButton: 'Swal2-confirmButton',
      }
    }).then((result) => {
      if (result.isConfirmed) {
        handleCloseModal();
      }
    });

  }

  const handleSaveChanges = () => {
    const updatedDrivers = [...people];
    updatedDrivers[editDriverIndex] = formValues;
    setPeople(updatedDrivers);
    handleCloseModal();
  };

  const handleRemoveDriver = (id) => {
    const removeDriver = people.filter((item) => item.id !== id);
    setPeople(removeDriver);
  };

  const handleModalInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const peopleList = people.map((item, index) => {
    return (
      <Box key={item.id}>
        <DriverCard
          firstName={item.firstName}
          lastName={item.lastName}
          pesel={item.pesel}
          isAvailable={item.isAvailable}
          photo={item.photo}
          handleRemove={() => handleRemoveDriver(item.id)}
          handleEdit={() => handleEditDriver(index)}
        />
      </Box>
    );
  });

  const driversListWrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
  };

  const addCarBtn = {
    marginBottom: 30,
  };

  const modalStyle = {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 500,
    backgroundColor: '#ffffff',
    border: '1px solid #000',
    boxShadow: 24,
    borderRadius: 5,
    p: 4,
    zIndex: isModalConfirmed ? zIndexModal : zIndexSwal, // Ustawienie odpowiedniego z-index w zależności od wartości isModalConfirmed
  };

  const inputStyle = {
    width: 350,
    margin: "10px 0px",
  };

  const modalCloseBtn = {
    position: 'absolute',
    top: "3%",
    right: "2%",
    cursor: "pointer",
  };

  return (
    <Box style={driversListWrapper}>
      <Button
        startIcon={<AddIcon/>}
        style={addCarBtn}
        variant="contained"
        onClick={handleOpenModal}
      >
        {t("addDriver")}
      </Button>
      <Modal
        hideBackdrop={true}
        open={openModal && !isModalConfirmed}
        onClose={handleCloseModal}
      >
        <Box style={modalStyle}>
          <Typography variant="h5">
            {t(editDriverIndex >= 0 ? "editDriver" : "addNewDriver")}
          </Typography>
          <Close style={modalCloseBtn} onClick={handleCloseModal}/>
          <TextField
            style={inputStyle}
            type="text"
            name="firstName"
            value={formValues.firstName}
            onChange={handleModalInputChange}
            placeholder={t("firstName")}
          />
          <TextField
            style={inputStyle}
            type="text"
            name="lastName"
            value={formValues.lastName}
            onChange={handleModalInputChange}
            placeholder={t("lastName")}
          />
          <TextField
            style={inputStyle}
            type="text"
            name="pesel"
            value={formValues.pesel}
            onChange={handleModalInputChange}
            placeholder="Pesel"
          />
          <label>
            {t("setNewDriverAsAvailable")}
            <Checkbox
              checked={formValues.isAvailable}
              onChange={handleModalInputChange}
              name="isAvailable"
            />
          </label>
          {editDriverIndex !== -1 ? (
            <Button variant="contained" onClick={() => {
              handleSaveChanges();
              fireEditSwal()
            }}>
              {t("saveChanges")}
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={() => {
                handleAddDriver();
                handleCloseModal()
              }}
              disabled={!isFormValid}
            >
              {t("addDriver")}
            </Button>
          )}
        </Box>
      </Modal>
      <Box
        sx={{
          width: "calc(100% -200px)",
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "flex-end",
          marginRight: "100px",
        }}
      >
        {peopleList}
      </Box>
    </Box>
  );
}
