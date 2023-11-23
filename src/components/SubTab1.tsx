import React from 'react';
import { Nav } from 'react-bootstrap';

interface TabContentProps {
    tap: number;
    item: {imgPage: string;}
}

const TabContent: React.FC<TabContentProps> = ({ tap, item }) => {
    if (tap === 0) {
    return (
        <div>
        <img src={item.imgPage} style={{ width: "100%", marginTop: "30px" }} />
        </div>
    );
    } else if (tap === 1) {
    return <div>내용1</div>;
    } else if (tap === 2) {
    return <div>내용2</div>;
    }
<Nav variant="tabs" defaultActiveKey="link0">
  {/* ... */}
</Nav>
    return null;
}

export default TabContent;