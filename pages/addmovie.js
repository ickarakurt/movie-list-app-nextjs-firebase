import Header from '../components/layouts/Header';
import Menu from '../components/Menu';
import firebase from '../firebase';
import { Container } from 'semantic-ui-react'
import AddMovie from '../components/AddMovie';


const CardExampleCard = () =>
    <Header>
        <Menu/>
        <Container>
            <AddMovie/>
        </Container>
    </Header>


export default CardExampleCard;
