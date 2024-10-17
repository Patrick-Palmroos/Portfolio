import { Stack, Box, Zoom, Slide } from "@mui/material";
import ProjectJson from "../util/projects.json";
import { Project } from "../util/Interfaces.ts";
import ProjectBox from "../util/ProjectBox/ProjectBox";
import { carouselContainer, container, emptyBoxStyle } from "./ProjectsStyle";
import { useState } from "react";
import ArrowButton from "../util/ArrowButton/ArrowButton";
import PageBar from "../util/PageBar/PageBar";
import ScrollAnimation from "react-animate-on-scroll";

export default function Projects() {
  const [page, setPage] = useState(1);
  const [grow, setGrow] = useState(true);
  const [slide, setSlide] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [animating, setAnimating] = useState<boolean>(false);

  const projectCount: number = ProjectJson.projects.length;
  const pageCount: number = Math.ceil(projectCount / 4);

  //start index counted as in page 2 would be (2-1)*4=4
  const startIndex: number = (page - 1) * 4;
  //endIndex counted as in (4+4(=8), 6) = 6
  const endIndex: number = Math.min(startIndex + 4, projectCount);
  //slicing list into a new list.
  const visibleList: Project[] = ProjectJson.projects.slice(
    startIndex,
    endIndex
  );
  const emptySlots: number = 4 - visibleList.length;

  const handleBackClick = () => {
    if (page > 1) setPage(page - 1);
  };

  const handleNextClick = () => {
    if (page < pageCount) setPage(page + 1);
  };

  const baseAnimSpeed: number = 200;

  const calcAnimLength = (number: number): number => {
    const baseNumber = 470;

    switch (number) {
      case 4:
        return baseNumber;
      case 3:
        return (3 / 4) * baseNumber;
      case 2:
        return (1 / 2) * baseNumber;
      case 1:
        return (1 / 4) * baseNumber;
      default:
        throw new Error("Invalid input number.");
    }
  };

  //handle page change and animations.
  const handlePageChange = (direction: "next" | "back") => {
    if (!animating) {
      if (
        (direction === "back" && page! > 1) ||
        (direction === "next" && page! < pageCount)
      ) {
        //animating true so that these wont be called mid animation.
        setAnimating(true);
        //sets the animation direction.
        setDirection(direction === "next" ? "right" : "left");
        //sets the slide animaiton.
        setSlide(false);
        setTimeout(() => {
          // After slide-out animation completes, change the page
          if (direction === "next") {
            handleNextClick();
          } else {
            handleBackClick();
          }
          // Reset slide and grow animations after transition
          setGrow(true);
          setSlide(true);
          setAnimating(false);
        }, calcAnimLength(visibleList.length));
      }
    }
  };

  return (
    <div>
      <Stack alignItems={"center"} paddingTop={18}>
        <Stack direction={"row"} alignItems={"center"} sx={container}>
          <Box
            sx={{
              rotate: "180deg",
            }}
          >
            <ScrollAnimation
              animateIn="slideInRight"
              duration={0.5}
              animateOnce={true}
            >
              <ArrowButton
                callback={() => {
                  handlePageChange("back");
                }}
              />
            </ScrollAnimation>
          </Box>
          <ScrollAnimation
            animateIn="fadeIn"
            duration={0.3}
            delay={0.3}
            offset={400}
            animateOnce={true}
          >
            <Stack sx={carouselContainer}>
              {visibleList.map((project: Project, index) => (
                <Slide
                  in={slide}
                  key={project.id}
                  direction={direction}
                  timeout={
                    direction === "left"
                      ? baseAnimSpeed + (visibleList.length - 1 - index) * 150
                      : baseAnimSpeed + index * 150
                  }
                >
                  <Zoom in={grow} timeout={300 + index * 100}>
                    <Box>
                      <ProjectBox project={project} />
                    </Box>
                  </Zoom>
                </Slide>
              ))}
              {Array.from({ length: emptySlots }).map((_, index) => (
                <Box key={`empty-${index}`} sx={emptyBoxStyle} />
              ))}
            </Stack>
          </ScrollAnimation>
          <Box>
            <ScrollAnimation
              animateIn="fadeInRight"
              duration={0.5}
              animateOnce={true}
            >
              <ArrowButton
                callback={() => {
                  handlePageChange("next");
                }}
              />
            </ScrollAnimation>
          </Box>
        </Stack>
        <Box paddingTop={17}>
          <PageBar page={page} pageCount={pageCount} />
        </Box>
      </Stack>
      ;
    </div>
  );
}
