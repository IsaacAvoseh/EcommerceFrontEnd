import React from 'react';
import ReactPaginate from "react-paginate";


const Paginate = () => {
    const [data, setData] = React.useState(JSON.parse(localStorage.getItem('products')));
    const [pageNumber, setPageNumber] = React.useState(0);

    const dataPerPage = 10;
    const pagesVisited = pageNumber * dataPerPage;

    // const displayUsers = users
    //     .slice(pagesVisited, pagesVisited + usersPerPage)
    //     .map((user) => {
    //         return (
    //             <div className="user">
    //                 <h3>{user.firstName}</h3>
    //                 <h3>{user.lastName}</h3>
    //                 <h3>{user.email}</h3>
    //             </div>
    //         );
    //     });

    const pageCount = Math.ceil(data?.length / dataPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
    };

    return (
        <div className="App">
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName={"paginationBttns"}
                previousLinkClassName={"previousBttn"}
                nextLinkClassName={"nextBttn"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />
        </div>
    );
}

export default Paginate;
