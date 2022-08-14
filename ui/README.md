# BAT - Admin UI 

## Folder Structure
- `components`: This folder will contain the generic components which can be shared across application. eg: Button, Card etc.
- `constants`: This folder will contains the static data of project
- `context`: This folder will contain the context providers to share access to a state across component's chain.
- `features`: This folder will contain feature as submodule and all the components related to that feature will be inside that subfolder. eg: auth > Login, Register, ForgotPassword etc.
- `graphql`: This folder will contain graphql queries and mutations.
- `hooks`: This folder will contain all custom hooks created in this project.
- `pages`: This folder will contain one component per page in our project. eg: LoginPage, RegisterPage, Dashboard etc.
- `services`: This folder will contain all the rest api calls 
- `utils`: This folder will contain helper/utility methods and formatters that can be used across project. eg: formatDate, getCurrentTimestamp etc..