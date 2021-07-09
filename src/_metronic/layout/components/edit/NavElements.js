import styled from "styled-components";

export const List = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  width: 100%;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-bottom: 20px;
  & a {
    color: black;
    &:hover {
      color: rgb(54, 153, 255);
    }
  }
`;
export const ListElement = styled.li`
  font-size: 1.5rem;

  @media (max-width: 700px) {
    font-size: 1.25rem;
  }
`;
