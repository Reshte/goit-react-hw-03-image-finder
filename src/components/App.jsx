// import PropTypes from 'prop-types'
import { Searchbar } from "./Searchbar/Searchbar";
import { Wrapper } from './App.styled'
import { Component } from "react";
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'


export class App extends Component{

  state = {
    searchQuery: null,
    page: 1,
  }
  
  handelFormSbmit = (searchQuery) => {
   this.setState({ searchQuery })
  }

  LoadMore = () => {
    this.setState(prevState => { return {page: prevState.page + 1} })
  }
 
  render() {
    console.log(this.state)
    
    const { searchQuery, page } = this.state
        return (
    <Wrapper>
        <Searchbar onSubmit={this.handelFormSbmit} />
            <ImageGallery searchQuery={searchQuery} page={page} />
            <Button onClick={this.LoadMore} /> 
            {/* <Searchbar />
      
      <ImageGalleryItem />
      <Loader />
      <Button /> 
      <Modal />*/}
    </Wrapper>)
  }

}



