import Header from '../components/layouts/Header';
import Menu from '../components/Menu';
import firebase from '../firebase';
import { Container } from 'semantic-ui-react'
import Form from '../components/Form';


const CardExampleCard = () =>
    <Header>
        <Menu/>
        <Container>
            <Form/>
        </Container>
    </Header>


export default CardExampleCard;