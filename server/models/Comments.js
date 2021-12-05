module.exports = (sequelize, DataTypes)=>{
    const Comments = sequelize.define("Comments",{
        name:{
            type: DataTypes.STRING,
            allowNull: false
        },
        text:{
            type: DataTypes.STRING,
            allowNull: false
        },
        parentId: { 
            type: DataTypes.INTEGER
        },
    })
    Comments.hasMany(Comments, {foreignKey: 'parentId'}) 
    
    return Comments
}