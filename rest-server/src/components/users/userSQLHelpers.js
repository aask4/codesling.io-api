export const fetchAllUserHelper = () => {
  return `
    SELECT id, email, username, password, clout, kills, deaths
    FROM users
  `;
}

export const fetchUserHelper = (user_id) => {
  return `
    SELECT id, email, username, password, clout, kills, deaths
    FROM users
    WHERE id=${user_id}
  `;
};

export const updateUserHelper = (user_id, clout, kdr_change) => {
  let kills = 0, deaths = 0;
  if (kdr_change === 1) {
    kills += 1;
  } else {
    deaths += 1;
    clout = 0;
  }

  return `
    UPDATE users
      SET clout = clout + ${clout}, 
        kills = kills + ${kills}, 
        deaths = deaths + ${deaths}
    WHERE id = ${user_id}  
  `
}