const fetch = require('node-fetch');

exports.handler = async (event) => {
  const code = event.queryStringParameters.code;
  
  if (!code) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing code parameter' })
    };
  }
  
  try {
    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: code
      })
    });
    
    const data = await response.json();
    
    if (data.access_token) {
      return {
        statusCode: 302,
        headers: {
          Location: `/admin/#access_token=${data.access_token}`
        },
        body: ''
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Failed to get access token', details: data })
      };
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};