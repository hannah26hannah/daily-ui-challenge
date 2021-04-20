import React from "react"
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography
} from "@material-ui/core"
import { createMuiTheme, makeStyles } from "@material-ui/core/styles"
import { spliceDateString } from "../utils/index"

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
  }
})

const DayCard = ({ challenge, index }) => {
  const classes = useStyles()
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
        <Button size="small" variant="outlined">
          See the code
        </Button>
        {/* TODO: should upload real code. have to install react-router */}
        <Button size="small" variant="outlined" href={html_url}>
          Open Dribble
        </Button>
      </CardActions>
    </Card>
  )
}

export default DayCard
