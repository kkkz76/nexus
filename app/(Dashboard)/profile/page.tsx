import { ProfileCard, ProfileComponent } from "@/lib/type";

import ClientSideProfilePage from "./ClientSideProfilePage";
import {
  fetchUserProfileCardData,
  fetchUserProfileComponentsData,
} from "@/services/profile-data-service";

const getProfileCardData = async (): Promise<ProfileCard> => {
  const data = await fetchUserProfileCardData(1);
  if (!data) throw new Error("No data found");
  return data;
};

const getProfileComponentsData = async (): Promise<ProfileComponent[]> => {
  const data = await fetchUserProfileComponentsData(1);
  return data;
};

const Page = async () => {
  // Fetch from database
  const profileComponents = await getProfileComponentsData();
  const profileCard = await getProfileCardData();

  return (
    <>
      <ClientSideProfilePage
        profileComponentData={profileComponents}
        profileCardData={profileCard}
      />
    </>
  );
};

export default Page;
