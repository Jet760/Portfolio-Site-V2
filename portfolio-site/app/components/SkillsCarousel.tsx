import { Box, Flex, Heading } from "@chakra-ui/react";
import SkillBox from "./SkillBox";
import figmaThumbnail from "../images/figma-thumbnail.png";
import reactThumbnail from "../images/react-thumbnail.png";
import csharpThumbnail from "../images/csharp-thumbnail.png";
import cssThreeThumbnail from "../images/CSS3-thumbnail.png";
import htmlFiveThumbnail from "../images/html5-thumbnail.png";
import xamlThumbnail from "../images/xaml-thumbnail.png";
import pythonThumbnail from "../images/python-thumbnail.png";
import jsThumbnail from "../images/js-thumbnail.png";
import remixThumbnail from "../images/remix-thumbnail.png";
import vbaThumbnail from "../images/vba-thumbnail.png";
import msSqlServerThumbnail from "../images/ms-sql-server-thumbnail.png";
import tsThumbnail from "../images/typescript-thumbnail.png";
import snail from "../images/snail-circle.png"
import gitThumbnail from "../images/git-thumbnail.png";

export default function SkillsCarousel() {
    return (
        <>
        <Box marginX="5%" marginBottom="8rem">
        <Heading marginBottom="3rem">My Skills</Heading>
        <Flex gap="1.5rem" overflow="auto" css={{
            "&::-webkit-scrollbar": {
                backgroundColor: "background.main",
                borderRadius: "30px",
            },
            "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#222222",
                borderRadius: "30px",
            },
        }}>
            <SkillBox imageSrc={tsThumbnail} alt="TypeScript" />
            <SkillBox imageSrc={remixThumbnail} alt="Remix" />
            <SkillBox imageSrc={reactThumbnail} alt="React" />
            <SkillBox imageSrc={csharpThumbnail} alt="C#" />
            <SkillBox imageSrc={pythonThumbnail} alt="Python" />
            <SkillBox imageSrc={jsThumbnail} alt="JavaScript" />
            <SkillBox imageSrc={htmlFiveThumbnail} alt="HTML5" />
            <SkillBox imageSrc={cssThreeThumbnail} alt="CSS3" />
            <SkillBox imageSrc={gitThumbnail} alt="Git" />
            <SkillBox imageSrc={figmaThumbnail} alt="figma" />
            <SkillBox imageSrc={msSqlServerThumbnail} alt="TSQL" />
            <SkillBox imageSrc={xamlThumbnail} alt="XAML" />
            <SkillBox imageSrc={vbaThumbnail} alt="VBA" />
            <SkillBox imageSrc={snail} alt="snail" seeMore={true}/>

        </Flex>
        </Box>
        </>
    )
}