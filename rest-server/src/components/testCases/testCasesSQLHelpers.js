export const addTestCaseHelper = ({ content, challenge_id }) => {
  return `
    INSERT INTO testCases (content, challenge_id)
    VALUES ('${content}', ${challenge_id})
  `;
};

export const fetchTestCaseHelper = ({ challenge_id }) => {
  return `
    SELECT content FROM testCases WHERE (challenge_id=${challenge_id})
  `;
};