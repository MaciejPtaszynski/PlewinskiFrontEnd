import React, { useState } from "react";
import { TextField, Button, Table, TableBody, TableCell, TableContainer, TableRow } from "@mui/material";
// import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';
import { Paper } from "@mui/material";
import FormControl from '@mui/material/FormControl';

const INITIAL_VALUES = {
  nadawca: "",
  odbiorca: "",
  adresNadawcy: "",
  adresOdbiorcy: "",
  waga: "",
  wymiary: "",
  typTowaru: "",
};

const Orders = () => {
  const [zlecenia, setZlecenia] = useState([]);
  const [wybranaPozycja, setWybranaPozycja] = useState(null);

  const [values, setValues] = useState(INITIAL_VALUES);

  const onSubmit = (values) => {
    // Przesłanie danych na serwer
    const data = {
      nadawca: values.nadawca,
      odbiorca: values.odbiorca,
      adresNadawcy: values.adresNadawcy,
      adresOdbiorcy: values.adresOdbiorcy,
      waga: values.waga,
      wymiary: values.wymiary,
      typTowaru: values.typTowaru,
    };

    // Sprawdzenie, czy wszystkie pola formularza są wypełnione
    const isFormValid = values.every((value) => value !== "");

    if (!isFormValid) {
      // Wyświetl komunikat o błędzie
      alert("Uzupełnij wszystkie pola formularza.");

      // Nie wysyłaj zamówienia
      return;
    }

    // Zapis danych do bazy danych
    // ...

    // Dodanie zamówienia do listy
    zlecenia.push(data);
  };

  const onRowClick = (row) => {
    // Ustaw wybraną pozycję na wartość `null`
    setWybranaPozycja(null);

    // Ustaw wybraną pozycję na wartość klikniętej pozycji
    setWybranaPozycja(row);
  };

  return (
    <div>
      <FormControl sx={{margin: "400px"}}>
        <TextField
          name="nadawca"
          placeholder="Nazwa nadawcy"
          required
          fullWidth
        />
        <TextField
          name="odbiorca"
          placeholder="Nazwa odbiorcy"
          required
          fullWidth
        />
        <TextField
          name="adresNadawcy"
          placeholder="Adres nadawcy"
          required
          fullWidth
        />
        <TextField
          name="adresOdbiorcy"
          placeholder="Adres odbiorcy"
          required
          fullWidth
        />
        <TextField
          name="waga"
          placeholder="Waga"
          required
          fullWidth
        />
        <TextField
          name="wymiary"
          placeholder="Wymiary (długość, szerokość, wysokość)"
          required
          fullWidth
        />
        <TextField
          name="typTowaru"
          placeholder="Typ towaru"
          required
          fullWidth
        />
        <Button type="submit">Wyślij</Button>
      </FormControl>
      <TableContainer component={Paper}>
        <Table>
          <TableBody>
            {zlecenia.map((zlecenie) => (
              <TableRow key={zlecenie.id} onClick={onRowClick}>
                <TableCell>{zlecenie.nadawca}</TableCell>
                <TableCell>{zlecenie.odbiorca}</TableCell>
                <TableCell>{zlecenie.adresNadawcy}</TableCell>
                <TableCell>{zlecenie.adresOdbiorcy}</TableCell>
                <TableCell>{zlecenie.waga}</TableCell>
                <TableCell>{zlecenie.wymiary}</TableCell>
                <TableCell>{zlecenie.typTowaru}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {/* {wybranaPozycja && (
        <Document
          data={wybranaPozycja}
          title="Lista zamówień"
        />
      )} */}
    </div>
  );
};

export default Orders;



