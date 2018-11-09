import { Button, Checkbox, Form } from 'semantic-ui-react'
import firebase from '../firebase';
import {getCookie,setCookie} from '../helpers/cookie_helper';

export default class FormExampleForm extends React.Component{

    state = {
        email : "",
    };

    componentDidMount(){
        if(getCookie('email') != null){
            this.setState({email : getCookie('email')});
        }else{
            this.setState({email : ""});
        }
    }

    submitForm = event =>{
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get('email');
        const password = data.get('password');
        const checkbox = data.get('checkbox');
        if(checkbox != null){
            setCookie("email",email,1);
            this.setState({email});
        }
        const promise =  firebase.auth().signInWithEmailAndPassword(email, password);
        promise.then((data)=> {
            alert("basarili");
        })      
        .catch(function(error) {
            console.log(error); 
        })
        }
    render (){
        return(
        <div>
        <Form style={{ marginTop: '100px' }} onSubmit={this.submitForm.bind(this)}>
            <Form.Field>
                <label>UserName</label>
                <input id='email' name='email' placeholder='email' defaultValue={this.state.email}/>
            </Form.Field>
            <Form.Field>
                <label>Password</label>
                <input id='password' name='password' type='password' placeholder='password' />
            </Form.Field>
            <Form.Field>
                <Checkbox id='checkbox' name='checkbox' label='Remember me' />
            </Form.Field>
            <Button>Login</Button>
        </Form>

        </div>)
};

}

