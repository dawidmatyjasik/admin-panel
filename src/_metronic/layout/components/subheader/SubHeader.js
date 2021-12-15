/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React, { useMemo, useLayoutEffect, useEffect } from "react";
import objectPath from "object-path";
import { useLocation } from "react-router-dom";
import { QuickActions } from "./components/QuickActions";
import { BreadCrumbs } from "./components/BreadCrumbs";
import {
  getBreadcrumbsAndTitle,
  useSubheader,
} from "../../_core/MetronicSubheader";
import { useHtmlClassService } from "../../_core/MetronicLayout";
import date from "date-and-time";
import pl from "date-and-time/locale/pl";
import { useState } from "react";
import "./style.css";
import { toAbsoluteUrl } from "../../../_helpers";

export function SubHeader() {
  const uiService = useHtmlClassService();
  const location = useLocation();
  const subheader = useSubheader();
  const [now, setNow] = useState("");
  const [active, setActive] = useState(false);
  console.log(active);

  const layoutProps = useMemo(() => {
    return {
      config: uiService.config,
      subheaderMobileToggle: objectPath.get(
        uiService.config,
        "subheader.mobile-toggle"
      ),
      subheaderCssClasses: uiService.getClasses("subheader", true),
      subheaderContainerCssClasses: uiService.getClasses(
        "subheader_container",
        true
      ),
    };
  }, [uiService]);

  useLayoutEffect(() => {
    const aside = getBreadcrumbsAndTitle("kt_aside_menu", location.pathname);
    const header = getBreadcrumbsAndTitle("kt_header_menu", location.pathname);
    const breadcrumbs =
      aside && aside.breadcrumbs.length > 0
        ? aside.breadcrumbs
        : header.breadcrumbs;
    subheader.setBreadcrumbs(breadcrumbs);
    subheader.setTitle(
      aside && aside.title && aside.title.length > 0
        ? aside.title
        : header.title
    );
    date.locale(pl);
    setNow(date.format(new Date(), "ddd DD"));
    // eslint-disable-next-line
  }, [location.pathname]);

  // Do not remove this useEffect, need from update title/breadcrumbs outside (from the page)
  useEffect(() => {}, [subheader]);

  return (
    <div
      id="kt_subheader"
      className={`subheader py-2 py-lg-4   ${layoutProps.subheaderCssClasses}`}
      // style={{
      //   position: "fixed",
      //   backgroundColor: "white",
      //   zIndex: "999",
      //   marginBottom: "44px",
      // }}
    >
      <div
        className={`${layoutProps.subheaderContainerCssClasses} d-flex align-items-center justify-content-between flex-wrap flex-sm-nowrap`}
      >
        {/* Info */}
        <div className="d-flex align-items-center">
          <div
            className="btn btn-light btn-sm font-weight-bold disabled-link"
            id="kt_dashboard_daterangepicker"
            data-toggle="tooltip"
            title="Select dashboard daterange"
            data-placement="left"
          >
            <span
              className="text-muted font-weight-bold mr-2"
              id="kt_dashboard_daterangepicker_title"
            >
              Panel administratora
            </span>
          </div>
        </div>
        <div className="info" onClick={() => setActive(!active)}>
          <div className="info__container">
            <span className="info__span">
              Informacje
              <img
                src={toAbsoluteUrl("/icons/arrow.png")}
                alt={"dropdown"}
                className={` info__icon ${active ? "info__icon--active" : ""}`}
              />
            </span>
            <ul className={`info__list ${active ? "info__list--active" : ""}`}>
              <li>
                1. Data rozpoczęcia: <span>01.12.2021</span>
              </li>
              <li>
                2. Data zakończenia <span>31.12.2021</span>
              </li>
              <li>
                3. Zakończył zgodnie ze ścieżką: <span>Tak</span>
              </li>
              <li>
                4. Doradztwo zawodowe 1: <span>20.11.2021</span>
              </li>
              <li>
                5. Doradztwo zawodowe 2: <span>15.12.2021</span>
              </li>
              <li>
                6. Doradztwo zawodowe 3: <span>12.01.2022</span>
              </li>
              <li>
                7. Szkolenie od: <span>01.01.2022</span> do:{" "}
                <span>31.01.2022</span>
              </li>
              <li>
                8. Staż od: <span>15.02.2022</span> do: <span>15.03.2022</span>
              </li>
              <li>
                9. Podjęcie zatrudnienia: <span>Nie</span>
              </li>
              <li>
                10. Kontrola szkolenia: <span>Nie</span>
              </li>
              <li>
                11. Kontrola stażu: <span>Nie</span>
              </li>
            </ul>
          </div>
        </div>
        {/*         <div
          className="d-flex align-items-center info__button"
          onClick={() => setActive(!active)}
        >
          <div
            className="btn btn-light btn-sm font-weight-bold disabled-link"
            id="kt_dashboard_daterangepicker"
            data-toggle="tooltip"
            title="Select dashboard daterange"
            data-placement="left"
          >
            <span
              className="text-muted font-weight-bold mr-2"
              id="kt_dashboard_daterangepicker_title"
            >
              Informacje{" "}
              <img
                src={toAbsoluteUrl("/icons/dropdown.png")}
                alt={"dropdown"}
                className="info__icon"
              />
            </span>
          </div>
        </div> */}

        {/* Toolbar */}
        <div className="d-flex align-items-center">
          <div
            className="btn btn-light btn-sm font-weight-bold disabled-link"
            id="kt_dashboard_daterangepicker"
            data-toggle="tooltip"
            title="Select dashboard daterange"
            data-placement="left"
          >
            <span
              className="text-muted font-weight-bold mr-2"
              id="kt_dashboard_daterangepicker_title"
            >
              Dzisiaj
            </span>
            <span
              className="text-primary font-weight-bold"
              id="kt_dashboard_daterangepicker_date"
            >
              {now}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
