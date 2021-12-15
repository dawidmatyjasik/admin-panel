import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
  margin: 20px 0 0 0;
  padding: 0;
  @media (max-width: 700px) {
    justify-content: space-around;
  }
  & a {
    color: rgba(0, 0, 0, 0.7);
    &:hover {
      color: rgba(0, 0, 0, 1);
      /* font-weight: 700; */
    }
  }
`;
export const ListElement = styled.li`
  font-size: 1rem;
  margin-right: 10px;
  @media (max-width: 700px) {
    font-size: 0.85rem;
  }
`;

export const BasicContainer = styled.div`
  margin: 3% 0;
`;
export const BasicList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
  padding: 0;
`;
export const BasicListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BasicListElement = styled.li`
  display: flex;
  width: 22.5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  border: 1px solid #e3e6f0;
  border-left: 0.25rem solid #4e73df;
  box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15);
  background-color: #fff;
  color: #4e73df;
  font-size: 1rem;
  padding: 0 10px;
  @media (max-width: 700px) {
    font-size: 0.85rem;
    width: 30%;
  }
  &:nth-child(2) {
    border-left: 0.25rem solid #1cc88a;
    color: #1cc88a;
  }
  &:nth-child(3) {
    border-left: 0.25rem solid #36b9cc;
    color: #36b9cc;
  }
  & > svg {
    font-size: 30px;
    @media (max-width: 700px) {
      display: none;
    }
  }
`;
export const BasicListSpan = styled.span`
  color: #5a5c69;
  font-weight: 700;
  font-size: 1.1rem;
  @media (max-width: 700px) {
    font-size: 0.85rem;
  }
`;

export const Form = styled.form`
  margin-left: 10px;
  margin-top: 3%;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-size: 1rem;
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-rows: 1fr;
  @media (max-width: 500px) {
    grid-template-columns: 5fr 5fr;
  }
  /* width: 30%; */
`;

export const FormInput = styled.input`
  margin-left: 10px;
  width: 35%;
  background-color: #eef0f8;
  border: #8a8b90 1px solid;
  border-radius: 5px;
  padding-left: 5px;
  @media (max-width: 1000px) {
    width: 45%;
    @media (max-width: 500px) {
      width: 75%;
    }
  }
`;

export const FormSelect = styled.select`
  margin-left: 10px;
  width: 35%;
  background-color: #eef0f8;
  border: #8a8b90 1px solid;
  border-radius: 5px;
  padding-left: 5px;
  @media (max-width: 1000px) {
    width: 45%;
  }
  @media (max-width: 500px) {
    width: 75%;
  }
`;

export const FormOption = styled.option`
  border-radius: 5px;
  background-color: white;
`;

export const FormHeader = styled.h2`
  font-size: 1.1rem;
  margin-top: 2%;
  font-weight: 700;
  margin-bottom: 1%;
  @media (max-width: 700px) {
    font-size: 0.95rem;
  }
`;
export const FormSubHeader = styled.h3`
  font-size: 1rem;
  margin-top: 2%;
  font-weight: 700;
  margin-bottom: 1%;
  @media (max-width: 700px) {
    font-size: 0.85rem;
  }
`;

export const FormSpan = styled.span`
  margin-left: 10px;
`;
export const FormFlexContainer = styled.div`
  display: flex;
`;

export const FormDateContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FromDateWrapper = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  grid-template-rows: 1fr;
  & > input {
    width: calc(35% - 20px);
    @media (max-width: 1000px) {
      width: calc(45% - 20px);
    }
    @media (max-width: 500px) {
      width: calc(75% - 10px);
    }
  }
`;

export const FormLabelMarker = styled.label`
  display: flex;
  flex-direction: column;
  border: 1px solid #e3e6f0;
  /* box-shadow: 0 0.15rem 1.75rem 0 rgba(58, 59, 69, 0.15); */
  background-color: #fff;
  font-size: 1rem;
  font-weight: bold;
  height: 70px;
  margin: 0;
  padding: 10px 0px;
  padding-right: 20px;
  border-radius: 8px;
  padding-left: 5px;
  width: 67%;
  max-width: 285px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  @media (max-width: 1000px) {
    width: 90%;
  }
  @media (max-width: 800px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 100%;
  }
`;

export const FormInputMarker = styled.input`
  background-color: transparent;
  border: none;
  font-weight: 500;
`;

export const FormList = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
  padding: 0;
  @media (max-width: 500px) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const FormListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2vh;
  width: 100%;
  border-radius: 8px;
  @media (max-width: 500px) {
    width: 48%;
    &:nth-child(3) {
      width: 100%;
    }
  }

  /*   &:nth-child(1) {
    border-left: 0.25rem solid #4e73df;
    color: #4e73df;
  }
  &:nth-child(2) {
    border-left: 0.25rem solid #1cc88a;
    color: #1cc88a;
  }
  &:nth-child(3) {
    border-left: 0.25rem solid #36b9cc;
    color: #36b9cc;
  } */
  /*   @media (max-width: 1000px) {
    width: 30%;
  }
  */
`;
export const FormCheckboxContainer = styled.div`
  display: flex;
`;
export const FormCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  margin-right: 2vw;
`;
export const FormCheckboxInput = styled.input`
  display: flex;
  align-items: center;
  margin-left: 5px;
`;
