import React from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
  Link as MuiLink
} from "@material-ui/core"
import { createMuiTheme, makeStyles } from "@material-ui/core/styles"
import { getProperPath, spliceDateString } from "../utils/index"
import { Link } from "react-router-dom"
import globalStyles from '../common/Styles.js';

const theme = createMuiTheme()
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: theme.spacing(2)
  },
  title: {
    fontSize: 14
  },
  buttonArea: {
    justifyContent: "center"
  },
})

const DayCard = ({ challenge, index }) => {
  const classes = useStyles();
  const globalClasses = globalStyles();
  const { html_url, images, published_at, tags, title } = challenge
  console.log("tags", tags)

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          Day {index} : {title}
        </Typography>
        {images && <img src={images.teaser} alt={title} />}

        <Typography color="textSecondary" gutterBottom>
          {spliceDateString(published_at)}
        </Typography>
      </CardContent>
      <CardActions className={classes.buttonArea}>
        <Link to={`/code?title=${getProperPath(title)}`} className={globalClasses.noUnderline}>
          <Button size="small" variant="outlined">See the code</Button>
        </Link>
        
        <MuiLink underline='none' href={html_url} target='blank' rel="noopener">
          <Button size='small' variant='outlined'>Open Dribble</Button>
        </MuiLink>
      </CardActions>
    </Card>
  )
}

export default DayCard
