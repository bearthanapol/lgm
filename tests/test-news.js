// Test news creation
const fetch = require('node-fetch');

async function testNewsCreation() {
  try {
    console.log('Testing news creation...');
    
    const newsData = {
      title: 'Test News',
      content: 'This is a test news post',
      category: 'general',
      published: true
    };
    
    const response = await fetch('http://localhost:3000/api/news', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newsData)
    });
    
    const result = await response.json();
    
    console.log('Status:', response.status);
    console.log('Result:', JSON.stringify(result, null, 2));
    
    if (result.success) {
      console.log('✓ News created successfully!');
    } else {
      console.log('✗ Failed to create news:', result.error);
    }
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testNewsCreation();
