import React from 'react'
import { Sidebar } from "flowbite-react";
import { BiBuoy } from "react-icons/bi";
import { HiArrowSmRight, HiChartPie, HiInbox, HiOutlineCloudUpload, HiShoppingBag, HiTable, HiUser, HiViewBoards } from "react-icons/hi";
import userImg from "../assets/profile.jpg";
import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider';


export const SideBar = () => {
  const {user}=useContext(AuthContext);
  console.log(user);
  return (
    <Sidebar aria-label="Sidebar with content separator example">
    <Sidebar.Logo href="/" img={user?.photoURL} imgAlt="" className='w-12 h-12 rounded'>
        <p>{user?.displayName || "Demo User"}</p>
    </Sidebar.Logo>
    <Sidebar.Items>
      <Sidebar.ItemGroup>
        <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
          Dashboard
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/upload" icon={HiOutlineCloudUpload}>
          Upload Books
        </Sidebar.Item>
        <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
          Manage Books
        </Sidebar.Item>

        <Sidebar.Item href="/login" icon={HiArrowSmRight}>
          Sign In
        </Sidebar.Item>
        <Sidebar.Item href="/logout" icon={HiTable}>
          Logout
        </Sidebar.Item>
      </Sidebar.ItemGroup>
      <Sidebar.ItemGroup>
   
        <Sidebar.Item href="#" icon={BiBuoy}>
          Help
        </Sidebar.Item>
      </Sidebar.ItemGroup>
    </Sidebar.Items>
  </Sidebar>
  )
}
