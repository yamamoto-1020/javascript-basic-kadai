let num = 15; //変数宣言

if (num % 3 === 0 && num % 5 === 0) { //numの値が3と5の倍数であれば出力する
    console.log('3と5の倍数です');
} else if (num % 3 === 0){ //numの値が3の倍数であれば出力する
    console.log('3の倍数です');
} else if (num % 5 === 0) { //numの値が5の倍数であれば出力する
    console.log('5の倍数です');  
} else { //numの値が上記以外の値であれば出力する
    console.log(num);
}
