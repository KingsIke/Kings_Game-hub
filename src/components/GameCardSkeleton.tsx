import { SkeletonText, Skeleton, CardBody, Card } from '@chakra-ui/react'
import React from 'react'

export const GameCardSkeleton = () => {
    return (
        <Card borderRadius={10} overflow='hidden' width='300px'>
            <Skeleton height='200px' />


            <CardBody>
                <SkeletonText />
            </CardBody>



        </Card>
    )
}
