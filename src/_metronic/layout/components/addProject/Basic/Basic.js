import {
  Button,
  Checkbox,
  FormControl,
  Input,
  InputLabel,
  ListItemText,
  makeStyles,
  MenuItem,
  Select,
} from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../../../../firebase";
import {
  Form,
  FormDateContainer,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
  FormSpan,
  FormSubHeader,
  FromDateWrapper,
} from "../../projects/ProjectsElements";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "1%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
    "&:nth-child(1)": {
      marginRight: "2%",
    },
    "@media (max-width: 1000px)": {
      width: "30%",
    },
    "@media (max-width: 500px)": {
      width: "35%",
    },
  },
  control: {
    width: "35%",
    paddingLeft: "5px",
    marginLeft: "10px",
    "@media (max-width: 1000px)": {
      width: "45%",
    },
    "@media (max-width: 500px)": {
      width: "75%",
    },
  },
}));

const names = [
  "Oliver Hansen",
  "Van Henry",
  "April Tucker",
  "Ralph Hubbard",
  "Omar Alexander",
  "Carlos Abbott",
  "Miriam Wagner",
  "Bradley Wilkerson",
  "Virginia Andrews",
  "Kelly Snyder",
];

const Basic = () => {
  const classes = useStyles();
  const [nazwaProjektu, setNazwaProjektu] = useState("");
  const [numerProjektu, setNumerProjektu] = useState("");
  const [beneficjentOdpowiada, setBeneficjentOdpowiada] = useState("");
  const [partnerOdpowiada, setPartnerOdpowiada] = useState("");

  const [okresRealizacjiOd, setOkresRealizacjiOd] = useState("");
  const [okresRealizacjiDo, setOkresRealizacjiDo] = useState("");
  const [przedluzenieProjektu, setPrzedluzenieProjektu] = useState("");
  const [numerUmowy, setNumerUmowy] = useState("");
  const [dataUmowy, setDataUmowy] = useState("");
  const [nazwiskoOpiekuna, setNazwiskoOpiekuna] = useState("");
  const [imieOpiekuna, setImieOpiekuna] = useState("");
  const [telefonOpiekuna, setTelefonOpiekuna] = useState("");
  const [mailOpiekuna, setMailOpiekuna] = useState("");

  const [terminMenadzera, seTterminMenadzera] = useState("");
  const [nazwiskoMenadzera, setNazwiskoMenadzera] = useState("");
  const [imieMenadzera, setImieMenadzera] = useState("");

  const [terminKoordynatora, seTterminKoordynatora] = useState("");
  const [nazwiskoKoordynatora, setNazwiskoKoordynatora] = useState("");
  const [imieKoordynatora, setImieKoordynatora] = useState("");

  const [osobaUpowazniona, setOsobaUpowazniona] = useState([]);
  const [dostepDoKonta, setDostepDoKonta] = useState([]);
  const [stronaProjektu, setStronaProjektu] = useState("");
  const [emailProjektu, setEmailProjektu] = useState("");
  const [stawkaZus, setStawkaZus] = useState("");
  const [stawkaNettoSzkolenie, setStawkaNettoSzkolenie] = useState("");
  const [stawkaNettoStaz, setStawkaNettoStaz] = useState("");
  const [obszarTematyczny, setObszarTematyczny] = useState("");
  const [statusRynkuPracy, setStatusRynkuPracy] = useState("");
  const [subregionCentralny, setSubregionCentralny] = useState("");
  const [terenyWiejskie, setTerenyWiejskie] = useState("");
  const [zit, setZit] = useState("");
  const [uwagi, setUwagi] = useState("");

  /*   useEffect(() => {
    db.collection("projects")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("posrednictwo")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setPosrednictwo(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []); */

  const handleSubmitPartner = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`${nazwaProjektu}`)
      .collection("podstawowe")
      .doc("podstawowe")
      .set({
        nazwaProjektu,
        numerProjektu,
        beneficjentOdpowiada,
        partnerOdpowiada,
      });
    console.log("dodano");
  };

  const handleSubmitOpiekun = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`${nazwaProjektu}`)
      .collection("podstawowe")
      .doc("podstawowe")
      .set({
        okresRealizacjiOd,
        okresRealizacjiDo,
        przedluzenieProjektu,
        numerUmowy,
        partnerOdpowiada,
        dataUmowy,
        nazwiskoOpiekuna,
        imieOpiekuna,
        telefonOpiekuna,
        mailOpiekuna,
      });
    console.log("dodano");
  };

  const handleSubmitMenadzer = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`${nazwaProjektu}`)
      .collection("podstawowe")
      .doc("podstawowe")
      .set({
        terminMenadzera,
        nazwiskoMenadzera,
        imieMenadzera,
      });
    console.log("dodano");
  };

  const handleSubmitKoordynator = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`${nazwaProjektu}`)
      .collection("podstawowe")
      .doc("podstawowe")
      .set({
        terminKoordynatora,
        nazwiskoKoordynatora,
        imieKoordynatora,
      });
    console.log("dodano");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`${nazwaProjektu}`)
      .collection("podstawowe")
      .doc("podstawowe")
      .set({
        osobaUpowazniona,
        dostepDoKonta,
        stronaProjektu,
        emailProjektu,
        stawkaZus,
        stawkaNettoSzkolenie,
        stawkaNettoStaz,
        obszarTematyczny,
        statusRynkuPracy,
        subregionCentralny,
        terenyWiejskie,
        zit,
        uwagi,
      });
    console.log("dodano");
  };

  return (
    <>
      <Form>
        <FormLabel>
          Nazwa projektu:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Numer projektu:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Beneficjent odpowiada za:
          <FormSelect>
            <FormOption>Szkolenie</FormOption>
            <FormOption>Staż</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Partner odpowiada za:
          <FormSelect>
            <FormOption>Szkolenie</FormOption>
            <FormOption>Staż</FormOption>
          </FormSelect>
        </FormLabel>
        <Button variant="outlined" className={classes.button}>
          Dodaj partnera
        </Button>
      </Form>
      <Form>
        <FormLabel style={{ alignItems: "center" }}>
          Okres realizacji projektu:
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput type="date"></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput type="date"></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
        <FormLabel>
          Przedłużenie projektu:
          <FormInput type="date"></FormInput>
        </FormLabel>
        <FormLabel>
          Numer umowy:
          <FormInput type="number"></FormInput>
        </FormLabel>
        <FormLabel>
          Data umowy:
          <FormInput type="date"></FormInput>
        </FormLabel>
        <FormLabel>
          Program operacyjny:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Naziwsko opiekuna:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Imie opiekuna:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Telefon opiekuna:
          <FormInput type="tel"></FormInput>
        </FormLabel>
        <FormLabel>
          Mail opiekuna:
          <FormInput type="mail"></FormInput>
        </FormLabel>
        <Button variant="outlined" className={classes.button}>
          Dodaj opiekuna projektu
        </Button>
      </Form>
      <Form>
        <FormLabel>
          Termin:
          <FormInput type="date"></FormInput>
        </FormLabel>
        <FormLabel>
          Nazwisko menadżera:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Imię menadżera:
          <FormInput></FormInput>
        </FormLabel>
        <Button variant="outlined" className={classes.button}>
          Dodaj menadżera
        </Button>
      </Form>
      <Form>
        <FormLabel>
          Termin:
          <FormInput type="date"></FormInput>
        </FormLabel>
        <FormLabel>
          Nazwisko koordynatora:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          Imię koordynatora:
          <FormInput></FormInput>
        </FormLabel>
        <Button variant="outlined" className={classes.button}>
          Dodaj koordynatora
        </Button>
      </Form>
      <Form>
        <FormLabel>
          Osoby upoważnione do LSI / SL:
          <FormControl>
            <Select
              className={classes.control}
              multiple
              value={osobaUpowazniona}
              onChange={(e) => setOsobaUpowazniona(e.target.value)}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={osobaUpowazniona.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormLabel>
        <FormLabel>
          Dostęp do konta bankowego:
          <FormControl>
            <Select
              className={classes.control}
              multiple
              value={dostepDoKonta}
              onChange={(e) => setDostepDoKonta(e.target.value)}
              input={<Input />}
              renderValue={(selected) => selected.join(", ")}
            >
              {names.map((name) => (
                <MenuItem key={name} value={name}>
                  <Checkbox checked={dostepDoKonta.indexOf(name) > -1} />
                  <ListItemText primary={name} />
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormLabel>
        <FormLabel>
          Strona internetowa projektu:
          <FormInput></FormInput>
        </FormLabel>
        <FormLabel>
          E-mail projektu:
          <FormInput type="mail"></FormInput>
        </FormLabel>
        <FormLabel>
          Stawka ZUS:
          <FormInput type="number"></FormInput>
        </FormLabel>
        <FormLabel>
          Stawka netto za szkolenie / h<FormInput type="number"></FormInput>
        </FormLabel>
        <FormLabel>
          Stawka netto za staż / mc
          <FormInput type="number"></FormInput>
        </FormLabel>
        <FormLabel>
          Obszar tematyczny:
          <FormSelect>
            <FormOption>Aktywizacja zawodowa</FormOption>
            <FormOption>Outplacment</FormOption>
            <FormOption>Kształcenie zawodowe</FormOption>
            <FormOption>Dotacje na DG</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Status na rynku pracy:
          <FormSelect>
            <FormOption>Tak</FormOption>
            <FormOption>Nie</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Subregion centralny
          <FormSelect>
            <FormOption>Tak</FormOption>
            <FormOption>Nie</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Tereny wiejskie
          <FormSelect>
            <FormOption>Tak</FormOption>
            <FormOption>Nie</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          ZIT
          <FormSelect>
            <FormOption>Tak</FormOption>
            <FormOption>Nie</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Uwagi:
          <FormInput></FormInput>
        </FormLabel>
        <Button type="submit" variant="outlined" className={classes.button}>
          Zapisz
        </Button>
      </Form>
    </>
  );
};

export default Basic;
