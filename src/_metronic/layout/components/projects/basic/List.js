import React from "react";
import {
  BasicList,
  BasicListElement,
  BasicListSpan,
  BasicListContainer,
} from "../ProjectsElements";
import EventAvailableIcon from "@material-ui/icons/EventAvailable";
import TodayIcon from "@material-ui/icons/Today";
import EventIcon from "@material-ui/icons/Event";
const List = () => {
  return (
    <BasicList>
      <BasicListElement>
        <BasicListContainer>
          Data rozpoczęcia: <BasicListSpan>21:06:2003</BasicListSpan>
        </BasicListContainer>
        <TodayIcon />
      </BasicListElement>
      <BasicListElement>
        <BasicListContainer>
          Data zakończenia: <BasicListSpan>21:06:2003</BasicListSpan>
        </BasicListContainer>
        <EventIcon />
      </BasicListElement>
      <BasicListElement>
        <BasicListContainer>
          Zakończył zgodnie ze ścieżką: <BasicListSpan>Tak</BasicListSpan>
        </BasicListContainer>
        <EventAvailableIcon />
      </BasicListElement>
    </BasicList>
  );
};

export default List;
