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
  FormHeader,
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
  const [podstawowe, setPodstawowe] = useState([]);
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
  const [programOperacyjny, setProgramOperacyjny] = useState("");
  const [nazwiskoOpiekuna, setNazwiskoOpiekuna] = useState("");
  const [imieOpiekuna, setImieOpiekuna] = useState("");
  const [telefonOpiekuna, setTelefonOpiekuna] = useState("");
  const [mailOpiekuna, setMailOpiekuna] = useState("");

  const [terminMenadzera, setTerminMenadzera] = useState("");
  const [nazwiskoMenadzera, setNazwiskoMenadzera] = useState("");
  const [imieMenadzera, setImieMenadzera] = useState("");

  const [terminKoordynatora, setTerminKoordynatora] = useState("");
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

  useEffect(() => {
    console.log("test");

    db.collection("projects")
      // .doc(`${nazwaProjektu} `)
      .doc(`projekt`)
      .collection("podstawowe")
      .doc("podstawowe")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setPodstawowe(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    if (podstawowe) {
      setNazwaProjektu(podstawowe.nazwaProjektu || "");
      setNumerProjektu(podstawowe.numerProjektu || "");
      setBeneficjentOdpowiada(podstawowe.beneficjentOdpowiada || "");
      setPartnerOdpowiada(podstawowe.partnerOdpowiada || "");
      setOkresRealizacjiOd(podstawowe.okresRealizacjiOd || "");
      setOkresRealizacjiDo(podstawowe.okresRealizacjiDo || "");
      setPrzedluzenieProjektu(podstawowe.przedluzenieProjektu || "");
      setNumerUmowy(podstawowe.numerUmowy || "");
      setDataUmowy(podstawowe.dataUmowy || "");
      setProgramOperacyjny(podstawowe.programOperacyjny || "");
      setNazwiskoOpiekuna(podstawowe.nazwiskoOpiekuna || "");
      setImieOpiekuna(podstawowe.imieOpiekuna || "");
      setTelefonOpiekuna(podstawowe.telefonOpiekuna || "");
      setMailOpiekuna(podstawowe.mailOpiekuna || "");
      setTerminMenadzera(podstawowe.terminMenadzera || "");
      setNazwiskoMenadzera(podstawowe.nazwiskoMenadzera || "");
      setImieMenadzera(podstawowe.imieMenadzera || "");
      setTerminKoordynatora(podstawowe.terminKoordynatora || "");
      setNazwiskoKoordynatora(podstawowe.nazwiskoKoordynatora || "");
      setImieKoordynatora(podstawowe.imieKoordynatora || "");
      setOsobaUpowazniona(podstawowe.osobaUpowazniona || "");
      setDostepDoKonta(podstawowe.dostepDoKonta || "");
      setStronaProjektu(podstawowe.stronaProjektu || "");
      setEmailProjektu(podstawowe.emailProjektu || "");
      setStawkaZus(podstawowe.stawkaZus || "");
      setStawkaNettoSzkolenie(podstawowe.stawkaNettoSzkolenie || "");
      setStawkaNettoStaz(podstawowe.stawkaNettoStaz || "");
      setObszarTematyczny(podstawowe.obszarTematyczny || "");
      setStatusRynkuPracy(podstawowe.statusRynkuPracy || "");
      setSubregionCentralny(podstawowe.subregionCentralny || "");
      setTerenyWiejskie(podstawowe.terenyWiejskie || "");
      setZit(podstawowe.zit || "");
      setUwagi(podstawowe.uwagi || "");
    }
    return;
  }, [podstawowe]);

  /*   const handleSubmitPartner = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`projekt`)
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
 */
  /*   const handleSubmitOpiekun = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`projekt`)
      .collection("podstawowe")
      .doc("podstawowe")
      .set({
        okresRealizacjiOd,
        okresRealizacjiDo,
        przedluzenieProjektu,
        numerUmowy,
        programOperacyjny,
        partnerOdpowiada,
        dataUmowy,
        nazwiskoOpiekuna,
        imieOpiekuna,
        telefonOpiekuna,
        mailOpiekuna,
      });
    console.log("dodano");
  }; */
  /* 
  const handleSubmitMenadzer = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`projekt`)
      .collection("podstawowe")
      .doc("podstawowe")
      .set({
        terminMenadzera,
        nazwiskoMenadzera,
        imieMenadzera,
      });
    console.log("dodano");
  }; */

  /*   const handleSubmitKoordynator = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`projekt`)
      .collection("podstawowe")
      .doc("podstawowe")
      .set({
        terminKoordynatora,
        nazwiskoKoordynatora,
        imieKoordynatora,
      });
    console.log("dodano");
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("projects")
      .doc(`projekt`)
      .collection("podstawowe")
      .doc("podstawowe")
      .set({
        nazwaProjektu,
        numerProjektu,
        beneficjentOdpowiada,
        partnerOdpowiada,

        okresRealizacjiOd,
        okresRealizacjiDo,
        przedluzenieProjektu,
        numerUmowy,
        programOperacyjny,
        dataUmowy,
        nazwiskoOpiekuna,
        imieOpiekuna,
        telefonOpiekuna,
        mailOpiekuna,

        terminMenadzera,
        nazwiskoMenadzera,
        imieMenadzera,

        terminKoordynatora,
        nazwiskoKoordynatora,
        imieKoordynatora,

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
        <FormHeader>Dodaj partnera</FormHeader>
        <FormLabel>
          Nazwa projektu:
          <FormInput
            value={nazwaProjektu}
            onChange={(e) => setNazwaProjektu(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Numer projektu:
          <FormInput
            value={numerProjektu}
            onChange={(e) => setNumerProjektu(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Beneficjent odpowiada za:
          <FormSelect
            value={beneficjentOdpowiada}
            onChange={(e) => setBeneficjentOdpowiada(e.target.value)}
          >
            <FormOption>Szkolenie</FormOption>
            <FormOption>Staż</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Partner odpowiada za:
          <FormSelect
            value={partnerOdpowiada}
            onChange={(e) => setPartnerOdpowiada(e.target.value)}
          >
            <FormOption>Szkolenie</FormOption>
            <FormOption>Staż</FormOption>
          </FormSelect>
        </FormLabel>
        <FormHeader>Dodaj opiekuna projektu</FormHeader>
        <FormLabel style={{ alignItems: "center" }}>
          Okres realizacji projektu:
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput
                value={okresRealizacjiOd}
                onChange={(e) => setOkresRealizacjiOd(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput
                value={okresRealizacjiDo}
                onChange={(e) => setOkresRealizacjiDo(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
        <FormLabel>
          Przedłużenie projektu:
          <FormInput
            value={przedluzenieProjektu}
            onChange={(e) => setPrzedluzenieProjektu(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Numer umowy:
          <FormInput
            value={numerUmowy}
            onChange={(e) => setNumerUmowy(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Data umowy:
          <FormInput
            value={dataUmowy}
            onChange={(e) => setDataUmowy(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Program operacyjny:
          <FormInput
            value={programOperacyjny}
            onChange={(e) => setProgramOperacyjny(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Nazwisko opiekuna:
          <FormInput
            value={nazwiskoOpiekuna}
            onChange={(e) => setNazwiskoOpiekuna(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Imie opiekuna:
          <FormInput
            value={imieOpiekuna}
            onChange={(e) => setImieOpiekuna(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Telefon opiekuna:
          <FormInput
            value={telefonOpiekuna}
            onChange={(e) => setTelefonOpiekuna(e.target.value)}
            type="tel"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Mail opiekuna:
          <FormInput
            value={mailOpiekuna}
            onChange={(e) => setMailOpiekuna(e.target.value)}
            type="mail"
          ></FormInput>
        </FormLabel>
        <FormHeader>Dodaj menadżera</FormHeader>
        <FormLabel>
          Termin:
          <FormInput
            value={terminMenadzera}
            onChange={(e) => setTerminMenadzera(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Nazwisko menadżera:
          <FormInput
            value={nazwiskoMenadzera}
            onChange={(e) => setNazwiskoMenadzera(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Imię menadżera:
          <FormInput
            value={imieMenadzera}
            onChange={(e) => setImieMenadzera(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormHeader>Dodaj koordynatora:</FormHeader>
        <FormLabel>
          Termin:
          <FormInput
            value={terminKoordynatora}
            onChange={(e) => setTerminKoordynatora(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Nazwisko koordynatora:
          <FormInput
            value={nazwiskoKoordynatora}
            onChange={(e) => setNazwiskoKoordynatora(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Imię koordynatora:
          <FormInput
            value={imieKoordynatora}
            onChange={(e) => setImieKoordynatora(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormHeader>Informacje</FormHeader>
        {/*  <FormLabel>
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
        </FormLabel> */}
        <FormLabel>
          Strona internetowa projektu:
          <FormInput
            value={stronaProjektu}
            onChange={(e) => setStronaProjektu(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          E-mail projektu:
          <FormInput
            value={emailProjektu}
            onChange={(e) => setEmailProjektu(e.target.value)}
            type="mail"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Stawka ZUS:
          <FormInput
            value={stawkaZus}
            onChange={(e) => setStawkaZus(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Stawka netto za szkolenie / h
          <FormInput
            value={stawkaNettoSzkolenie}
            onChange={(e) => setStawkaNettoSzkolenie(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Stawka netto za staż / mc
          <FormInput
            value={stawkaNettoStaz}
            onChange={(e) => setStawkaNettoStaz(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Obszar tematyczny:
          <FormSelect
            value={obszarTematyczny}
            onChange={(e) => setObszarTematyczny(e.target.value)}
          >
            <FormOption>Aktywizacja zawodowa</FormOption>
            <FormOption>Outplacment</FormOption>
            <FormOption>Kształcenie zawodowe</FormOption>
            <FormOption>Dotacje na DG</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Status na rynku pracy:
          <FormSelect
            value={statusRynkuPracy}
            onChange={(e) => setStatusRynkuPracy(e.target.value)}
          >
            <FormOption>Tak</FormOption>
            <FormOption>Nie</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Subregion centralny
          <FormSelect
            value={subregionCentralny}
            onChange={(e) => setSubregionCentralny(e.target.value)}
          >
            <FormOption>Tak</FormOption>
            <FormOption>Nie</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Tereny wiejskie
          <FormSelect
            value={terenyWiejskie}
            onChange={(e) => setTerenyWiejskie(e.target.value)}
          >
            <FormOption>Tak</FormOption>
            <FormOption>Nie</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          ZIT
          <FormSelect value={zit} onChange={(e) => setZit(e.target.value)}>
            <FormOption>Tak</FormOption>
            <FormOption>Nie</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Uwagi:
          <FormInput
            value={uwagi}
            onChange={(e) => setUwagi(e.target.value)}
          ></FormInput>
        </FormLabel>
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="outlined"
          className={classes.button}
        >
          Zapisz
        </Button>
      </Form>
    </>
  );
};

export default Basic;
