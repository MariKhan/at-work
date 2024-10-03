"use client";

import { FC } from "react";
import { Profile } from "@/view/profile";

export interface ProfilePageProps {
  params: any;
}

const ProfilePage: FC<ProfilePageProps> = ({ params }) => {
  const profileId = params.id;
  return <Profile profileId={profileId} />;
};

export default ProfilePage;
