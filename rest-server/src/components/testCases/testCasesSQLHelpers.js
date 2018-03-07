export const addTestCaseHelper = ({ content, challenge_id }) => {
  return `
    INSERT INTO testCases (content, challenge_id)
    VALUES ('${content}', ${challenge_id})
  `;
};

export const getTestCaseHelper = ({challenge_id}) => {
  return `
    SELECT content FROM testcases WHERE challenge_id=${challenge_id}
  `
}


//SELECT content FROM testcases (content)
//WHERE challenge_id = ${challenge_id}
