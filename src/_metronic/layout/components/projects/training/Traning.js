import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../../../../firebase";
import {
  Form,
  FormDateContainer,
  FormFlexContainer,
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
  const [dotyczy, setDotyczy] = useState("");
  const [rozliczenie, setRozliczenie] = useState("");
  const [nazwaSzkolenia, setnNazwaSzkolenia] = useState("");
  const [numerGrupy, setNumerGrupy] = useState("");
  const [terminSzkoleniaOd, setTerminSzkoleniaOd] = useState("");
  const [terminSzkoleniaDo, setTerminSzkoleniaDo] = useState("");
  const [liczbaGodzin, setLiczbaGodzin] = useState("");
  const [imieTrenera, setImieTrenera] = useState("");
  const [nazwiskoTrenera, setNazwiskoTrenera] = useState("");
  const [imieEgzaminatora, setImieEgzaminatora] = useState("");
  const [nazwiskoEgzaminatora, setNazwiskoEgzaminatora] = useState("");
  const [miastoSzkolenia, setMiastoSzkolenia] = useState("");
  const [ulicaSzkolenia, setUlicaSzkolenia] = useState("");
  const [numerBudynkuSzkolenia, setNumerBudynkuSzkolenia] = useState("");
  const [numerLokaluSzkolenia, setNumerLokaluSzkolenia] = useState("");
  const [medycynaPracy, setMedycynaPracy] = useState("");
  const [badaniaMedycynaPracy, setBadaniaMedycynaPracy] = useState("");
  const [sanepid, setSanepid] = useState("");
  const [badaniaPsychologiczne, setBadaniaPsychologiczne] = useState("");
  const [psychologiczne, setPsychologiczne] = useState("");
  const [zgloszenieZus, setZgloszenieZus] = useState("");
  const [wygloszenieZus, setWygloszenieZus] = useState("");
  const [nnwOd, setNnwOd] = useState("");
  const [nnwDo, setNnwDo] = useState("");
  const [korepetycjeCyfrowe, setKorepetycjeCyfrowe] = useState("");
  const [godzinyObecnosciL4, setGodzinyObecnosciL4] = useState("");
  const [godzinyObecnosci, setGodzinyObecnosci] = useState("");
  const [ukonczylSzkolenie, setUkonczylSzkolenie] = useState("");
  const [wynikEgzaminu, setWynikEgzaminu] = useState("");
  const [uzyskalKwalifikacje, setUzyskalKwalifikacje] = useState("");
  const [godzinyZus, setGodzinyZus] = useState("");
  const [stypendium, setStypendium] = useState("");
  const [stypendiumOd, setStypendiumOd] = useState("");
  const [stypendiumDo, setStypendiumDo] = useState("");
  const [zwrotKosztowDojazdu, setZwrotKosztowDojazdu] = useState("");
  const [zwrotKosztowDojazduOd, setZwrotKosztowDojazduOd] = useState("");
  const [zwrotKosztowDojazduDo, setZwrotKosztowDojazduDo] = useState("");
  const [zwrotKosztowOpieki, setZwrotKosztowOpieki] = useState("");
  const [zwrotKosztowOpiekiOd, setZwrotKosztowOpiekiOd] = useState("");
  const [zwrotKosztowOpiekiDo, setZwrotKosztowOpiekiDo] = useState("");
  const [listaObecnosci, setListaObecnosci] = useState("");
  const [potwierdzenieCateringu, setPotwierdzenieCateringu] = useState("");
  const [zaswiadczenie, setZaswiadczenie] = useState("");
  const [certyfikatEgzaminu, setCertyfikatEgzaminu] = useState("");
  const [wniosekZwrotKosztowDojazdu, setWniosekZwrotKosztowDojazdu] = useState(
    ""
  );
  const [wniosekZwrotKosztowOpieki, setWniosekZwrotKosztowOpieki] = useState(
    ""
  );
  const [oswiadczenieNnw, setOswiadczenieNnw] = useState("");
  const [uwagi, setUwagi] = useState("");
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
        dotyczy,
        rozliczenie,
        nazwaSzkolenia,
        numerGrupy,
        terminSzkoleniaOd,
        terminSzkoleniaDo,
        liczbaGodzin,
        imieTrenera,
        nazwiskoTrenera,
        imieEgzaminatora,
        nazwiskoEgzaminatora,
        miastoSzkolenia,
        ulicaSzkolenia,
        numerBudynkuSzkolenia,
        numerLokaluSzkolenia,
        medycynaPracy,
        badaniaMedycynaPracy,
        sanepid,
        badaniaPsychologiczne,
        psychologiczne,
        zgloszenieZus,
        wygloszenieZus,
        nnwOd,
        nnwDo,
        korepetycjeCyfrowe,
        godzinyObecnosci,
        godzinyObecnosciL4,
        ukonczylSzkolenie,
        wynikEgzaminu,
        uzyskalKwalifikacje,
        godzinyZus,
        stypendium,
        stypendiumOd,
        stypendiumDo,
        zwrotKosztowDojazdu,
        zwrotKosztowDojazduOd,
        zwrotKosztowDojazduDo,
        zwrotKosztowOpieki,
        zwrotKosztowOpiekiOd,
        zwrotKosztowOpiekiDo,
        listaObecnosci,
        potwierdzenieCateringu,
        zaswiadczenie,
        certyfikatEgzaminu,
        wniosekZwrotKosztowDojazdu,
        wniosekZwrotKosztowOpieki,
        oswiadczenieNnw,
        uwagi,
      });
    alert("dodano!");
  };

  useEffect(() => {
    if (szkolenie) {
      setDotyczy(szkolenie.dotyczy);
      setRozliczenie(szkolenie.rozliczenie);
      setnNazwaSzkolenia(szkolenie.nazwaSzkolenia || "");
      setNumerGrupy(szkolenie.numerGrupy || "");
      setTerminSzkoleniaOd(szkolenie.terminSzkoleniaOd || "");
      setTerminSzkoleniaDo(szkolenie.terminSzkoleniaDo || "");
      setLiczbaGodzin(szkolenie.liczbaGodzin || "");
      setImieTrenera(szkolenie.imieTrenera || "");
      setNazwiskoTrenera(szkolenie.nazwiskoTrenera || "");
      setImieEgzaminatora(szkolenie.imieEgzaminatora || "");
      setNazwiskoEgzaminatora(szkolenie.nazwiskoEgzaminatora || "");
      setMiastoSzkolenia(szkolenie.miastoSzkolenia || "");
      setUlicaSzkolenia(szkolenie.ulicaSzkolenia || "");
      setNumerBudynkuSzkolenia(szkolenie.numerBudynkuSzkolenia || "");
      setNumerLokaluSzkolenia(szkolenie.numerLokaluSzkolenia || "");
      setMedycynaPracy(szkolenie.medycynaPracy || "");
      setBadaniaMedycynaPracy(szkolenie.badaniaMedycynaPracy || "");
      setSanepid(szkolenie.sanepid || "");
      setBadaniaPsychologiczne(szkolenie.badaniaPsychologiczne || "");
      setPsychologiczne(szkolenie.psychologiczne || "");
      setZgloszenieZus(szkolenie.zgloszenieZus || "");
      setWygloszenieZus(szkolenie.wygloszenieZus || "");
      setNnwOd(szkolenie.nnwOd || "");
      setNnwDo(szkolenie.nnwDo || "");
      setKorepetycjeCyfrowe(szkolenie.korepetycjeCyfrowe || "");
      setGodzinyObecnosci(szkolenie.godzinyObecnosci || "");
      setGodzinyObecnosciL4(szkolenie.godzinyObecnosciL4 || "");
      setUkonczylSzkolenie(szkolenie.ukonczylSzkolenie || "");
      setWynikEgzaminu(szkolenie.wynikEgzaminu || "");
      setUzyskalKwalifikacje(szkolenie.uzyskalKwalifikacje || "");
      setGodzinyZus(szkolenie.godzinyZus || "");
      setStypendium(szkolenie.stypendium || "");
      setStypendiumOd(szkolenie.stypendiumOd || "");
      setStypendiumDo(szkolenie.stypendiumDo || "");
      setZwrotKosztowDojazdu(szkolenie.zwrotKosztowDojazdu || "");
      setZwrotKosztowDojazduOd(szkolenie.zwrotKosztowDojazduOd || "");
      setZwrotKosztowDojazduDo(szkolenie.zwrotKosztowDojazduDo || "");
      setZwrotKosztowOpieki(szkolenie.zwrotKosztowOpieki || "");
      setZwrotKosztowOpiekiOd(szkolenie.zwrotKosztowOpiekiOd || "");
      setZwrotKosztowOpiekiDo(szkolenie.zwrotKosztowOpiekiDo || "");
      setListaObecnosci(szkolenie.listaObecnosci || "");
      setPotwierdzenieCateringu(szkolenie.potwierdzenieCateringu || "");
      setZaswiadczenie(szkolenie.zaswiadczenie || "");
      setCertyfikatEgzaminu(szkolenie.certyfikatEgzaminu || "");
      setWniosekZwrotKosztowDojazdu(szkolenie.wniosekZwrotKosztowDojazdu || "");
      setWniosekZwrotKosztowOpieki(szkolenie.wniosekZwrotKosztowOpieki || "");
      setOswiadczenieNnw(szkolenie.oswiadczenieNnw || "");
      setUwagi(szkolenie.uwagi || "");
    }
  }, [szkolenie]);

  const handleRefersTo = (e) => {
    e.preventDefault();
    setDotyczy(!dotyczy);
  };
  const handleRozliczenie = (e) => {
    e.preventDefault();
    setRozliczenie(!rozliczenie);
  };

  return (
    <Form>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleRefersTo}
      >
        Nie dotyczy (należy kliknąć zapisz)
      </Button>
      <div style={dotyczy ? { opacity: "1" } : { opacity: "0.7" }}>
        <FormHeader>Informacje:</FormHeader>
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
        <br />
        <FormHeader>Szkolenie:</FormHeader>
        <FormLabel>
          Miasto:
          <FormInput
            value={miastoSzkolenia}
            onChange={(e) => setMiastoSzkolenia(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Ulica:
          <FormInput
            value={ulicaSzkolenia}
            onChange={(e) => setUlicaSzkolenia(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Numer budynku:
          <FormInput
            value={numerBudynkuSzkolenia}
            onChange={(e) => setNumerBudynkuSzkolenia(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Numer lokalu:
          <FormInput
            value={numerLokaluSzkolenia}
            onChange={(e) => setNumerLokaluSzkolenia(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Badania medycyna pracy:
          <FormSelect
            value={badaniaMedycynaPracy}
            onChange={(e) => setBadaniaMedycynaPracy(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
            <FormOption>Nie dotyczy</FormOption>
          </FormSelect>
        </FormLabel>
        {badaniaMedycynaPracy === "Tak" ? (
          <FormLabel>
            Termin badań medycyny pracy:
            <FormInput
              value={medycynaPracy}
              onChange={(e) => setMedycynaPracy(e.target.value)}
              type="date"
            ></FormInput>
          </FormLabel>
        ) : (
          <></>
        )}
        <FormLabel>
          Badania sanepid:
          <FormSelect
            value={sanepid}
            onChange={(e) => setSanepid(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
            <FormOption>Nie dotyczy</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Badania medycyna pracy:
          <FormSelect
            value={badaniaPsychologiczne}
            onChange={(e) => setBadaniaPsychologiczne(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
            <FormOption>Nie dotyczy</FormOption>
          </FormSelect>
        </FormLabel>
        {badaniaPsychologiczne === "Tak" ? (
          <FormLabel>
            Termin badań psychologicznych:
            <FormInput
              value={psychologiczne}
              onChange={(e) => setPsychologiczne(e.target.value)}
              type="date"
            ></FormInput>
          </FormLabel>
        ) : (
          <></>
        )}
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
          Liczba godzin obecności na szkoleniu (włącznie z L4):
          <FormInput
            value={godzinyObecnosciL4}
            onChange={(e) => setGodzinyObecnosciL4(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Liczba godzin obecności na szkoleniu (bez z L4):
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
          Wynik egzaminu:
          <FormSelect
            value={ukonczylSzkolenie}
            onChange={(e) => setUkonczylSzkolenie(e.target.value)}
          >
            <FormOption>Pozytywny</FormOption>
            <FormOption>Negatywny</FormOption>
            <FormOption>Nie dotyczy</FormOption>
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
            <FormOption>Nie dotyczy</FormOption>
          </FormSelect>
        </FormLabel>
        <FormHeader>Rozliczenie szkolenia:</FormHeader>{" "}
        <Button
          variant="outlined"
          className={classes.button}
          onClick={handleRozliczenie}
          style={{ marginBottom: "2%", marginTop: "0" }}
        >
          Nie dotyczy (należy kliknąć zapisz)
        </Button>
        <div style={rozliczenie ? { opacity: "1" } : { opacity: "0.7" }}>
          <FormLabel>
            Liczba godzin do wyliczenia składek ZUS:
            <FormInput
              value={godzinyZus}
              onChange={(e) => setGodzinyZus(e.target.value)}
              type="number"
            ></FormInput>
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
              Okres stypendium:
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
              Zwrot za okres:
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
              Zwrot za okres:
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
        </div>
        <FormHeader>Dokumenty szkoleniowe:</FormHeader>
        <FormLabel>
          Lista obecności:
          <FormSelect
            value={listaObecnosci}
            onChange={(e) => setListaObecnosci(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Potwierdzenie cateringu:
          <FormSelect
            value={potwierdzenieCateringu}
            onChange={(e) => setPotwierdzenieCateringu(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
            <FormOption>Nie dotyczy</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Zaświadczenie:
          <FormSelect
            value={zaswiadczenie}
            onChange={(e) => setZaswiadczenie(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Certyfikat z egzaminu:
          <FormSelect
            value={certyfikatEgzaminu}
            onChange={(e) => setCertyfikatEgzaminu(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Wniosek o zwrot kosztów dojazdu:
          <FormSelect
            value={wniosekZwrotKosztowDojazdu}
            onChange={(e) => setWniosekZwrotKosztowDojazdu(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Wniosek o zwrot kosztów opieki:
          <FormSelect
            value={wniosekZwrotKosztowOpieki}
            onChange={(e) => setWniosekZwrotKosztowOpieki(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Oświadczenie do polisy NNW:
          <FormSelect
            value={oswiadczenieNnw}
            onChange={(e) => setOswiadczenieNnw(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Uwagi:
          <FormInput
            value={uwagi}
            onChange={(e) => setUwagi(e.target.value)}
          ></FormInput>
        </FormLabel>
      </div>
      <FormFlexContainer>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => alert("będzie zaplanowywało kontrolę")}
          style={dotyczy ? { opacity: "1" } : { opacity: "0.7" }}
        >
          Zaplanuj kontrolę szkolenia
        </Button>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => alert("dodano szkolenie!")}
          style={
            dotyczy
              ? { opacity: "1", marginRight: "2%" }
              : { opacity: "0.7", marginRight: "2%" }
          }
        >
          Dodaj szkolenie
        </Button>
        <Button
          type="submit"
          variant="outlined"
          className={classes.button}
          onClick={handleSubmit}
        >
          Zapisz
        </Button>
      </FormFlexContainer>
    </Form>
  );
};

export default Traning;
