import { Stack, Typography, Box } from "@mui/material";
import ProjectJson from "../util/projects.json";
import Project from "../util/ProjectInterface";
import ProjectBox from "../util/ProjectBox/ProjectBox";
import {
  carouselContainer,
  container,
  buttonStyle,
  emptyBoxStyle,
} from "./ProjectsStyle";
import { useState } from "react";

export default function Projects() {
  const [page, setPage] = useState(1);

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

  return (
    <div>
      <Stack alignItems={"center"} paddingTop={18}>
        <Stack direction={"row"} alignItems={"center"} sx={container}>
          <button
            onClick={handleBackClick}
            disabled={page === 1}
            style={buttonStyle}
          >
            Back
          </button>
          <Stack sx={carouselContainer}>
            {visibleList.map((project: Project) => (
              <Box key={project.id}>
                <ProjectBox project={project} />
              </Box>
            ))}
            {Array.from({ length: emptySlots }).map((x, index) => (
              <Box key={`empty-${index}`} sx={emptyBoxStyle} />
            ))}
          </Stack>
          <button
            onClick={handleNextClick}
            disabled={page === pageCount}
            style={buttonStyle}
          >
            Next
          </button>
        </Stack>
        <Typography variant="h1" paddingTop={18}>
          {page}
        </Typography>
      </Stack>
    </div>
  );
}
