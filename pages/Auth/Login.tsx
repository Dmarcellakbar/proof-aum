import {
    Box,
    Stack,
    Heading,
    Text,
    Container,
    Input,
    Button,
    SimpleGrid,
    useBreakpointValue,
    IconProps,
    Icon,
    FormControl,
    FormLabel,
    InputGroup,
    InputRightElement,
  } from '@chakra-ui/react';
  import Image from 'next/image';
  import ImageLogin from '../../src/image/login.png'
  import NextLink from 'next/link'
  import { useState } from 'react';
  import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

  
  export default function JoinOurTeam() {
    const [showPassword, setShowPassword] = useState(false);
    return (
      <Box position={'relative'} backgroundColor={'#121826'} w={'1440'} maxW={'auto'} h={'150vh'}>
        <Container
          as={SimpleGrid}
          maxW={'6xl'}
          columns={{ base: 1, md: 2 }}
          py={{ base: 10, sm: 20, lg: 32 }}>
            <Stack
            bg={'transparent'}
            rounded={'xl'}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: 'lg' }}>
            <Stack spacing={4}>
              <Heading
                color={'white'}
                lineHeight={1.1}
                fontWeight={700}
                fontSize={'32px'}>
                Login
              </Heading>
              <Text color={'#959BA6'} fontSize={'16px'} fontWeight={400}>
                Please login to your account
              </Text>
            </Stack>
            <Box as={'form'} mt={10}>
              <Stack spacing={3}>
                <FormControl id="email" isRequired>
              <FormLabel fontWeight={600} color={'white'} fontSize={'16px'}>Email address</FormLabel>
              <Input type="email" 
              bg={'gray.700'}
              border={0}
              color={'white'}
              _placeholder={{
                color: 'gray.500',
              }}/>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel fontWeight={600} color={'white'} fontSize={'16px'}>Password</FormLabel>
              <InputGroup>
                <Input type={showPassword ? 'text' : 'password'} 
                bg={'gray.700'}
                border={0}
                color={'white'}
                _placeholder={{
                  color: 'gray.500',
                }}/>
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    color={'gray.500'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }>
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
              </Stack>
              <NextLink href={'Dashboard'}>
              <Button
                fontFamily={'heading'}
                mt={8}
                w={'full'}
                bgColor={'#6B57F4'}
                color={'white'}
                _hover={{
                  bgGradient: 'linear(to-r, red.400,pink.400)',
                  boxShadow: 'xl',
                }}>
                Login
              </Button>
              </NextLink>
            </Box>
            form
          </Stack>

          <Stack 
            spacing={{ base: 10, md: 20 }}>
                <Image src={ImageLogin} alt={'image login'} style={{ borderRadius: '24px' }} loading="lazy"/>
          </Stack>
          
        </Container>
        <Blur
          position={'absolute'}
          top={-20}
          left={-20}
          style={{ filter: 'blur(100px)' }}
        />
      </Box>
    );
  }
  
  export const Blur = (props: IconProps) => {
    return (
      <Icon
        width={useBreakpointValue({ base: '100%', md: '40vw', lg: '30vw' })}
        zIndex={useBreakpointValue({ base: -1, md: -1, lg: 0 })}
        height="560px"
        viewBox="0 0 528 560"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}>
        <circle cx="71" cy="61" r="111" fill="#F56565" />
        <circle cx="244" cy="106" r="139" fill="#ED64A6" />
        <circle cy="291" r="139" fill="#ED64A6" />
        <circle cx="80.5" cy="189.5" r="101.5" fill="#ED8936" />
        <circle cx="196.5" cy="317.5" r="101.5" fill="#ECC94B" />
        <circle cx="70.5" cy="458.5" r="101.5" fill="#48BB78" />
        <circle cx="426.5" cy="-0.5" r="101.5" fill="#4299E1" />
      </Icon>
    );
  };