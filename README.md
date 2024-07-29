
# The Wallish Wiki

This repository contains the codebase for "The Wallish Wiki," a feature representation of Instagram Stories built using a Node.js Express backend, PostgreSQL database, and a React Native TypeScript Expo frontend app.

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Running the App](#running-the-app)
- [API Documentation](#api-documentation)
- [Media Handling](#media-handling)
- [References](#references)

## Overview

"The Wallish Wiki" is a mobile application that replicates the Stories feature of Instagram. The app is built with a React Native frontend, a Node.js Express backend, and a PostgreSQL database. The backend is deployed on an EC2 instance in AWS, and the database is hosted on Vercel. Additionally, a mock CDN has been created to serve media files, which are manually compressed for optimized delivery.

## Folder Structure

the_wallish_wiki/
├── backend/
│   ├── controllers/
│   │   ├── storyController.js
│   │   └── userController.js
│   ├── models/
│   │   ├── story.js
│   │   └── user.js
│   ├── routes/
│   │   ├── storyRoutes.js
│   │   └── userRoutes.js
│   ├── config/
│   │   └── dbConfig.js
│   ├── app.js
│   └── index.js
├── frontend/
│   ├── components/
│   │   ├── StoryCard.tsx
│   │   ├── StoryList.tsx
│   │   └── StoryInput.tsx
│   ├── screens/
│   │   ├── HomeScreen.tsx
│   │   └── StoryScreen.tsx
│   ├── navigation/
│   │   └── RootNavigation.tsx
│   ├── styles/
│   │   └── globalStyles.ts
│   ├── utils/
│   │   ├── api.ts
│   │   └── storage.ts
│   ├── App.tsx
│   └── index.js
├── image_cdn/
│   ├── images/
│   │   ├── story1.jpg
│   │   ├── story2.jpg
│   │   └── story3.jpg
│   └── index.js
├── .env
├── README.md
└── package.json


## Features

- Display and view stories similar to Instagram Stories.
- Integration with a PostgreSQL database for storing story data.
- Media files served from a custom mock CDN repository.
- API endpoints to interact with the backend server.

## Architecture

- **Frontend**: React Native, TypeScript, Expo
- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL
- **Media CDN**: Separate repository for media files

## Installation

To run the frontend of the app, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/shashankGS10/the_wallish_wiki.git
   cd the_wallish_wiki
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the app:**
   ```bash
   expo start
   ```

To install the app on your device, you can either use the Expo app or download the provided .apk file.

## Running the App

Since the backend and database are already deployed and integrated, you only need to run the frontend to start using the app.

1. **Install Expo CLI if not already installed:**
   ```bash
   npm install -g expo-cli
   ```

2. **Start the Expo server:**
   ```bash
   expo start
   ```

3. **Install the Expo app on your mobile device:**
   - Scan the QR code generated in your terminal or browser to open the app on your device.

Alternatively, you can download the provided .apk file to install the app directly on your Android device.

## API Documentation

The backend API is deployed and accessible at the following endpoint:

- **Backend API Endpoint**: `https://wallishwiki.renv.link/stories`

The following API endpoint is available:

- `GET /stories`: Fetch all stories.

## Media Handling

Media files are served from a custom mock CDN. The media files are stored in a separate repository named `image_cdn` and have been manually compressed to ensure optimized delivery.

## References

- **GitHub Repository**: [The Wallish Wiki](https://github.com/shashankGS10/the_wallish_wiki)
- **Deployed Backend Endpoint**: `https://wallishwiki.renv.link/stories` (EC2 instance AWS)
- **PostgreSQL DB URL**: `https://the-wallish-wiki-d1qxpqpzz-shashankgs10s-projects.vercel.app/stories` (Hosted on Vercel)

## Contact

For any inquiries or issues, please contact [Shashank GS](https://github.com/shashankGS10).
