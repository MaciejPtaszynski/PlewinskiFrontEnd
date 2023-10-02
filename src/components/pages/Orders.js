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
  const initialClientData = {
    name: "",
    address: "",
    phone: "",
    email: "",
  };

  // Dane zamówienia
  const initialOrderData = {
    date: "",
    deliveryDate: "",
    quantity: "",
    productType: "",
    price: "",
    comment: "",
  };

  // Błędy walidacji
  const initialValidationErrors = {};

  // Stan z listą formularzy zamówień
  const [orders, setOrders] = useState([]);
  const [clientData, setClientData] = useState({ ...initialClientData });
  const [orderData, setOrderData] = useState({ ...initialOrderData });
  const [validationErrors, setValidationErrors] = useState({ ...initialValidationErrors });

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
      // Dodanie aktualnego zamówienia do listy
      setOrders([...orders, { clientData, orderData }]);

      // Zresetowanie formularza
      setClientData({ ...initialClientData });
      setOrderData({ ...initialOrderData });
      setValidationErrors({ ...initialValidationErrors });
    } else {
      console.log("Formularz zawiera błędy. Nie można wysłać danych.");
    }
  };

  const inputStyle = { margin: "20px" };

  return (
    <div>
      <FormControl
        style={{
          marginLeft: "220px",
          marginTop: "100px",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: 300 }}>
          <Typography variant="h4">Dane klienta</Typography>
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <TextField
              style={inputStyle}
              id="name"
              name="name"
              variant={"outlined"}
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
              variant={"outlined"}
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
              variant={"outlined"}
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
              variant={"outlined"}
              label="Adres e-mail"
              value={clientData.email}
              onChange={handleClientDataChange}
              error={!!validationErrors.email}
              helperText={validationErrors.email}
            />
          </Box>

          <Typography variant="h4">Dane zamówienia</Typography>
          <Box>
            <TextField
              style={inputStyle}
              id="date"
              name="date"
              variant={"outlined"}
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
              variant={"outlined"}
              name="deliveryDate"
              label="Data dostawy"
              type="number"
              value={orderData.deliveryDate}
              onChange={handleOrderDataChange}
              error={!!validationErrors.deliveryDate}
              helperText={validationErrors.deliveryDate}
            />

            <InputLabel id="productType">Produkt</InputLabel>
            <Select
              style={inputStyle}
              id="productType"
              name="productType"
              labelId="productType"
              variant={"outlined"}
              value={orderData.productType}
              onChange={handleOrderDataChange}
              error={!!validationErrors.productType}
            >
              <MenuItem value="Produkt 1">Opcja 1</MenuItem>
              <MenuItem value="Produkt 2">Opcja 2</MenuItem>
              <MenuItem value="Produkt 3">Opcja 3</MenuItem>
            </Select>

            <TextField
              style={inputStyle}
              id="quantity"
              name="quantity"
              variant={"outlined"}
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
              variant={"outlined"}
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
              variant={"outlined"}
              label="Komentarz"
              multiline
              rows={3}
              value={orderData.comment}
              onChange={handleOrderDataChange}
              error={!!validationErrors.comment}
              helperText={validationErrors.comment}
            />

            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              sx={{}}
            >
              Złóż zamówienie
            </Button>
          </Box>
        </Box>
      </FormControl>

      {/* Wyświetlanie listy zamówień */}
      {orders.length > 0 && (<Box sx={{ display: "flex", texAlign: "center"}}>
        <div style={{marginLeft: "220px" ,display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography variant="h4">Lista zamówień</Typography>
          {orders.map((order, index) => (
            <div key={index}>
              <Typography variant="h6">Zamówienie {index + 1}</Typography>
              <div>
                <Typography variant="h6">Dane klienta:</Typography>
                <p>Imię i nazwisko: {order.clientData.name}</p>
                <p>Adres: {order.clientData.address}</p>
                <p>Numer telefonu: {order.clientData.phone}</p>
                <p>Adres e-mail: {order.clientData.email}</p>
              </div>
              <div>
                <Typography variant="h6">Dane zamówienia:</Typography>
                <p>Data zamówienia: {order.orderData.date}</p>
                <p>Data dostawy: {order.orderData.deliveryDate}</p>
                <p>Rodzaj produktu: {order.orderData.productType}</p>
                <p>Ilość produktów: {order.orderData.quantity}</p>
                <p>Cena: {order.orderData.price}</p>
                <p>Komentarz: {order.orderData.comment}</p>
              </div>
            </div>
          ))}
        </div>
        </Box>
      )}
    </div>
  );
};

export default OrderForm;
