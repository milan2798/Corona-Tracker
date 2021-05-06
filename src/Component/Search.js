import {  useState, useRef } from 'react';
import cancel from './cancel.svg';
import Card from './Card'



const Searchspan = ({ spantext, info, setsearchCard, setsearchData, searchCard }) => {
    let data = [];
    let disdata = [];
    
    let searcheddata = [];
    let dummy = [];

    if (spantext !== "" && info !== "" && info !== undefined) {


        data = Object.keys(info).map((item) =>
            info[item].district
        )
        console.log("states", data);

        searchCard ? dummy = Object.keys(data).filter((item) => Object.keys(data[item]).includes(searchCard)) : console.log("keys not generated");
        searchCard ? console.log("dummy1", data[dummy[0]][searchCard]) : console.log("dummy1 nothing");
        searchCard ? setsearchData(data[dummy[0]][searchCard]) : console.log("no");


        disdata = Object.keys(data).map((item) =>
            Object.keys(data[item])
        );
        // console.log("district",disdata)
        // console.log("ssss",disdata[0])


        disdata.map((item) => item.map((item2) => {
            if (item2.toLowerCase().startsWith(spantext.toLowerCase())) {
                searcheddata.push(item2)
            }
        }))
        //  console.log("searchdata",searchdata)
        //  console.log("searcheddata",searcheddata)
        return (

            <div className="searchspan">

                {searchCard ? <span></span> : searcheddata.map((item, key) => (
                    <div className="spanbox" key={key} onClick={(e) => searchcarddata(e, item, setsearchCard, setsearchData)} >{item}</div>))}

            </div>
        )
    }
    else {
        return <div></div>
    }
}
const searchcarddata = (e, item, setsearchCard) => {
    console.log("searchdataclick")
    setsearchCard(item);


}
const Search = ({ info }) => {
    console.log("SearchMainrender");
    const inputRef = useRef("");
    let keys = [];
 
    const [spclass, setspclass] = useState("search-placeholder")
    const [searchText, setsearhText] = useState("")
    const [searchCard, setsearchCard] = useState("")
    const [searchData, setsearchData] = useState({})
    const disSpan = () => {
        setspclass("disappear");
    }
    // const appSpan = () => {
    //     setspclass("search-placeholder");
    //     inputRef.current.value = "";
    //     setsearhText("");
    //     setsearchData({});
    // }
    const handleInput = (e) => {
        setsearhText(e.target.value);
        setsearchCard("");
        setsearchData({});
    }
    const cancelClick = () => {
        setsearhText("");
        setsearchCard("");
        setsearchData({});
        inputRef.current.value = "";
        setspclass("search-placeholder");
    }
    // const setCard=(searchCard)=>{
    //     setsearchCard(searchCard);
    // }
    return (
        <div className="Search">
            <div className="search-input-wrapper" style={{ animationDelay: '500ms' }}>
                <input type="text" ref={inputRef} onChange={(e) => handleInput(e)} onBeforeInput={disSpan} />
                <span className={spclass}>search by city name</span>
                <div className="search-button"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    <img src={cancel} onClick={cancelClick} width="20" height="20" />

                    <Searchspan setsearchCard={setsearchCard} searchCard={searchCard} setsearchData={setsearchData} spantext={inputRef.current.value} info={info} />
                </div>

            </div>
            {console.log("SearchCard", searchCard)}
            {<h2 className="disname">{searchCard ? <span> {inputRef.current.value = searchCard} </span> : <p></p>}</h2>}
            {/* {(searchData != null && searchData != undefined) ? keys = Object.keys(searchData) : console.log("none")}
                {(searchData != null && searchData != undefined) ? dkeys = Object.keys(searchData.delta) : console.log("none")} */}
            {console.log("Searchdata", searchData)}
            {console.log("Active", searchData[keys[0]])}
            {console.log("keys", keys)}
            {(searchData.active !== undefined) ?

                <div className="countryi">
                    <Card inf={searchData.active} deltainf="0" text="Active" color="Orange" tcolor="rgb(255 219 150)" />
                    <Card inf={searchData.confirmed} deltainf={searchData.delta.confirmed} text="Confirmed" color="yellow" tcolor="rgb(210 209 108)" />
                    <Card inf={searchData.recovered} deltainf={searchData.delta.recovered} text="Recovered" color="green" tcolor="green" />
                    <Card inf={searchData.deceased} deltainf={searchData.delta.deceased} text="Deaths" color="red" tcolor="red" />
                </div>
                : <span></span>}
        </div>
    )
}
export default Search;