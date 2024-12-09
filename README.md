# Project Guidelines

## Libraries
- Create separate libraries for functionalities like authentication, logging, etc.
- Use the base repository (`baseRepo`) to query anything.
- If you need a query that does not exist in the base repository, add it in the same structure as the base repository.

## Base Repository
- Create `.js` files inside the base repository for each collection.
- For custom queries that cannot be added to the base repository (e.g., `country.js`), add them in the respective collection file.
- **Do not add custom queries to the base repository** that cannot be reused across collections.

## Routing
- For each module, create one route file.
- Avoid creating multiple files for individual routes.
- Example: Create a single route file for `country` and include all country-related routes in it.

## Utilities
- In the `utils` directory, create separate files for:
  - Common methods.
  - Business logic for individual modules.
- Use these utility files in the respective route files.

## Best Practices for Routes
- Keep route files lightweight.
- **Do not add business logic directly in route files.** Business logic should reside in utility files or elsewhere.

## Example Structure
