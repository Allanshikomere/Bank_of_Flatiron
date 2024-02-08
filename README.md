# Bank of Flatiron React App

This is a simple React application representing the "The Royal Bank of Flatiron." The app allows users to view, search, and add transactions. It consists of three main components: `AccountsContainer`, `App`, and `TransactionsList`.

## Components

### 1. `AccountsContainer`

The `AccountsContainer` component is the main container for the application. It includes a search bar, a form to add new transactions, and a list of transactions. It fetches transaction data from a local server using the `fetch` API and displays the list of transactions based on user input in the search bar.

### 2. `App`

The `App` component is the entry point of the application. It renders the overall structure of the app, including the header "The Royal Bank of Flatiron" and the `AccountsContainer` component.

### 3. `TransactionsList`

The `TransactionsList` component is responsible for rendering a table of transactions. It receives a list of transactions as a prop and maps over them to render individual `Transaction` components.

### 4. `Transaction`

The `Transaction` component is a simple functional component that renders a single row of transaction data, including date, description, category, and amount.

## Technologies Used

- React
- JavaScript
- CSS
## Core Deliverables

As a user, I should be able to:

- See a table of the transactions.
- Fill out and submit the form to add a new transaction. This should add the new
  transaction to the table **as well as post the new transaction to the backend
  API for persistence**.
- Filter transactions by typing into the search bar. Only transactions with a
  description matching the search term should be shown in the transactions
  table.