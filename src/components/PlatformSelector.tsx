import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import React from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { usePlatforms } from '../hooks/usePlatforms'

export const PlatformSelector = () => {
    const { data, errors } = usePlatforms()

    if (errors) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>Platform</MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}
