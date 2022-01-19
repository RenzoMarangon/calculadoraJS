let numero = 0;
let otroNumero = 0;

$(".pantalla-abajo").text(0)
$(document).keypress(function(e){
        if(e.keyCode == 48){
            if($(".pantalla-arriba").is(":contains(=)")){
                $(".pantalla-abajo").text("");
                $(".pantalla-arriba").text("");
            }
            $(".pantalla-abajo").append("0");
            

            $(".cero").css("background","white");
            setTimeout(function(){$(".cero").css("background","")},150)

        }else if (e.keyCode==49){
            if($(".pantalla-arriba").is(":contains(=)")){
                $(".pantalla-abajo").text("");
                $(".pantalla-arriba").text("");
            }
            $(".pantalla-abajo").append("1");

            $(".uno").css("background","white");
            setTimeout(function(){$(".uno").css("background","")},150)
        }else if (e.keyCode==50){
            if($(".pantalla-arriba").is(":contains(=)")){
                $(".pantalla-abajo").text("");
                $(".pantalla-arriba").text("");
            }
            $(".pantalla-abajo").append("2");

            $(".dos").css("background","white");
            setTimeout(function(){$(".dos").css("background","")},150)
        }else if (e.keyCode==51){
            if($(".pantalla-arriba").is(":contains(=)")){
                $(".pantalla-abajo").text("");
                $(".pantalla-arriba").text("");
            }
            $(".pantalla-abajo").append("3");

            $(".tres").css("background","white");
            setTimeout(function(){$(".tres").css("background","")},150)
        }else if (e.keyCode==52){
            if($(".pantalla-arriba").is(":contains(=)")){
                $(".pantalla-abajo").text("");
                $(".pantalla-arriba").text("");
            }
            $(".pantalla-abajo").append("4");

            $(".cuatro").css("background","white");
            setTimeout(function(){$(".cuatro").css("background","")},150)
        }else if (e.keyCode==53){
            if($(".pantalla-arriba").is(":contains(=)")){
                $(".pantalla-abajo").text("");
                $(".pantalla-arriba").text("");
            }
            $(".pantalla-abajo").append("5");

            $(".cinco").css("background","white");
            setTimeout(function(){$(".cinco").css("background","")},150)
        }else if (e.keyCode==54){
            if($(".pantalla-arriba").is(":contains(=)")){
                $(".pantalla-abajo").text("");
                $(".pantalla-arriba").text("");
            }
            $(".pantalla-abajo").append("6");

            $(".seis").css("background","white");
            setTimeout(function(){$(".seis").css("background","")},150)
        }else if (e.keyCode==55){
            if($(".pantalla-arriba").is(":contains(=)")){
                $(".pantalla-abajo").text("");
                $(".pantalla-arriba").text("");
            }
            $(".pantalla-abajo").append("7");

            $(".siete").css("background","white");
            setTimeout(function(){$(".siete").css("background","")},150)
        }else if (e.keyCode==56){
            if($(".pantalla-arriba").is(":contains(=)")){
                $(".pantalla-abajo").text("");
                $(".pantalla-arriba").text("");
            }
            $(".pantalla-abajo").append("8");

            $(".ocho").css("background","white");
            setTimeout(function(){$(".ocho").css("background","")},150)
        }else if (e.keyCode==57){
            if($(".pantalla-arriba").is(":contains(=)")){
                $(".pantalla-abajo").text("");
                $(".pantalla-arriba").text("");
            }
            $(".pantalla-abajo").append("9");

            $(".nueve").css("background","white");
            setTimeout(function(){$(".nueve").css("background","")},150)

        }else if (e.keyCode==46){
            $(".pantalla-abajo").append(".");
            
            $(".punto").css("background","white");
            setTimeout(function(){$(".punto").css("background","")},150)

        }else if (e.keyCode==47){
            numero = parseFloat($(".pantalla-abajo").text())
            $(".pantalla-arriba").text("");
            $(".pantalla-abajo").append("/");
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text("");

            
            $(".dividir").css("background","white");
            setTimeout(function(){$(".dividir").css("background","")},150)

        }else if (e.keyCode==42){
            numero = parseFloat($(".pantalla-abajo").text());
            $(".pantalla-arriba").text("");
            $(".pantalla-abajo").append("*");
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text("");

            
            $(".multiplicar").css("background","white");
            setTimeout(function(){$(".multiplicar").css("background","")},150)

        }else if (e.keyCode==45){
            numero = parseFloat($(".pantalla-abajo").text());
            $(".pantalla-arriba").text("");
            $(".pantalla-abajo").append("-");
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text("");

            
            $(".restar").css("background","white");
            setTimeout(function(){$(".restar").css("background","")},150)

        }else if (e.keyCode==43){
            numero = parseFloat($(".pantalla-abajo").text());
            $(".pantalla-arriba").text("");
            $(".pantalla-abajo").append("+");
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text("");

            
            $(".sumar").css("background","white");
            setTimeout(function(){$(".sumar").css("background","")},150)
        }else if (e.keyCode==99){
            $(".pantalla-abajo").text("0");
            $(".pantalla-arriba").text("");

            
            $(".borrar").css("background","white");
            setTimeout(function(){$(".borrar").css("background","")},150)

        }else if (e.keyCode==13){
            otroNumero = parseFloat($(".pantalla-abajo").text());
            
            let resultado = 0;
            switch($(".pantalla-arriba").text().substring($(".pantalla-arriba").text().length-1)){
            
                case "/":
                    resultado = numero/otroNumero;
                    $(".pantalla-arriba").append($(".pantalla-abajo").text());
                    $(".pantalla-abajo").text(resultado);
                    break;
                case "+":
                    resultado = numero+otroNumero;
                    $(".pantalla-arriba").append($(".pantalla-abajo").text());
                    $(".pantalla-abajo").text(resultado);
                    break;
                case "-":
                    resultado = numero-otroNumero;
                    $(".pantalla-arriba").append($(".pantalla-abajo").text());
                    $(".pantalla-abajo").text(resultado);
                    break;
                case "*":
                    resultado = numero*otroNumero;
                    $(".pantalla-arriba").append($(".pantalla-abajo").text());
                    $(".pantalla-abajo").text(resultado);
                    break;

            }

           if($(".pantalla-arriba").text().length>1 && $(".pantalla-arriba").is(":not(':contains(=)')")){
            $(".pantalla-arriba").append(" =");
           }
            
           
           $(".igual").css("background","white");
           setTimeout(function(){$(".igual").css("background","")},150)
            
        }
})


