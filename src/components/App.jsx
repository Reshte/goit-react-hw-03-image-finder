// import PropTypes from 'prop-types'
import { Searchbar } from "./Searchbar/Searchbar";
import { Wrapper } from './App.styled'
import { Component } from "react";
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import { requestApi } from 'components/servicis/api'
import toast, { Toaster } from 'react-hot-toast';




export class App extends Component{

  state = {
    searchQuery: '',
    page: 1,
    gallery: [],
    loading: false,
    isLoadmore:false,
    }
  
  handelFormSbmit = (searchQuery) => {
    if(searchQuery.searchQuery.length>0){this.setState({ searchQuery })}else{toast("Enter something")}
  }
  
  async componentDidUpdate(prevProps, prevState) {
     
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.setState({ loading: true, isLoadmore:false })
          const response = await requestApi(this.state.page, this.state.searchQuery)
          
              if(response.hits.length >0){this.setState(prevState => { return { gallery: [...response.hits], loading: false, isLoadmore: true } })} 
              else {this.setState(prevState => { return { gallery: [], loading: false, searchQuery: '' } })
                toast('Sorry, there are no images matching your search query. Please try again.')
                return
            }
        }

        if (prevState.page !== this.state.page) {
             this.setState({ loading: true })
            const response = await requestApi(this.state.page, this.state.searchQuery)
            this.setState(prevState => { return { gallery: [...prevState.gallery, ...response.hits], loading: false, isLoadmore: true } })
        }
       
    }

  LoadMore = () => {
      this.setState(prevState => { return { page: prevState.page + 1 } 
     })
  }
 
  render() {
      console.log(this.state)
    const {isLoadmore, gallery, loading} = this.state
        return (
    <Wrapper>
            <Searchbar onSubmit={this.handelFormSbmit} />
            <Toaster  position="top-right" reverseOrder={false} />
             {gallery.length>1 && <ImageGallery  gallery={gallery} loading={loading} />}
            {isLoadmore && (<Button onClick={this.LoadMore}/>)} 
    </Wrapper>)
  }

}


// searchQuery={searchQuery} page={page}


