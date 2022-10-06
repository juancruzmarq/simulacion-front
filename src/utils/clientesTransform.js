export function transformDates(clientes) {
  return clientes.map((cliente) => {
    // check if the date is not the beginning of time
    let createdAt = new Date(cliente.createdAt * 1000).toLocaleString();
    let updatedAt = new Date(cliente.updatedAt * 1000).toLocaleString();
    let llegada = new Date(cliente.llegada * 1000).toLocaleString();
    let salida = new Date(cliente.salida * 1000).toLocaleString();
    let ingresaCola = new Date(cliente.ingresaCola * 1000).toLocaleString();
    let salidaCola = new Date(cliente.salidaCola * 1000).toLocaleString();
    let comienzaAtencion = new Date(
      cliente.comienzaAtencion * 1000
    ).toLocaleString();
    let terminaAtencion = new Date(
      cliente.terminaAtencion * 1000
    ).toLocaleString();

    if (createdAt === "31/12/1969, 21:00:00") {
      createdAt = "Null";
    }

    if (updatedAt === "31/12/1969, 21:00:00") {
      updatedAt = "Null";
    }

    if (llegada === "31/12/1969, 21:00:00") {
      llegada = "Null";
    }

    if (salida === "31/12/1969, 21:00:00") {
      salida = "Null";
    }

    if (ingresaCola === "31/12/1969, 21:00:00") {
      ingresaCola = "Null";
    }

    if (salidaCola === "31/12/1969, 21:00:00") {
      salidaCola = "Null";
    }

    if (comienzaAtencion === "31/12/1969, 21:00:00") {
      comienzaAtencion = "Null";
    }

    if (terminaAtencion === "31/12/1969, 21:00:00") {
      terminaAtencion = "Null";
    }

    return {
      ...cliente,
      updatedAt,
      createdAt,
      llegada,
      salida,
      ingresaCola,
      salidaCola,
      comienzaAtencion,
      terminaAtencion,
    };
  });
}

// Format for a single cliente

export function transformDate(cliente) {
  let createdAt = new Date(cliente.createdAt * 1000).toLocaleString();
  let updatedAt = new Date(cliente.updatedAt * 1000).toLocaleString();
  let llegada = new Date(cliente.llegada * 1000).toLocaleString();
  let salida = new Date(cliente.salida * 1000).toLocaleString();
  let ingresaCola = new Date(cliente.ingresaCola * 1000).toLocaleString();
  let salidaCola = new Date(cliente.salidaCola * 1000).toLocaleString();
  let comienzaAtencion = new Date(
    cliente.comienzaAtencion * 1000
  ).toLocaleString();
  let terminaAtencion = new Date(
    cliente.terminaAtencion * 1000
  ).toLocaleString();

  if (createdAt === "31/12/1969, 21:00:00") {
    createdAt = "Null";
  }

  if (updatedAt === "31/12/1969, 21:00:00") {
    updatedAt = "Null";
  }

  if (llegada === "31/12/1969, 21:00:00") {
    llegada = "Null";
  }

  if (salida === "31/12/1969, 21:00:00") {
    salida = "Null";
  }

  if (ingresaCola === "31/12/1969, 21:00:00") {
    ingresaCola = "Null";
  }

  if (salidaCola === "31/12/1969, 21:00:00") {
    salidaCola = "Null";
  }

  if (comienzaAtencion === "31/12/1969, 21:00:00") {
    comienzaAtencion = "Null";
  }

  if (terminaAtencion === "31/12/1969, 21:00:00") {
    terminaAtencion = "Null";
  }

  return {
    ...cliente,
    updatedAt,
    createdAt,
    llegada,
    salida,
    ingresaCola,
    salidaCola,
    comienzaAtencion,
    terminaAtencion,
  };
}
