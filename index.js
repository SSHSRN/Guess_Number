function d_i(x) {
    return document.getElementById(x);
}

var count = 5;
d_i("count").innerText = count;

var num = Math.floor(Math.random() * 100);
console.log(num);

function checkRes(x) {
    if(x === num){
        return true;
    }
    return false;
}

function reset() {
    count = 5;
    d_i("count").innerText = count;
    // d_i("res").innerText = "";
}

function check() {
    a = d_i("usr_input");
    d_i("res").innerText = "";
    if(count){
        if(checkRes(parseInt(a.value))){
            d_i("res").innerText = "Congratulations! You have guessed the correct number!";
            num = Math.floor(Math.random() * 100);
            console.log(num);
            reset();
        }
        else{
            console.log("noo");
            count--;
            d_i("count").innerText = count;
        }
    }
    else{
        d_i("res").innerText = "You didn't guess the number in 5 chances. Try again!";
        reset();
    }
}