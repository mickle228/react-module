// з jsonplaceholder отримати всі пости в компоненту Posts.js
// відобразити кожного інформацію (id,title) з кожного поста (компонента Post)
// Зробити кнопку вибора поста, при натисканні на яку в Posts.js ви покажете детальну інфомацію про пост(всю інфу)
import React from 'react';
import Posts from "./Components/Posts/Posts";

const App = () => {
    return (
        <div>
          <Posts/>
        </div>
    );
};

export default App;