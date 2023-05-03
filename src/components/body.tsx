import { Button, Center, Checkbox, HStack, Heading, Input, Stack, Textarea, VStack } from "@chakra-ui/react"
import { useState } from "react";

const listShop = [
  {loja: "loja01", regional: "Capital", empresa: "2"},
  {loja: "loja02", regional: "Norte", empresa: "2"},
  {loja: "loja03", regional: "Norte", empresa: "2"},
  {loja: "loja04", regional: "Capital", empresa: "15"},
  {loja: "loja05", regional: "Sul", empresa: "2"},
  {loja: "loja06", regional: "Capital", empresa: "4"},
  {loja: "loja07", regional: "Piauí", empresa: "4"},
]

export const Body = () => {
  const [infoData, setInfoData] = useState("");

  const handleChange = (e: any) => setInfoData(e.target.value);

  const listInfoData = [infoData.split(/\n|\t/)]

  console.log(listInfoData)
  return (
    <VStack spacing={4}>
      <Heading as='h3' size='lg' my='16px'>
        Tipo de Precificação
      </Heading>
      <Stack direction='row' spacing={4} align='center'>
        <Button 
        colorScheme='gray' 
        variant='solid'
        _focus={{
          background: 'green',
          color: 'white'
        }}>
          Regular
        </Button>
        <Button  
        colorScheme='gray' 
        variant='solid'
        _focus={{
          background: 'green',
          color: 'white'
        }}>
          Promoção
        </Button>
      </Stack>
      <Stack direction='row' spacing={32} align='center'>
      <Heading as='h3' size='mg'>
        Início
      </Heading>
      <Heading as='h3' size='mg'>
        Final
      </Heading>
      </Stack>
      <Stack direction='row' spacing={4} align='center'>
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="date"
      />
      <Input
        placeholder="Select Date and Time"
        size="md"
        type="date"
      />
      </Stack>
      <HStack w='30%' align='center' justifyContent='space-around'>
        <VStack>
          <Heading as='h3' size='mg'>
            Emrpesa
          </Heading>
          <Stack spacing={8} align='start'>
            <Checkbox colorScheme='green' defaultChecked>
              2 (Grupo Mateus)
            </Checkbox>
            <Checkbox colorScheme='green' defaultChecked>
              4 (Armazém)
            </Checkbox>
            <Checkbox colorScheme='green' defaultChecked>
              15 (Franquias)
            </Checkbox>
          </Stack>
        </VStack> 
        <VStack>
          <Heading as='h3' size='mg'>
            Regional
          </Heading>
          <Stack spacing={8} align='start'>
            <Checkbox colorScheme='green' defaultChecked>
              Capital
            </Checkbox>
            <Checkbox colorScheme='green' defaultChecked>
              Norte
            </Checkbox>
            <Checkbox colorScheme='green' defaultChecked>
              Sul
            </Checkbox>
            <Checkbox colorScheme='green' defaultChecked>
              Piauí
            </Checkbox>
          </Stack>
        </VStack>
      </HStack>
      <Center w='100%'>
        <Textarea 
        onChange={handleChange}
        w='30%' 
        placeholder='Importar produtos e preços' />
      </Center>
      <Button 

      colorScheme='blue' 
      variant='solid'>
        Enviar
      </Button>
    </VStack>
  )
}