import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { List } from 'react-virtualized';

import 'react-virtualized/styles.css';

const list = Array(5000).fill().map((_, index) => ({
    id: index,
    name: `item ${index}`
}))

function  rowRenderer({index, key, style}){
    return <div key={key} style={style}>{list[index].name}</div>
}

// Main component
function MyVirtualizedList(){
    return (
        <List
            width={700}
            height={450}
            rowCount={list.length}
            rowHeight={10}
            rowRenderer={rowRenderer}
        />
    );
}

export default MyVirtualizedList;