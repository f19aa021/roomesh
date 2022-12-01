const randint = (rmin, rmax) => {
  return Math.floor(Math.random() * (rmax+1 - rmin)) + rmin;
};

export default randint;