import { Stack, Typography, Box } from "@mui/material";
import ProjectJson from "../util/projects.json";
import Project from "../util/ProjectInterface";
import ProjectBox from "../util/ProjectBox/ProjectBox";
import { useState } from "react";

export default function Projects() {
  const [page, setPage] = useState(1);

  const projectCount: number = ProjectJson.projects.length;

  //start index counted as in page 2 would be (2-1)*4=4
  const startIndex: number = (page - 1) * 4;
  //endIndex counted as in (4+4(=8), 6) = 6
  const endIndex: number = Math.min(startIndex + 4, projectCount);
  //slicing list into a new list.
  const visibleList: Project[] = ProjectJson.projects.slice(
    startIndex,
    endIndex
  );

  return (
    <div>
      <Stack direction={"column"}>
        <Stack direction={"row"}>
          {visibleList.map((project: Project) => (
            <Box key={project.id}>
              <ProjectBox project={project} />
            </Box>
          ))}
        </Stack>
      </Stack>
    </div>
  );
}
