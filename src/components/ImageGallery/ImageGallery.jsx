import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem'
import { Loader } from 'components/Loader/Loader'
import { ImageGalleryList, Wrapper } from './ImageGallery.styled'

export const ImageGallery =({ gallery, loading })=> {
           return (
            <Wrapper>
                <ImageGalleryList >
                    {gallery.map(({ id, webformatURL, largeImageURL }) => (
                        <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />))}
                </ImageGalleryList>
                {loading && <Loader/>}
            </Wrapper>
        )

    }



// export class ImageGallery extends Component {
    // state = {
    //     gallery: [],
    //     loading: false,
    // }

    // async componentDidUpdate(prevProps, prevState) {
     
    //     if (prevProps.searchQuery !== this.props.searchQuery) {
    //         this.setState({ loading: true })
    //         const response = await requestApi(this.props.page, this.props.searchQuery)
    //         if(response.hits.length >0){this.setState(prevState => { return { gallery: [...response.hits], loading: false } })} 
    //         else {this.setState(prevState => { return { gallery: [], loading: false } })
    //             alert('Sorry, there are no images matching your search query. Please try again.')}
    //            }

    //     if (prevProps.page !== this.props.page) {
    //          this.setState({ loading: true })
    //         const response = await requestApi(this.props.page, this.props.searchQuery)
    //         console.log(response)
    //          this.setState(prevState => { return { gallery: [...prevState.gallery, ...response.hits], loading: false } })
    //     }
       
    // }

//     render() {
//         const { gallery, loading } = this.props;

//         return (
//             <Wrapper>
//                 <ImageGalleryList >
//                     {gallery.map(({ id, webformatURL, largeImageURL }) => (
//                         <ImageGalleryItem key={id} id={id} webformatURL={webformatURL} largeImageURL={largeImageURL} />))}
//                 </ImageGalleryList>
//                 {loading && <Loader/>}
//             </Wrapper>
//         )
//     }
// }

