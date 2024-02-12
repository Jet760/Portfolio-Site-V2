import { Flex, Image, Link, Spacer, } from "@chakra-ui/react"
import snail from "../images/snail-circle.png"

export default function Header() {
    return (
        <Flex gap="2rem" margin="1rem" padding="1rem" align="center" >
            <Image src={snail} alt="snail logo" height="5rem"/>
            {/* <Heading>Header</Heading> */}
            <Spacer />
            <Link href="/about">About</Link>
            <Link href="/skills">Skills</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projects">Projects</Link>
            <Link href="/contact">Contact</Link>
        </Flex>
    )}