

export const fileUpload = async(file)=>{

    if(!file) throw new Error('Imagen es requerida');
    const cloudUrl = 'https://api.cloudinary.com/v1_1/cpandares/upload';

    const formData = new FormData();
    formData.append('upload_preset','journal-app');
    formData.append('file', file);

    try {
        const resp = await fetch(cloudUrl,{
            method:'POST',
            body: formData
        });

        console.log(resp);
        if(!resp.ok) throw new Error('No se subio imagen');

        const cloudResp = await resp.json();


        return cloudResp.secure_url;
        
    } catch (error) {
        console.log(error)
        throw new Error(error.message)
    }

}