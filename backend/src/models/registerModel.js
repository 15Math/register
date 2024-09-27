import conn from './conn.js'

const emailExists = async (email)=>{
    const [rows] = await conn.execute('SELECT * FROM users WHERE email = ?', [email]);
    return rows.length > 0;
}

const insertAutCode = async (code) => {
    const [rows] = await conn.execute(
        'INSERT INTO verification_codes (email, code, expiration) VALUES (?, ?, ?)', 
        [code.email, code.data, code.expiration]
    );
    return rows;
};

export default {
    emailExists,
    insertAutCode
}

