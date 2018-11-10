import { Card, Icon, Image } from 'semantic-ui-react'

export default class RegisterForm extends React.Component{
  
    render(){
      console.log(this.props.movie);
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
          <a>
            <Icon name='add' />
            Add Your List
          </a>
        </Card.Content>
      </Card>
      );
    }
  
  }

