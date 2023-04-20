import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../../hooks/useGames';
import { HStack, Icon } from '@chakra-ui/react'
import { IconType } from 'react-icons';


interface Props {
    platform: Platform[]
}

export const PlatformIconList = ({ platform }: Props) => {

    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        web: BsGlobe,
        andriod: FaAndroid
    }
    return (
        // <div>PlatformIconList</div>
        <HStack marginY={1} >

            {platform.map(platform => (
                <Icon key={platform.id} as={iconMap[platform.slug]} color='#ECC94B'></Icon>
            ))
            }
        </HStack >

    )
}
