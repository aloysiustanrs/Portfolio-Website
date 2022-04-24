import {
  Box,
  Heading,
  Image,
  Text,
  Divider,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { Section } from "../components/Section";

const ProjectItem = (props) => {
  const color = useColorModeValue("gray.400", "white.100");
  return (
    <Section delayDuration={props.delayDuration}>
      <Box display="flex" justifyContent="center">
        <Box display={{ base: "flex", md: "block" }} flexDirection="column">
          <Image
            width={{ none: "256px", xs: "400px", md: "full" }}
            height={{ none: "182px", xs: "250px", md: "150px" }}
            objectFit="cover"
            borderRadius="10px"
            src={`/images/${props.image}.jpg`}
            alt="Aloysius Tan"
          />

          <Box width={{ none: "256px", xs: "400px", md: "full" }}>
            <Heading py={{ base: "20px", md: "10px" }} size="md">
              {props.heading}
            </Heading>
            <Text fontSize="14px">{props.text}</Text>
            <Divider
              width="70%"
              border="solid 1px"
              borderColor={color}
              display={{ base: "block", md: "none" }}
              margin="2rem auto -1rem"
            />
          </Box>
        </Box>
      </Box>
    </Section>
  );
};

export default ProjectItem;
