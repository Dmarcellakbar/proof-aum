import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcInTransit } from 'react-icons/fc';
import Image from 'next/image'
import {UpdateData} from '../Dashboard/UpdateData.json';
import {DataUser} from '../Dashboard/DataUser.json';

interface FeatureProps {
  title: string;
  text: string;
  icon: any;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack bgColor={'#212936'}>
      <Flex
        w={16}
        h={16}
        align={'center'}
        justify={'center'}
        color={'white'}
        rounded={'full'}
        bg={'gray.100'}
        mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function SimpleThreeColumns() {
  return (
    <Box p={4}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
      {DataUser.map((v: any)=>
        <Feature
          icon={<Image src={'/dollar-circle.png'} width={10} height={10} alt={''} />}
          title={'Exchange Assets'}
          text={v.Asset}
        />
        )}
        {DataUser.map((v: any)=>
        <Feature
          icon={<Image src={'/walleticon.png'} width={10} height={10} alt={''} />}
          title={'Account Totals'}
          text={v.Account}
        />
        )}
        {DataUser.map((v: any)=>
        <Feature
          icon={<Image src={'/bitcoin.png'} width={10} height={10} alt={''} />}
          title={'Tokens'}
          text={v.Token}
        />
        )}
      </SimpleGrid>
      
    </Box>
  );
}