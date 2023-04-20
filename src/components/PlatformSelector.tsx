import { Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react'
import React, { PropsWithChildren } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Platform } from '../hooks/useGames'
import { usePlatforms } from '../hooks/usePlatforms'


interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatform: Platform | null
}

export const PlatformSelector = ({ onSelectPlatform, selectedPlatform }: Props) => {
    const { data, errors } = usePlatforms()

    if (errors) return null

    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>{selectedPlatform?.name || 'Platform'}</MenuButton>
            <MenuList>
                {data.map(platform => <MenuItem key={platform.id} onClick={() => onSelectPlatform(platform)}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    )
}
