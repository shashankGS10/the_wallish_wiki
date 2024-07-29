
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

# the_wallish_story_kp

* [backend/](./the_wallish_story_kp/backend)
  * [src/](./the_wallish_story_kp/backend/src)
    * [db/](./the_wallish_story_kp/backend/src/db)
      * [db_setup.js](./the_wallish_story_kp/backend/src/db/db_setup.js)
      * [stories.sql](./the_wallish_story_kp/backend/src/db/stories.sql)
    * [model/](./the_wallish_story_kp/backend/src/model)
      * [storyModel.js](./the_wallish_story_kp/backend/src/model/storyModel.js)
    * [routes/](./the_wallish_story_kp/backend/src/routes)
      * [storyRoute.js](./the_wallish_story_kp/backend/src/routes/storyRoute.js)
  * [.env](./the_wallish_story_kp/backend/.env)
  * [index.js](./the_wallish_story_kp/backend/index.js)
  * [package-lock.json](./the_wallish_story_kp/backend/package-lock.json)
  * [package.json](./the_wallish_story_kp/backend/package.json)
  * [vercel.json](./the_wallish_story_kp/backend/vercel.json)
  * [yarn.lock](./the_wallish_story_kp/backend/yarn.lock)
* [story_mate/](./the_wallish_story_kp/story_mate)
  * [app/](./the_wallish_story_kp/story_mate/app)
    * [components/](./the_wallish_story_kp/story_mate/app/components)
      * [LoadingIndicator.tsx](./the_wallish_story_kp/story_mate/app/components/LoadingIndicator.tsx)
      * [Post.tsx](./the_wallish_story_kp/story_mate/app/components/Post.tsx)
      * [ProgressBar.tsx](./the_wallish_story_kp/story_mate/app/components/ProgressBar.tsx)
      * [StoryComponent.tsx](./the_wallish_story_kp/story_mate/app/components/StoryComponent.tsx)
      * [StoryList.tsx](./the_wallish_story_kp/story_mate/app/components/StoryList.tsx)
    * [data/](./the_wallish_story_kp/story_mate/app/data)
      * [dummyStories.ts](./the_wallish_story_kp/story_mate/app/data/dummyStories.ts)
    * [navigation/](./the_wallish_story_kp/story_mate/app/navigation)
      * [AppNavigator.tsx](./the_wallish_story_kp/story_mate/app/navigation/AppNavigator.tsx)
    * [screens/](./the_wallish_story_kp/story_mate/app/screens)
      * [HomeScreen.tsx](./the_wallish_story_kp/story_mate/app/screens/HomeScreen.tsx)
      * [StoriesScreen.tsx](./the_wallish_story_kp/story_mate/app/screens/StoriesScreen.tsx)
    * [services/](./the_wallish_story_kp/story_mate/app/services)
      * [api.ts](./the_wallish_story_kp/story_mate/app/services/api.ts)
    * [test/](./the_wallish_story_kp/story_mate/app/test)
      * [testFetch.js](./the_wallish_story_kp/story_mate/app/test/testFetch.js)
    * [types/](./the_wallish_story_kp/story_mate/app/types)
      * [story.ts](./the_wallish_story_kp/story_mate/app/types/story.ts)
    * [utils/](./the_wallish_story_kp/story_mate/app/utils)
      * [api.ts](./the_wallish_story_kp/story_mate/app/utils/api.ts)
  * [assets/](./the_wallish_story_kp/story_mate/assets)
    * [adaptive-icon.png](./the_wallish_story_kp/story_mate/assets/adaptive-icon.png)
    * [favicon.png](./the_wallish_story_kp/story_mate/assets/favicon.png)
    * [icon.png](./the_wallish_story_kp/story_mate/assets/icon.png)
    * [splash.png](./the_wallish_story_kp/story_mate/assets/splash.png)
  * [.gitignore](./the_wallish_story_kp/story_mate/.gitignore)
  * [App.tsx](./the_wallish_story_kp/story_mate/App.tsx)
  * [app.json](./the_wallish_story_kp/story_mate/app.json)
  * [babel.config.js](./the_wallish_story_kp/story_mate/babel.config.js)
  * [package-lock.json](./the_wallish_story_kp/story_mate/package-lock.json)
  * [package.json](./the_wallish_story_kp/story_mate/package.json)
  * [tsconfig.json](./the_wallish_story_kp/story_mate/tsconfig.json)
  * [yarn.lock](./the_wallish_story_kp/story_mate/yarn.lock)
* [.gitignore](./the_wallish_story_kp/.gitignore)
* [LICENSE](./the_wallish_story_kp/LICENSE)
* [README.md](./the_wallish_story_kp/README.md)


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
