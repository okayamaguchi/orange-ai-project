// Simple password protection
(function() {
  // セッションストレージで認証状態をチェック
  if (sessionStorage.getItem('authenticated') === 'true') {
    return;
  }
  
  // パスワード入力プロンプト
  const password = prompt('このサイトにアクセスするにはパスワードが必要です:');
  
  if (password === 'orange2025') {
    sessionStorage.setItem('authenticated', 'true');
  } else {
    alert('パスワードが間違っています。');
    window.location.href = 'about:blank';
  }
})(); 