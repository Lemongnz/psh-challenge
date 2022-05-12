const TOP_USERS_API_URL = "http://localhost:3001/api/top-users";
const LIMIT = 12;

export const getTopUsers = async () => {
  const response = await fetch(`${TOP_USERS_API_URL}?limit=${LIMIT}`);
  const data = await response.json();
  return data;
};
