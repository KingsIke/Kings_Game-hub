import { HStack, List, ListItem, Image, Text, Spinner, Skeleton, Button } from '@chakra-ui/react'
import useGenres, { Genre } from '../../hooks/useGenres'
import getCroppedImageUrl from '../../services/Image-url'

interface Props {
    onSelectGenre: (genre: Genre) => void;
    selectedGenre: Genre | null;
}

export const GenreList = ({ onSelectGenre, selectedGenre }: Props) => {
    const { data, isLoading } = useGenres()
    if (isLoading) return (
        <>
            <Spinner />
            <List>
                <Skeleton height='200px' />
                <ListItem>
                    <HStack>
                        <Image boxSize="32px" borderRadius={8} />
                        <Text fontSize='lg'>

                        </Text>
                    </HStack>
                </ListItem>
            </List>

        </>
    )

    return (
        <List>
            {data.map(genre => (
                <ListItem key={genre.id} paddingY='15px'>
                    <HStack>
                        <Image boxSize="32px" borderRadius={8} src={getCroppedImageUrl(genre.image_background)} />
                        <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>
                            {genre.name}
                        </Button>
                    </HStack>

                </ListItem>
            ))}
        </List>
    )
}
