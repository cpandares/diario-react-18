import { v2 as cloudinary } from 'cloudinary'
import { fileUpload } from "../../src/helpers/fileUpload"


cloudinary.config({ 
    cloud_name: 'cpandares', 
    api_key: '171314727848837', 
    api_secret: 'e0rUQjGq4x2U67bozeA9jR1GuBg',
    secure: true
  });

describe('Test file Upload',()=>{

    test('Subiendo imagen a cloudinary', async()=>{           
        
        const imageUrl = 'https://res.cloudinary.com/cpandares/image/upload/v1657307470/blog-laravel/cosi2oybjeggnzm8chug.jpg';

        const resp = await fetch(imageUrl);
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );

        expect( typeof url ).toBe('string');

       const segments = url.split('/');
       /* console.log(segments); */
        const imageId = segments[ segments.length - 1 ].replace('.jpg', '');

       const cloudResp = await cloudinary.api.delete_resources([ 'journal/' + imageId], {resource_tyoe: 'image'})
      /*  console.log(cloudResp) */

    }) 

    test('Debe retornar null', async()=>{        
        
       
        const file = new File([], 'foto.jpg');

        const url = await fileUpload( file );

        expect( url ).toBe(null);

    }) 
})