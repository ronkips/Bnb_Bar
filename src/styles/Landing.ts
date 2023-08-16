import styled from "styled-components";
interface ImageContainerProps {
  imageUrl: string;
}

export const BodyContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BodyWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Container = styled.div`
  position: relative;
  width: 80%;
  height: auto;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
  @media screen and (max-width: 1700px) {
    width: 90%;
  }
  @media screen and (max-width: 1300px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const Container1 = styled(Container)`
  @media screen and (max-width: 1300px) {
    width: 100%;
    flex-direction: column-reverse;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
export const ImageContainer = styled.div<ImageContainerProps>`
  width: 600px;
  height: 600px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${(props) =>
    props.imageUrl ? `background-image: url(${props.imageUrl});` : ""}

  @media screen and (max-width: 1700px) {
    width: 400px;
    height: 600px;
  }
  @media screen and (max-width: 1300px) {
    width: 450px;
    height: 350px;
  }
  @media screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
  @media screen and (max-width: 300px) {
    width: 250px;
    height: 300px;
  }
`;

export const TableContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;
export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
`;
export const TH = styled.th`
  padding: 20px 100px;
  @media screen and (max-width: 768px) {
    padding: 20px 30px;
  }
  @media screen and (max-width: 300px) {
    padding: 10px 20px;
  }
`;
export const TableRow = styled.tr`
  &:nth-child(even) {
  }
`;
export const TableCell = styled.td`
  padding: 10px;
`;

export const TextHeader = styled.h1`
  font-color: "#ffa500";
`;
