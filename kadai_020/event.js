const btndate = document.getElementById('btn'); //btnというidを持つHTML要素を取得し、定数に代入する

btndate.addEventListener('click', () => { //HTML要素がクリックされたときにイベント処理を行う
    const textdate = document.getElementById('text'); //textというidを持つHTML要素を取得し、定数に代入する
    textdate.textContent = 'ボタンをクリックしました'; //取得したHTML要素のtextを変更
});