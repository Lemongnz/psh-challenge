const HACKATHON_API_URL = "http://localhost:3001/api/hackathons";

export const getHackathons = async () => {
  const response = await fetch(HACKATHON_API_URL);
  const data = await response.json();
  return data;
};
