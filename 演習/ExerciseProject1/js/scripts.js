const terms = document.getElementById('terms'); // 利用規約の本文のdiv要素かな
const agreeCheckbox = document.getElementById('agree'); // 利用規約に同意するチェックボックスのlabel要素
const submitButton = document.getElementById('submit'); // 送信ボタンの要素

// 利用規約のコンテナがスクロールされたときのイベントリスナを追加
terms.addEventListener('scroll', () => {
    // スクロールが一番下まで行ったか確認
    if (terms.scrollHeight - terms.scrollTop === terms.clientHeight) {
        agreeCheckbox.disabled = false // チェックボックスを有効にする
    }
})

// チェックボックスの状態が変更されたときのイベントリスナを追加
agreeCheckbox.addEventListener('change', () => {
    if (agreeCheckbox.checked) {
        submitButton.disabled = false // 送信ボタンを有効にする
    } else {
        submitButton.disabled = true // 送信ボタンを無効にする
    }
})

// 送信ボタンをクリックしたときにアラートが表示される拡張機能
submitButton.addEventListener('click',() => {
    alert("送信しました")
})