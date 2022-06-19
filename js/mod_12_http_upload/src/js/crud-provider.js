
const urlCRUD = 'https://reqres.in/api/users';

export const getUsuario = async ( id ) => {
    const resp = await fetch( `${urlCRUD}/${id}` );
    const { data } = await resp.json();

    return data;
}

export const crearUsuario = async ( usuario ) => {
    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //console.log(await resp.json());
    return await resp.json();
}

export const actualizarUsuario = async ( id, usuario ) => {
    const resp = await fetch( `${urlCRUD}/${id}`, {
        method: 'PUT',
        body: JSON.stringify( usuario ),
        headers: {
            'Content-Type': 'application/json'
        }
    });

    //console.log(await resp.json());
    return await resp.json();
}

export const borrarUsuario = async ( id ) => {
    const resp = await fetch( `${urlCRUD}/${id}`,{
        method: 'DELETE'
    });

    return ( resp.ok ) ? 'Borrado' : 'No se pudo eliminar';
}
