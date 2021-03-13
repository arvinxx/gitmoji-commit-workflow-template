module.exports = {
  branches: [
    "master",
    { name: "next", channel: "next", prerelease: "rc" },
    { name: "beta", prerelease: true },
    { name: "alpha", prerelease: true },
  ],
  extends: ["semantic-release-config-gitmoji"],
};
