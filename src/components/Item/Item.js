const Item=[{
    id:1,
    nombre: "Zapatos-blancos",
    img:"https://ae01.alicdn.com/kf/HTB1BYpWoPnD8KJjSspbq6zbEXXaH/Zapatos-blancos-con-cordones-para-mujer-tenis-femeninos-de-cuero-PU-y-lona-de-color-s.jpg_Q90.jpg_.webp",
    category: "Casual",
    stock: 30
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