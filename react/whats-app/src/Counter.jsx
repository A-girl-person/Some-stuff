import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);
    return (
        <div>
                <p>You died {count} times.</p>
            <button onClick={() => setCount(count + 1)}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMk3UXesrSgTf2rIaYEaLXJ9t-Bopg-SfBLw&s' width={100} height={100}></img><p>Die</p>
            </button>
            <button onClick={() => setCount(count - 1)}>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_ts0OzcD-dgZftrb2hSlDi7dIcqXsyxTBYA&s' width={100} height={100}></img><p>Refuse</p>
            </button>
            <button onClick={() => setCount(0)}>
                <img src='https://i.pinimg.com/736x/e5/d9/ea/e5d9ea2a4b0d79bb6bec91629f114159.jpg' width={100} height={100}></img><p>Restart</p>
            </button>
        </div>
    )
}

export default Counter;

