import Header from '../components/layouts/Header';
import Menu from '../components/Menu';
import firebase from '../firebase';
import { Container } from 'semantic-ui-react'
import MyList from '../components/MyList';


const CardExampleCard = () =>
    <Header>
        <Menu/>
        <Container>
            <MyList/>
        </Container>
    </Header>


export default CardExampleCard;
