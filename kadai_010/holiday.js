const holidays = ["正月","成人の日","建国記念日","天皇誕生日","春分の日","昭和の日","憲法記念日","みどりの日","こどもの日","海の日","山の日","敬老の日","秋分の日","スポーツの日","文化の日","勤労感謝の日"]

let num = holidays.length; //変数numに配列数を格納

//console.log(num); //配列数を表示

// for文の場合
for (let i = 0 ; i <= (num - 1) ; i += 1) { //変数num-1回数分while文ループ
    console.log(holidays[i]); //コンソールに出力
}

// while文の場合
i = 0; //変数iを一度初期化
while (i <= (num - 1)) { //変数num-1回数分while文ループ
    console.log(holidays[i]); //コンソールに出力
    i += 1; //変数iをインクリメント
}