const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Verify user is authenticated
  const { user } = context.clientContext;
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ error: 'Unauthorized' })
    };
  }

  const { posts, drafts } = JSON.parse(event.body);

  try {
    // Get current file SHAs
    const postsSha = await getFileSha('src/_data/posts.json');
    const draftsSha = await getFileSha('src/_data/drafts.json');

    // Update posts.json
    await updateFile('src/_data/posts.json', posts, postsSha, 'Update posts from CMS');

    // Update drafts.json
    await updateFile('src/_data/drafts.json', drafts, draftsSha, 'Update drafts from CMS');

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true })
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message })
    };
  }
};

async function getFileSha(path) {
 const response = await fetch(`https://api.github.com/repos/zackjewell/zjnety/contents/${path}?ref=master`, {
    headers: {
      'Authorization': 'token ' + process.env.GITHUB_TOKEN
    }
  });
  
  if (response.ok) {
    const data = await response.json();
    return data.sha;
  }
  return null;
}

async function updateFile(path, content, sha, message) {
  const response = await fetch('https://api.github.com/repos/zackjewell/zjnety/contents/' + path, {
    method: 'PUT',
    branch: 'master',
    headers: {
      'Authorization': 'token ' + process.env.GITHUB_TOKEN,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      message: message,
      content: Buffer.from(JSON.stringify(content, null, 2)).toString('base64'),
      sha: sha
    })
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || 'Failed to update file');
  }

  return response.json();
}