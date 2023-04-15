import { useState } from "react";
import CardList from '../CardList/CardList';
import './LatestArticles.css';

const LatestArticles = () => {
    const [pageNumber,setPageNumber]=useState(1);
    const pageChangeHandler = () => {
        if(pageNumber===1) setPageNumber(2);
        else setPageNumber(1);
    }
    return (
        <section className="latestarticles">
            <p className="latestarticles-heading">Latest Articles</p>
            <CardList page={pageNumber}/>
            <div className="page-select">
                {pageNumber===1 && <img src="left_disabled.png"/>}
                {pageNumber===2 && <img src="left.png" onClick={pageChangeHandler}/>}
                <p className="pagetext">{pageNumber}/2</p>
                {pageNumber===1 && <img src="right.png" onClick={pageChangeHandler}/>}
                {pageNumber===2 && <img src="right_disabled.png"/>}
            </div>
        </section>
    )
}

export default LatestArticles;