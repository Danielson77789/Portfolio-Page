import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const ProjectCard = ({header, disc, githubLink, imgLink}) => {
  return (
    <div>
      <Card sx={{ maxWidth: 400 }} style={{backgroundColor: "var(--secondary)"}}>
      <CardActionArea>
          <CardMedia
          component="img"
          height="140"
          image={imgLink}
          alt="green iguana"
          />
          <CardContent>
          <Typography gutterBottom variant="h5" component="div" style={{color: "var(--font-default)"}}>
              {header}
          </Typography>
          <Typography variant="body2" color="text.secondary" style={{color: "var(--font-default)"}}>
              {disc}
          </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
          <Button size="small" color="secondary" variant="outlined">
            Link
          </Button>
      </CardActions>
      </Card>
    </div>
  )
}

export default ProjectCard