function calculateDistance(x1, y1, x2, y2) {
    const deltaX = x2 - x1;
    const deltaY = y2 - y1;
    return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
}

// Example usage:
const distance = calculateDistance(1, 2, 4, 6);
console.log(distance); // Output: 5