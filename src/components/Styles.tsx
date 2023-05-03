import styled from "styled-components";

export const DetailsCard = styled.div`
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px rgba(1, 1, 1);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 250px;

  & > * {
    margin-bottom: 8px;
  }

  & p {
    font-size: 16px;
    margin: 0;
  }
`;

export const ButtonDIV = styled.p`
  width: 80%;
  display: flex;

  justify-content: space-between;
`;

export const Website = styled.p`
  a {
    color: #0077cc;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CenteredButton = styled.div`
  background-color: rgb(82, 73, 70);
  color: white;
  padding: 4px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 20px;
  positin: fixed;
`;

export const ParentContainer = styled.div`
  background-color: rgb(78 76 52);
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-right: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  flex-basis: 30%;
  height: 100%;
`;

export const ButtonContain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DetailsCarD = styled.div`
  background-color: ;
  border-radius: 4px;
  box-shadow: 2px 2px 2px 2px rgba(1, 1, 1);
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  color: black;
  & > * {
    margin-bottom: 8px;
  }

  & p {
    font-size: 16px;
    margin: 0;
  }
`;


export const NavHeading = styled.h3`
text-align: center;
 background-color: rgb(51 91 89);

font-size: 30px;
font-family: "Libre Baskerville", serif;
padding: 15px;
color: black;
font-weight: 100px;
`;