$(".borrar").on("click",function(){
    $(".pantalla-abajo").text("0");
    $(".pantalla-arriba").text("");
})

$(".enter").on("click",function(){
    otroNumero = parseFloat($(".pantalla-abajo").text());
    let resultado = 0;
    switch($(".pantalla-arriba").text().substring($(".pantalla-arriba").text().length-1)){
    
        case "/":
            resultado = numero/otroNumero;
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text(resultado);
            break;
        case "+":
            resultado = numero+otroNumero;
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text(resultado);
            break;
        case "-":
            resultado = numero-otroNumero;
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text(resultado);
            break;
        case "*":
            resultado = numero*otroNumero;
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text(resultado);
            break;
    }
});

$(".igual").on("click",function(){
    otroNumero = parseFloat($(".pantalla-abajo").text());
            
    let resultado = 0;
    switch($(".pantalla-arriba").text().substring($(".pantalla-arriba").text().length-1)){
    
        case "/":
            resultado = numero/otroNumero;
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text(resultado);
            break;
        case "+":
            resultado = numero+otroNumero;
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text(resultado);
            break;
        case "-":
            resultado = numero-otroNumero;
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text(resultado);
            break;
        case "*":
            resultado = numero*otroNumero;
            $(".pantalla-arriba").append($(".pantalla-abajo").text());
            $(".pantalla-abajo").text(resultado);
            break;

    }

    if($(".pantalla-arriba").text().length>1 && $(".pantalla-arriba").is(":not(':contains(=)')")){
    $(".pantalla-arriba").append(" =");
    }
})

