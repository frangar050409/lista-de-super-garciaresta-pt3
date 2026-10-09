let listaDeSuper = ["sal", "leche", "pan"];

function logItems(arreglo) {
  arreglo.forEach((item, index) => {
    console.log(index + ": " + item);
  });
}

let comando = "";

while (comando !== "salir") {
  comando = prompt("Ingresá un comando: nuevo, listar, borrar o salir");

  if (comando === null) {
    comando = "salir";
  }

  comando = comando.trim().toLowerCase();

  if (comando === "nuevo") {
    let item = prompt("¿Qué producto querés agregar?");
    if (item !== null && item.trim() !== "") {
      listaDeSuper.push(item.trim());
      console.log(item.trim() + " agregado a la lista");
    }
  } else if (comando === "listar") {
    logItems(listaDeSuper);
  } else if (comando === "borrar") {
    let respuesta = prompt("Ingresá el índice del producto a eliminar");
    let indice = Number(respuesta);
    if (respuesta !== null && respuesta.trim() !== "" && Number.isInteger(indice) && indice >= 0 && indice < listaDeSuper.length) {
      let eliminado = listaDeSuper.splice(indice, 1);
      console.log(eliminado[0] + " fue eliminado de la lista");
    } else {
      console.log("Índice inválido");
    }
  } else if (comando === "salir") {
    console.log("Fin del programa");
  } else {
    console.log("Comando no reconocido");
  }
}
