import React, { useState } from 'react';

const SpecificVerse = () => {
  
  const [verse, setVerse] = useState(null);
  const fetchSpecificVerse = async () => {
    try {
      const response = await fetch('https://labs.bible.org/api/?passage=John+3:16&type=json');
      const data = await response.json();
      setVerse(data[0]);
    } catch (error) {
      console.error('Error fetching specific verse:', error);
    }
  };

  return (
    <div className="specific-verse">
      <button onClick={fetchSpecificVerse}>Get John 3:16</button>
      {verse && (
        <p>
          {verse.bookname} {verse.chapter}:{verse.verse} — {verse.text}
        </p>
      )}
    </div>
  );
};

export default SpecificVerse;
