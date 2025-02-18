const BASE_URL = "https://forum-api.dicoding.dev/v1";

const getAccessToken = () => localStorage.getItem("accessToken");

const putAccessToken = (accessToken) =>
  localStorage.setItem("accessToken", accessToken);

const fetchWithToken = async (url, options = {}) => {
  return fetch(url, {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};

const login = async ({ email, password }) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { token },
  } = responseJson;

  return token;
};

const register = async ({ name, email, password }) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, password }),
  });
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { user },
  } = responseJson;

  return user;
};

const getUserLogged = async () => {
  const response = await fetchWithToken(`${BASE_URL}/users/me`);
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { user },
  } = responseJson;

  return user;
};

const getUsers = async () => {
  const response = await fetch(`${BASE_URL}/users`);
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { users },
  } = responseJson;

  return users;
};

const createThread = async ({ title, body, category }) => {
  const response = await fetchWithToken(`${BASE_URL}/threads`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ title, body, category }),
  });
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { thread },
  } = responseJson;

  return thread;
};

const getThreads = async () => {
  const response = await fetch(`${BASE_URL}/threads`);
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { threads },
  } = responseJson;

  return threads;
};

const getThreadDetail = async (threadId) => {
  const response = await fetch(`${BASE_URL}/threads/${threadId}`);
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { detailThread },
  } = responseJson;

  return detailThread;
};

const createThreadComment = async (threadId, comment) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/comments`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: comment }),
    },
  );
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { comment: newComment },
  } = responseJson;

  return newComment;
};

const upVoteThread = async (threadId) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/up-vote`,
    {
      method: "POST",
    },
  );
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

const downVoteThread = async (threadId) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/down-vote`,
    {
      method: "POST",
    },
  );
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

const neutralVoteThread = async (threadId) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/neutral-vote`,
    {
      method: "POST",
    },
  );
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

const upVoteComment = async (threadId, commentId) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/comments/${commentId}/up-vote`,
    {
      method: "POST",
    },
  );
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

const downVoteComment = async (threadId, commentId) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/comments/${commentId}/down-vote`,
    {
      method: "POST",
    },
  );
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

const neutralVoteComment = async (threadId, commentId) => {
  const response = await fetchWithToken(
    `${BASE_URL}/threads/${threadId}/comments/${commentId}/neutral-vote`,
    {
      method: "POST",
    },
  );
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { vote },
  } = responseJson;

  return vote;
};

const getLeaderboard = async () => {
  const response = await fetch(`${BASE_URL}/leaderboards`);
  const responseJson = await response.json();

  const { status, message } = responseJson;
  if (status !== "success") {
    throw new Error(message);
  }

  const {
    data: { leaderboards },
  } = responseJson;

  return leaderboards;
};

export {
  getAccessToken,
  putAccessToken,
  login,
  register,
  getUserLogged,
  getUsers,
  createThread,
  getThreads,
  getThreadDetail,
  createThreadComment,
  upVoteThread,
  downVoteThread,
  neutralVoteThread,
  upVoteComment,
  downVoteComment,
  neutralVoteComment,
  getLeaderboard,
};
