import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import db from "../../../../../firebase";
import {
  Form,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
} from "../ProjectsElements";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "3%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
    "&:nth-child(1)": {
      marginRight: "2%",
    },
  },
}));

const Termination = () => {
  const [udzial, setUdzial] = useState([]);
  const [dataZakonczeniaUdzialu, setDataZakonczeniaUdzialu] = useState("");
  const [zakonczylZgonieZeSciezka, setZakonczylZgonieZeSciezka] = useState(
    "Tak"
  );
  const [powodNieukonczenia, setPowodNieukonczenia] = useState("");
  const [dokumentPotwierdzajacy, setDokumentPotwierdzajacy] = useState("");
  const [dataDokumentu, setDataDokumentu] = useState("");
  const classes = useStyles();

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("udzial")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUdzial(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    if (udzial) {
      setDataZakonczeniaUdzialu(udzial.dataZakonczeniaUdzialu || "");
      setZakonczylZgonieZeSciezka(udzial.zakonczylZgonieZeSciezka || "");
      setPowodNieukonczenia(udzial.powodNieukonczenia || "");
      setDokumentPotwierdzajacy(udzial.dokumentPotwierdzajacy || "");
      setDataDokumentu(udzial.dataDokumentu || "");
    }
  }, [udzial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("udzial")
      .set({
        dataZakonczeniaUdzialu,
        zakonczylZgonieZeSciezka,
        powodNieukonczenia,
        dokumentPotwierdzajacy,
        dataDokumentu,
      });
    console.log("dodano");
  };

  return (
    <Form>
      <FormLabel>
        Data zakończenia udziału w projekcie:
        <FormInput
          value={dataZakonczeniaUdzialu}
          onChange={(e) => setDataZakonczeniaUdzialu(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Czy UP zakończył zgodnie ze ścieżką:
        <FormSelect
          value={zakonczylZgonieZeSciezka}
          onChange={(e) => setZakonczylZgonieZeSciezka(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      {zakonczylZgonieZeSciezka === "Nie" ? (
        <FormLabel>
          Powód zakończenia niezgodnie ze ścieżką:
          <FormSelect
            value={powodNieukonczenia}
            onChange={(e) => setPowodNieukonczenia(e.target.value)}
          >
            <FormOption>Podjęcie zatrudnienia</FormOption>
            <FormOption>Rezygnacja UP</FormOption>
            <FormOption>
              Skreślenie za nieobecności powyżej 20% na szkoleniu
            </FormOption>
            <FormOption>
              Skreślenie za nieobecności powyżej 20% na stażu
            </FormOption>
            <FormOption>
              Skreślenie ze stażu - 33 dni ciągłej nieobecności (L4)
            </FormOption>
            <FormOption>Nieusprawiedliwona </FormOption>
            <FormOption>
              Skreślenie ze stażu - 33 dni ciągłej nieobecności (L4)
            </FormOption>
            <FormOption>
              Skreślenie ze stażu - 33 dni ciągłej nieobecności (L4)
            </FormOption>
          </FormSelect>
        </FormLabel>
      ) : (
        <></>
      )}
      <FormLabel>
        Dokument potwierdzający zakończenie udziału w projekcie:
        <FormInput
          value={dokumentPotwierdzajacy}
          onChange={(e) => setDokumentPotwierdzajacy(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Data dokumentu:
        <FormInput
          value={dataDokumentu}
          onChange={(e) => setDataDokumentu(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <Button
        onClick={handleSubmit}
        type="submit"
        variant="outlined"
        className={classes.button}
      >
        Zakończ udział
      </Button>
    </Form>
  );
};

export default Termination;