$(".dividir").on("click",function(){
    numero = parseFloat($(".pantalla-abajo").text())
    $(".pantalla-arriba").text("");
    $(".pantalla-abajo").append("/");
    $(".pantalla-arriba").append($(".pantalla-abajo").text());
    $(".pantalla-abajo").text("");
})

$(".multiplicar").on("click",function(){
    numero = parseFloat($(".pantalla-abajo").text());
    $(".pantalla-arriba").text("");
    $(".pantalla-abajo").append("*");
    $(".pantalla-arriba").append($(".pantalla-abajo").text());
    $(".pantalla-abajo").text("");
})

$(".restar").on("click",function(){
    numero = parseFloat($(".pantalla-abajo").text());
    $(".pantalla-arriba").text("");
    $(".pantalla-abajo").append("-");
    $(".pantalla-arriba").append($(".pantalla-abajo").text());
    $(".pantalla-abajo").text("");
})

$(".sumar").on("click",function(){
    numero = parseFloat($(".pantalla-abajo").text());
    $(".pantalla-arriba").text("");
    $(".pantalla-abajo").append("+");
    $(".pantalla-arriba").append($(".pantalla-abajo").text());
    $(".pantalla-abajo").text("");
})

$(".punto").on("click",function(){
    $(".pantalla-abajo").append(".");
})


$(".cero").on("click",function(){
    if($(".pantalla-arriba").is(":contains(=)")){
        $(".pantalla-abajo").text("");
        $(".pantalla-arriba").text("");
    }
    $(".pantalla-abajo").append("0");
})

$(".uno").on("click",function(){
    if($(".pantalla-arriba").is(":contains(=)")){
        $(".pantalla-abajo").text("");
        $(".pantalla-arriba").text("");
    }
    $(".pantalla-abajo").append("1");
})

$(".dos").on("click",function(){
    if($(".pantalla-arriba").is(":contains(=)")){
        $(".pantalla-abajo").text("");
        $(".pantalla-arriba").text("");
    }
    $(".pantalla-abajo").append("2");
})

$(".tres").on("click",function(){
    if($(".pantalla-arriba").is(":contains(=)")){
        $(".pantalla-abajo").text("");
        $(".pantalla-arriba").text("");
    }
    $(".pantalla-abajo").append("3");
})

$(".cuatro").on("click",function(){
    if($(".pantalla-arriba").is(":contains(=)")){
        $(".pantalla-abajo").text("");
        $(".pantalla-arriba").text("");
    }
    $(".pantalla-abajo").append("4");
})

$(".cinco").on("click",function(){
    if($(".pantalla-arriba").is(":contains(=)")){
        $(".pantalla-abajo").text("");
        $(".pantalla-arriba").text("");
    }
    $(".pantalla-abajo").append("5");
})

$(".seis").on("click",function(){
    if($(".pantalla-arriba").is(":contains(=)")){
        $(".pantalla-abajo").text("");
        $(".pantalla-arriba").text("");
    }
    $(".pantalla-abajo").append("6");
})

$(".siete").on("click",function(){
    if($(".pantalla-arriba").is(":contains(=)")){
        $(".pantalla-abajo").text("");
        $(".pantalla-arriba").text("");
    }
    $(".pantalla-abajo").append("7");
})

$(".ocho").on("click",function(){
    if($(".pantalla-arriba").is(":contains(=)")){
        $(".pantalla-abajo").text("");
        $(".pantalla-arriba").text("");
    }
    $(".pantalla-abajo").append("8");
})

$(".nueve").on("click",function(){
    if($(".pantalla-arriba").is(":contains(=)")){
        $(".pantalla-abajo").text("");
        $(".pantalla-arriba").text("");
    }
    $(".pantalla-abajo").append("9");
})


$(".numeros p").each(function(){
    $(this).on("click",function(){
        $(this).css("background","white");
        let este = $(this)
        setTimeout(function(){este.css("background","")},150)
    })
    

})










       