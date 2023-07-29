import { Button, Header, Icon, Image, Segment } from "semantic-ui-react";
import { Input, Menu } from "semantic-ui-react";

export default function PageHeader({ user }) {
  return (
    <>
      <Header as="h2" floated="left">
        <Image circular src={user.photoUrl} />
      </Header>
      <Header as="h2" floated="right">
        <Icon name="home" color="blue" />
      </Header>
    </>
    
  );
}
