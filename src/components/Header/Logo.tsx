import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface LogoProps {
  changeWidth?: boolean;
}

export function Logo({ changeWidth = true }: LogoProps) {
  return (
    <Link to="/dashboard">
      <Text
        fontSize={["2xl", "3xl"]}
        fontWeight="bold"
        w={changeWidth ? "200px" : "max-content"}
      >
        DashGo
        <Text as="span" color="pink.500" ml="0.5">
          .
        </Text>
      </Text>
    </Link>
  );
}
