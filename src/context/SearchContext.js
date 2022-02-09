import React, { Children } from "react";

//search context to be used in Nav.js for all components
export const SearchContext = React.createContext({
    // search: [],
    searchProducts: () => {},
    search: () => {}
});

export default function SearchContextProvider({children}) {
    const [input, setInput] = React.useState('')
    const [data, setData] = React.useState(JSON.parse(localStorage.getItem("products")) || []);


    const prod = JSON.parse(localStorage.getItem('products'))
    console.log('prorororo', prod);

    const searchProducts = (arr, query) => {
        return arr.data.filter(el => el.name.toLowerCase().indexOf(query.toLowerCase()) !== -1)
    }

    const search = (inputV) => {
        console.log('input', inputV);
        console.log('searching');
        let sel = searchProducts(prod, inputV);
        setData(sel);
    }

    return (
        <SearchContext.Provider value={{ search, searchProducts, input, setInput,data, setData }}>
            {children}
        </SearchContext.Provider>
    )

 
}

    