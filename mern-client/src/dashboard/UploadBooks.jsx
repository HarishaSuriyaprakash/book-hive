import React, { useState } from 'react';
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";

const UploadBooks = () => {
  const bookCategories = [
    "Fiction",
    "Fantasy",
    "Romance",
    "Mystery and Thriller",
    "Science Fiction",
    "Historical",
    "Horror",
    "Non-fiction",
    "Romatasy",
    "Bibliography",
    "Autobiography",
    "Self-Help",
    "Kids"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleBookSubmitted = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;
    
    const bookObj={
        bookTitle,authorName,imageURL,category,bookDescription,bookPDFURL
    }
    console.log(bookObj);
   
    fetch("http://localhost:5000/upload-book",
    {method:"POST",
    headers:{
        "Content-Type": "application/json",
    },
    body:JSON.stringify(bookObj)
    }).then(res=>res.json()).then(data=>{
        // console.log(data);
        alert("Book uploaded successfully");
        form.reset();
    })
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Upload book</h2>

      <form onSubmit={handleBookSubmitted} className="flex flex-col gap-4 lg:w-[1180px] mx-auto">
        <div className='flex flex-wrap gap-8'>
          <div className='w-full '>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required className="rounded-md" />
          </div>
          <div className='w-full'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required className="rounded-md" />
          </div>
        </div>
        <div className='flex flex-wrap gap-8'>
          <div className='w-full '>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image" required className="rounded-md" />
          </div>
          <div className='w-full '>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select id='inputState' name='category' className='w-full rounded-md' value={selectedBookCategory} onChange={handleChangeSelectedValue}>
              {bookCategories.map(option => <option key={option} value={option}>{option}</option>)}
            </Select>
          </div>
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" placeholder="Book Description" required rows={5} className='w-full' />
        </div>

        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name='bookPDFURL' type="text" placeholder="Book PDF" required className="rounded-md" />
        </div>
        
        <button type="submit" className='bg-blue-700 w-full px-5 py-2 hover:bg-blue-500 rounded'>Upload</button>
      </form>
    </div>
  );
};

export default UploadBooks;
