import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import PaginationComponent from './Component/Pagination';
import './App.css';
const App = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * recordsPerPage;
  const indexOfFirstPost = indexOfLastPost - recordsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='container mt-5 d-flex flex-column'>
      <div className="table-wrapper">
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>User Id</th>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr key={post.id}>
                <td>{post.userId}</td>
                <td>{post.id}</td>
                <td>{post.title}</td>
                <td>{post.body}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
      <div className="mt-auto">
        <PaginationComponent
          recordsPerPage={recordsPerPage}
          totalRecords={posts.length}
          paginate={paginate}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default App;
