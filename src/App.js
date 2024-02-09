// Зробити компонент, в якому буде форма, за допомоги якої можливо створити нового юзера постовим запитом на https://jsonplaceholder.typicode.com/users
// Зробити компонент, в якому буде форма, за допомоги якої можливо створити новий комментар постовим запитом на https://jsonplaceholder.typicode.com/comments
import React from 'react';


import CommentsContainer from "./Components/CommentsContainer";
import UsersContainer from "./Components/UsersContainer";

const App = () => {
    return (
        <div>
          <UsersContainer/>
          <CommentsContainer/>
        </div>
    );
};

export default App;