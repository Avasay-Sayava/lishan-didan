import { grammar, data } from "../data/dict.js";

document.addEventListener("DOMContentLoaded", function () {
  const table = document.querySelector("#main-container table");
  const baseData = data.filter(
    (a) => a.base === a.id || a.type.id === grammar.types.pronoun.id
  );
  baseData.sort((a, b) => a.lishanDidan.localeCompare(b.lishanDidan));

  const exampleRow = createRow(baseData[0]);
  table.append(exampleRow);
  const rowHeight = exampleRow.clientHeight;
  exampleRow.remove();

  const rowsPerBatch = Math.floor(window.innerHeight / rowHeight);

  var currentBatch = 0;

  function loadBatch(batch) {
    const start = batch * rowsPerBatch;
    const end = Math.min((batch + 1) * rowsPerBatch, baseData.length);

    for (var i = start; i < end; i++) {
      table.appendChild(createRow(baseData[i]));
    }
  }

  loadBatch(currentBatch); // Load initial batch

  window.addEventListener("scroll", function () {
    // Check if near bottom
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - rowsPerBatch * rowHeight
    ) {
      loadBatch(++currentBatch);
    }
  });
});

function createRow(entry) {
  const row = document.createElement("tr");

  // Add Lishan Didan
  const lishanDidanCell = document.createElement("td");
  const link = document.createElement("a");
  link.href = "../word/?id=" + entry.id;
  link.textContent = entry.lishanDidan;
  lishanDidanCell.appendChild(link);
  row.appendChild(lishanDidanCell);

  // Add Romanization
  const romanizationCell = document.createElement("td");
  romanizationCell.style.textAlign = "left";
  romanizationCell.textContent = entry.romanization;
  row.appendChild(romanizationCell);

  // Add Hebrew
  const hebrewCell = document.createElement("td");
  hebrewCell.textContent = entry.hebrew.join(", ");
  row.appendChild(hebrewCell);

  // Add English
  const englishCell = document.createElement("td");
  englishCell.style.textAlign = "left";
  englishCell.textContent = entry.english.join(", ");
  row.appendChild(englishCell);

  // Add Voice (MP3 audio)
  const voiceCell = document.createElement("td");
  if (entry.voice && entry.voice.length > 0) {
    entry.voice.forEach((voiceFile) => {
      const audio = document.createElement("audio");
      audio.controls = true;
      audio.title = voiceFile.actor;

      const source = document.createElement("source");
      source.src = "../voice" + voiceFile.path;
      source.type = "audio/mpeg";
      audio.appendChild(source);

      voiceCell.appendChild(audio);
    });
  } else {
    voiceCell.textContent = "לא קיים שמע";
  }
  row.appendChild(voiceCell);
  return row;
}
