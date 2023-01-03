import {
    Box,
    chakra,
    SimpleGrid,
    Stat,
    Text,
    Table,
    TableContainer,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    HStack,
    Spacer,
    ModalOverlay,
    useDisclosure,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader
  } from '@chakra-ui/react';
import {BankData} from './BankData.json';
import Viewicon from '../../src/icons/search-status.png'
import Downloadicon from '../../src/icons/document-download.png'
import Reporticon from '../../src/icons/document-text.png'
import Image from 'next/image'
import React from 'react';

  interface StatsCardProps {
    title: string;
    date: string;
  }
  
  function StatsCard(props: StatsCardProps) {
    const { title, date } = props;
    const OverlayOne = () => (
      <ModalOverlay
        bg='blackAlpha.300'
        backdropFilter='blur(10px) hue-rotate(90deg)'
      />
    )
  
    const OverlayTwo = () => (
      <ModalOverlay
        bg='none'
        backdropFilter='auto'
        backdropInvert='80%'
        backdropBlur='2px'
      />
    )
  
    const { isOpen: isOpenView, onOpen: onOpenView, onClose: onCloseView } = useDisclosure()
    const { isOpen: isOpenDownload, onOpen: onOpenDownload, onClose: onCloseDownload } = useDisclosure()

    const [overlay, setOverlay] = React.useState(<OverlayOne />)
    
    return (
      <>
          <Tbody bgColor={'#1E2432'} >
            <Tr>
              <Td>
                <HStack>
                <Box w={'24px'} cursor={'pointer'} mr={'1rem'}>
                <Image src={Reporticon} alt={'view'} loading="lazy"/>
                </Box>
                <Text fontSize={'16px'} fontWeight={'600'}>
                {title}</Text>
                </HStack></Td>
              <Td textAlign={'right'}>{date}</Td>
              <Td textAlign={'right'}>
                <HStack >
                <Spacer />
                <Box 
                  w={'24px'} 
                  cursor={'pointer'} 
                  mr={'1rem'} 
                  onClick={() => {
                  setOverlay(<OverlayOne />)
                  onOpenView()
                  }}
                >
                <Image src={Viewicon} alt={'view'} loading="lazy"/>
                </Box>
                <Box 
                w={'24px'} 
                cursor={'pointer'}
                onClick={() => {
                  setOverlay(<OverlayTwo />)
                  onOpenDownload()
                }}>
                <Image src={Downloadicon} alt={'download'} loading="lazy"/>
                </Box>
                </HStack>
              </Td>
            </Tr>
          </Tbody>
          {/* modal view */}
          <Modal isCentered isOpen={isOpenView} onClose={onCloseView}>
        {overlay}
        <ModalContent>
          <ModalHeader>You Want View Report?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight={700}>{title}</Text>
            <Text>{date}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseView} colorScheme='blue'>View</Button>
            <Button onClick={onCloseView}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

          {/* modal download */}
          <Modal isCentered isOpen={isOpenDownload} onClose={onCloseDownload}>
        {overlay}
        <ModalContent>
          <ModalHeader>Are you sure to download?</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Download file</Text>
            <Text fontWeight={700}>{title}</Text>
            <Text>{date}</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onCloseDownload} colorScheme='blue'>Download</Button>
            <Button onClick={onCloseDownload}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

          </>
    );
  }
  
  export default function BankReports() {
    
    return (
      <>
      <Box color={'white'} maxW="auto">
        <chakra.h1
            textAlign={'left'}
            fontSize={{ base: '18px', md: '24px', lg: '24px' }}
            fontWeight={'700'}
            pb={'1rem'}>
          Monthly Bank Reports
          </chakra.h1>
        <SimpleGrid mr={{ base: '1rem', md: '4rem', lg: '4rem' }} columns={{ base: 1, md: 1 }}>
        <Stat
        bgColor={'#1E2432'}
        rounded={'16px'}
        shadow={'xl'}
        >
        <TableContainer bgColor={'#1E2432'} rounded={'16px'}>
        <Table variant='unstyled'>
          {/* <TableCaption bgColor={'#1E2432'}>Imperial to metric conversion factors</TableCaption> */}
          <Thead bgColor={'#2A323E'}>
            <Tr>
              <Th>
              <Text fontSize={'14px'} fontWeight={'700'}>
                Bank Statement
                </Text>
                </Th>
              <Th textAlign={'right'}>
              <Text fontSize={'14px'} fontWeight={'700'}>
                Date
                </Text>
                </Th>
              <Th isNumeric textAlign={'right'}>
              <Text fontSize={'14px'} fontWeight={'700'}>
                View/Download
              </Text>
              </Th>
            </Tr>
          </Thead>
        {BankData.map((item) => (
          <StatsCard title={item.title} date={item.date}/>
        ))} 
            </Table>
        </TableContainer>
        </Stat>
        </SimpleGrid>
      </Box>
      </>
    );
  }