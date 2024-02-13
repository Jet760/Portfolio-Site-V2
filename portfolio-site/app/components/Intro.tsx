import { Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import cursor from "../images/cursor3.gif"
import headshot from "../images/headshot.jpg"
import codeWindow from "../images/code-window.png"

export default function Intro() {
    return (
        <Flex gap="8rem" marginY="8rem" padding="1rem" align="center" >
        <Spacer />
        <Stack>
            <Image src={codeWindow} alt="code window icon" width="4.11rem" height="3rem" />
        <Stack direction="row" verticalAlign="bottom" spacing={0} marginY="1.4rem">
        <Heading size="3xl" whiteSpace="nowrap">hi! I&apos;m&nbsp;</Heading>
        <Heading size="3xl" color="text.accent"> Jess</Heading>
        <Heading size="3xl" >.</Heading>
        <Image src={cursor} alt="cursor" height="3.1rem" marginTop="0.55rem" paddingLeft={0} width="0.45rem"/>
        </Stack>
        <Text fontSize="2xl"> I&apos;m a trainee software developer based in Perth, Australia.</Text>
        </Stack>
        <Image src={headshot} alt="head shot" boxSize='23rem' borderRadius='full'/>
        <Spacer />
        </Flex>
    )}