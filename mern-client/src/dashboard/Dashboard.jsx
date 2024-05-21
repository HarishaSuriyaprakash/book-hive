import React, { useState } from 'react';

const Dashboard = () => {
  const [recentBooks, setRecentBooks] = useState([
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
  ]);

  const [todos, setTodos] = useState([
    { text: 'The Catcher in the Rye', completed: false, bookTitle: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { text: 'Brave New World', completed: false, bookTitle: 'Brave New World', author: 'Aldous Huxley' },
    { text: 'The Road', completed: false, bookTitle: 'The Road', author: 'Cormac McCarthy' },
    { text: 'The Book Thief', completed: false, bookTitle: 'The Book Thief', author: 'Markus Zusak' },
  ]);

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, completed: false, bookTitle: 'New Book', author: 'New Author' }]);
      setNewTodo('');
    }
  };

  const handleTodoChange = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = true;
    setTodos(updatedTodos);

    // Update recent reads when a to-do item is checked off
    const todo = updatedTodos[index];
    if (todo.completed) {
      setRecentBooks([
        ...recentBooks,
        { title: todo.bookTitle, author: todo.author },
      ]);
    }
  };

  return (
    <div className="dashboard-container p-4">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-lg mb-6">Welcome to the admin dashboard. Here you can manage your books, check recent reads, write blogs, and keep track of your to-dos.</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Sell Books Section */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Sell Your Books</h2>
          <p className="mb-4">Upload and manage your book listings here.</p>
          <button className="bg-blue-500 text-white px-4 py-2 rounded">Upload Book</button>
        </div>

        {/* Recent Reads Section */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Book Reads</h2>
          <ul>
            {recentBooks.map((book, index) => (
              <li key={index} className="mb-2">
                <strong>{book.title}</strong> by {book.author}
              </li>
            ))}
          </ul>
        </div>

        {/* To-Do List Section */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">To-Do List</h2>
          <ul>
            {todos.map((todo, index) => (
              <li key={index} className="mb-2 flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={todo.completed}
                  onChange={() => handleTodoChange(index)}
                />
                {todo.text}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 mr-2"
              placeholder="to-do"
            />
            <button
              onClick={handleAddTodo}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Add To-Do
            </button>
          </div>
        </div>

        {/* Blogs Section */}
        <div className="p-6 bg-white shadow-md rounded-md">
          <h2 className="text-2xl font-semibold mb-4">Recent Blogs</h2>
          <ul>
            {[
              { title: 'Blog Post 1', snippet: 'This is a snippet of the first blog post...' },
              { title: 'Blog Post 2', snippet: 'This is a snippet of the second blog post...' },
              { title: 'Blog Post 3', snippet: 'This is a snippet of the third blog post...' },
            ].map((blog, index) => (
              <li key={index} className="mb-4">
                <strong>{blog.title}</strong>
                <p>{blog.snippet}</p>
                <button className="text-blue-500">Read more</button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
