import React, { useEffect, useState } from "react";
import {
  BodyContainer,
  BodyWrapper,
  Card,
  Container,
  ImageContainer,
  Table,
  TableCell,
  TableContainer,
  TableHeader,
  TableRow
} from "./styles/Landing";
const itemData = {
  whiskey: [
    {
      name: "Johny Walker ",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    }
  ],
  Beer: [
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    }
  ],
  Wine: [
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    },
    {
      name: "Johny Walker Double black 1Ltr",
      ksh: "11,000.00",
      usd: "$78.57"
    }
  ]
};

const Landing = () => {
  const [isServer, setIsServer] = useState(false);

  const { whiskey, Beer, Wine } = itemData;

  useEffect(() => {
    setIsServer(true);
  }, []);

  if (!isServer) {
    return null;
  }
  return (
    <BodyContainer>
      <BodyWrapper>
        <Container>
          <Card>
            <TableContainer>
              <TableHeader align="left">
                <h1>Whisky</h1>
              </TableHeader>

              <Table>
                <thead>
                  <tr>
                    <TableHeader>Product</TableHeader>
                    <TableHeader>Price (Ksh)</TableHeader>
                    <TableHeader>Price (USD)</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {whiskey.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px solid gray" }}
                    >
                      <TableCell align="center">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
          <Card>
            <ImageContainer imageUrl="/whisky.png" />
          </Card>
        </Container>

        <Container>
          <Card>
            <ImageContainer imageUrl="/Gin.png" />
          </Card>
          <Card>
            <TableContainer>
              <TableHeader align="left">
                <h1>Beer</h1>
              </TableHeader>
              <Table>
                <thead>
                  <tr>
                    <TableHeader>Product</TableHeader>
                    <TableHeader>Price (Ksh)</TableHeader>
                    <TableHeader>Price (USD)</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {Beer.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px solid gray" }}
                    >
                      <TableCell align="center">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
        </Container>
        <Container>
          <Card>
            <TableContainer>
              <TableHeader align="left">
                <h1>Wine</h1>
              </TableHeader>

              <Table>
                <thead>
                  <tr>
                    <TableHeader>Product</TableHeader>
                    <TableHeader>Price (Ksh)</TableHeader>
                    <TableHeader>Price (USD)</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {Wine.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px solid gray" }}
                    >
                      <TableCell align="center">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
          <Card>
            <ImageContainer imageUrl="/Gin.png" />
          </Card>
        </Container>
      </BodyWrapper>
    </BodyContainer>
  );
};

export default Landing;
