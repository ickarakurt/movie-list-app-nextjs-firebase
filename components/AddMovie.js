import { Button, Checkbox, Form ,Grid , Segment } from 'semantic-ui-react'
import firebase from '../firebase';
import axios from 'axios';
import Movie from '../components/Movie';

export default class addMovie extends React.Component{

    state = {
        results : [],
    }


    changeName = (event) => {
        event.preventDefault();
        axios.get('http://www.omdbapi.com/?s=' + event.target.value  + '&apikey=a04189ec')

        .then( (response) => {
            if(response.data.Search){
               this.setState({results : response.data.Search});
            }
        })  
        .catch( error => {
            console.log(error);
        });

    }

    
    

    render() {
        return(
            <div>
                <Form style={{ marginTop: '100px' }} >
                    <Form.Field>
                        <label>Movie Name</label>
                        <input placeholder='type movie name...'  onChange={this.changeName}  name='movieName' />
                    </Form.Field>              
                </Form>
                <Grid style={{ marginTop: '100px' }} columns={3} doubling>

                {this.state.results.map((movie) => {
                    return(
                        <Grid.Column><Segment>
                  <Movie key={movie.imdbID} movie={movie} />
                  </Segment>
                 </Grid.Column>
                  )}
                 )}
                 </Grid>
            </div>
            )
}
}


