import React, {useEffect, useState} from 'react';
import {Box, Button, Checkbox, Modal, TextField, Typography} from "@mui/material";
import CarsDb from "../../dataBase/Cars";
import CarCard from "../cards/CarCard";
import {Close} from "@mui/icons-material";
import AddIcon from '@mui/icons-material/Add';
import {useTranslation} from "react-i18next";
import Swal from "sweetalert2";
import noImageAvailable from "../../assetss/NoImageAvailable.jpeg";

// Stałe zdjęcie, które będzie używane, gdy użytkownik nie wybierze własnego zdjęcia
const defaultCarImage = noImageAvailable;

export default function CarTabPage() {
  const {t} = useTranslation();

  const [editCarIndex, setEditCarIndex] = useState(-1);
  const [cars, setCars] = useState(CarsDb);
  const [isFormValid, setIsFormValid] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = () => setOpenModal(true);
  const handleCloseModal = () => {
    setOpenModal(false);
    setEditCarIndex(-1);
    setFormValues({
      name: "",
      year: "",
      mileage: "",
      isAvailable: true,
      registrationNumber: "",
    });
  };

  const [formValues, setFormValues] = useState({
    name: "",
    year: "",
    mileage: "",
    isAvailable: true,
    registrationNumber: "",
  });

  const handleAddCar = () => {
    const {name, year, mileage, isAvailable, registrationNumber} = formValues;
    if (name.trim() !== "" && year !== "" && mileage !== "" && registrationNumber.trim() !== "") {
      const newItem = {
        id: Date.now(),
        name: name,
        year: year !== "" ? parseInt(year) : "",
        mileage: mileage !== "" ? parseInt(mileage) : "",
        isAvailable: isAvailable,
        registrationNumber: registrationNumber,
        img: defaultCarImage, // Automatycznie przypisujemy zdjęcie domyślne
      };

      setCars([newItem, ...cars]);
      setFormValues({
        name: "",
        year: "",
        mileage: "",
        isAvailable: true,
        registrationNumber: "",
      });
      setIsFormValid(false);
      Swal.fire({
        icon: "success",
        title: "Auto dodane",
        customClass: {
          container: "Swal2-container"
        }
      })
      handleCloseModal();
    }
  };

  useEffect(() => {
    setIsFormValid(
      formValues.name.trim() !== "" &&
      formValues.year !== "" &&
      formValues.mileage !== "" &&
      formValues.registrationNumber.trim() !== ""
    );
  }, [formValues]);

  const handleRemoveCar = (id) => {
    const removeCar = cars.filter((item) => item.id !== id);
    setCars(removeCar);
  };


  const handleEditCar = (index) => {
    setEditCarIndex(index);
    setFormValues(cars[index]);
    handleOpenModal();
  };

  const handleSaveChanges = () => {
    const updatedCars = [...cars];
    updatedCars[editCarIndex] = formValues;
    setCars(updatedCars);
    handleCloseModal();
  };

  const carsListWrapper = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%"
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
  };

  const inputStyle = {
    width: 350,
    margin: "10px 0px"
  };

  const modalCloseBtn = {
    position: 'absolute',
    top: "3%",
    right: "2%",
    cursor: "pointer"
  };

  const handleModalInputChange = (e) => {
    const {name, value, type, checked} = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const CarList = cars.map((item, index) => (
    <Box key={item.id} sx={{display: "flex"}}>
      <CarCard
        name={item.name}
        mileage={item.mileage}
        year={item.year}
        plate={item.registrationNumber}
        img={item.img}
        isAvailable={item.isAvailable}
        handleRemove={() => handleRemoveCar(item.id)}
        handleEdit={() => handleEditCar(index)}
      />
    </Box>
  ));

  return (
    <Box style={carsListWrapper}>
      <Button
        startIcon={<AddIcon/>}
        style={addCarBtn}
        variant="contained"
        onClick={handleOpenModal}>
        {t("addCar")}
      </Button>
      <Modal hideBackdrop={true} open={openModal} onClose={handleCloseModal}>
        <Box style={modalStyle}>
          <Typography variant="h5">
            {t(editCarIndex >= 0 ? "editCar" : "addNewCar")}
          </Typography>
          <Close style={modalCloseBtn} onClick={handleCloseModal}/>
          <TextField
            style={inputStyle}
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleModalInputChange}
            placeholder="Nazwa"
          />
          <TextField
            style={inputStyle}
            type="text"
            name="year"
            value={formValues.year}
            onChange={handleModalInputChange}
            placeholder="Rok produkcji"
          />
          <TextField
            style={inputStyle}
            type="text"
            name="registrationNumber"
            value={formValues.registrationNumber}
            onChange={handleModalInputChange}
            placeholder="Rejestracja"
          />
          <TextField
            style={inputStyle}
            type="text"
            name="mileage"
            value={formValues.mileage}
            onChange={handleModalInputChange}
            placeholder="Przebieg"
          />
          <label>
            {t("setNewCarAsAvailable")}
            <Checkbox
              checked={formValues.isAvailable}
              onChange={handleModalInputChange}
              name="isAvailable"
            />
          </label>
          {editCarIndex !== -1 ? (
            <Button variant="contained" onClick={handleSaveChanges}>
              {t("saveChanges")}
            </Button>
          ) : (
            <Button
              variant="contained"
              onClick={handleAddCar}
              disabled={!isFormValid}
            >
              {t("addCar")}
            </Button>
          )}
        </Box>
      </Modal>
      <Box sx={{
        width: "calc(100% -200px)",
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "flex-end",
        marginRight: "100px"
      }}>
        {CarList}
      </Box>
    </Box>
  );
}
