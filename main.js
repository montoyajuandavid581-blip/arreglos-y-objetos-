function saludaraprendices() {
    let aprendices = ["juanfer", "pulgar", "hoyos", "guillen", "richard", "loquito", "daniel", "erika"];
    console.log("l");
    
    console.log(" Arreglo completo:", aprendices);

    console.log(" Primer estudiante:", aprendices[0]);

    console.log(" Tercer estudiante:", aprendices[2]);

    //  Mostrar el último estudiante utilizando length
    console.log(" Último estudiante:", aprendices[aprendices.length - 1]);

    //  Mostrar la cantidad total de estudiantes
    console.log(" Cantidad total de estudiantes:", aprendices.length);

    console.log("6. Recorrido del arreglo:");
    for (let i = 0; i < aprendices.length; i++) {
        console.log("Posición " + i + ": " + aprendices[i]);
    }

    let nuevoEstudiante = prompt("Ingresa el nombre del nuevo estudiante a agregar:");
    if (nuevoEstudiante && nuevoEstudiante.trim() !== "") {
        aprendices.push(nuevoEstudiante);
        console.log(" Se agregó a:", nuevoEstudiante);
    } else {
        console.log(" No se ingresó ningún nombre válido.");
    }

    console.log(" Nueva cantidad total de estudiantes:", aprendices.length);

    let buscarEstudiante = prompt("Ingresa el nombre del estudiante que deseas buscar:");
    if (buscarEstudiante) {
        if (aprendices.includes(buscarEstudiante)) {
            console.log("9. El estudiante " + buscarEstudiante + " SÍ se encuentra registrado.");
        } else {
            console.log("9. El estudiante " + buscarEstudiante + " NO se encuentra registrado.");
        }
    }

    //  Mostrar el listado actualizado
    console.log("10. Listado actualizado completo:", aprendices);
}
function mercados(){
    let productos = ["Arroz", "Leche", "Café", "Pan", "Azúcar"];
    console.log(productos);

    
    console.log(" cambio del segundo producto");

    productos[1]= "aceite";
    console.log(" añadir  producto al final");
    productos.push("carne")
    console.log(" añadir  producto al inicio");
    productos.unshift("gaseosa");
    console.log(productos);
    let buscarpr = prompt("Ingresa el nombre del producto :");
    if (buscarpr) {
        if (productos.includes(buscarpr)) {
            console.log(" el producto " + buscarpr + " SÍ se encuentra registrado.");
            
    let posicion=productos.indexOf(buscarpr);
    console.log("El producto " + buscarpr + " fue encontrado en la posición " + posicion);
        } else {
            console.log(" el producto " + buscarpr + " NO se encuentra registrado.");
        }
    }
    }
