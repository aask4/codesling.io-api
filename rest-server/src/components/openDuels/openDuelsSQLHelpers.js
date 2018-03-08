export const addOpenDuelHelper = ({challenge_id, challenger_id}) => {
  return `
    INSERT INTO openduels (challenge_id, challenger_id)
    VALUES ('${challenge_id}', '${challenger_id}')
  `;
};

export const fetchOpenDuelHelper = () => {
  return `
    SELECT * FROM openduels
  `;
};

export const removeOpenDuelHelpler = ({duel_id}) => {
  return `
    DELETE FROM openduels
    WHERE id=${duel_id}
    RETURNING challenge_id, challenger_id, opponent_id
  `;
};
