import { Text, Box, Stack, Link, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";

interface NavSectionprops{
  title: string;
  children: ReactNode
}

export function NavSection({title, children}: NavSectionprops){
  return(
    <Box>
    <Text fontWeight="bold" color="gray.400" fontSize="small">{title}</Text>
    <Stack spacing="4" mt="8" align="stretch">
    {children}

      
    </Stack>
  </Box>
    )
}