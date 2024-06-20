function exp1() {
    const fruta = "🥝";
    
    switch (fruta) {
        case "🍍": 
            console.log("Faça um chá com a casca.");
        break;
        
        case "🥝": 
            console.log("Uma delicia no açai.");
        break;
    }
}

function exp2() {
    const fruta = "🍓";
    
    switch (fruta) {
        case "🍍": 
            console.log("Faça um chá com a casca.");
        break;
        
        case"🍓":
        case "🥝": 
            console.log("Uma delicia no açai.");
        break;
    }
}

function exp3() {
    const fruta = "🍉";
    
    switch (fruta) {
        case "🍍": 
            console.log("Faça um chá com a casca.");
        break;
        
        case"🍓":
        case "🥝": 
            console.log("Uma delicia no açai.");
        break;

        default: console.log("Não conheço esta fruta!");
    }
}

