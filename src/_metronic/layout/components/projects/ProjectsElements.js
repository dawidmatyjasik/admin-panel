import styled from "styled-components";

export const List = styled.ul`
  display: flex;
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
  @media (max-width: 700px) {
    font-size: 0.75rem;
  }
`;
