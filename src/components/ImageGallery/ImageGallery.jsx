import { Component } from "react";
import { requestApi } from 'components/servicis/api'
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import { RotatingLines } from 'react-loader-spinner'
import {ImageGalleryList} from './ImageGallery.styled'
// import { Loader } from "components/Loader/Loader";

export class ImageGallery extends Component {
    state = {
        gallery: [],
        loading: false,
    }

    async componentDidUpdate(prevProps, prevState) {
        console.log(prevProps.searchQuery)
      
        if (prevProps.searchQuery !== this.props.searchQuery || prevProps.page !== this.props.page) {
            this.setState({loading:true})
            const response = await requestApi(this.props.page, this.props.searchQuery)
            this.setState(prevState => ({ gallery: [...prevState.gallery, ...response.hits] }))
            this.setState({loading: false})
            } 
        
    }

    render() {
        const { gallery, loading } = this.state;

        return (
            <div>
            <ImageGalleryList >
            {gallery.map(({ id, webformatURL, largeImageURL }) => (
             <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />))}
                </ImageGalleryList>
            {loading && <RotatingLines  strokeColor="grey" strokeWidth="5" animationDuration="0.75" width="96"  visible={true}/>}
            </div>
           )
          }
}

