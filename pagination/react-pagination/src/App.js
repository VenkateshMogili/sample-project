import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [pageSize, setPageSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0)

  const onPageChange = (index) => {
    setCurrentPage(index);
    //let currentItems = items.slice(index * pageSize, pageSize * (index + 1));
    //setCurrentItems(currentItems);
    fetchUsers(index)
  }

  const fetchUsers = (index = 0) => {
    fetch("http://localhost:5000/api/users?page=" + (parseInt(index) + 1) + "&pageSize=" + pageSize)
      .then(res => res.json())
      .then(response => {
        setItems(response.data);
        setCurrentItems(response.data);
        setPageCount(response.pageCount)
        console.log(response.data);
      }).catch(error => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchUsers()
  }, [pageSize]);
  //useEffect(() => {
  //  onPageChange(0);
  //}, [pageSize])

  return (
    <div>
      <h1>React Pagination</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Name</th>
        </tr>
        {currentItems.length > 0 && currentItems.map((item, index) => (
          <tr key={index}>
            <td>{item._id}</td>
            <td>{item.name}</td>
          </tr>
        ))}
      </table>

      {/* Pagination */}
      <div>
        <button onClick={() => onPageChange(0)}>First</button>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 0}>Prev</button>
        {Array(pageCount).fill(null).map((page, index) => (
          <button className={`${currentPage === index ? 'active-btn' : ''}`} key={index} onClick={() => onPageChange(index)}>{index + 1}</button>
        ))}
        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === pageCount - 1}>Next</button>
        <button onClick={() => onPageChange(pageCount - 1)}>Last</button>
        <label>Page Size: </label>
        <select value={pageSize} onChange={(e) => {
          setPageSize(parseInt(e.target.value));
          setPageCount(Math.ceil(items.length / parseInt(e.target.value)))
        }
        }>
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
          <option value={20}>20</option>
        </select>
      </div>

    </div>
  );
}

export default App;
