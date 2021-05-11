import React, { useState, useEffect } from "react"
import { CircularProgress, Container, Grid, makeStyles } from "@material-ui/core"
import DayCard from "../../components/DayCard"
import axios from "axios"
const useStyles = makeStyles({
  gridLayout: {
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

const Main = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const TOKEN = process.env.REACT_APP_API_TOKEN
  const api = `https://api.dribbble.com/v2/user/shots?access_token=${TOKEN}`
  const classes = useStyles();

  useEffect(() => {
    axios(api)
      .then(res => {
        setData(res.data)
      })
      .catch(err => {
        console.log("Error fetching data: ", err)
        setError(err)
      })
      .finally(() => {
        setLoading(false)
      })
    console.log("loading", loading)
    console.log("error", error)
  }, [])

  return (
    <Container maxWidth="md">
      <Grid container className={classes.gridLayout}>
        {loading && <CircularProgress color='secondary' />}
        {data &&
          data.map((datum, index) => (
            <Grid item xs={6} sm={6} md={6} lg={6} xl={4} key={datum.id}>
              <DayCard challenge={datum} index={index} />
            </Grid>
          ))}
      </Grid>
    </Container>
  )
}
export default Main
