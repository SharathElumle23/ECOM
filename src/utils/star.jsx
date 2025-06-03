export const getStarRating = rating => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) {
      stars.push('★'); // Full star
    } else if (i === Math.ceil(rating) && rating % 1 !== 0) {
      stars.push('☆'); // Half star for decimals
    } else {
      stars.push('☆'); // Empty star
    }
  }
  return stars.join(' ');
};
