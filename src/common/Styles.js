import { makeStyles } from "@material-ui/core/styles"
// const theme = createMuiTheme();
const globalStyles = makeStyles({
  noUnderline: {
    textDecoration: 'none'
  },
  flexColCenter: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
})


export default globalStyles;
