import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
});
const Game = sequelize.define('Game', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
});

const Picture = sequelize.define('Picture', {
    game_id: DataTypes.INTEGER,
    path: DataTypes.STRING,
    metadata: DataTypes.STRING,
});

Picture.belongsTo(Game, { foreignKey: 'game_id' });
Game.hasMany(Picture, { foreignKey: 'game_id' });

const Player = sequelize.define('Player', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    birthdate: DataTypes.DATE,
    game_id: DataTypes.INTEGER,
});

Player.belongsTo(Game, { foreignKey: 'game_id' });
Game.hasMany(Player, { foreignKey: 'game_id' });

(async () => {
    await sequelize.sync();
    // Code here
})();

export { sequelize, Game, Picture, Player };