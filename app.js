const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const path = require('path');

// Helper function to parse records from a file
const parseRecords = (filePath) => {
  const data = fs.readFileSync(filePath, 'utf-8');
  return data.split('\n').filter(line => line).map(line => {
    const name = line.substring(0, 50).trim();
    const price = parseFloat(line.substring(50, 67).replace(/[^0-9.-]+/g, ""));
    return { name, price };
  });
};

// Helper function to format records for writing to a file
const formatRecord = (record) => {
  return `${record.name.padEnd(50)}${record.price.toFixed(2).padStart(17)}`;
};

// Endpoint to merge and sort records
app.post('/merge-and-sort', (req, res) => {
  try {
    console.log("MERGING FILES");

    // Read records from input files
    const recordsB = parseRecords(path.join(__dirname, 'FXLIST-B.txt'));
    const recordsM = parseRecords(path.join(__dirname, 'FXLIST-M.txt'));
    const recordsJ = parseRecords(path.join(__dirname, 'FXLIST-J.txt'));

    // Merge records
    const mergedRecords = [...recordsB, ...recordsM, ...recordsJ];

    console.log("SORTING RECORDS");

    // Sort records by price
    mergedRecords.sort((a, b) => a.price - b.price);

    // Write sorted records to output file
    const sortedData = mergedRecords.map(formatRecord).join('\n');
    fs.writeFileSync(path.join(__dirname, 'FXLIST-SORTED.txt'), sortedData);

    console.log("NOW I'M STOPPING");

    res.status(200).send('Records merged and sorted successfully.');
  } catch (error) {
    res.status(500).send('An error occurred: ' + error.message);
  }
});