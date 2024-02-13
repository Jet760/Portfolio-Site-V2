import { Flex, Spacer, Link, Image, Text } from "@chakra-ui/react"
import snail from "../images/snail-circle.png"

export default function Footer() {
    return (
        <Flex gap="2rem" margin="1rem" padding="1rem" align="center" marginInline="auto" borderTop="solid 2px" borderTopColor="border.main">
            <Image src={snail} alt="snail logo" height="2rem"/>
            {/* TODO: make footer text smaller? */}
            <Text>© Jess Turner 2024</Text>
            <Spacer />
            <Link href="https://github.com/Jet760">Github</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </Flex>
    )}