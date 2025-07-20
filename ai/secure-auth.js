// より強固な認証システム - 一時的に無効化
document.addEventListener('DOMContentLoaded', function() {
  // 認証を一時的に無効化
  sessionStorage.setItem('orangeai_auth', 'verified');
  return;
  
  // 既に認証済みかチェック
  if (sessionStorage.getItem('orangeai_auth') === 'verified') {
    return;
  }
  
  // ページコンテンツを隠す
  document.documentElement.style.display = 'none';
  
  // 認証フォームを作成
  const authOverlay = document.createElement('div');
  authOverlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, #1E3A8A, #1A73E8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    font-family: 'Noto Sans JP', sans-serif;
  `;
  
  authOverlay.innerHTML = `
    <div style="
      background: white;
      padding: 40px;
      border-radius: 12px;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      text-align: center;
      max-width: 400px;
      width: 90%;
    ">
      <h2 style="color: #1E3A8A; margin-bottom: 20px; font-size: 24px;">ORANGE AI Project</h2>
      <p style="margin-bottom: 30px; color: #6B7280;">このサイトにアクセスするには認証が必要です</p>
      <input type="password" id="authPassword" placeholder="パスワードを入力" style="
        width: 100%;
        padding: 12px;
        margin-bottom: 20px;
        border: 2px solid #E5E7EB;
        border-radius: 8px;
        font-size: 16px;
        box-sizing: border-box;
      ">
      <button onclick="checkAuth()" style="
        background: #1E3A8A;
        color: white;
        border: none;
        padding: 12px 24px;
        border-radius: 8px;
        font-size: 16px;
        cursor: pointer;
        width: 100%;
        font-weight: bold;
      ">アクセス</button>
      <div id="authError" style="color: #DC2626; margin-top: 15px; display: none;">
        パスワードが間違っています
      </div>
    </div>
  `;
  
  document.body.appendChild(authOverlay);
  
  // 認証チェック関数をグローバルに定義
  window.checkAuth = function() {
    const password = document.getElementById('authPassword').value;
    const errorDiv = document.getElementById('authError');
    
    if (password === 'orange2025') {
      sessionStorage.setItem('orangeai_auth', 'verified');
      authOverlay.remove();
      document.documentElement.style.display = '';
    } else {
      errorDiv.style.display = 'block';
      document.getElementById('authPassword').value = '';
    }
  };
  
  // Enterキーでも認証できるように
  document.getElementById('authPassword').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      checkAuth();
    }
  });
}); 