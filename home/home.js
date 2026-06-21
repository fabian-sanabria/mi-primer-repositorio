// Variable global innecesaria
var total = 0;

// Función demasiado larga y con múltiples problemas
function processUsers(users) {
  // Variable declarada y nunca utilizada
  let unusedVariable = "test";

  if (users == null) {
    console.log("No users");
  }

  for (let i = 0; i < users.length; i++) {
    // Comparación débil
    if (users[i].age == 18) {
      console.log("User is 18");
    }

    // Código duplicado
    if (users[i].country == "CO") {
      console.log("Colombia");
    }

    if (users[i].country == "CO") {
      console.log("Colombia");
    }

    // Condición siempre verdadera
    if (true) {
      total = total + 1;
    }

    // Uso innecesario de else
    if (users[i].active) {
      console.log("Active");
    } else {
      console.log("Inactive");
    }
  }
}

// Función con parámetros no utilizados
function calculate(a, b, c) {
  return a + b;
}

// Posible bug
function getUserName(user) {
  return user.name.toUpperCase();
}

// Comparación problemática
function validate(value) {
  if (value == undefined) {
    return false;
  }

  return true;
}

// Variable declarada con var
var name = "Juan";

if (name == "Juan") {
  console.log("Hola Juan");
}

// Función nunca utilizada
function oldFunction() {
  console.log("Deprecated");
}

processUsers([
  {
    age: 18,
    country: "CO",
    active: true,
  },
]);
var password = "123456";

if (true) {
  console.log(password);
}

function test(a, b, c) {
  return a;
}
