const { Octokit } = require('@octokit/rest');

// GitHub configuration
const GITHUB_TOKEN = process.env.GITHUB_TOKEN || ''; // Set this in environment variables
const GITHUB_OWNER = 'bearthanapol';
const GITHUB_REPO = 'lgm';
const GITHUB_BRANCH = 'main';

/**
 * Upload image to GitHub repository
 * @param {Buffer} fileBuffer - Image file buffer
 * @param {string} fileName - Name of the file
 * @param {string} folder - Folder path (e.g., 'images/heroes')
 * @returns {Promise<string>} - URL of the uploaded image
 */
async function uploadImageToGitHub(fileBuffer, fileName, folder = 'images/heroes') {
  if (!GITHUB_TOKEN) {
    throw new Error('GitHub token not configured. Please set GITHUB_TOKEN environment variable.');
  }

  const octokit = new Octokit({
    auth: GITHUB_TOKEN
  });

  // Sanitize filename
  const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9.-]/g, '_').toLowerCase();
  const filePath = `${folder}/${sanitizedFileName}`;

  try {
    // Check if file already exists
    let sha = null;
    try {
      const { data } = await octokit.repos.getContent({
        owner: GITHUB_OWNER,
        repo: GITHUB_REPO,
        path: filePath,
        ref: GITHUB_BRANCH
      });
      sha = data.sha; // If file exists, we'll update it
    } catch (error) {
      // File doesn't exist, that's fine
    }

    // Convert buffer to base64
    const content = fileBuffer.toString('base64');

    // Upload or update file
    const response = await octokit.repos.createOrUpdateFileContents({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: filePath,
      message: `Upload ${sanitizedFileName}`,
      content: content,
      branch: GITHUB_BRANCH,
      sha: sha // Include sha if updating existing file
    });

    // Return the raw GitHub URL
    const rawUrl = `https://raw.githubusercontent.com/${GITHUB_OWNER}/${GITHUB_REPO}/${GITHUB_BRANCH}/${filePath}`;
    
    return rawUrl;
  } catch (error) {
    console.error('GitHub upload error:', error);
    throw new Error(`Failed to upload to GitHub: ${error.message}`);
  }
}

/**
 * Delete image from GitHub repository
 * @param {string} filePath - Path to the file in the repository
 * @returns {Promise<boolean>} - Success status
 */
async function deleteImageFromGitHub(filePath) {
  if (!GITHUB_TOKEN) {
    throw new Error('GitHub token not configured');
  }

  const octokit = new Octokit({
    auth: GITHUB_TOKEN
  });

  try {
    // Get file SHA
    const { data } = await octokit.repos.getContent({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: filePath,
      ref: GITHUB_BRANCH
    });

    // Delete file
    await octokit.repos.deleteFile({
      owner: GITHUB_OWNER,
      repo: GITHUB_REPO,
      path: filePath,
      message: `Delete ${filePath}`,
      sha: data.sha,
      branch: GITHUB_BRANCH
    });

    return true;
  } catch (error) {
    console.error('GitHub delete error:', error);
    return false;
  }
}

module.exports = {
  uploadImageToGitHub,
  deleteImageFromGitHub
};
