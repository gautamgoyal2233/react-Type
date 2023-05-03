import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { Spin, Button, Result } from "antd";
import { DetailsCarD } from "./Styles";

const UserDetails: React.FC = () => {
  const { id } = useParams<string>();

  const getData = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    return response.json();
  };

  const { data, isLoading, isError } = useQuery("userdata", getData);

  if (isLoading) return <Spin />;

  if (isError)
    return (
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={<Button type="primary">Back Home</Button>}
      />
    );

  return (
    <DetailsCarD>
      <h1>{data.name}</h1>
      <p>Username: {data.username}</p>
      <p>Email: {data.email}</p>
      <p>Phone: {data.phone}</p>
      <p>Website: {data.website}</p>
      <h2>Address</h2>
      <p>Street: {data?.address?.street}</p>
      <p>Suite: {data?.address?.suite}</p>
      <p>City: {data?.address?.city}</p>
      <p>Zipcode: {data?.address?.zipcode}</p>
      <p>Latitude: {data?.address?.geo?.lat}</p>
      <p>Longitude: {data?.address?.geo?.lng}</p>
      <h2>Company</h2>
      <p>Name: {data?.company?.name}</p>
      <p>Catchphrase: {data?.company?.catchPhrase}</p>
      <p>BS: {data?.company?.bs}</p>
    </DetailsCarD>
  );
};

export default UserDetails;
