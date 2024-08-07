# Blog Project Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Pages Overview](#pages-overview)
3. [API Integration](#api-integration)
4. [Installation and Setup](#installation-and-setup)

## Introduction

This project is a blog application built using ReactJS. It features a home page, blog posts, an about section, a mood generator, and user authentication (login, logout, and register). The application interacts with the Student Practice Server from SoftUni for data management.



## Pages Overview

### Home

- **Path:** `/`
- **Description:** The landing page of the blog has a Slider page. The LOGO in the header is dynamic with start and stop options upon click.

### Blog

- **Path:** `/catalog`
- **Description:** Displays a list of all blog posts. Users can click on individual posts to read the full content. Existing users can also comment posts. Authors of the post have access to Edit and Delete pages:

### Edit

- **Path:** `/edit/:postId`
- **Description:** Displays a form with preseeded data about the post, so owner can directly edit the data.

### My Posts

- **Path:** `/my-posts`
- **Description:** Displays a catalog with all posts the current user has made.

### Delete

### About

- **Path:** `/about`
- **Description:** Provides information about the blog and its creator and two nice cats.

### Mood Generator

- **Path:** `/mood`
- **Description:** A fun page that generates random moods or quotes to engage users. API calls made to two separate servers for Cats and Dogs.

### Login

- **Path:** `/login`
- **Description:** Allows users to log in to their accounts.

### Logout

- **Path:** `/logout`
- **Description:** Logs users out of their accounts.

### Register

- **Path:** `/register`
- **Description:** Enables new users to create an account.

  

## API Integration

The project uses the Student Practice Server from SoftUni for managing blog data and user authentication.

### API Endpoints

- **Base URL:** `https://localhost:3030`
- **Endpoints:**
  - `/data/posts` - Fetch, create, update, and delete blog posts.
  - `/users/login` - User login.
  - `/users/register` - User registration.
  - `/users/logout` - User logout.

- **Dog API URL:** `https://dog.ceo/api/breeds/image/random`
- **Cat API URL:** `https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1`


## Intstallation and setup

- **Start Client:**
  - `cd client`
  - `npm ic`
  - `npm run dev`
- **Start Server:**
  - `cd server`
  - `node server.js`
 
The application will run on `https://localhost:5173`

