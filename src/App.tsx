import { useState, useEffect, FormEvent } from 'react';
import * as C from './App.styles';
import * as Photos from './services/photos';
import { Photo } from './types/Photo';
import { PhotoItem } from './components/PhotoItem';
import Loader from "react-loader-spinner";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [uploading, setUploading] = useState(false);

  useEffect(()=>{
    getPhotos();
  }, []);

const getPhotos = async () => {
    setLoading(true);
    setPhotos(await Photos.getAll());
    setLoading(false);
  }

  const hendleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const file = formData.get('image') as File;

    if(file && file.size > 0) {
      setUploading(true);
      let result = await Photos.Insert(file);
      //fazendo upload do arquivo
      setUploading(false);

      if(result instanceof Error){
        alert(`${result.name} - ${result.message}`)
      }else{
        let newPhotoList = [...photos];
        newPhotoList.push(result);
        setPhotos(newPhotoList);
      }
    }
  }

  const handleDeleteClick = async (name: string) => {
    await Photos.deletePhoto(name);
    getPhotos();
  }

  return(
  <C.MainContainer>
    <C.Container>
      <C.Area>
        <C.Header><h1>Photo Gallery on Firebase</h1></C.Header>
      
      <C.UploadForm method='POST' onSubmit={hendleFormSubmit}>
        <input type="file" name="image"/>
        <input type='submit' value='Enviar'/>
        {uploading && <Loader type="Bars" color="#007953" height={20} width={20}/>}
      </C.UploadForm>

      {loading &&
        <C.ScreenWarning>
          <div className = "emoji">✋</div>
          <div>
          <Loader type="Bars" color="#007953" height={80} width={80}/>
      </div>
          </C.ScreenWarning>
      }

      {!loading && photos.length > 0 &&
        <C.PhotoList>
          {photos.map((item, index) =>(
            <PhotoItem key={index} url={item.url} name ={item.name} onDelete={handleDeleteClick}/>
          ))}

        </C.PhotoList>

      }
      {!loading && photos.length === 0 &&
        
        <C.ScreenWarning>
        <div className = "emoji">😉</div>
        <div><Loader type="Bars" color="#756DF4" height={80} width={80}/></div>
        </C.ScreenWarning>
      }
      </C.Area>
    </C.Container>
  </C.MainContainer>
  )
}
export default App;