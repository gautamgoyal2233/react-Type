import React from "react";
import { Data } from "./interface";
import { Button, Form, Input, InputNumber } from "antd";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

interface Props {
  user: Data;
}

const FormsE: React.FC<Props> = (props) => {
  console.log(props);
  const onFinish = (values: any) => {
    console.log(values);
  };
  const initialValues = {
    user: {
      Name: props.user.name,
      username: props.user.username,
      phone: props.user.phone,
      email: props.user.email,
      website: props.user.website,
      address: {
        street: props.user.address.street,
        suite: props.user.address.suite,
        city: props.user.address.city,
        zipcode: props.user.address.zipcode,
      },
      company: {
        name: props.user.company.name,
        catchPhrase: props.user.company.catchPhrase,
      },
    },
  };
  // React.useEffect(() => Form.resetFields(), [props.initialValues]);
  return (
    <Form
      {...layout}
      name="nest-messages"
      // initialValues ={{ Name: "default value" }}
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      initialValues={initialValues}
    >
      <Form.Item name={["user", "Name"]} label="Name">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "username"]} label="User Name">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "phone"]} label="Phone">
        <InputNumber />
      </Form.Item>
      <Form.Item
        name={["user", "email"]}
        label="Email"
        rules={[{ type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={["user", "website"]} label="Website">
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "address", "street"]}
        label="Street"
        rules={[{}]}
      >
        <Input />
      </Form.Item>
      <Form.Item name={["user", "address", "suite"]} label="Suite">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "address", "city"]} label="City">
        <Input />
      </Form.Item>
      <Form.Item
        name={["user", "address", "zipcode"]}
        label="Zipcode"
        rules={[{}]}
      >
        <Input />
      </Form.Item>

      <Form.Item name={["user", "company", "name"]} label="Company Name">
        <Input />
      </Form.Item>
      <Form.Item name={["user", "company", "catchPhrase"]} label="Catchphrase">
        <Input />
      </Form.Item>
      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default FormsE;
