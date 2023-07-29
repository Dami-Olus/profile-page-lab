import { Button, Header, Icon, Image, Segment } from "semantic-ui-react";
import { Input, Menu } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function PageHeader({ user }) {
  return (
    <>
      <Header as={Link} to={`/${user.username}`} floated="left">
        <Image circular src={user.photoUrl} />
      </Header>
      <Header floated="right">
        <Header  floated="left" as={Link} to={`/`}>
          <Icon name="home" color="blue" />
        </Header>
        <Header as="h2" floated="right" color="blue">
          Logout
        </Header>
      </Header>
    </>
  );
}
