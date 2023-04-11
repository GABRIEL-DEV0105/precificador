import { Center, Image } from "@chakra-ui/react"
import logo from '/logo.svg'
export const Header = () => {
  return (
    <div>
      <Center bg='#0478D1' h='100px' color='white'>
        <Image src={logo} alt='logo-mateus' />
      </Center>
    </div>
  )
}