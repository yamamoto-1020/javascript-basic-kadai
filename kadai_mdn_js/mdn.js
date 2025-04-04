const date = new Date(); /*定数dateに日付データを代入*/

let month = date.getMonth(); /*month変数に月データ代入*/
month += 1; /*月データに+1*/
const day = date.getDate(); /*day変数に日データ代入*/
const year = date.getFullYear(); /*year変数に年データ代入 */

console.log(year + '年' + month + '月' + day + '日'); /*文字列を結合*/