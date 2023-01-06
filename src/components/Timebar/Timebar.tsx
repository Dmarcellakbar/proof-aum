import {UpdateData} from './UpdateData.json';
import {
    Text} from '@chakra-ui/react';
export default function index() {
  return (
    <>
    {UpdateData.map((v: any) => (
        <Text
          color={'white'}
          textAlign={'right'}
          fontSize={{ base: '12px', md: '16px', lg: '16px' }}
          fontWeight={{ base: 500, md: 700, lg: 700 }}
          pt={'2rem'}
          mx={{ base: '2rem', md: '4rem', lg: '4rem' }}>
        Last update : {v.date}
        </Text>
        ))}
    </>
  )
}
