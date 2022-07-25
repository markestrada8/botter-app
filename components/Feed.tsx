import { useState } from 'react';
import { RefreshIcon } from '@heroicons/react/outline';
import { Tweet } from '../typings';
import TweetBox from './TweetBox';
import TweetComponent from './Tweet';
import { fetchTweets } from '../utils/fetchTweets';
import toast from 'react-hot-toast';

interface Props {
  tweets: Tweet[];
}

const Feed = ({ tweets: tweetsProp }: Props) => {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp);

  const handleRefresh = async () => {
    const refreshToast = toast.loading('Refreshing...');
    const tweets = await fetchTweets();
    setTweets(tweets);
    toast.success('Feed updated!', {
      id: refreshToast,
    });
  };
  return (
    <div className="col-span-7 lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={handleRefresh}
          className="mr-5 mt-5 h-8 w-8 cursor-pointer
        text-twitter transition-all duration-5000 ease-out
         hover:rotate-180 active:scale-125"
        />
      </div>
      {/* Tweetbox */}
      <TweetBox />

      {/* Feed */}
      <div>
        {tweets.map((tweet) => {
          return <TweetComponent key={tweet._id} tweet={tweet} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
