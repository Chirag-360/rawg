import { HStack, Icon, Text } from "@chakra-ui/react"
import { Platform } from "../hooks/useGames"
import {
    FaPlaystation,
    FaXbox,
    FaAndroid,
    FaLinux,
    FaWindows,
    FaApple,
  } from "react-icons/fa";
  import {MdPhoneIphone} from "react-icons/md"
  import {SiNintendo} from "react-icons/si"
  import {BsGlobe} from "react-icons/bs"
import { IconType } from "react-icons";

interface PlatfromIconListProps {
    platforms:Platform[]
}

export const PlatfromIconList = ({platforms}:PlatfromIconListProps) => {
    const iconMap:{[key:string]:IconType} = {
        pc: FaWindows,
        linux:FaLinux,
        xbox:FaXbox,
        playstation:FaPlaystation,
        android:FaAndroid,
        mac:FaApple,
        ios:MdPhoneIphone,
        nintendo:SiNintendo,
        web:BsGlobe
    }

  return (
<HStack marginY={1}>
{platforms.map((platform) => <Icon color={"gray.500"} as={iconMap[platform.slug]} />)}
</HStack> 
 )
}
