export const viewAdmin = () => {
  console.log("working view");
  `<h1>New Message from ${config.fullName}</h1>
  <p>email : ${config.email}, coverage: ${config.coverage}</p>
  <h3>Message:</h3>
  <p>${config.message}</p>
`;
};
