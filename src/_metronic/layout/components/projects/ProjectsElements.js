import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  width: 100%;
  margin: 20px 0 0 0;
  padding: 0;
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
    font-size: 0.75rem;
  }
`;

export const BasicContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 1fr;
  height: 100%;
  margin-top: 3%;
`;
export const BasicList = styled.ul`
  display: flex;
  justify-content: space-around;
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
    font-size: 0.75rem;
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
