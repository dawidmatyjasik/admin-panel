import { Button, makeStyles } from "@material-ui/core";
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
  FromDateWrapper,
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

const data = {
  training: ["Szkolenie 1", "Szkoelnie 2", "Szkoelnie 3"],
  id: ["Numer 1", "Numer 2", "Numer 3"],
};
const Traning = () => {
  const [szkolenie, setSzkolenie] = useState([]);
  const [nazwaSzkolenia, setnNazwaSzkolenia] = useState("");
  const [numerGrupy, setNumerGrupy] = useState("");
  const [terminSzkoleniaOd, setTerminSzkoleniaOd] = useState("");
  const [terminSzkoleniaDo, setTerminSzkoleniaDo] = useState("");
  const [liczbaGodzin, setLiczbaGodzin] = useState("");
  const [imieTrenera, setImieTrenera] = useState("");
  const [nazwiskoTrenera, setNazwiskoTrenera] = useState("");
  const [imieEgzaminatora, setImieEgzaminatora] = useState("");
  const [nazwiskoEgzaminatora, setNazwiskoEgzaminatora] = useState("");
  const [miejsceSzkolenia, setMiejsceSzkolenia] = useState("");
  const [medycynaPracy, setMedycynaPracy] = useState("");
  const [sanepid, setSanepid] = useState("");
  const [psychologiczne, setPsychologiczne] = useState("");
  const [zgloszenieZus, setZgloszenieZus] = useState("");
  const [wygloszenieZus, setWygloszenieZus] = useState("");
  const [nnwOd, setNnwOd] = useState("");
  const [nnwDo, setNnwDo] = useState("");
  const [korepetycjeCyfrowe, setKorepetycjeCyfrowe] = useState("");
  const [godzinyObecnosci, setGodzinyObecnosci] = useState("");
  const [ukonczylSzkolenie, setUkonczylSzkolenie] = useState("");
  const [uzyskalKwalifikacje, setUzyskalKwalifikacje] = useState("");
  const [godzinyZus, setGodzinyZus] = useState("");
  const [innyTytulZus, setInnyTytulZus] = useState("");
  const [stypendium, setStypendium] = useState("");
  const [stypendiumOd, setStypendiumOd] = useState("");
  const [stypendiumDo, setStypendiumDo] = useState("");
  const [zwrotKosztowDojazdu, setZwrotKosztowDojazdu] = useState("");
  const [zwrotKosztowDojazduOd, setZwrotKosztowDojazduOd] = useState("");
  const [zwrotKosztowDojazduDo, setZwrotKosztowDojazduDo] = useState("");
  const [zwrotKosztowOpieki, setZwrotKosztowOpieki] = useState("");
  const [zwrotKosztowOpiekiOd, setZwrotKosztowOpiekiOd] = useState("");
  const [zwrotKosztowOpiekiDo, setZwrotKosztowOpiekiDo] = useState("");
  const classes = useStyles();

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("szkolenie")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setSzkolenie(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("szkolenie")
      .set({
        nazwaSzkolenia,
        numerGrupy,
        terminSzkoleniaOd,
        terminSzkoleniaDo,
        liczbaGodzin,
        imieTrenera,
        nazwiskoTrenera,
        imieEgzaminatora,
        nazwiskoEgzaminatora,
        miejsceSzkolenia,
        medycynaPracy,
        sanepid,
        psychologiczne,
        zgloszenieZus,
        wygloszenieZus,
        nnwOd,
        nnwDo,
        korepetycjeCyfrowe,
        godzinyObecnosci,
        ukonczylSzkolenie,
        uzyskalKwalifikacje,
        godzinyZus,
        innyTytulZus,
        stypendium,
        stypendiumOd,
        stypendiumDo,
        zwrotKosztowDojazdu,
        zwrotKosztowDojazduOd,
        zwrotKosztowDojazduDo,
        zwrotKosztowOpieki,
        zwrotKosztowOpiekiOd,
        zwrotKosztowOpiekiDo,
      });
    console.log("dodano");
  };

  useEffect(() => {
    if (szkolenie) {
      setnNazwaSzkolenia(szkolenie.nazwaSzkolenia || "");
      setNumerGrupy(szkolenie.numerGrupy || "");
      setTerminSzkoleniaOd(szkolenie.terminSzkoleniaOd || "");
      setTerminSzkoleniaDo(szkolenie.terminSzkoleniaDo || "");
      setLiczbaGodzin(szkolenie.liczbaGodzin || "");
      setImieTrenera(szkolenie.imieTrenera || "");
      setNazwiskoTrenera(szkolenie.nazwiskoTrenera || "");
      setImieEgzaminatora(szkolenie.imieEgzaminatora || "");
      setNazwiskoEgzaminatora(szkolenie.nazwiskoEgzaminatora || "");
      setMiejsceSzkolenia(szkolenie.miejsceSzkolenia || "");
      setMedycynaPracy(szkolenie.medycynaPracy || "");
      setSanepid(szkolenie.sanepid || "");
      setPsychologiczne(szkolenie.psychologiczne || "");
      setZgloszenieZus(szkolenie.zgloszenieZus || "");
      setWygloszenieZus(szkolenie.wygloszenieZus || "");
      setNnwOd(szkolenie.nnwOd || "");
      setNnwDo(szkolenie.nnwDo || "");
      setKorepetycjeCyfrowe(szkolenie.korepetycjeCyfrowe || "");
      setGodzinyObecnosci(szkolenie.godzinyObecnosci || "");
      setUkonczylSzkolenie(szkolenie.ukonczylSzkolenie || "");
      setUzyskalKwalifikacje(szkolenie.uzyskalKwalifikacje || "");
      setGodzinyZus(szkolenie.godzinyZus || "");
      setInnyTytulZus(szkolenie.innyTytulZus || "");
      setStypendium(szkolenie.stypendium || "");
      setStypendiumOd(szkolenie.stypendiumOd || "");
      setStypendiumDo(szkolenie.stypendiumDo || "");
      setZwrotKosztowDojazdu(szkolenie.zwrotKosztowDojazdu || "");
      setZwrotKosztowDojazduOd(szkolenie.zwrotKosztowDojazduOd || "");
      setZwrotKosztowDojazduDo(szkolenie.zwrotKosztowDojazduDo || "");
      setZwrotKosztowOpieki(szkolenie.zwrotKosztowOpieki || "");
      setZwrotKosztowOpiekiOd(szkolenie.zwrotKosztowOpiekiOd || "");
      setZwrotKosztowOpiekiDo(szkolenie.zwrotKosztowOpiekiDo || "");
    }
  }, [szkolenie]);

  return (
    <Form>
      <FormLabel>
        Nazwa szkolenia:
        <FormSelect
          value={nazwaSzkolenia}
          onChange={(e) => setnNazwaSzkolenia(e.target.value)}
        >
          {data.training.map((item) => (
            <FormOption key={item}>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Numer grupy:
        <FormSelect
          value={numerGrupy}
          onChange={(e) => setNumerGrupy(e.target.value)}
        >
          {data.id.map((item) => (
            <FormOption key={item}>{item}</FormOption>
          ))}
        </FormSelect>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Termin szkolenia:
        <FormDateContainer>
          <FromDateWrapper>
            <FormSpan>od:</FormSpan>
            <FormInput
              value={terminSzkoleniaOd}
              onChange={(e) => setTerminSzkoleniaOd(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
          <FromDateWrapper>
            <FormSpan>do:</FormSpan>
            <FormInput
              value={terminSzkoleniaDo}
              onChange={(e) => setTerminSzkoleniaDo(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>
      <FormLabel>
        Łączna liczba godzin szkolenia:
        <FormInput
          value={liczbaGodzin}
          onChange={(e) => setLiczbaGodzin(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormHeader>Trener:</FormHeader>
      <FormLabel>
        Imię:
        <FormInput
          value={imieTrenera}
          onChange={(e) => setImieTrenera(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Nazwisko:
        <FormInput
          value={nazwiskoTrenera}
          onChange={(e) => setNazwiskoTrenera(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormHeader>Egzaminator:</FormHeader>
      <FormLabel>
        Imię:
        <FormInput
          value={imieEgzaminatora}
          onChange={(e) => setImieEgzaminatora(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Nazwisko:
        <FormInput
          value={nazwiskoEgzaminatora}
          onChange={(e) => setNazwiskoEgzaminatora(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Miejsce szkolenia:
        <FormInput
          value={miejsceSzkolenia}
          onChange={(e) => setMiejsceSzkolenia(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Badania medycyna pracy:
        <FormInput
          value={medycynaPracy}
          onChange={(e) => setMedycynaPracy(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Badania sanepid:
        <FormSelect
          value={sanepid}
          onChange={(e) => setSanepid(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Badania psychologiczne:
        <FormInput
          value={psychologiczne}
          onChange={(e) => setPsychologiczne(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Zgłoszenie do ZUS:
        <FormInput
          value={zgloszenieZus}
          onChange={(e) => setZgloszenieZus(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Wygłoszenie ZUS::
        <FormInput
          value={wygloszenieZus}
          onChange={(e) => setWygloszenieZus(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Ubezpieczenie NNW:
        <FormDateContainer>
          <FromDateWrapper>
            <FormSpan>od:</FormSpan>
            <FormInput
              value={nnwOd}
              onChange={(e) => setNnwOd(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
          <FromDateWrapper>
            <FormSpan>do:</FormSpan>
            <FormInput
              value={nnwDo}
              onChange={(e) => setNnwDo(e.target.value)}
              type="date"
            ></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>
      <FormLabel>
        Czy szkolenie podnosi kompetencje cyfrowe:
        <FormSelect
          value={korepetycjeCyfrowe}
          onChange={(e) => setKorepetycjeCyfrowe(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Liczba godzin obecności na szkoleniu:
        <FormInput
          value={godzinyObecnosci}
          onChange={(e) => setGodzinyObecnosci(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Czy UP ukończył szkolenie:
        <FormSelect
          value={ukonczylSzkolenie}
          onChange={(e) => setUkonczylSzkolenie(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Czy UP uzyskał kwalifikację:
        <FormSelect
          value={uzyskalKwalifikacje}
          onChange={(e) => setUzyskalKwalifikacje(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormHeader>Rozliczenie szkolenia:</FormHeader>
      <FormLabel>
        Liczba godzin do wyliczenia składek ZUS:
        <FormInput
          value={godzinyZus}
          onChange={(e) => setGodzinyZus(e.target.value)}
          type="number"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Czy UP ma inny tytuł ZUS:
        <FormSelect
          value={innyTytulZus}
          onChange={(e) => setInnyTytulZus(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Stypendium:
        <FormSelect
          value={stypendium}
          onChange={(e) => setStypendium(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      {stypendium === "Tak" ? (
        <FormLabel style={{ alignItems: "center" }}>
          Data:
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput
                value={stypendiumOd}
                onChange={(e) => setStypendiumOd(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput
                value={stypendiumDo}
                onChange={(e) => setStypendiumDo(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
      ) : (
        <></>
      )}
      <FormLabel>
        Zwrot kosztów dojazdu:
        <FormSelect
          value={zwrotKosztowDojazdu}
          onChange={(e) => setZwrotKosztowDojazdu(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      {zwrotKosztowDojazdu === "Tak" ? (
        <FormLabel style={{ alignItems: "center" }}>
          Data:
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput
                value={zwrotKosztowDojazduOd}
                onChange={(e) => setZwrotKosztowDojazduOd(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput
                value={zwrotKosztowDojazduDo}
                onChange={(e) => setZwrotKosztowDojazduDo(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
      ) : (
        <></>
      )}
      <FormLabel>
        Zwrot kosztów opieki:
        <FormSelect
          value={zwrotKosztowOpieki}
          onChange={(e) => setZwrotKosztowOpieki(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      {zwrotKosztowOpieki === "Tak" ? (
        <FormLabel style={{ alignItems: "center" }}>
          Data:
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput
                value={zwrotKosztowOpiekiOd}
                onChange={(e) => setZwrotKosztowOpiekiOd(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput
                value={zwrotKosztowOpiekiDo}
                onChange={(e) => setZwrotKosztowOpiekiDo(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
      ) : (
        <></>
      )}
      <Button
        type="submit"
        variant="outlined"
        className={classes.button}
        onClick={handleSubmit}
      >
        Zapisz
      </Button>
    </Form>
  );
};

export default Traning;
