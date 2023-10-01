import React, { useState } from "react";
import {
  FormControl,
  InputLabel,
  TextField,
  Select,
  MenuItem,
  Button,
  Typography,
  Box,
} from "@material-ui/core";

/**
 * Komponent formularza zamówienia.
 */
const OrderForm = () => {
  // Dane klienta
  const [clientData, setClientData] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  // Dane zamówienia
  const [orderData, setOrderData] = useState({
    date: "",
    deliveryDate: "",
    quantity: "",
    productType: "",
    price: "",
    comment: "",
  });

  // Błędy walidacji
  const [validationErrors, setValidationErrors] = useState({});

  // Obsługa zmiany danych klienta
  const handleClientDataChange = (event) => {
    setClientData({ ...clientData, [event.target.name]: event.target.value });
  };

  // Obsługa zmiany danych zamówienia
  const handleOrderDataChange = (event) => {
    setOrderData({ ...orderData, [event.target.name]: event.target.value });
  };

  // Walidacja danych
  const validateData = () => {
    const errors = {};

    // Walidacja danych klienta
    if (!clientData.name.trim()) {
      errors.name = "Imię i nazwisko są wymagane.";
    }
    if (!clientData.address.trim()) {
      errors.address = "Adres jest wymagany.";
    }
    if (!clientData.phone.trim()) {
      errors.phone = "Numer telefonu jest wymagany.";
    }
    if (!clientData.email.trim()) {
      errors.email = "Adres e-mail jest wymagany.";
    }

    // Walidacja danych zamówienia
    if (!orderData.date) {
      errors.date = "Data zamówienia jest wymagana.";
    }
    if (!orderData.deliveryDate) {
      errors.deliveryDate = "Data dostawy jest wymagana.";
    }
    if (orderData.quantity <= 0) {
      errors.quantity = "Ilość produktów musi być większa niż 0.";
    }
    if (!orderData.productType) {
      errors.productType = "Rodzaj produktów jest wymagany.";
    }
    if (orderData.price <= 0) {
      errors.price = "Cena musi być większa niż 0.";
    }
    if (!orderData.comment.trim()) {
      errors.comment = "Komentarz jest wymagany.";
    }

    setValidationErrors(errors);

    return Object.keys(errors).length === 0;
  };

  // Obsługa przesłania formularza
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateData()) {
      // Wysłanie danych na serwer
      console.log("Dane zostały wysłane na serwer:", clientData, orderData);
    } else {
      console.log("Formularz zawiera błędy. Nie można wysłać danych.");
    }
  };
const inputStyle={margin: "20px"}
  return (

    <FormControl className="order-form" style={{marginLeft: "205px", marginTop: "200px", display: "flex", justifyContent: "center", flexDirection:"row", gap: 20}}>
      <Box >
      <Typography variant="h4">Dane klienta</Typography>
      <Box sx={{display:"flex", flexDirection: "column"}}>
        <TextField
          style={inputStyle}
          id="name"
          name="name"
          label="Imię i nazwisko"
          value={clientData.name}
          onChange={handleClientDataChange}
          error={!!validationErrors.name}
          helperText={validationErrors.name}
        />
     
        <TextField
        style={inputStyle}
          id="address"
          name="address"
          label="Adres"
          value={clientData.address}
          onChange={handleClientDataChange}
          error={!!validationErrors.address}
          helperText={validationErrors.address}
        />
      
        <TextField
        style={inputStyle}
          id="phone"
          name="phone"
          label="Numer telefonu"
          value={clientData.phone}
          onChange={handleClientDataChange}
          error={!!validationErrors.phone}
          helperText={validationErrors.phone}
        />
      
        <TextField
        style={inputStyle}
          id="email"
          name="email"
          label="Adres e-mail"
          value={clientData.email}
          onChange={handleClientDataChange}
          error={!!validationErrors.email}
          helperText={validationErrors.email}
        />
      </Box>
      </Box>
      <Box>
      <Typography variant="h4">Dane zamówienia</Typography>
      <Box>
        <TextField
        style={inputStyle}
          id="date"
          name="date"
          label="Data zamówienia"
          type="text"
          value={orderData.date}
          onChange={handleOrderDataChange}
          error={!!validationErrors.date}
          helperText={validationErrors.date}
        />
      
        <TextField
        style={inputStyle}
          id="deliveryDate"
          name="deliveryDate"
          label="Data dostawy"
          type="text"
          value={orderData.deliveryDate}
          onChange={handleOrderDataChange}
          error={!!validationErrors.deliveryDate}
          helperText={validationErrors.deliveryDate}
        />
      {/* <Box>
        <InputLabel id="productTypeLabel">Rodzaj produktów</InputLabel>
        <select
        // style={inputStyle}
          id="productType"
          name="productType"
          labelId="productTypeLabel"
          label="koń"
          value={orderData.productType}
          onChange={handleOrderDataChange}
          error={!!validationErrors.productType}
        >
          <MenuItem value="Produkt 1">Produkt 1</MenuItem>
          <MenuItem value="Produkt 2">Produkt 2</MenuItem>
          <MenuItem value="Produkt 3">Produkt 3</MenuItem>
        </select>
        </Box> */}
        <TextField
        style={inputStyle}
          id="quantity"
          name="quantity"
          label="Ilość produktów"
          type="number"
          value={orderData.quantity}
          onChange={handleOrderDataChange}
          error={!!validationErrors.quantity}
          helperText={validationErrors.quantity}
        />
      
        <TextField
        style={inputStyle}
          id="price"
          name="price"
          label="Cena"
          type="number"
          value={orderData.price}
          onChange={handleOrderDataChange}
          error={!!validationErrors.price}
          helperText={validationErrors.price}
        />
      
        <TextField
        style={inputStyle}
          id="comment"
          name="comment"
          label="Komentarz"
          multiline
          rows={3}
          value={orderData.comment}
          onChange={handleOrderDataChange}
          error={!!validationErrors.comment}
          helperText={validationErrors.comment}
        />
       
      </Box>
      <Button variant="contained" color="primary" onClick={handleSubmit} sx={{}}>
        Złóż zamówienie
      </Button>
      </Box>
      
    </FormControl>
    
  );
};

export default OrderForm;