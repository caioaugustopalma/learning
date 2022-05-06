class Livro {
  constructor(tit, ed, auth, pages){
    this.tit = tit;
    this.ed = ed;
    this.auth = auth;
    this.pages = pages;
  }

  toString(){
    return `${ this.tit }, ${ this.ed } ed., ${ this.auth }, ${ this.pages } p.`;
  }
}

function test(request, response){

  let boo = new Livro("cookbook", 7, "PALMA, C. A., ", 314)
  let arr1 = boo.toString().match(/\D+/g)
  let arr2 = Array.from(arr1)
  //let ans = {arr1: arr1, arr2: arr2}
  //let ans = (arr1[0] === arr2[0])
  let ans = boo.toString().match(/\d+/g).map( x => { return Number(x) } ).reduce( (y, x) => y + x )

  response.json(ans)
}

export default test

//Ways of declaring functions
const fy = y => y**2;
function fx (x) { return {y: x**2} }
function fz(x) { return {y: x?.tit + x?.ed} }
function fw(arr){
  let str = "";
  arr.forEach( x => { str += x } );
  return {y: str}
}
