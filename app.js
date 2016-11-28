function convertir(){
    var valorUSD = 3187;
    var valorCOP = parseInt(document.getElementById("valor-cop").value);
    var resultado = valorCOP * valorUSD;
    document.getElementById("resultado").innerHTML = resultado;
    OSREC.CurrencyFormatter.formatAll(
        {
            selector : '#resultado',
            currency: 'COP'
        }
    );
}
