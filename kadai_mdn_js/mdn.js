// 今日の日付を取得
const today = new Date();

// 年、月、日にち
const year = today.getFullYear();
const month = today.getMonth() + 1;
// 月は０から始まる為、1を足す
const day = today.getDate();

// 日付を表示
const formattedDate = `${year}年${month}月${day}日`;
// 出力
console.log(formattedDate);