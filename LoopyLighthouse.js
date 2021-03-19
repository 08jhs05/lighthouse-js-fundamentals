for(let i = 100; i < 201; i++){
  let text = i;
  if(i % 3 === 0){
    if(i % 4 === 0){
      text = "LoopyLighthouse";
    } else text = "Loopy";
  } else if(i % 4 === 0) text = "Lighthouse";

  console.log(text);
}