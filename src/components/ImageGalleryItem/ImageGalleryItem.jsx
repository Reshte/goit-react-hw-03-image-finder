import {ItemGallery, ImgGallery} from "./ImageGalleryItem.styled";


export const ImageGalleryItem = ({ id, webformatURL, modalShow, value }) => {
   return (  
      <ItemGallery key={id} onClick={() => modalShow(value)}  >
      <ImgGallery src={webformatURL} alt="" />
</ItemGallery>)  
    }