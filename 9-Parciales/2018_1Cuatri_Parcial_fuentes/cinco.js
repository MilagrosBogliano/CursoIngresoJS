function mostrar()
{
    let planetas;

    planetas = prompt("Ingrese un planeta del sistema solar");

    switch (planetas) {
        case "tierra":
            alert("Aca vivimos");
        break;
        case "mercurio":
        case "venus":
        case "marte":
            alert("Aca hace mas calor");
        break;
        case "jupiter":
        case "saturno":
        case "urano":
        case "neptuno":
            alert("Aca hace mas frio");
        break;
    }
}
