const operations = (a, b) => {
    const sum = (a, b) => {
        return a + b;
    }

    const multiply = (a, b) => {
        return a * b;
    }

    const division = (a, b) => {
        return a / b
    }

    const subtract = (a, b) => {
        return (a - b)
    }
    return {
        sum: sum(a, b),
        multiply: multiply(a, b),
        division: division(a, b),
        subtract: subtract(a, b)
    };
}


const Calci = () => {
    console.log(operations(7, 9))// we have to return object so we used log here

}

Calci();//here Calci() already logging something so we have not used console.log here



