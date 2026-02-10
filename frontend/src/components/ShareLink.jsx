import React, { useState } from 'react';
import { generateShareLink } from '../services/api';

function ShareLink() {
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);

  const handleGenerateLink = async () => {
    try {
      const response = await generateShareLink();
      setShareUrl(response.shareUrl);
    } catch (error) {
      console.error('Error generating share link:', error);
    }
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="p-4 bg-blue-50 rounded-lg">
      <h3 className="font-bold mb-2">Share Your Location</h3>
      <button
        onClick={handleGenerateLink}
        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Generate Share Link
      </button>
      {shareUrl && (
        <div className="mt-3 space-y-2">
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="w-full p-2 border rounded bg-white"
          />
          <button
            onClick={handleCopyToClipboard}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      )}
    </div>
  );
}

export default ShareLink;
