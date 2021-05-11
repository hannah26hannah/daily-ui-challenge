import { Button, Container } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { useQuery } from '../../utils/index'
import globalStyles from '../../common/Styles.js';
import SignUpIn from '../Code/SignUpIn'


const ExampleLayout = ({children}) => {
  const globalClasses = globalStyles();
  return (
    <Container maxWidth='md' className={globalClasses.flexColCenter}>
        {children}
        <Link to='/' className={globalClasses.noUnderline}>
          <Button size='small' variant='outlined'>Take Me Home!</Button>
        </Link>
      
    </Container>
  )
  
}
const Code = () => {
  const query = useQuery();
  const title = query.get('title');

  
  return (
    <ExampleLayout>
    {title === 'sign-up-in' && <SignUpIn />}
    </ExampleLayout>
  ) 
}

export default Code;