const nombre = document.querySelector('#name')
const telefono = document.querySelector('#phone')
const correo = document.querySelector('#email')
const calle = document.querySelector('#street')
const ciudad = document.querySelector('#city')
const pais = document.querySelector('#country')
const codigo = document.querySelector('#postalcode')

const btn = document.querySelector('#btn')

btn.addEventListener( 'click', ()=>{
      
       nombrec = String(nombre.value).toUpperCase()
       tel = Number(telefono.value)
       mail = String(correo.value)
       cal = String(calle.value)
       cid = String(ciudad.value)
       d_p = String(pais.value)
       c_p = String(codigo.value)
      
       alert(`HOLA!!, ${nombrec}, SE HA REALIZADO LA COMPRA SATISFACTORIAMENTE!!, con su telefono ${tel},
       su correo ${mail}, su direccion ${cal}, en la ciudad ${cid}, del pais ${d_p} y con codigo postal ${c_p}`);
       
         
})


