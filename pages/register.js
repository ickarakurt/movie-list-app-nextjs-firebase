import Header from '../components/layouts/Header';
import Menu from '../components/Menu';
import firebase from '../firebase';
import { Container } from 'semantic-ui-react'
import RegisterForm from '../components/RegisterForm';


const CardExampleCard = () =>
    <Header>
        <Menu/>
        <Container>
            <RegisterForm/>
        </Container>
    </Header>


export default CardExampleCard;