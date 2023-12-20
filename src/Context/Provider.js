import { createContext, useState } from "react";
import useLocalStorage from "../CustomHook/useLocalStorage";

export const Context = createContext();

function Provider({ children }) {
    const [sideBarOpen, setSideBarOpen] = useState(false);
    const [grid, setGrid] = useLocalStorage('cardGridView', true);
    const [openInput, setOpenInput] = useState(false)
    const [selectedColor, setSelectedColor] = useState('#FFFFFF')
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [searched, setSearched] = useState('');
    const [todo, setTodo] = useLocalStorage('todos', []);
    const [filteredTodo, setFilteredTodo] = useState([]);

    return (
        <Context.Provider value={{
            sideBarOpen, setSideBarOpen, grid, setGrid, openInput, setOpenInput, selectedColor, setSelectedColor, title, setTitle, content, setContent, todo, setTodo, filteredTodo, setFilteredTodo, searched, setSearched
        }}

        >
            {children}
        </Context.Provider>
    )
}

export default Provider