function ciudadedecolombia() {
    let ciudades=['MEDELLIN','BOGOTA','CALI','PEREIRA','BARRANQUILLA','CAERTAGENA'];
    console.log(ciudades);
    console.log("eliminacion con pop");

    ciudades.pop();
    console.log(ciudades);
    console.log("eliminacion con shift");
    ciudades.shift();
    console.log(ciudades);
    console.log("eliminacion del indice numero ");
    
    ciudades.splice(3);
    console.log(ciudades);
    console.log('se agregan dos ciudades mas ');
    ciudades.push("madrid",'tunja');
    console.log('muestra cuantas ciudades estan registradas');
    
    console.log(ciudades.length);
    console.log("9. Listado enumerado de ciudades:");
    for (let i = 0; i < ciudades.length; i++) {

        console.log((i + 1) + ". " + ciudades[i]);
    }
    let buscarCiudad = prompt("Ingresa el nombre de la ciudad que deseas consultar:");
    if (buscarCiudad) {
        if (ciudades.includes(buscarCiudad)) {
            console.log("10. La ciudad " + buscarCiudad + " SÍ se encuentra registrada en el arreglo.");
        } else {
            console.log("10. La ciudad " + buscarCiudad + " NO se encuentra registrada en el arreglo.");
        }
    }
    
    
    
}
function busquedaaprendices () {
    let aprendices = ["juanfer", "pulgar", "hoyos", "guillen", "richard", "loquito", "daniel", "erika"];
    
    let nombreBuscado = prompt("Ingresa el nombre del estudiante que deseas buscar:");
    let existente = aprendices.includes(nombreBuscado);
    let posicion = aprendices.indexOf(nombreBuscado);
    
    if (existente) {
        alert("El estudiante " + nombreBuscado + " sí fue encontrado. Se encuentra en la posición: " + posicion);
        console.log("El estudiante " + nombreBuscado + " fue encontrado en la posición " + posicion);
    } else {
        alert("Lo sentimos, el estudiante " + nombreBuscado + " no fue encontrado");
        console.log("El estudiante " + nombreBuscado + " no se encuentra en el arreglo");
    }
    
    let segundoNombre = prompt("Ingresa un segundo nombre para realizar una nueva búsqueda:");
    if (segundoNombre) {
        // Corregido: se usa 'aprendices' en lugar de 'estudiantes'
        if (aprendices.includes(segundoNombre)) {
            let posSegundo = aprendices.indexOf(segundoNombre);
            console.log("Segundo nombre encontrado " + segundoNombre + " está en la posición " + posSegundo);
        } else {
            console.log("6. El segundo nombre " + segundoNombre + " NO fue encontrado en el arreglo.");
        }
    }
    
    let letra = prompt("7. Ingresa una letra para contar cuántos estudiantes empiezan con ella:");
    let contador = 0;
    if (letra) {
        letra = letra.toLowerCase();
        // Corregido: se usa 'aprendices'
        for (let i = 0; i < aprendices.length; i++) {
            if (aprendices[i].toLowerCase().startsWith(letra)) {
                contador++;
            }
        }
        console.log("7. Hay " + contador + " estudiante(s) cuyo nombre comienza con la letra '" + letra + "'.");
    }

    console.log("8. Listado de todos los estudiantes actuales:");
    // Corregido: se usa 'aprendices'
    for (let i = 0; i < aprendices.length; i++) {
        console.log("Posición " + i + ": " + aprendices[i]);
    }

    let nuevoEstudiante = prompt("9. Ingresa el nombre de un nuevo estudiante a verificar y registrar:");
    if (nuevoEstudiante && nuevoEstudiante.trim() !== "") {
        // Corregido: se usa 'aprendices'
        if (!aprendices.includes(nuevoEstudiante)) {
            aprendices.push(nuevoEstudiante);
            console.log("9. El estudiante no estaba registrado. ¡Ha sido agregado exitosamente!");
        } else {
            console.log("9. El estudiante ya existe en la lista, por lo que no se agregó de nuevo.");
        }
    }

    console.log("10. --- LISTADO ACTUALIZADO ---");
    // Corregido: se usa 'aprendices'
    for (let i = 0; i < aprendices.length; i++) {
        console.log("Posición " + i + ": " + aprendices[i]);
    }
    console.log("10. Cantidad total de estudiantes registrados: " + aprendices.length);
}
function analizarNumeros() {
    // Definimos el arreglo original de números
    let original = [12, -3, 0, 45, 8, -15, 22, 7, 19, 4];
    let numeros = [...original]; // Copia para trabajar

    console.log(" Arreglo original:", original);

    // 1 y 2. Recorrer el arreglo utilizando for y mostrar todos los números
    console.log("  Recorrido y visualización");
    for (let i = 0; i < numeros.length; i++) {
        console.log("Posición " + i + ": " + numeros[i]);
    }

    // 3. Calcular la suma de los elementos
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    console.log(" Suma total ");
    console.log("La suma de los elementos es: " + suma);

    // 4. Calcular el promedio
    let promedio = suma / numeros.length;
    console.log("  calcular el Promedio");
    console.log("El promedio es: " + promedio);

     console.log("Contar cuántos números son pares e impares");
    let pares = 0;
    let impares = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares++;
        } else {
            impares++;
        }
    }
    console.log(" Pares e Impares ");
    console.log("Cantidad de números pares: " + pares);
    console.log("Cantidad de números impares: " + impares);

    console.log("miramos cual es el mayor y el menor de los numeros en los arreglos");
    
    let mayor = numeros[0];
    let menor = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        if (numeros[i] < menor) {
            menor = numeros[i];
        }
    }

    console.log("El número mayor es: " + mayor);
    console.log("El número menor es: " + menor);

    console.log("cuantos numeros son positivos y negativos  ");
    
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > 0) {
            positivos++;
        } else if (numeros[i] < 0) {
            negativos++;
        } else {
            ceros++;
        }
    }

    console.log("Positivos: " + positivos);
    console.log("Negativos: " + negativos);
    console.log("Ceros: " + ceros);


    console.log(" Números mayores que el promedio " + promedio );
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > promedio) {
            console.log(numeros[i]);
        }
    }


    let entrsuario = prompt(" Ingresa un número para verificar si está en el arreglo:");
    if (entrsuario !== null && entrsuario.trim() !== "") {
        let numeroBuscado = Number(entrsuario);
        if (numeros.includes(numeroBuscado)) {
            console.log("9. El número " + numeroBuscado + " SÍ se encuentra en el arreglo.");
        } else {
            console.log("9. El número " + numeroBuscado + " NO se encuentra en el arreglo.");
        }
    }

    
    let copiaInversa = [...numeros];
    copiaInversa.reverse();
    console.log("--- 10. Orden inverso con reverse() ---");
    console.log(copiaInversa);

    let copiaOrdenada = [...numeros];
    copiaOrdenada.sort(function(a, b) {
        return a - b; // Función de comparación numérica ascendente
    });
    console.log("--- 11. Ordenados de menor a mayor con sort() ---");
    console.log(copiaOrdenada);

    console.log(" Resumen Final de Operaciones ");
    console.log("Arreglo Original:"+ original);
    console.log("Suma total:"+suma);
    console.log("Promedio:"+ promedio);
    console.log("Mayor:"+ mayor + " Menor:"+ menor);
}

