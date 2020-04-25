var expression="";
var regExp=/(\+|\-|\×|\÷|\.)/;
var rx=/(\+|\-|\×|\÷)/;

function get(val){
    if(expression=="" && val.match(regExp))
        display("0");
    else if(expression.charAt(expression.length-1).match(regExp) && val.match(regExp))
        display(expression);
    else if(expression.length<=12){
        var temp=expression;
        temp += val;
        if(isValid(temp)){
            expression+=val;
            display(expression);        
        }
    }
}

function calculate(){
    var operator = (expression.match(rx))[0];
    var num1 = Number(expression.substring(0, expression.indexOf(operator)));
    var num2 = Number(expression.substring(expression.indexOf(operator)+1, expression.length));
    expression = (calc(num1, num2, operator)).toString();
    display(expression);
}

function isValid(exp){
    var count=0;
    for(var i=0; i<exp.length; i++){
        if(exp.charAt(i).match(rx))
            count++;
    }
    if(count<=1)
        return true;
    else
        return false;
}

function cls(){
    expression = "";
    display("0");
}

function display(tx){
    document.getElementById("output").innerHTML = tx;
}

function calc(n1,n2,op){
    switch(op){
        case "+":
            return n1+n2;
            break;
        case "-":
            return n1-n2;
            break;
        case "×":
            return n1*n2;
            break;
        case "÷":
            return n1/n2;
            break;
        default:
            break;
    }
}