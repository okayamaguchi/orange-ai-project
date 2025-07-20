exports.handler = async (event, context) => {
  const { headers } = event;
  const auth = headers.authorization;
  
  // Basic認証の設定（admin:orange2025）
  const validCredentials = 'Basic ' + Buffer.from('admin:orange2025').toString('base64');
  
  if (!auth || auth !== validCredentials) {
    return {
      statusCode: 401,
      headers: {
        'WWW-Authenticate': 'Basic realm="Restricted Area"',
        'Content-Type': 'text/html'
      },
      body: `
        <!DOCTYPE html>
        <html>
        <head>
          <title>認証が必要です</title>
          <meta charset="UTF-8">
          <style>
            body { font-family: -apple-system, sans-serif; text-align: center; padding: 50px; }
            .container { max-width: 400px; margin: 0 auto; }
            h1 { color: #1E3A8A; }
          </style>
        </head>
        <body>
          <div class="container">
            <h1>認証が必要です</h1>
            <p>このサイトにアクセスするには認証が必要です。</p>
            <p>ユーザー名: admin<br>パスワード: orange2025</p>
          </div>
        </body>
        </html>
      `
    };
  }
  
  return {
    statusCode: 200,
    body: 'Authenticated'
  };
}; 