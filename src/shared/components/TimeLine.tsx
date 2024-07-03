import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

export const LeftPositionedTimeline = () => {
  return (
    <Timeline position="alternate">
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <Typography> 2019 </Typography>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo
          facere, ipsa recusandae quam magnam rerum unde impedit vitae
          voluptatum, obcaecati harum dolores, repellendus consequatur
          consectetur! Vel dolor optio harum ullam.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <Typography> 2019 </Typography>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
          praesentium ducimus mollitia repudiandae ullam similique molestias ut
          consequuntur tenetur animi numquam neque beatae vel doloremque ipsum
          illo nesciunt cupiditate iste!
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <Typography> 2019 </Typography>
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          quibusdam illum reiciendis, animi dolor hic deleniti aspernatur alias
          sequi consectetur provident est ullam suscipit reprehenderit, facere
          fugit aperiam iure. Provident.
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot>
            <Typography> 2019 </Typography>
          </TimelineDot>
        </TimelineSeparator>
        <TimelineContent>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae
          ullam magni cum reprehenderit ducimus ut soluta neque nihil quidem nam
          saepe minus, a at tempora officia! Voluptas, nulla nihil. Temporibus?
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};
