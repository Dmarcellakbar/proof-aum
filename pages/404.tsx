import { Box, Heading, Text, Button } from '@chakra-ui/react';
import Link from 'next/link';
import Image from 'next/image'

export default function NotFound() {
  return (
    <Box h={'100vh'} textAlign="center" py={10} px={6} bgColor={'#121826'} color={'white'}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bgGradient="linear(to-r, teal.400, teal.600)"
        backgroundClip="text">
        <Image src={'/error.png'} alt={'error'} width={500} height={500} className={'zoom-in-zoom-out'}/>
      </Heading>
      <Text fontSize="18px" mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>
    <Link href={'/Dashboard'}>
      <Button
        colorScheme="teal"
        bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
        color="white"
        variant="solid">
        Go to Home
      </Button>
    </Link>
    </Box>
  );
}