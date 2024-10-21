import React from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome</Preview>
      <Tailwind>
        <Body>
          <Container>
            <Text className="font-bold text-3xl">Hello {name}</Text>
            <Link href="https://taleb.design" className="font-bold text-3xl">
              www.taleb.design
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
