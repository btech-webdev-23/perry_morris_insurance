export const viewAdmin = (config) => {
  console.log("working view");
  `
  <h1>You Have Received a New Message</h1>
  <p>The message has come from ${config.email}</p>
  <h3>Name of the person</h3>
  <!-- Indent his p -->
  <p>Hello my name is ${config.fullName}</p>
  <h3>The message send by ${config.fullName} is :</h3>
  <!-- Indent this p -->
  <p>${config.message}</p>
  <h3>My last insurance company was:</h3>
  <p>${config.coverage}</p>
`;
};
