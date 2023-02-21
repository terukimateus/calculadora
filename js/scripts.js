

function aparecer(num)
{
    var numero = document.getElementById('resultado').innerHTML // define a variavel numero como o "resultado" q é o que já esta aparecendo no na calculadora
    document.getElementById('resultado').innerHTML = numero + num// adiciona o num(botão que foi apertado na pagina(html) no resultado)
}

const calcular = () => {
    var resultado = document.getElementById('resultado').innerHTML // pega a var resultado novamente
    if(resultado) // se tiver algo na var resultado
    {
        document.getElementById('resultado').innerHTML = eval(resultado) // eval serve para computar um javascript dentro de uma string, por exemplo, a string 'resultado', se for clicado o botão 2 + 2, o eval ira executar a string "2+2" resultando 4
    }
    else // se não tiver nada na var resultado
    {
        document.getElementById('resultado').innerHTML = "Nenhuma operação definida"
    }
}

const limpar = () => {
    document.getElementById('resultado').innerHTML = '' // define o html resultado como '' ou seja nada

}

const apagar = () => {
    var apagar = document.getElementById('resultado').innerHTML // define a variavel numero como o "resultado" q é o que já esta aparecendo no na calculadora
    document.getElementById('resultado').innerHTML = apagar.substring(0, apagar.length -1); // .substring define apagar que é o resultado, do numero de casas 0 + o numero de casas real com o .lenght que serve para pegar a quant. de casas e diminui por 1, ou seja, se estiver 451, ele ira pegar as 3 casas e diminuir  para 2
}