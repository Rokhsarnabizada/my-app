import{useState} from 'react';
import Data from './Data.js';
// import '/App.css';

export default function Gallery() {

    const [img, setImg]=useState(Data[0].image);
    const [images]=useState(Data);




    function handleImgChange(e){
      setImg(e.target.src);
    }
   const imgList = images.map((imgGallery)=>{

    const {image,id ,desc}=imgGallery;

    return (
      <img 
      onClick={handleImgChange}
      key={id} src={imgGallery.Image}  alt={desc}
      /> 
    )
  })



  return(
    <div className='gallery'>
      <div className='main-img'>
        <img src={img} alt=""/>
        </div>

        <div className='thumbnails'>
        {imgList}

      </div>

    </div>
   )
}
    
  

   

