import React from 'react';
import Pagination from 'react-bootstrap/Pagination';
import './Pagination.css';

const PaginationComponent = ({ recordsPerPage, totalRecords, paginate, currentPage }) => {
  const pageNumbers = [];
  const totalPages = Math.ceil(totalRecords / recordsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
      pageNumbers.push(i);
    } else if (i === currentPage - 2 || i === currentPage + 2) {
      pageNumbers.push('...');
    }
  }

  return (
    <Pagination>
      <Pagination.First onClick={() => paginate(1)} disabled={currentPage === 1} />
      <Pagination.Prev onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1} />
      {pageNumbers.map(number => (
        <Pagination.Item key={number} active={number === currentPage} onClick={() => paginate(number)}>
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages} />
      <Pagination.Last onClick={() => paginate(totalPages)} disabled={currentPage === totalPages} />
    </Pagination>
  );
};

export default PaginationComponent;
