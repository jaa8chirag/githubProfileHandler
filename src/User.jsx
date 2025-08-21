import React from "react";

const User = ({ userData }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    html_url,
    name,
    login,
  } = userData;

  return (
    <div className="bg-gray-800 p-6 rounded-2xl shadow-lg w-full max-w-md text-center">
      <img
        src={avatar_url}
        alt={name}
        className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-blue-500"
      />
      <h2 className="text-2xl font-semibold">{name || "No Name"}</h2>
      <p className="text-gray-400">@{login}</p>

      <div className="flex justify-around mt-4 text-sm">
        <div>
          <p className="font-bold text-lg">{followers}</p>
          <p className="text-gray-400">Followers</p>
        </div>
        <div>
          <p className="font-bold text-lg">{following}</p>
          <p className="text-gray-400">Following</p>
        </div>
        <div>
          <p className="font-bold text-lg">{public_repos}</p>
          <p className="text-gray-400">Repos</p>
        </div>
      </div>

      <a
        href={html_url}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-6 px-5 py-2 bg-blue-600 hover:bg-blue-700 rounded-xl transition"
      >
        View Profile
      </a>
    </div>
  );
};

export default User;


