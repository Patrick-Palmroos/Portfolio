import { Stack, Box, Zoom, Slide } from "@mui/material";
import ProjectJson from "../util/projects.json";
import { Project } from "../util/Interfaces.ts";
import ProjectBox from "../util/ProjectBox/ProjectBox";
import { carouselContainer, container, emptyBoxStyle } from "./ProjectsStyle";
import { useState, useEffect, useRef } from "react";
import ArrowButton from "../util/ArrowButton/ArrowButton";
import PageBar from "../util/PageBar/PageBar";
import ScrollAnimation from "react-animate-on-scroll";
import { useMediaQuery } from "react-responsive";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default function Projects() {
  const isDesktop = useMediaQuery({ query: "(min-width: 1215px)" });
  const isMobile = useMediaQuery({ query: "(min-width: 940px)" });
  const isVeryTiny = useMediaQuery({ query: "(min-width: 550px)" });
  const [page, setPage] = useState(1);
  const [grow, setGrow] = useState(true);
  const [slide, setSlide] = useState(true);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [animating, setAnimating] = useState<boolean>(false);
  const [projectAmount, setProjectAmount] = useState<number>(4);
  const [pageId, setPageId] = useState<number>(1);

  const carouselRef = useRef<Carousel>(null);

  useEffect(() => {
    setProjectAmount(isMobile ? 4 : 1);
    setPage(1);
  }, [isMobile]);

  useEffect(() => {
    setPageId(page);
  }, [page]);

  const projectCount: number = ProjectJson.projects.length;
  const pageCount: number = Math.ceil(projectCount / projectAmount);

  //start index counted as in page 2 would be (2-1)*4=4
  const startIndex: number = (page - 1) * projectAmount;
  //endIndex counted as in (4+4(=8), 6) = 6
  const endIndex: number = Math.min(startIndex + projectAmount, projectCount);
  //slicing list into a new list.
  const visibleList: Project[] = ProjectJson.projects.slice(
    startIndex,
    endIndex
  );
  const emptySlots: number = projectAmount - visibleList.length;

  const handleBackClick = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      setPage(pageCount);
    }
  };

  const handleNextClick = () => {
    if (page < pageCount) {
      setPage(page + 1);
    } else {
      setPage(1);
    }
  };

  const handleCarouselChange = (index: number) => {
    setPage(index + 1);
  };

  const baseAnimSpeed: number = 200;

  const calcAnimLength = (number: number): number => {
    const baseNumber = 520;

    switch (number) {
      case 4:
        return baseNumber;
      case 3:
        return (3 / 4) * baseNumber;
      case 2:
        return (1 / 2) * baseNumber;
      case 1:
        return isVeryTiny ? (1 / 4) * baseNumber : baseNumber / 2;
      default:
        throw new Error("Invalid input number.");
    }
  };

  //handle page change and animations.
  const handlePageChange = (direction: "next" | "back") => {
    if (!animating) {
      if (direction === "back" || direction === "next") {
        //animating true so that these wont be called mid animation.
        setAnimating(true);
        //sets the animation direction.
        setDirection(direction === "next" ? "right" : "left");
        //sets the slide animaiton.
        setSlide(false);
        setTimeout(
          () => {
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
          },
          isMobile ? calcAnimLength(visibleList.length) : 0
        );
      }
    }
  };

  return (
    <div>
      <Stack alignItems={"center"} paddingTop={isMobile ? 16 : 5} spacing={3}>
        <Stack direction={"row"} alignItems={"center"} sx={container}>
          <Box
            sx={
              isMobile
                ? { position: "relative" }
                : isVeryTiny
                ? {
                    position: "absolute",
                    left: "-0.5rem",
                    bottom: "7rem",
                  }
                : {
                    position: "absolute",
                    left: "-1rem",
                    bottom: "7rem",
                  }
            }
          >
            {isDesktop ? (
              <ScrollAnimation
                animateIn="fadeInLeft"
                duration={0.5}
                offset={150}
                initiallyVisible={!isDesktop}
                animateOnce={true}
              >
                {/* Scroll in animations */}
                <Box sx={{ rotate: "180deg" }}>
                  <ArrowButton
                    callback={() => {
                      handlePageChange("back");
                    }}
                  />
                </Box>
              </ScrollAnimation>
            ) : (
              <Box
                sx={{
                  position: "relative",
                  zIndex: 5,
                  rotate: "-180deg",
                }}
              >
                {/* No scroll in animations */}
                <ArrowButton
                  callback={() => {
                    handlePageChange("back");
                  }}
                />
              </Box>
            )}
          </Box>
          {isDesktop ? (
            <ScrollAnimation
              animateIn={"fadeIn"}
              duration={0.8}
              delay={0.3}
              offset={400}
              animateOnce={true}
            >
              {/*Scroll in animations */}
              <Stack
                sx={
                  isDesktop
                    ? { ...carouselContainer }
                    : isMobile
                    ? {
                        ...carouselContainer,
                        gridTemplateColumns: "22rem 22rem",
                        rowGap: "1.5rem",
                        columnGap: "1.5rem",
                      }
                    : isVeryTiny
                    ? {
                        ...carouselContainer,
                        gridTemplateColumns: "100vw",
                        marginRight: "1.5rem",
                        marginLeft: "2rem",
                      }
                    : {
                        ...carouselContainer,
                        gridTemplateColumns: "100vw",
                        marginRight: "1.5rem",
                        marginLeft: "2rem",
                      }
                }
              >
                {visibleList.map((project: Project, index) => (
                  <Slide
                    in={slide}
                    key={project.id}
                    direction={direction}
                    timeout={
                      isMobile
                        ? direction === "left"
                          ? baseAnimSpeed +
                            (visibleList.length - 1 - index) * 150
                          : baseAnimSpeed + index * 150
                        : 470 / 2
                    }
                  >
                    <Zoom
                      in={grow}
                      timeout={isVeryTiny ? 300 + index * 100 : 500}
                    >
                      <Box>
                        <ProjectBox project={project} />
                      </Box>
                    </Zoom>
                  </Slide>
                ))}
                {Array.from({ length: emptySlots }).map((_, index) => (
                  <Box
                    key={`empty-${index}`}
                    sx={
                      isMobile
                        ? { ...emptyBoxStyle }
                        : { ...emptyBoxStyle, display: "none" }
                    }
                  />
                ))}
              </Stack>
            </ScrollAnimation>
          ) : isMobile ? (
            <Box>
              {/*No scroll in animations */}
              <Stack
                sx={
                  isDesktop
                    ? { ...carouselContainer }
                    : {
                        ...carouselContainer,
                        gridTemplateColumns: "22rem 22rem",
                        rowGap: "1.5rem",
                        columnGap: "1.5rem",
                      }
                }
              >
                {visibleList.map((project: Project, index) => (
                  <Slide
                    in={slide}
                    key={project.id}
                    direction={direction}
                    timeout={
                      isMobile
                        ? direction === "left"
                          ? baseAnimSpeed +
                            (visibleList.length - 1 - index) * 150
                          : baseAnimSpeed + index * 150
                        : 470 / 2
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
                  <Box
                    key={`empty-${index}`}
                    sx={
                      isMobile
                        ? { ...emptyBoxStyle }
                        : { ...emptyBoxStyle, display: "none" }
                    }
                  />
                ))}
              </Stack>
            </Box>
          ) : (
            <Box sx={isVeryTiny ? { width: "80vw" } : { width: "100vw" }}>
              <Carousel
                ref={carouselRef}
                showArrows={false}
                showThumbs={false}
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                onChange={handleCarouselChange}
                selectedItem={page - 1}
              >
                {ProjectJson.projects.map((project) => (
                  <div key={project.id}>
                    <ProjectBox project={project} />
                  </div>
                ))}
              </Carousel>
            </Box>
          )}
          <Box
            sx={
              isMobile
                ? { position: "relative" }
                : isVeryTiny
                ? { position: "absolute", right: "0rem", bottom: "7rem" }
                : { position: "absolute", right: "-1rem", bottom: "7rem" }
            }
          >
            {isDesktop ? (
              <ScrollAnimation
                animateIn="fadeInRight"
                duration={0.5}
                offset={150}
                initiallyVisible={!isDesktop}
                animateOnce={true}
              >
                {/* Scroll in animations */}
                <ArrowButton
                  callback={() => {
                    handlePageChange("next");
                  }}
                />
              </ScrollAnimation>
            ) : (
              <Box sx={{ position: "relative", zIndex: 5 }}>
                {/* No scroll in animations */}

                <ArrowButton
                  callback={() => {
                    handlePageChange("next");
                  }}
                />
              </Box>
            )}
          </Box>
        </Stack>
        <Box zIndex={5} paddingTop={isMobile ? 12 : isVeryTiny ? 2 : 0}>
          <PageBar page={pageId} pageCount={pageCount} />
        </Box>
      </Stack>
    </div>
  );
}
