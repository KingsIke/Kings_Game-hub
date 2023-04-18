import { Box } from '@chakra-ui/react'
import React, { ReactNode } from 'react'
interface Props {
    children: ReactNode
}

export const GameCardContainer = ({ children }: Props) => {
    return (
        <Box borderRadius={10} overflow='hidden' width='300px'> {children} </Box>
    )
}
