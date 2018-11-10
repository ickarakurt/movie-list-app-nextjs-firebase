import { Card, Icon, Image } from 'semantic-ui-react'
import firebase from '../firebase';



export default class RegisterForm extends React.Component{
  
    addList = (event) => {
      event.preventDefault();
      const movies = firebase.database().ref("movies/" + firebase.auth().currentUser.uid);
      const promise =  movies.push({
        movie_id : this.props.movie.imdbID
      });
      promise.then(()=>{
        console.log("success");
      })
      .catch((err) => console.log(err));
    }

    render(){
      return(
        <Card>
        <Image src={this.props.movie.Poster == "N/A" ? "https://vignette.wikia.nocookie.net/creepypasta/images/a/a6/Image-not-found.gif" : this.props.movie.Poster} />
        <Card.Content>
          <Card.Header>{this.props.movie.Title}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.movie.year}</span>
          </Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a data={this.props.movie.key} onClick={this.addList}>
            <Icon name='add' />
            Add Your List
          </a>
        </Card.Content>
      </Card>
      );
    }
  
  }

