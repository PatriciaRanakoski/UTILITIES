function waitUntil(predicate, time = 10000) {
    return new Promise((resolve) => {
        let int = setInterval(() => {
            if (predicate()) {
                resolve(predicate());
                clearInterval(int);
                int = null;
            }
        }, 500);
        setTimeout(() => {
            if (int !== null) {
                clearInterval(int);
            }
        }, time);
    });
}



waitUntil(() => { document.querySelectorAll('[data-testid="proceed-to-checkout-link"]').length > 0;
}).then(() => {

//function to be called
});
