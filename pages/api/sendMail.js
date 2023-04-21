//import fetch from 'node-fetch';

const isSameOrigin = (req) => {
  const origin = req.headers.origin;
  const host = req.headers.host;
  const sameOrigin = origin && origin.includes(host);
  return sameOrigin;
};

const handler = async (req, res) => {

  // if (req.method !== 'POST') {    
  //   res.status(405).json({ message: 'Method not allowed' });
  //   return;
  // }

  //  if (!isSameOrigin(req)) {
  //   res.status(403).json({ message: 'Forbidden' });
  //   return;
  // }
  
  const azureFunctionUrl = 'https://sendgridcsharp.azurewebsites.net/api/sendemail'; // replace with your Azure Function URL
  
  req.body.to = "enquiries@bendando.com";
  req.body.website = "bendando.com";

  try {
    const response = await fetch(azureFunctionUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (response.ok && (await response.json()).message === 'Email Sent') {
      res.status(200).json({ message: 'Email sent successfully' });
    } else {
      res.status(500).json({ message: 'Internal Server Error', details: await response.json() });
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

export default handler;
