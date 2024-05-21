import React, { useState, useEffect } from 'react';
import { Table } from "flowbite-react";
import { Link } from 'react-router-dom';
import './styles.css'; // Import the CSS file

const ManageBooks = () => {
  const [allBooks, setAllBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then(res => res.json())
      .then(data => setAllBooks(data));
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/${id}`, {
      method: 'DELETE',
    })
    .then(res => res.json())
    .then(data => {
      alert("Book is deleted successfully");
      setAllBooks(allBooks.filter(book => book._id !== id));
    });
  };

  return (
    <div className='px-9 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Manage Your Books</h2>
      
      {/* Table for book data */}
      <Table className='lg:w-[1180px] table-on-top'>
        <Table.Head>
          <Table.HeadCell>No</Table.HeadCell>
          <Table.HeadCell>Book Name</Table.HeadCell>
          <Table.HeadCell>Author Name</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className='divide-y'>
          {allBooks.map((book, index) => (
            <Table.Row key={book._id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{book.bookTitle}</Table.Cell>
              <Table.Cell>{book.authorName}</Table.Cell>
              <Table.Cell>{book.category}</Table.Cell>
              <Table.Cell>$10</Table.Cell>
              <Table.Cell>
                <Link 
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5" 
                  to={`/admin/dashboard/edit-books/${book._id}`}
                >
                  Edit
                </Link>
                <button 
                  onClick={() => handleDelete(book._id)} 
                  className='bg-red-500 px-4 py-1 font-semibold text-white rounded hover:bg-sky-500'
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default ManageBooks;
