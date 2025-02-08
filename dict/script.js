document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON data
  fetch("/data/dict.json")
    .then((response) => response.json())
    .then((data) => {
      const table = document.querySelector("#main-container table");

      // Loop through each entry in the JSON data
      data.sort((a, b) => a["lishan-didan"].localeCompare(b["lishan-didan"])); // Sort by Lishan Didan
      data.forEach((entry) => {
        const row = document.createElement("tr");

        // Add Lishan Didan
        const lishanDidanCell = document.createElement("td");
        lishanDidanCell.textContent = entry["lishan-didan"];
        row.appendChild(lishanDidanCell);

        // Add Romanization
        const romanizationCell = document.createElement("td");
        romanizationCell.style.textAlign = "left";
        romanizationCell.textContent = entry.romanization;
        row.appendChild(romanizationCell);

        // Add Hebrew
        const hebrewCell = document.createElement("td");
        hebrewCell.textContent = entry.hebrew.join(", "); // Join multiple Hebrew words with a comma
        row.appendChild(hebrewCell);

        // Add English
        const englishCell = document.createElement("td");
        englishCell.style.textAlign = "left";
        englishCell.textContent = entry.english.join(", "); // Join multiple English words with a comma
        row.appendChild(englishCell);

        // Add Voice (MP3 audio)
        const voiceCell = document.createElement("td");
        if (entry.voice && entry.voice.length > 0) {
          entry.voice.forEach((voiceFile) => {
            const audio = document.createElement("audio");
            audio.controls = true; // Add playback controls (play, pause, volume)
            audio.title = voiceFile.actor; // Tooltip on hover

            const source = document.createElement("source");
            source.src = "/voice" + voiceFile.path; // Use correct path
            source.type = "audio/mpeg"; // Explicitly set the MIME type for MP3
            audio.appendChild(source);

            voiceCell.appendChild(audio);
          });
        } else {
          voiceCell.textContent = "לא קיים שמע";
        }
        row.appendChild(voiceCell);

        // Append the row to the table
        table.appendChild(row);
      });
    })
    .catch((error) => console.error("Error fetching JSON:", error));
});
