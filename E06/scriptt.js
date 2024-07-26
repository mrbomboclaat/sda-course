function tabele_shumezimi(a) {
    let table = '';
    
    for (let i = 1; i <= a; i++) {
        for (let j = 1; j <= a; j++) {
            table += (i * j) + ' ';
        }
        table += '\n';
    }
    
    console.log(table);
}

tabele_shumezimi(3);
