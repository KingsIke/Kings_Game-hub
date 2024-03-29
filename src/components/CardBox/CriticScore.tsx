import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props {
    score: number;
}

export const CriticScore = ({ score }: Props) => {
    let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red'
    return (
        <Badge colorScheme={color} paddingX={2} fontSize='14px' borderRadius='4px'>
            {score}
        </Badge>
    )
}
