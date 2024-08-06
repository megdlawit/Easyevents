module.exports = function (sequelize, DataTypes) {
    var Attendee = sequelize.define("Attendee", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 50] }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 50] }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 50], isEmail: true }
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 50] }
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 50] }
        },
        uuid: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            allowNull: false
        },
        dancerType: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { len: [1, 12] }
        },
        emailSent: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        formCompleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        badgePrinted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        registered: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('NOW')
        },
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize.fn('NOW')
        }
    });

    Attendee.associate = function (models) {
        Attendee.belongsTo(models.PassType, {
            foreignKey: { allowNull: false }
        });
    };

    return Attendee;
};
