const Item=[{
    id:1,
    nombre: "Zapatos blancos",
    img:"https://ae01.alicdn.com/kf/HTB1BYpWoPnD8KJjSspbq6zbEXXaH/Zapatos-blancos-con-cordones-para-mujer-tenis-femeninos-de-cuero-PU-y-lona-de-color-s.jpg_Q90.jpg_.webp",
    category: "Casual",
    stock: 30,
    detail: "Zapatos blancos casuales para salir",
    price: "30 USD"
},

{
    id:2,
    nombre: "Zapatos negros",
    img:"https://m.media-amazon.com/images/I/61odepX23WL._AC_UY395_.jpg",
    category: "Casual",
    stock: 20,
    detail: "Zapatos negros para uso diario",
    price: "20 USD"
},

{
    id:3,
    nombre: "Zapatos formales",
    img:"https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_600,h_550/https://shopyshopco.com.co/masculino/wp-content/uploads/2021/03/color-negro-zapato-formal-5-600x550.jpg",
    category: "Formal",
    stock: 10,
    detail: "Zapatos de cuero negros para ocasiones formales",
    price: "50 USD"
},

{
    id:4,
    nombre: "Zapatos deportivos",
    img:"https://cdn.koaj.co/92003-thickbox_default/tenis-deportivos.jpg",
    category: "Casual",
    stock: 20,
    detail: "Zapatos para senderismo",
    price: "30 USD"
},

{
    id:5,
    nombre: "Sandalias",
    img:"https://i.ebayimg.com/thumbs/images/g/TS4AAOSw4lZiQSIJ/s-l300.jpg",
    category: "Casual",
    stock: 20,
    detail: "Sandalias para comodidad",
    price: "20 USD"
}]

const obtenerFetch= new Promise((result, reject)=>{
    let condition=true

    if(condition){
        setTimeout(()=> {
            result(Item)
        }, 2000);
    }else{
        reject(console.log("No hay datos"))
    }
})

export default obtenerFetch;

export const getItemByCategory = (categoryId) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(Item.filter(prod => prod.category===categoryId))
        }, 1000)
    })
}

export const getItemById = (productId) => {
    return new Promise(resolve => {
        setTimeout(()=> {
            resolve(Item.find(it => it.id===parseInt(productId)));
        }, 500)
    })
}