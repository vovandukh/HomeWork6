let sell = (function () {
    let beerCount = 100;
    let wineCount = 50;
    let pepsiCount = 80;
    let bank = 1000;
    let beerPrice = 30;
    let winePrice = 150;
    let pepsiPrice = 25;
    function sellBerr(count) {
        if (count <= beerCount) {
            let totalBeer = count * beerPrice;
            bank += totalBeer;
            beerCount -= count;
            return console.log(`Ви купили ${count} шт Пива, на суму ${totalBeer} грн`);
        } else {
            return alert('на складі не достатньо пива');
        }
    }
    function sellWine(count) {
        if (count <= wineCount) {
            let totalWine = count * winePrice;
            bank += totalWine;
            wineCount -= count;
            return console.log(`Ви купили ${count} шт Вина, на суму ${totalWine} грн`);
        } else {
            return alert('на складі не достатньо вина');
        }
    }
    function sellPepsi(count) {
        if (count <= pepsiCount) {
            let totalPepsi = count * pepsiPrice;
            bank += totalPepsi;
            pepsiCount -= count;
            return console.log(`Ви купили ${count} шт Pepsi, на суму ${totalPepsi} грн`);
        } else{
            return alert('на складі не достатньо Pepsi');
        }
    }

    function getBank() {
        return console.log(`в банку ${bank} грн`);
    }

    function getBeerCount() {
        return console.log(`на складі ${beerCount} шт пива`);
    }
    function getWineCount() {
        return console.log(`на складі ${wineCount} шт вина`);
    } 
    function getPepsiCount() {
        return console.log(`на складі ${pepsiCount} шт pepsi`);
    }

    return{
        sellBerr: sellBerr,
        sellWine:sellWine,
        sellPepsi:sellPepsi,
        getBank:getBank,
        getBeerCount:getBeerCount,
        getWineCount:getWineCount,
        getPepsiCount:getPepsiCount

    }

})();

sell.sellBerr(10);
sell.sellPepsi(10);
sell.sellWine(10);
sell.getBeerCount();
sell.getPepsiCount();
sell.getWineCount();
sell.getBank();
