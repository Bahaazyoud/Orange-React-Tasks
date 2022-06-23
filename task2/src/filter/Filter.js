import { useState } from "react";
const Filter = () => {
    let arr = ["Khozama","Mohammad","Lujain","Nada","Ayman"];
    const [search,searchHandler] = useState('');
    const ChangeHandler = (event)=>{
        let filteredArr = arr.filter(e => e.includes(event.target.value)   );
        searchHandler(filteredArr);
    }
    return(
        <div>
        <form>
            <input type="text" onChange={ChangeHandler}/>
            <h5>{search}</h5>
        </form>
        </div>
    );
}
export default Filter;