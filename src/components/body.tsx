import { Box, Button, Center, Checkbox, Heading, Input, Stack, Textarea, VStack } from "@chakra-ui/react"

export const Body = () => {
  return (
    <VStack spacing={4}>
      <Heading as='h3' size='lg' my='16px'>
        Tipo de Precificação
      </Heading>
      <Stack direction='row' spacing={4} align='center'>
        <Button colorScheme='green' variant='solid'>
          Regular
        </Button>
        <Button colorScheme='green' variant='solid'>
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
      <Heading as='h3' size='mg'>
        Emrpesa
      </Heading>
      <Stack spacing={8} direction='row'>
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
      <Heading as='h3' size='mg'>
        Regional
      </Heading>
      <Stack spacing={8} direction='row'>
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
      <Center w='100%'>
        <Textarea w='30%' placeholder='Importar produtos e preços' />
      </Center>
    </VStack>
  )
}