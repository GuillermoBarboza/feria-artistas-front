const flyers = [
  "https://carlitosbucket.s3-sa-east-1.amazonaws.com/tero-rinonera.jpeg",
  "https://carlitosbucket.s3-sa-east-1.amazonaws.com/capincho-mate.jpeg",
  "https://carlitosbucket.s3-sa-east-1.amazonaws.com/capibara-purse.jpeg",
  "https://carlitosbucket.s3-sa-east-1.amazonaws.com/niandu-playa.jpeg",
  "https://carlitosbucket.s3-sa-east-1.amazonaws.com/niandu-trap.jpeg",
  "https://carlitosbucket.s3-sa-east-1.amazonaws.com/tero-acuarela.jpeg",
  "https://carlitosbucket.s3-sa-east-1.amazonaws.com/tero-remera.jpeg",
];

window.onload = () => {
  let button = document.querySelector("button");
  let body = document.querySelector("body");
  let imgIndex = 0;
  button.addEventListener("click", (e) => {
    console.log(imgIndex)
    imgIndex === 6 ? (imgIndex = 0) : imgIndex++;
    console.log(imgIndex)
    body.style.backgroundImage = `url(${flyers[imgIndex]})`;
  });
};
