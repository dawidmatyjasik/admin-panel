import React from "react";
import { FormHeader } from "../projects/ProjectsElements";
import { useTable } from "react-table";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import PHE from "print-html-element";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "1%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
    marginRight: "2%",

    "&:nth-child(1)": {},
    "@media (max-width: 1000px)": {
      width: "30%",
    },
    "@media (max-width: 500px)": {
      width: "35%",
    },
  },
}));

const Results = () => {
  const classes = useStyles();
  const data = React.useMemo(
    () => [
      {
        lp: "1",
        miasto: "Oświęcim",
        forma: "brak",
        data: "15.12.2021",
      },
      {
        lp: "2",
        trener: "Bartosz Urbańczyk",
        przeprowadzona: "15.12.2021",
        godzina: "12:00",
      },
    ],
    []
  );

  const columns = React.useMemo(
    () => [
      {
        Header: "LP",
        accessor: "lp", // accessor is the "key" in the data
      },
      {
        Header: "PROJEKT",
        accessor: "projekt",
      },
      {
        Header: "FORMA WSPARCIA",
        accessor: "forma",
      },
      {
        Header: "MIASTO",
        accessor: "miasto",
      },
      {
        Header: "ADRES",
        accessor: "adres",
      },
      {
        Header: "DATA",
        accessor: "data",
      },
      {
        Header: "TRENER/OPIEKUN",
        accessor: "trener",
      },
      {
        Header: "ZAPLANOWANA KONTROLA",
        accessor: "zaplanowana",
      },
      {
        Header: "PRZEPROWADZONA KONTROLA",
        accessor: "przeprowadzona",
      },
      {
        Header: "OSOBA KONTROLUJĄCA",
        accessor: "kontrolujaca",
      },
      {
        Header: "GODZ. PLANOWANEJ KONTROLI",
        accessor: "godzina",
      },
    ],
    []
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <>
      <FormHeader>Wyniki wyszukiwania:</FormHeader>
      <table
        {...getTableProps()}
        style={{ border: "solid 1px #707070" }}
        id="print"
      >
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    border: "solid 1px #707070",
                    background: "#EEF0F8",
                    color: "black",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {column.render("Header")}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: "10px",
                        border: "solid 1px gray",
                        background: "#EEF0F8",
                      }}
                    >
                      {cell.render("Cell")}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Button
        variant="outlined"
        className={classes.button}
        // onClick={() => window.print()}
        onClick={() => PHE.printElement(document.getElementById("print"))}
      >
        Pobierz wydruk (Excell)
      </Button>
    </>
  );
};

export default Results;
