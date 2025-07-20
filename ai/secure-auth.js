// 認証システム無効化
console.log('Authentication completely disabled');

// セッションストレージに認証済み状態を設定
sessionStorage.setItem('orangeai_auth', 'verified');

// ページが隠されている場合は表示する
if (document.documentElement.style.display === 'none') {
  document.documentElement.style.display = '';
}

// DOMが読み込まれてからも再度チェック
document.addEventListener('DOMContentLoaded', function() {
  sessionStorage.setItem('orangeai_auth', 'verified');
  if (document.documentElement.style.display === 'none') {
    document.documentElement.style.display = '';
  }
}); 