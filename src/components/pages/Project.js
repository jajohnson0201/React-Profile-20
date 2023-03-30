import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

export default function  ProjectCard({projects}) {
    // for(let i = 0 ; i < projects.length; i++){
    //     return (<Card sx={{ maxWidth: 345 }}>
    //         <CardHeader
    //           avatar={
    //             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    //               J
    //             </Avatar>
    //           }
    //           title={projects[i].name}
    //           subheader="Assignment #"
    //         />
    //         <CardMedia
    //           component="img"
    //           height="194"
    //           image="/static/images/cards/paella.jpg"
    //           alt="Paella dish"
    //           href={projects[i].url}
    //         />
    //         <CardContent>
    //           <Typography variant="body2" color="text.secondary">
    //             {projects[i].description}
    //           </Typography>
    //         </CardContent>
    //       </Card>)
    // }
    //  console.log(projects);
    //  projects.map((project)=>{
    //     return (<Card sx={{ maxWidth: 345 }}>
    //         <CardHeader
    //           avatar={
    //             <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
    //               J
    //             </Avatar>
    //           }
    //           title={project.name}
    //           subheader="Assignment #"
    //         />
    //         <CardMedia
    //           component="img"
    //           height="194"
    //          // image="/static/images/cards/paella.jpg"
    //           alt="Paella dish"
    //           href={project.url}
    //         />
    //         <CardContent>
    //           <Typography variant="body2" color="text.secondary">
    //             {project.description}
    //           </Typography>
    //         </CardContent>
    //       </Card>)
    // })
   // const a = this.props.projects;
    //console.log(a)
console.log(projects);
    return (
    <>
    
    {projects.map(({ name, description, url}) => (
      <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            J
          </Avatar>
        }
        title={name}
        subheader="Assignment #"
      />
      <CardMedia
        component="img"
        height="194"
       // image="/static/images/cards/paella.jpg"
        alt="Paella dish"
        href={url}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>))}
  </>
  );
}
