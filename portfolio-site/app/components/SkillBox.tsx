import { Card, CardBody, Center, Image, Link, Text } from "@chakra-ui/react";

export default function SkillBox({ imageSrc, alt, seeMore }: { imageSrc: string, alt: string, seeMore?: boolean}) {
    if (seeMore) {
        return (
            <Link href="/skills">
            <Card bg="background.card" borderRadius={15} maxHeight="8.5rem" maxWidth="8.5rem" minHeight="8.5rem" minWidth="8.5rem" marginBottom="1rem">
                <CardBody>
                    <Center >
                        <Image src={imageSrc} alt={alt} boxSize="5rem" borderRadius={15} />
                    </Center>
                    <Center >
                        <Text color="text.main" fontSize="l">See more!</Text>
                    </Center>
                </CardBody>
            </Card>
            </Link>
        )
    }
    
    return (
        <Card bg="background.card" borderRadius={15} maxHeight="8.5rem" maxWidth="8.5rem" minHeight="8.5rem" minWidth="8.5rem" marginBottom="1rem">
            <CardBody>
            <Image src={imageSrc} alt={alt} boxSize="6rem" borderRadius={15} />
            </CardBody>
        </Card>
    )
}