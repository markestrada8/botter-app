import { SearchIcon } from "@heroicons/react/outline";
import { TwitterTimelineEmbed } from "react-twitter-embed";

const Widgets = () => {
  return (
    <div className="mt-2 px-2 col-span-2 hidden lg:inline">
      {/* Search */}
      <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-full mt-2 ">
        <SearchIcon className="w-5 h-5 text-gray-400" />
        <input
          type="text"
          className="bg-transparent flex-1 outline-none"
          placeholder="Search Twitter"
        />
      </div>
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="SteveMartinToGo"
        options={{ height: 1000 }}
      />
    </div>
  );
};

export default Widgets;
