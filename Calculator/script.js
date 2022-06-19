const shuffleArray=(arr)=>{ return Math.random(...arr)} 
const shuffleArray1=(arr)=>{ arr.sort(()=>{ return Math.random()-0.5; })} 
// const shuffleArray2=(arr)=>{ arr.sort(()=>{ return Math.random(); }) return arr;}

    console.log(shuffleArray([1,4,3,5,7,3]));
    console.log(shuffleArray1([1,4,3,5,7,3]));