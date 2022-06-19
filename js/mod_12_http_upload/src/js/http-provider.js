//? 141 centralizar las peticiones HTTP
const jokeUrl     = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Cloudinary 
const cloudPreset = 'n7kjmf7r';
const cloudUrl = 'https://api.cloudinary.com/v1_1/jeremias256/upload';


export const obtenerChiste = async ( ) => {
    try{
        const resp = await fetch( jokeUrl );
        //* const chiste = await resp.json()
        //* return chiste
        //* return await resp.json();
        const { icon_url, id, value } = await resp.json();
        return{ icon_url, id, value }
        //*return {
        //*    icon_url:icon_url,
        //*    id:id,
        //*    value:value
        //*}
    } catch( err ){
        throw err;   
    }
    
    
}
//? 141 centralizar las peticiones HTTP

//? 143 Obtener lista de usuario
export const obtenerUsuarios = async () => {
    //try - catch
    const resp = await fetch(urlUsuarios);
    const { data:usuarios } = await resp.json();
    return usuarios;

}

//? 143 Obtener lista de usuario

//? 151 UPLOAD cloudinary
//! archivoSubir :: File
export const subirImagen = async ( archivoSubir ) => {
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try{
        const resp = await fetch( cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(resp.ok){
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }

    } catch(err){
        throw err;
    }

}
//? 151 UPLOAD cloudinary