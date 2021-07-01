
import { Box, Flex, Text , Avatar} from "@chakra-ui/react";

interface ProfileProps{
  showProfileData?: boolean
}

export function Profile({showProfileData} : ProfileProps){
  return (
    <Flex align="center">
   { showProfileData && (
      <Box mr="4" textAlign="right">
      <Text>Rafael Palau</Text>
      <Text color="gray.300" fontSize="small"> rafaeldonizetip@gmail.com</Text>
    </Box>
   )}
    <Avatar size="md" name="Rafael Palau" src="https://github.com/rafapalau.png" />
  </Flex>
  )
}