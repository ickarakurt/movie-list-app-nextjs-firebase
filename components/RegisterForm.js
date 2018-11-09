import { Button, Checkbox, Form } from 'semantic-ui-react'
import firebase from '../firebase';

export default class RegisterForm extends React.Component{

    submitForm = event =>{
        event.preventDefault();
        const data = new FormData(event.target);
        const email = data.get('email');
        const password = data.get('password');
        const password2 = data.get('password2');
        const checkbox = data.get('checkbox');
        if(checkbox == null){
            alert("agreement error");
        }else{
            if(password != password2){
                console.log("passwords are different");
            }else{
                const promise = firebase.auth().createUserWithEmailAndPassword(email, password);
                promise.then((data)=> alert("Success")).catch(function(error) {
                    console.log(error.message); 
                })
            }
        }
       

        }

    render() {
        return(
            <div>
                <Form style={{ marginTop: '100px' }} onSubmit={this.submitForm.bind(this)}>
                    <Form.Field>
                        <label>UserName</label>
                        <input placeholder='email' name='email' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input type='password' name='password' placeholder='password' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password Again</label>
                        <input type='password' name='password2' placeholder='password again' />
                    </Form.Field>
                    <Form.Field>
                        <Checkbox name='checkbox' label='I agree to the Terms and Conditions' />
                    </Form.Field>
                    <Button>Register</Button>
                </Form>

            </div>
            )
}
}


