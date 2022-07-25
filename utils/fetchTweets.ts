import { Tweet } from '../typings';

export const fetchTweets = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/getTweets`);
  const data = await res.json();
  const tweets: Tweet[] = data.tweets;

  return tweets;
};
