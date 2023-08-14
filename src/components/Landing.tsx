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
      name: "Johny Walker Black Label 1Ltr",
      ksh: "6,500.00",
      usd: "$46.43"
    },
    {
      name: "Jack Daniels 1ltr",
      ksh: "6,500.00",
      usd: "$46.43"
    },
    {
      name: "Monkey Shoulder 1ltr",
      ksh: "8,000.00",
      usd: "$57.14"
    },
    {
      name: "Ciroc 1ltr",
      ksh: "8,500.00",
      usd: "$60.71"
    },
    {
      name: "Smirnoff Vodka1ltr",
      ksh: "4,000.00",
      usd: "$28.57"
    },
    {
      name: "Kettel One 1ltr",
      ksh: "7,000.00",
      usd: "$50.00"
    },
    {
      name: "Absolute Vodka 1ltr",
      ksh: "4,000.00",
      usd: "$28.57"
    },
    {
      name: "Bombay 750ml",
      ksh: "4,500.00",
      usd: "$32.14"
    },
    {
      name: "Gordon's Dry Gin 1ltr",
      ksh: "4,500.00",
      usd: "$32.14"
    },
    {
      name: "Tanqueray",
      ksh: "6,000.00",
      usd: "$42.86"
    },
    {
      name: "Tanqueray Sevilla 1ltr",
      ksh: "6,000.00",
      usd: "$42.86"
    },
    {
      name: "Hendrix 700ml",
      ksh: "7,000.00",
      usd: "$50.00"
    },
    {
      name: "Bailey's Original 1ltr",
      ksh: "5,000.00",
      usd: "$35.71"
    },
    {
      name: "Amarula 1ltr",
      ksh: "4,000.00",
      usd: "$28.57"
    },
    {
      name: "Don Julio Blanco 750ml",
      ksh: "12,000.00",
      usd: "$85.71"
    },
    {
      name: "Jose Cuervo Silver 1ltr",
      ksh: "6,000.00",
      usd: "$42.86"
    },
    {
      name: "Jose Cuervo Gold 1ltr",
      ksh: "6,000.00",
      usd: "$42.86"
    },
    {
      name: "Camino Clear 750ml",
      ksh: "3,500.00",
      usd: "$25.00"
    },
    {
      name: "Hennesey VS 750ml",
      ksh: "8,500.00",
      usd: "$60.71"
    },
    {
      name: "Hennesey 1ltr",
      ksh: "10,000.00",
      usd: "$71.43"
    },
    {
      name: "Hennesey VSOP 750ml",
      ksh: "15,000.00",
      usd: "$107.14"
    },
    {
      name: "Jagermiser 1ltr",
      ksh: "5,000.00",
      usd: "$35.71"
    },
    {
      name: "Bacardi Gold 1ltr",
      ksh: "4,000.00",
      usd: "$28.57"
    }
  ],
  Beer: [
    {
      name: "Tusker Can 500ml",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Tusker Malt Can 500ml",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Tusker Cider Can",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Guiness Can",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "White Cap Can",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Heineken",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Hunters Dry Cider",
      ksh: "350.00",
      usd: "$2.50"
    },
    {
      name: "Snapp can",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "K.O all flavours",
      ksh: "400.00",
      usd: "$2.86"
    },
    {
      name: "Balozi Can 500ml",
      ksh: "400.00",
      usd: "$2.86"
    }
  ],
  Soft_Drinks: [
    {
      name: "Fanta pineapple 2 litres",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Fanta pineapple 1 litre",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Sprite 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Sprite 2 litres",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Krest 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Coke can 330 ml",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Fanta orange 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Fanta orange 2 litres",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Coke light 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Coke light 2 litres",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Sprite can 330 ml",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Coke zero 1 litre",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Coke zero 2 litres",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Fanta orange can 330 ml",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Coke 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Coke 2 litres",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Fitch & leedes pink tonic 200 ml",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Schweppes Ginger Ale 330 ml",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Stoney Tangawizi 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    },
    {
      name: "Fanta Passion 2 litre",
      ksh: "270.00",
      usd: "$1.93"
    },
    {
      name: "Fanta Passion 1 litre",
      ksh: "300.00",
      usd: "$2.14"
    }
  ]
};

const Landing = () => {
  const [isServer, setIsServer] = useState(false);

  const { whiskey, Beer, Soft_Drinks } = itemData;

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
                      <TableCell align="left">{product.name}</TableCell>
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
                      <TableCell align="left">{product.name}</TableCell>
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
                  {Soft_Drinks.map((product, index) => (
                    <TableRow
                      key={index}
                      style={{ borderBottom: "0.1px solid gray" }}
                    >
                      <TableCell align="left">{product.name}</TableCell>
                      <TableCell align="center">{product.ksh}</TableCell>
                      <TableCell align="center">{product.usd}</TableCell>
                    </TableRow>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          </Card>
          <Card>
            <ImageContainer imageUrl="/soft-drinks.webp" />
          </Card>
        </Container>
      </BodyWrapper>
    </BodyContainer>
  );
};

export default Landing;
