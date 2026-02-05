let N=6;
let M=5;

for(i=1;i<=N;i++){
    let numString="";
    for(j=1;j<M;j++){
      numString+=j+ "  ";
      
    }
    console.log(numString);
      
}



for(i=0;i<N;i++){
    let numString="";
    for(j=0;j<M;j++){
      numString+=j+1+ "  ";
      
    }
      
}

for(i=0;i<N;i++){
    let numString="";
    for(j=0;j<M;j++){
      numString+="* ";
      
    }
    console.log(numString);
      
}

for(i=0;i<N;i++){
    let numString="";
    for(j=0;j<i;j++){
      numString+="* ";
      
    }
    console.log(numString);
      
}

for(i=1;i<N;i++){
    let numString="";
    for(j=1;j<i;j++){
      numString+=j+" ";
      
    }
    console.log(numString);
      
}

for(i=5;i>=1;i--){
    let numString="";
    for(j=1;j<i;j++){
      numString+=j+" ";
      
    }
    console.log(numString);
      
}

//for decrement stars
for(i=5;i>=1;i--){
    let numString="";
    for(j=0;j<i;j++){
      numString+="* ";
      
    }
    console.log(numString);
      
}
for(i=0;i<N;i++){
    let numString="";
    for(j=0;j<N-i;j++){
      numString+="* ";
      
    }
    console.log(numString);
      
}

for(let i=0;i<7;i++){
  let row="";
  for(let j=0;j<i;j++){
    let char=65+((i-1+j)%26);
    row+=String.fromCharCode(char);
  }
  console.log(row);
  
}


for(let i=0;i<6;i++){
  let char=String.fromCharCode(65+i);
  let row=" ";

  for(let j=0;j<=i;j++){
    row+=char;

  }
  console.log(row);
  
}






