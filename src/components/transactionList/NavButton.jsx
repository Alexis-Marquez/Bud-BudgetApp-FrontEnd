import React from 'react';
const NavButton = ({currentPage, size, type, getTransactions, itemsPerPage, setCurrentPage}) => {
    let lastPage = size/itemsPerPage;
    if (type === 'previous') {
        if(currentPage>1) {
            return (
                <div className="nav-btn">
                    <button className="nav-button" onClick={()=>{getTransactions(currentPage - 1); setCurrentPage(currentPage - 1)}}>
                        {'<'}
                    </button>
                </div>
            )
        }
    }
    else {

        if (type === 'next') {
                if(currentPage<lastPage) {
                    return (
                        <div className="nav-btn">
                            <button className="nav-button" onClick={()=>{getTransactions(currentPage + 1); setCurrentPage(currentPage + 1)}}>
                                {'>'}
                            </button>
                        </div>
                    )
                }
            }
            else if(type === 'first') {
                if(currentPage>1) {
                    return (
                        <div className="nav-btn">
                            <button className="nav-button" onClick={() => {
                                getTransactions(1);
                                setCurrentPage(1)
                            }}>
                                {'<<'}
                            </button>
                        </div>
                    )
                }
            }
            else if(type === 'last') {
                if (currentPage < lastPage) {
                    return (
                        <div className="nav-btn">
                            <button className="nav-button" onClick={() => {
                                getTransactions(lastPage);
                                setCurrentPage(lastPage);
                            }}>
                                {'>>'}
                            </button>
                        </div>
                    )
                }
            }
    }
}
export default NavButton