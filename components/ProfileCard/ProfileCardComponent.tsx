import { useProfileContext } from "@/context/profileContext";
import { profileLayoutData } from "@/lib/profileCardLayoutData/LayoutData";
import ProfileBodyItem from "./ProfileBodyItem";

const ProfileCardComponent = () => {
  const context = useProfileContext();
  if (!context) {
    console.warn("profileEditContext is null");
    return null;
  }

  const { components, profileData } = context;

  const layout =
    profileLayoutData[profileData.layout as keyof typeof profileLayoutData];

  return (
    <div className="  relative  max-w-[400px] flex flex-col bg-[#050505] text-primary-foreground overflow-hidden rounded-lg">
      {/* header area */}
      {layout}

      {/* item area */}

      <div className="flex flex-col gap-3 pb-4  w-full">
        {components.map((item) => (
          <ProfileBodyItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};
export default ProfileCardComponent;
