import CardActionArea from "@mui/material/CardActionArea";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

type Props = {
    imageURL: string,
    name: string,
    description: string
};

const NFTTileCard = (props: Props) => {
    return (
        <Card sx={{ maxWidth: 300 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="auto"
              image={props.imageURL}
              alt="name"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              {props.name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
              {props.description}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      );
}

export default NFTTileCard;