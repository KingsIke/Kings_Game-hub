import { HStack, Image } from '@chakra-ui/react'
import { ColorModeSwitch } from '../ColorModeSwitch'
import logo from '../../assets/logo.webp'
import { SearchInput } from '../SearchingBox/SearchInput'

interface Props {
    onSearch: (searchText: string) => void
}

export const NavBar = ({ onSearch }: Props) => {
    return (
        <HStack padding='10px' >
            <Image src={logo} boxSize='60px' />
            <SearchInput onSearch={onSearch} />
            <ColorModeSwitch />
        </HStack>
    )
}
