# Stock Management Project

This repository contains a monorepo setup using NX with separate backend and frontend applications.

## Project Structure

- `backend/` - The backend application
- `frontend/` - The frontend application


## Setup

- Add env variables.
- **Make sure when adding the mongoUri to add backslash before the $ because of nx encoding issues**.

### Installation

Clone the repository and install the dependencies:

```bash
git clone [repository-url]
cd [repository-directory]
npm install
```

## Running Applications

From the root folder:

```bash
npm run start:backend
npm run start:frontend
```