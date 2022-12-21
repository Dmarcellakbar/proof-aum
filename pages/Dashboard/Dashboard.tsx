import {
  Box,
  chakra,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
  Text,
  Icon
} from '@chakra-ui/react';
import { IconType } from 'react-icons';
import {UserData} from './UserData.json';
import {UpdateData} from './UpdateData.json';
import { FiServer } from 'react-icons/fi';

interface StatsCardProps {
  title: string;
  stat: string;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={'5'}
      shadow={'xl'}
      bgColor={'#212936'}
      rounded={'lg'}>
      <Flex >
        <Box
          my={'auto'}
          color={'white'}
          alignContent={'center'}>
            <Icon
              mr="4"
              fontSize="16"
            ><FiServer/></Icon>
        </Box>
        <Box>
          <StatLabel fontWeight={'medium'} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
            {stat}
          </StatNumber>
        </Box>
      </Flex>
    </Stat>
  );
}

export default function Dashboard() {
  return (
    <Box color={'white'} maxW="7xl" pl={'4rem'}>
      {UpdateData.map((v: any) => (
      <Text
        textAlign={'right'}
        fontSize={'16px'}
        fontWeight={'700'}
        pt={'2rem'}>
      Last update : {v.date}
      </Text>
      ))}
      <chakra.h1
          textAlign={'left'}
          fontSize={'24px'}
          fontWeight={'700'}
          pb={'1rem'}>
        Dashboard
        </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
      {UserData.map((item) => (
        <StatsCard
          title={item.title}
          stat={item.stat}
        />
      ))}
      </SimpleGrid>
    </Box>
  );
}