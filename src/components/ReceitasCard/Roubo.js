import styled from "styled-components";


export const CursosContainer = styled.div`
  padding: 20px;
  min-height: 100vh;
`;

export const CursosList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

export const CursoCard = styled.li`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 300px;
  margin: 0;
`;

export const CursoTitle = styled.h1`
  font-size: 20px;
  margin: 0 0 10px;
  color: #333;
`;

export const CursoInfo = styled.p`
  margin: 5px 0;
  color: #555;
`;
export const Imagens = styled.img`
  margin: 5px 0;
  width: 10em;
  heigth: 1em;
  color: #555;
`;