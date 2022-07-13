const fs= require('fs');

class Contenedor {
    constructor(){
        this.route= './producto.txt';
        this.id= 1;
    }

    save(x){
    let array=[];
    let object=x;
        object.id= this.id;
            try{
                
                let data = fs.readFileSync(this.route,'utf-8');
                array = JSON.parse(data);
                console.log("Ingreso por TRY");
                
            }
            catch{
                console.log("catch error"); 
            }
        
    array.push(object);
            
    fs.writeFileSync(this.route,JSON.stringify(array, null, 2));
    this.id++;
    }

    getById(x){
        let array= [];
        let y = x;
        try{
            let data = fs.readFileSync(this.route,'utf-8');
            array = JSON.parse(data);
            console.log("Ingreso por TRY");
        }
        catch{
            console.log("catch error"); 
        }
        
        let object= null

        array.forEach(element => {
                if(element.id == y){
                object = element;
                }
            });
        
        console.log(object);
        return object;
    }

    getAll(){
        let array= [];
        try{
            let data = fs.readFileSync(this.route,'utf-8');
            array = JSON.parse(data);
            console.log("Ingreso por TRY");
        }
        catch{
            console.log("catch error"); 
        }
        console.log(array);
        return array;
    }

    deleteById(x){
        let array= [];
        let y = x;
        try{
            let data = fs.readFileSync(this.route,'utf-8');
            array = JSON.parse(data);
            console.log("Ingreso por TRY");
        }
        catch{
            console.log("catch error"); 
        }
        
        
        array.forEach(element => 
            {
        
                if(element.id == y)
                {
                    let id = element.id - 1
                    let removed = array.splice(id, 1);
                    console.log("ELEMENTO ELIMINADO: " + JSON.stringify(removed));
                    fs.writeFileSync(this.route,JSON.stringify(array, null, 2))  
                    console.log(array);  
                }
            });
    }

    deletAll(){
        let array= []
        
        try{
            let data = fs.readFileSync(this.route,'utf-8');
            array = JSON.parse(data);
            console.log("Ingreso por TRY");
        }
        catch{
            console.log("catch error"); 
        }
        console.log(array);
        array =[]
        console.log(array);
        fs.writeFileSync(this.route,JSON.stringify(array, null, 2));

    }

}

module.exports =  Contenedor 

const contenedor= new Contenedor();
const producto1 = {title:"Heladera", price:93000, thumbnail:"https://i.ibb.co/CKb8YFs/heladera.jpg"};
const producto2 = {title:"Cocina", price:57000, thumbnail:"https://i.ibb.co/V9fv1T5/cocina.jpg"};
const producto3 = {title:"Lavarropas", price:72000, thumbnail:"https://i.ibb.co/9czd57T/lavarropas.jpg"};

contenedor.save(producto1);
contenedor.save(producto2);
contenedor.save(producto3);
contenedor.save(producto2);

contenedor.getById(2);
contenedor.getById(4);
contenedor.getById(10);

contenedor.getAll();

contenedor.deleteById(1);

// contenedor.deletAll();