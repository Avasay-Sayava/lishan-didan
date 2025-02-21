import { data } from "../data/dict.js";
document.addEventListener("DOMContentLoaded", function () {
  const id = new URLSearchParams(window.location.search).get("id");
  if (id === null) this.location.assign("../dict");
  // Fetch the JSON data
  const table = document.querySelector("#main-container table");
  const baseId = data[id].base;

  const title = document.querySelector("#main-container #title");
  title.textContent += " " + data[baseId].lishanDidan;
  history.replaceState(null, null, "?id=" + baseId);

  // Filter to words that have the same base as the current word
  const subdata = data.filter((a) => a.base === baseId);
  subdata.sort(wordComparator);

  // Loop through each entry in the JSON data
  subdata.forEach((entry) => {
    const row = document.createElement("tr");

    // Add Type
    const typeCell = document.createElement("td");
    typeCell.textContent = entry.type.hebrew;
    row.appendChild(typeCell);

    // Add Time
    const timeCell = document.createElement("td");
    timeCell.textContent = entry.time.hebrew;
    row.appendChild(timeCell);

    // Add Person
    const personCell = document.createElement("td");
    personCell.textContent = entry.person.hebrew;
    row.appendChild(personCell);

    // Add Gender
    const genderCell = document.createElement("td");
    genderCell.textContent = entry.gender.hebrew;
    row.appendChild(genderCell);

    // Add Number
    const numberCell = document.createElement("td");
    numberCell.textContent = entry.number.hebrew;
    row.appendChild(numberCell);

    // Add Lishan-Didan
    const lishanDidanCell = document.createElement("td");
    lishanDidanCell.textContent = entry.lishanDidan;
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
        source.src = "../voice" + voiceFile.path; // Use correct path
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
});

function wordComparator(entry1, entry2) {
  if (entry1.type.id != entry2.type.id) return entry1.type.id < entry2.type.id ? -1 : 1;
  if (entry1.time.id != entry2.time.id) return entry1.time.id < entry2.time.id ? -1 : 1;
  if (entry1.person.id != entry2.person.id) return entry1.person.id < entry2.person.id ? -1 : 1;
  if (entry1.gender.id != entry2.gender.id) return entry1.gender.id < entry2.gender.id ? -1 : 1;
  if (entry1.number.id != entry2.number.id) return entry1.number.id < entry2.number.id ? -1 : 1;;
  return entry1.lishanDidan.localeCompare(entry2.lishanDidan);
}
