async function consulta_perfil()
{
    let resultado = await fetch('https://randomuser.me/api/?nat=us&gender=male')
                          .then(response => response.json())
                          .then(data => data)
    foto.src = resultado.results[0].picture.large;
    document.getElementById('nombreApellido').innerHTML = resultado.results[0].name.first+' '+resultado.results[0].name.last;
    document.getElementById('nacionalidad').innerHTML = resultado.results[0].nat;
    document.getElementById('pais').innerHTML = resultado.results[0].location.country;
    document.getElementById('ciudad').innerHTML = resultado.results[0].location.city;
    document.getElementById('edad').innerHTML = resultado.results[0].dob.age;
}
consulta_perfil();

const texto=document.getElementById('ad');

const boton_adicional=document.getElementById('boton');

texto.style.display='none';
texto.style.margin='0px';

boton_adicional.addEventListener('click', cambiar);

function cambiar()
    {
        if(texto.style.display != 'block')
        {
            texto.style.display='block';
            boton_adicional.style.backgroundColor= '#ededed';
            boton_adicional.style.color='darkgreen';
            boton_adicional.style.borderBlockColor='darkgreen';
            boton_adicional.innerHTML='Ocultar Información';
            boton_adicional.addEventListener('click', cambiar);
        }
        else{
            texto.style.display='none';
            boton_adicional.style.color='white';
            boton_adicional.style.backgroundColor='darkgreen'
            boton_adicional.innerHTML='Mostar Información';
            boton_adicional.addEventListener('click', cambiar);
        }
    }