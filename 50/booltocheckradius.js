function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
    // Calculate the distance between the centers of the circles
    const distance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    
    // Check if the distance is less than or equal to the sum of the radii
    return distance <= (r1 + r2);
}

// Example usage:
console.log(areCirclesIntersecting(0, 0, 5, 8, 0, 5)); // true
// console.log(areCirclesIntersecting(0, 0, 5, 11, 0, 5)); // false