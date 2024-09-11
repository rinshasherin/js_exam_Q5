let height=0
let weight=0

const getHeight=(e)=>{
    ht.value+=e.target.textContent
    console.log(height)
}
const getWeight=(e)=>{
    wt.value+=e.target.textContent
    console.log(weight)
}

const calculate=()=>{
    const result=weight/(height**2)
    // console.log(result)
    alert(result)
}

