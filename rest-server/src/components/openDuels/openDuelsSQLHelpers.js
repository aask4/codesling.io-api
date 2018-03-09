export const addOpenDuelHelper = ({challenge_id, sling_id}) => {
  return `
    INSERT INTO openduels (challenge_id, sling_id)
    VALUES ('${challenge_id}', '${sling_id}')
    RETURNING *
  `;
};

export const fetchOpenDuelHelper = () => {
  return `
    SELECT * FROM openduels
    JOIN challenges ON openduels.challenge_id=challenges.id
  `;
};

export const removeOpenDuelHelper = ({duel_id}) => {
  return `
    DELETE FROM openduels
    WHERE duel_id=${duel_id}
    RETURNING challenge_id
  `;
};

export const updateOpenDuelHelper = ({duel_id, opponent_id}) => {
  return `
    UPDATE openduels
    SET opponent_id = '${opponent_id}'
    WHERE duel_id = '${duel_id}'
    RETURNING *
  `
};