function gestionMterias() {
    
    //arreglo que almacene al menos ocho elementos relacionados con el contexto
    let materiasEduTrace = ["Matemáticas","Física","Español","Biología","Inglés","Sociales","Química","Informática"];
    console.log("Arreglo inicial de materias");

    console.log("MOSTRAR ELEMENTOS Y CONSULTAR POR ÍNDICE");
    // 2. Mostrar todos los elementos registrados y consultar elementos mediante su índice
    console.log("Primera materia (Índice 0):");
    console.log(materiasEduTrace[0]);
    
    console.log("Tercera materia (Índice 2):");
    console.log(materiasEduTrace[2]);

    console.log("CANTIDAD DE ELEMENTOS CON length");
    // 3. Mostrar la cantidad de elementos almacenados utilizando length
    console.log("Total de materias registradas en el plan de estudios:");
    console.log(materiasEduTrace.length);

    console.log("RECORRIDO DEL ARREGLO CON BUCLE FOR");
    // 4. Recorrer el arreglo utilizando un bucle y presentar la información de cada elemento
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`Posición [${i}]: ${materiasEduTrace[i]}`);
    }

    console.log("AGREGAR NUEVOS ELEMENTOS (push / unshift)");
    // 5. Permitir agregar nuevos elementos al arreglo utilizando push() o unshift()
    materiasEduTrace.push("Ética y Valores");
    materiasEduTrace.unshift("Filosofía");
    console.log("Materias actualizadas tras agregar elementos al inicio y al final:");
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`Posición [${i}]: ${materiasEduTrace[i]}`);
    }

    console.log("MODIFICAR UN ELEMENTO EXISTENTE");
    // 6. Modificar un elemento existente indicando su posición
    console.log("Antes de modificar en el índice 3:");
    console.log(materiasEduTrace[3]);
    
    materiasEduTrace[3] = "Biología Avanzada";
    
    console.log("Después de modificar en el índice 3:");
    console.log(materiasEduTrace[3]);

    // 7. Eliminar elementos utilizando pop(), shift() o splice()
    let eliminadoPop = materiasEduTrace.pop();
    console.log("Materia eliminada del final con pop():");
    console.log(eliminadoPop);

    let eliminadoShift = materiasEduTrace.shift();
    console.log("Materia eliminada del inicio con shift():");
    console.log(eliminadoShift);

    let eliminadoSplice = materiasEduTrace.splice(2, 1);
    console.log("Materia eliminada en el índice 2 con splice():");
    console.log(eliminadoSplice[0]);

    // 8. Implementar una búsqueda utilizando includes() o indexOf()
    let materiaBuscada = "Física";
    let existeMateria = materiasEduTrace.includes(materiaBuscada);
    
    console.log(`¿La materia "${materiaBuscada}" se encuentra registrada?:`);
    console.log(existeMateria);
    
    if (existeMateria) {
        let posicionEncontrada = materiasEduTrace.indexOf(materiaBuscada);
        console.log("Su posición exacta (índice) es:");
        console.log(posicionEncontrada);
    }

    // 9. Mostrar un listado actualizado después de realizar las operaciones
    console.log("Listado final de materias activas:");
    for (let i = 0; i < materiasEduTrace.length; i++) {
        console.log(`${i + 1}. ${materiasEduTrace[i]}`);
    }

    // 10. Incorporar al menos dos funcionalidades adicionales que aporten valor
    console.log("Funcionalidad 1 - Cantidad total de materias vigentes:");
    console.log(materiasEduTrace.length);

    console.log("Funcionalidad 2 - Listado ordenado alfabéticamente (sort):");
    let materiasOrdenadas = [...materiasEduTrace].sort();
    for (let i = 0; i < materiasOrdenadas.length; i++) {
        console.log(`- ${materiasOrdenadas[i]}`);
    }
}
// imtroduccion a objetos en js 
function inventarioproductos() {
    const producto={
    nombre:"pc todo en 1",
    marca :" dell",
    precio:2000000,
    cantidad:1
    }
    const producto2={
    nombre2: 'iphone sE',
    marca2:'iphone',
     precio2:1200000,
    cantidad2:1,
    }
 console.log(producto.precio);
 console.log(producto2)
 
}
function regitroestudiante(){
// 1. Crear el objeto estudiante con las propiedades requeridas
let estudiante = {
    nombre: "Juan David",
    apellido: "Montoya Benavides",
    edad: 25,
    programaFormacion: "Análisis y Desarrollo de Software (ADSO)",
    numeroFicha: "3593362",
    correoElectronico: "montoyajuandavid581@gmail.com"
};

console.log("--- Objeto Completo Inicial ---");
console.log(estudiante);

// 2. Consultar el nombre y el apellido utilizando la notación de punto
console.log("2. Consulta por punto:");
console.log("Nombre:", estudiante.nombre);
console.log("Apellido:", estudiante.apellido);

// 3. Consultar el programa de formación utilizando corchetes
console.log("3. Consulta por corchetes:");
console.log("Programa:", estudiante["programaFormacion"]);

// 4. Modificar la edad del estudiante
estudiante.edad = 26;

// 5. Agregar una propiedad llamada ciudad
estudiante.ciudad = "Villeta";

// 6. Eliminar la propiedad correo
delete estudiante.correoElectronico;

// 7. Recorrer las propiedades del objeto utilizando for...in
console.log("7. Recorrido del objeto con for...in:");
for (let propiedad in estudiante) {
    console.log(propiedad + ": " + estudiante[propiedad]);
}

// 8. Mostrar el objeto actualizado
console.log("8. Objeto Actualizado Final:");
console.log(estudiante);
}
function registrodeproducto() {
    let tmer
    let producto={
        codigo:"1234569",
        nombre:"jabon de manos ",
        categoria:"producto de higiene personal  ",
        precio:2500,
        cantidad_disponible:10,
        mostrarinformacion: function() {
            console.log(`el nombre del producto :${this.nombre}`);
            console.log(`el marca del producto :${this.marca}`);
            console.log(`el precio del producto :${this.precio}`);
            console.log(`el codigo del producto :${this.codigo}`);    
        }

    };
    console.log(producto);
    tmer=producto.precio*producto.cantidad_disponible;
    console.log(`el valor del inventario es :${tmer}`);
    
    console.log('se cambia el precio y la  cantidad del producto');
    
    producto.precio=3000;
    producto.cantidad_disponible=5;
    producto.marca="dove";
    tmer=producto.precio*producto.cantidad_disponible;
    
   console.log(" mostrar detalles importantes del producto ")
       
    producto.mostrarinformacion();
    
}
 function gestionarpersona () {
    let persona={
        nombre:'juan',
        edad:19,
        genero:"femenino",
        saludar:function () {
            console.log(`hola soy ${this.nombre} y tengo:${this.edad} años`)
        }
    }
    persona.saludar();
 }
  function gestoonproductos() {
    const producto={
        nombre:"teclado",
        precio:320000,
        cantidad:26,
        mostrarinfo:function () {
            console.log(`el nombre del producto :${this.nombre}`);
            console.log(`el precio del producto :${this.precio}`);
            console.log(`el disponibles :${this.cantidad}`);
            console.log(`valor total de inventrio ${this.precio*this.cantidad}`);
            
            
        }
    }
    producto.mostrarinfo();
  }
 function gestionarempleado() {
    let empleado={
        nombre:" juan  ",
        cargo:' programador junior  ' ,
        diastrabajados: 20 ,
        salariomensual:10000000 ,
        porecentajededesc: 4 ,
        calsalario:function () {
            let saldi,t;
            saldi=this.salariomensual/30;
            t=saldi*this.diastrabajados;
            return parseInt (t); 
            
        },        
        caldes:function () {
            let descuento;
           descuento=(this.calsalario()*this.porecentajededesc)/100;

            return parseInt(descuento);
        },
        caltotal:function () {
            let TT;
            TT=this.calsalario()-this.caldes();
        
             console.log(`su pago tota sin descuento es de :[${this.calsalario()}]\n su descuento es de [${this.caldes()}] \n tu paga total es de [${TT}] `);
        
        }
    }
   empleado.calsalario(); 
   empleado.caldes();
   empleado.caltotal();
 }


 function gestionarempleado2() {
    let empleado={
        nombre:" juan  ",
        cargo:' programador junior  ' ,
        diastrabajados: 20 ,
        salariomensual:10000000 ,
        porecentajededesc: 4 ,
        calsalario:function () {
            let saldi,t;
            saldi=this.salariomensual/30;
            t=saldi*this.diastrabajados;
            return parseInt (t); 
            
        },        
        caldes:function () {
            let descuento;
           descuento=(this.calsalario()*this.porecentajededesc)/100;

            return parseInt(descuento);
        },
        caltotal:function () {
            let TT;
            TT=this.calsalario()-this.caldes();
        
             alert(`su pago tota sin descuento es de :[${this.calsalario()}]\n su descuento es de [${this.caldes()}] \n tu paga total es de [${TT}] `);
        
        }
    }
   empleado.calsalario(); 
   empleado.caldes();
   empleado.caltotal();
 }






 function gesjij() {
    let empleado={
        nombre:prompt(" ingresa tu nombre  "),
        cargo:prompt("igresa su cargo") ,
        diastrabajados:parseInt(prompt('ingresa los dias trabajados '))  ,
        salariomensual:parseInt(prompt(" ingrese su salario mesual ")) ,
        porecentajededesc:parseInt(prompt('ingrese el descuento ')) ,
        calsalario:function () {
            let saldi,t;
            saldi=this.salariomensual/30;
            t=saldi*this.diastrabajados;
            return parseInt (t); 
            
        },        
        caldes:function () {
            let descuento;
           descuento=(this.calsalario()*this.porecentajededesc)/100;

            return parseInt(descuento);
        },
        caltotal:function () {
            let TT;
            TT=this.calsalario()-this.caldes();
        
             alert(`su pago tota sin descuento es de :[${this.calsalario()}]\n su descuento es de [${this.caldes()}] \n tu paga total es de [${TT}] `);
        
        }
    }
   empleado.calsalario(); 
   empleado.caldes();
   empleado.caltotal();
}