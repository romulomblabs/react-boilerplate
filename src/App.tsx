import { Button, DatePicker, Space, version } from "antd";

import "antd/dist/reset.css";

function App() {
  return (
    <div>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker />
        <Button type="primary">Primary Button</Button>
      </Space>
    </div>
  );
}

export default App;
