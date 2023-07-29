import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PageHeader from "../../components/Header/Header";

import userService from "../../utils/userService";

function ProfilePage() {
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
  }, [])

  console.log(posts);
       console.log(userState)

  return (
    <div>Profile page</div>
    //   <Grid>
    //   <Grid.Row>
    //     <Grid.Column>
    //       <PageHeader />
    //     </Grid.Column>
    //   </Grid.Row>
    //   <Grid.Row>
    //     <Grid.Column>
    //       <ProfileBio />
    //     </Grid.Column>
    //   </Grid.Row>
    //   <Grid.Row centered>
    //     <Grid.Column style={{ maxWidth: 750 }}>
    //       <PostGallery />
    //     </Grid.Column>
    //   </Grid.Row>
    // </Grid>
  );
}

export default ProfilePage;
