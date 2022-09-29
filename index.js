// sweet alert

let alerta = document.getElementById("1")
 
alerta.addEventListener("click", () => {
    Swal.fire({
        title: 'Bienvenido',
        showClass: {
          popup: 'animate__animated animate__fadeInDown'
        },
        hideClass: {
          popup: 'animate__animated animate__fadeOutUp'
        }
      })
})

let botonImagen = document.getElementById("4")

botonImagen.addEventListener("click", () => {
    Swal.fire({
        title: 'Los Redondos en concierto',
        text: 'Obras 1991',
        imageUrl: 'https://imagenes.elpais.com/resizer/syDae4rERf2c9GmNAzVXRv2Zk7k=/1960x1470/arc-anglerfish-eu-central-1-prod-prisa.s3.amazonaws.com/public/GSAARIWEZF7YS4C5EC77BPJIWI.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
})

const link = document.getElementById("2")

link.addEventListener("click", () => {
    Swal.fire({
        title: 'los REDO',
        width: "700",
        padding: '7em',
        color: 'rgb(255, 255, 255)',
        background: '#fff url("https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2021/08/6109b229da8a7_900.jpg")',
        backdrop: `
          rgba(0,0,123,0.4)
          url("https://i.pinimg.com/originals/5a/9a/86/5a9a86afeeaff57f5f0349828273f48b.gif")
          left top
          no-repeat
        `
      })
})

// toastify

const Uno = document.getElementById("6")

const Dos = document.getElementById("7")

Uno.addEventListener ("click", () => {
    Toastify({
        text: "https://www.instagram.com/indiosolarioficial/",
        duration: 7000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function(){} // Callback after click
      }).showToast();
})

Dos.addEventListener("click", () => {
    Toastify({
        text: "https://twitter.com/Indio_Solari_ok",
        offset: {
          x: 50, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
          y: 5 // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
      }).showToast()
})