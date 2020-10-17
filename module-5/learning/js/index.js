
const mostrar_fecha = () => {
    let date = new Date();
    return document
        .getElementById("fecha")
        .innerHTML = `${date.toLocaleTimeString()},${date.getMilliseconds()}`;
};

document.addEventListener(
    'DOMContentLoaded',
    () => {
        setInterval(mostrar_fecha, 1000);
        mostrar_fecha();
    }
)