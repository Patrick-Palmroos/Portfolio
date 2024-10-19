import { Box, Typography, Stack, Slide } from "@mui/material";
import {
  projectTabStyle,
  exitButtonStyle,
  imageStyle,
  textStyle,
  titleStyle,
  dateTextStyle,
  iconStyle,
} from "./ProjectTabStyle";
import { Project } from "../Interfaces";

export default function ProjectTab({
  callback,
  project,
}: {
  callback: () => void;
  project: Project;
}) {
  return (
    <div>
      <Slide direction="up" in={true} mountOnEnter unmountOnExit>
        <Box
          sx={{
            ...projectTabStyle,
          }}
        >
          <Box
            component={"button"}
            onClick={callback}
            sx={{
              ...exitButtonStyle,

              "&::before, &::after": {
                content: '""',
                position: "absolute",
                width: "0.5rem",
                height: "3rem",
                top: "1rem",
                left: "2.25rem",
                borderRadius: "20px",
                backgroundColor: "white",
                zIndex: 2,
              },

              "&::before": {
                rotate: "-45deg",
              },

              "&::after": {
                rotate: "45deg",
              },
            }}
          />
          <Box
            sx={{
              overflowX: "hidden",
              overflowY: "auto",
              maxHeight: "100%",
              maxWidth: "100%",
              backgroundImage: `url(${project.backDrop})`,
              backgroundSize: "100% 100%",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
              zIndex: 2,

              "&::before": {
                display: "transparent",
                content: '""',
                position: "absolute",
                width: "calc(100% - 1rem)",
                height: "100%",
                borderRadius: "10px",
                background:
                  "linear-gradient(110deg, rgba(0, 0, 0, 0.8) 0%, transparent)",
                zIndex: 0,
              },

              "&::-webkit-scrollbar": {
                width: "1rem",
                backgroundColor: "#19121c",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#19121c",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#B985FC",
                border: "3px solid white",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: "#5a1a92",
              },
            }}
          >
            <Stack
              direction={"row"}
              justifyContent={"space-around"}
              sx={{
                padding: "2rem 0rem 3rem 0rem",
              }}
            >
              <Stack>
                <Stack
                  display={"flex"}
                  alignItems={"center"}
                  flexDirection={"row"}
                >
                  <Typography variant="h1" sx={titleStyle}>
                    {project.name}
                  </Typography>
                  <Typography
                    variant="h1"
                    sx={{
                      paddingLeft: "0.5rem",
                      paddingTop: "0.5rem",
                      color: "white",
                      zIndex: 1,
                    }}
                  >
                    {""} - {project.employer}
                  </Typography>
                </Stack>
                <Typography variant="h2" sx={dateTextStyle}>
                  {project.duration}
                </Typography>
              </Stack>
              <Stack
                direction={"row"}
                paddingLeft={"1rem"}
                paddingBottom={"0.3rem"}
              >
                {project.logos.map((value, index) => (
                  <img
                    key={index}
                    src={value}
                    alt={`logo ${index}`}
                    style={iconStyle}
                    className="image"
                  />
                ))}
              </Stack>
            </Stack>
            <Stack
              display={"flex"}
              flexDirection={"row"}
              sx={{
                position: "relative",
                width: "100%",
                background: "#27242E",
                zIndex: 3,
              }}
            >
              <Stack direction={"column"} marginTop={"2rem"}>
                {project.details.split("\n").map((line, index) => (
                  <Stack
                    direction={index % 2 === 0 ? "row" : "row-reverse"}
                    sx={{ width: "90%" }}
                    justifyContent={"center"}
                    key={index}
                  >
                    <img
                      src={project.images[index]}
                      alt="picture of software"
                      style={{ ...imageStyle }}
                      className="image"
                    />
                    <Typography
                      key={index}
                      variant="h2"
                      sx={{
                        ...textStyle,
                      }}
                    >
                      {line}
                    </Typography>
                  </Stack>
                ))}
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Slide>
    </div>
  );
}
