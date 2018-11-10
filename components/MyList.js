import { Grid , Segment } from 'semantic-ui-react'
import firebase from '../firebase';
import axios from 'axios';
import Movie from '../components/Movie';

export default class addMovie extends React.Component{

    state = {
        results : [],
    }

    
    
    componentDidMount(){

        let movie_list = [];

        const arrayPush = movie_id => {
            axios.get("http://www.omdbapi.com/?i=" + movie_id  + "&apikey=a04189ec")

            .then( (response) => {
                movie_list.push(response.data);
            })  
            .catch( error => {
                console.log(error);
            }).finally(()=>{
                this.setState({results : movie_list});
            });
        }

        const ref = firebase.database().ref("movies/" + firebase.auth().currentUser.uid);
        ref.on("value", function(snapshot) {
            Object.keys(snapshot.val()).map((id) => {
                arrayPush(snapshot.val()[id].movie_id)
            }); 
        }, function (error) {
           console.log("Error: " + error.code);
        });
        console.log(this.state.results);
        console.log(movie_list);


    }

    render() {
        return(
            <div> 
                <Grid style={{ marginTop: '100px' }} columns={3} doubling>

                    {
                        this.state.results.map((movie) => {
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


