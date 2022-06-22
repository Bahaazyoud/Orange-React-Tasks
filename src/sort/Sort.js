const Sort = () => {
    let arr = ['Z','A','Q','B','C','Y','S','W'];
    let Sortedarr = arr.sort();
    return(
        <div>
            <h1>Sorted Arr : {Sortedarr.join(',')}</h1>
        </div>
    );
}
export default Sort;