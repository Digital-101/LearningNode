function csvToArray(csv) {
    const rows = csv.trim().split('\n');
    return rows.map(row => row.split(','));
}

// Example usage:
const csvText = `name,age,city
John,30,New York
Jane,25,Los Angeles
Doe,22,Chicago`;

const result = csvToArray(csvText);
console.log(result);