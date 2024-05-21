import React, { useState, useEffect } from 'react';
import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import { useParams, useLoaderData } from 'react-router-dom';

const EditBooks = () => {
  const { id } = useParams();
  const { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL } = useLoaderData();

  const bookCategories = [
    "Fiction", "Fantasy", "Romance", "Mystery and Thriller",
    "Science Fiction", "Historical", "Horror", "Non-fiction",
    "Romatasy", "Bibliography", "Autobiography", "Self-Help", "Kids"
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(category);

  const handleChangeSelectedValue = (event) => {
    setSelectedBookCategory(event.target.value);
  };

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const category = form.category.value;
    const bookDescription = form.bookDescription.value;
    const bookPDFURL = form.bookPDFURL.value;

    const updatebookObj = { bookTitle, authorName, imageURL, category, bookDescription, bookPDFURL };

    fetch(`https://book-hive-uv3v.vercel.app/book/${id}`,
        {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(updatebookObj)
        }
    ).then(res=>res.json()).then(data=>{
        
        alert("Book updated successfully");
    })
  };

  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update Book</h2>

      <form onSubmit={handleUpdate} className="flex flex-col gap-4 lg:w-[1180px] mx-auto">
        <div className='flex flex-wrap gap-8'>
          <div className='w-full'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              name='bookTitle'
              type="text"
              placeholder="Book Name"
              required
              defaultValue={bookTitle}
              className="rounded-md"
            />
          </div>
          <div className='w-full'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author" />
            </div>
            <TextInput
              id="authorName"
              name='authorName'
              type="text"
              placeholder="Author Name"
              required
              defaultValue={authorName}
              className="rounded-md"
            />
          </div>
        </div>
        <div className='flex flex-wrap gap-8'>
          <div className='w-full'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput
              id="imageURL"
              name='imageURL'
              type="text"
              placeholder="Book Image"
              required
              defaultValue={imageURL}
              className="rounded-md"
            />
          </div>
          <div className='w-full'>
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id='inputState'
              name='category'
              className='w-full rounded-md'
              value={selectedBookCategory}
              onChange={handleChangeSelectedValue}
            >
              {bookCategories.map(option => <option key={option} value={option}>{option}</option>)}
            </Select>
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea
            id="bookDescription"
            placeholder="Book Description"
            required
            rows={5}
            defaultValue={bookDescription}
            className='w-full'
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            name='bookPDFURL'
            type="text"
            placeholder="Book PDF"
            required
            defaultValue={bookPDFURL}
            className="rounded-md"
          />
        </div>
        <Button type="submit" className='bg-blue-700 w-full px-5 py-2 hover:bg-blue-500 rounded'>
          Update
        </Button>
      </form>
    </div>
  );
};

export default EditBooks;
