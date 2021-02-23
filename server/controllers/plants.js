const mysql = require('mysql');
const pool = require('../mysql/connection');
const { handleSQLError } = require('../mysql/error');

const getAllPlants = (req, res) => {
    pool.query('SELECT * FROM plantVarieties', (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows)
    })
}

const getPlantById = (req, res) => {
    sqlQuery = `SELECT * FROM ?? WHERE ??=?`;
    sqlQuery = mysql.format(sqlQuery, ['plantVarieties', 'id', req.params.id]);

    pool.query(sqlQuery, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    })
}

module.exports = {
    getAllPlants,
    getPlantById
}