This is a basic API written in Express.js using the MongoDB driver for university purposes

The application is to be used for warehouse management, where the admin can add a product, remove a product, get a list of products and update the product. It can also filter and sort products. To filter (by name or price) just enter the parameter /api/products?name=nameToFilter || /api/products?price=priceToFilter.
To sort, simply enter the parameter /api/products/sort=nameOfParameterToSort

Of course, filtering and sorting can be combined
