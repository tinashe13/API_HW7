
import React, { useState } from 'react';

const RandomVerse = () => {
  
  const [verse, setVerse] = useState(null);

  const fetchRandomVerse = async () => {
    try {
     
      const response = await fetch('https://labs.bible.org/api/?passage=random&type=json');
      const data = await response.json();
      setVerse(data[0]);
    } catch (error) {
      console.error('Error fetching random verse:', error);
    }
  };

  return (
    <div className="random-verse">
      <button onClick={fetchRandomVerse}>Get Random Verse</button>
      {verse && (
        <p>
          {verse.bookname} {verse.chapter}:{verse.verse} — {verse.text}
        </p>
      )}
    </div>
  );
};

export default RandomVerse;
