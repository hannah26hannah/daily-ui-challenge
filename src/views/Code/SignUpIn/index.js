import { makeStyles, Paper } from "@material-ui/core"

// blue 44558F
// lightMint E6F7F7
// orange FFC97B
// yellow FFE495

const useStyles = makeStyles({
  test: {
    color: '#44558F'
  },
  compLayout: {
    width: '375px',
    height: '667px',
    background: '#E6F7F7'
  }
})
const SignUpIn = () => {
  const classes = useStyles();

  return (
    <Paper elevation={3} className={classes.compLayout}>
      <h1 className={classes.test}>React Component Test 2</h1>
    </Paper>
  )
}
export default SignUpIn