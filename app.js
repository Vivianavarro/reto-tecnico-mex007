const bands = [
"The Plot in You",
"The Devil Wears Prada",
"Pierce the Veil",
"Norma Jean",
"The Bled",
"Say Anything",
"The Midway State",
"We Came as Romans",
"Counterparts",
"Oh, Sleeper",
"A Skylit Drive",
"Anywhere But Here",
"An Old Dog"];

//Remplazando los artículos por un espacio vacío
newOrder = (band) => {
    return band.replace( /(An?|The)\s/g, '' );
}; 

//Tomando el remplazo de los artículos por espacio vacío, se ordena con prámetro de a - b
const order = bands.sort((a, b) => {
     if(newOrder(a) > newOrder(b)){ return 1}
         else { return -1
}
 });

 //creando un nuevo array con los resultados del nuevo orden, y separandolos con join
 const print = order.map(band => 
     `<li id="table">${band}</li>`).join('');

     //imprimiendo
document.write(print);
console.log(print);