const Background = (id: string, gap: number, color: string, variant) => {
  const g = `<g id=${id}>bg</g>`;
  console.log(typeof g);
  return g;
};

export default Background;
