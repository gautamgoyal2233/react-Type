import React from "react";
import Details from "./Details";
import { useQuery } from "react-query";
import { Modal, Form, Input, Spin, Button, Result } from "antd";
import { toast } from "react-hot-toast";
import { Data } from "./interface";
import { ParentContainer, ButtonContain, CenteredButton } from "./Styles";

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};

const UserData: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(false);

  const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return response.json();
  };

  const { data, isLoading, isError } = useQuery("userdata", getData);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = (values: any) => {
    const newUser = {
      id: data.length + 1,
      name: values.user.name,
      username: values.user.name,
      phone: values.user.phone,
      email: values.user.email,
      website: values.user.website,
      address: {
        street: values.user.address.street,
        suite: values.user.address.suite,
        city: values.user.address.city,
        zipcode: values.user.address.zipcode,
      },
      company: {
        bs: values.user.address.bs,
      },
    };
    toast.success("Successfully Added!");

    data?.push(newUser);
    handleCancel();
  };
  if (isError)
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    );
  if (isLoading) return <Spin />;

  return (
    <>
      <ButtonContain>
        <CenteredButton onClick={showModal}>Add More User</CenteredButton>
      </ButtonContain>
      <Modal
        title="ADD USER DATA"
        open={isModalOpen}
        // onOk={handleOk}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          style={{ maxWidth: 600 }}
        >
          <Form.Item
            name={["user", "name"]}
            label="Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "username"]}
            label="User Name"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "phone"]}
            label="Phone"
            rules={[{ required: true }]}
          >
            <Input />
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
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "address", "suite"]}
            label="Suite"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "address", "city"]}
            label="City"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "address", "zipcode"]}
            label="Zipcode"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item name={["user", "company", "name"]} label="Company Name">
            <Input />
          </Form.Item>
          <Form.Item
            name={["user", "company", "catchPhrase"]}
            label="Catchphrase"
          >
            <Input />
          </Form.Item>
          <Form.Item name={["user", "company", "bs"]} label="Business Scope">
            <Input />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
      {data.length > 0 ? (
        <ul>
          <ParentContainer>
            {data.map((item: Data, index: number) => {
              return (
                <div key={index}>
                  <Details item={item} />
                </div>
              );
            })}
          </ParentContainer>
        </ul>
      ) : (
        " "
      )}
    </>
  );
};

export default UserData;
