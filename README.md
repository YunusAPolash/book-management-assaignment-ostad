# Get started with Book CURD Applications

Using this book curd application you can create,read,update,delete books

Follow 3 steps below :

## Step 1 :

Clone this repo using belows command

```bash
   $ git clone https://github.com/YunusAPolash/book-management-assaignment-ostad
```

## Step 2 :

Install all npm packages using this command

```bash
   $ npm install
```

## Step 3 :

Configure the .env files and then run the application using

```bash
   $ npm start
```

Applications will run using developer dev dependency nodemon.
Thanks for using our boiler plate to starting your projects.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`
`DATABASE`

## API Reference

#### Get all Books

```http
  GET /api/v1/books
```

#### Get Book By Id

```http
  GET /api/v1/books/:id
```

#### Create New Books

```http
  POST /api/v1/books
```

| Parameter       | Type     | Description  |
| :-------------- | :------- | :----------- |
| `title`         | `string` | **Required** |
| `author`        | `string` | **Required** |
| `description`   | `string` | **Optional** |
| `publishedYear` | `number` | **Optional** |

#### Update a Books By id

```http
  PUT /api/v1/books/:id
```

#### Delete a Books By id

```http
  DELETE /api/v1/books/:id
```
