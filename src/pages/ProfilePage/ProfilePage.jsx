import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PageHeader from "../../components/Header/Header";

import userService from "../../utils/userService";
import { Grid } from "semantic-ui-react";
import PostGallery from "../../components/PostGallery/PostGallery";

function ProfilePage({user}) {
  const [posts, setPosts] = useState([]);
  const [userState, setUserState] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  const { userName } = useParams();
  console.log(userName);

  async function getProfile() {
    try {
      
       const data = await userService.getProfile(userName)
       
       setPosts(data.posts)
       setUserState(data.user)
       
      
    } catch (err) {
      console.error(err);
      setError(err);
    }
  }

  useEffect(()=> {
    getProfile()
  }, [userName])

  console.log(posts);
       console.log(userState)

  return (
   
      <Grid>
      <Grid.Row>
        <Grid.Column>
          <PageHeader user={user} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <ProfileBio user={userState} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row centered>
        <Grid.Column style={{ maxWidth: 750 }}>
          <PostGallery posts={posts} />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}

export default ProfilePage;
