import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "antd";
import FormsE from "./FormsE";
import { Data } from "./interface";
import { DetailsCard, ButtonDIV, CenteredButton, Website } from "./Styles";

type PropsData = {
  item: Data;
};

const Details: React.FC<PropsData> = ({ item }) => {
  const { name, username, email, phone, website, id } = item;
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/users/${id}`);
  };

  return (
    <DetailsCard>
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Phone: {phone}</p>
      <Website>
        {" "}
        Website: <Link to={website}>{website}</Link>{" "}
      </Website>
      <p>Username: {username}</p>

      <ButtonDIV>
        <CenteredButton onClick={handleClick}>More Details</CenteredButton>
        <CenteredButton onClick={showModal}>Edit Details</CenteredButton>
        <Modal
          title="EDIT DETAILS"
          open={isModalOpen}
          onCancel={handleCancel}
          footer={null}
        >
          <FormsE user={item}
          />
        </Modal>
      </ButtonDIV>

      {/* <br> */}
      <br />
    </DetailsCard>
  );
};

export default Details;
