# Server Priority Checker

This project is a Node.js application built with TypeScript. It finds the online server with the lowest priority from a list of servers. It follows a layered architecture, separating concerns across models, services, clients, and controllers, and demonstrates best practices in API requests, error handling, and unit testing.

## Project Structure


## Requirements

- **Node.js** (version 12 or higher)
- **TypeScript**
- **Jest** for unit testing
- **Axios** for HTTP requests

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/dntuanvu/server-priority-checker.git
   cd server-priority-checker

2. **Install dependencies**:
   ```bash
   npm install

3. **Compile TypeScript**:
   ```bash
   npx tsc

## Usage

1. **Run the application**:
   ```bash
   node dist/index.js

2. **Main Components**:
    - **ServerClient** Checks if a server is online via HTTP GET request (with a 5 seconds timeout)
    - **ServerSerivce** Contains logic to find the online server with the lowest priority
    - **ServerController** The entry point that connects and uses ServerService 

## Testing

2. **Run Tests**:
   ```bash
   npm test

2. **Test Details**:
    - **Success Case** Returns the online server with the lowest priority
    - **Error Case** Throws an error if no server is online