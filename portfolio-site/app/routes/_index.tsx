import { Flex, Heading, Image, Spacer, Stack, Text } from "@chakra-ui/react";
import cursor from "../images/cursor3.gif"
import headshot from "../images/headshot.jpg"
import codeWindow from "../images/code-window.png"

export default function Index() {
    return (
        <>
        <Flex gap="8rem" margin="1rem" padding="1rem" align="center" >
        <Spacer />
        <Stack>
            <Image src={codeWindow} alt="cursor" width="2.74rem" height="2rem" />
        <Stack direction="row" verticalAlign="bottom" spacing={0}>
            {/* TODO: Sort out heading and text sizes in the theme */}
        <Heading>hi! I&apos;m&nbsp;</Heading>
        <Heading color="text.accent"> Jess</Heading>
        <Heading>.</Heading>
        <Image src={cursor} alt="cursor" height="2.1rem" marginTop="0.4rem" paddingLeft={0} width="0.35rem"/>
        </Stack>
        <Text> I&apos;m a trainee software developer based in Perth, Australia.</Text>
        </Stack>
        <Image src={headshot} alt="cursor" height="5rem" boxSize='20rem' borderRadius='full'/>
        <Spacer />
        </Flex>
        </>
    )
  }