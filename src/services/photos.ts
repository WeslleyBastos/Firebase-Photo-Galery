import { Photo } from "../types/Photo";
import { storage }  from '../libs/firebase'
import { ref, listAll, getDownloadURL, uploadBytes, deleteObject } from 'firebase/storage'
import { v4 as createId } from 'uuid'

//ler as fotos
export const getAll = async () => {
    let list: Photo[] = [];

    const imagesFolder = ref(storage, "images");
    const photoList = await listAll(imagesFolder);
    
    for(let i in photoList.items){
        let photoUrl = await getDownloadURL(photoList.items[i]);
        
        list.push({
            name: photoList.items[i].name,
            url: photoUrl
        });
    }

    return list;
}

//envia as fotos

export const Insert = async (file:File) => {

    if(['image/jpeg', 'image/jpg', 'image/png'].includes(file.type)){

        //firebase9 usa o uploadBytes onde é necessário informar a referência
        //usando o uuid para criar a refeência de nome composta e exigida no firebase

        let randomName = createId(); 
        let newFIle = ref(storage, `images/${randomName}`);

        let upload = await uploadBytes(newFIle, file);
        let photoUrl = await getDownloadURL(upload.ref);
        //depois do upload do arquivo vai ter dois dados que pode ser um meta data e um ref do arquivo upado no firebase
        
        return {name: upload.ref.name, url: photoUrl} as Photo;
    
    } else {
        return new Error('Tipo do arquivo não suportado.');
    }
}

export const deletePhoto = async (name: string) => {
    let photoRef = ref(storage, `images/${name}`);
    await deleteObject(photoRef);
}