const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Users = sequelize.define('users',{
   id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
   name: {type:DataTypes.STRING, allowNull:false},
   email: {type:DataTypes.STRING, unique: true, allowNull:false},
   password: {type:DataTypes.STRING, allowNull:false},
})

const Roles = sequelize.define('roles',{
   id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
   name: {type:DataTypes.STRING,  unique: true, allowNull:false},
})

const Departamens = sequelize.define('departamens',{
   id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
   name: {type:DataTypes.STRING, allowNull:false},
})

const Documents = sequelize.define('documents',{
   id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
   title: {type:DataTypes.STRING, allowNull:false},
   content: {type:DataTypes.TEXT},
   created_at: {type:DataTypes.DATE},
   upadate_at: {type:DataTypes.DATE},
   status: {type:DataTypes.STRING, allowNull:false},
})

const Document_Types = sequelize.define('document_types',{
   id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
   name: {type:DataTypes.STRING, unique: true, allowNull:false},
})

const Files = sequelize.define('files',{
   id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
   file_path: {type:DataTypes.STRING, unique: true, allowNull:false},
   content: {type:DataTypes.STRING},  
   uploaded_at: {type:DataTypes.DATE},
   file_type: {type:DataTypes.STRING},
})

const Doc_Approvals = sequelize.define('doc_approvals',{
   id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true}, 
   status: {type:DataTypes.STRING, allowNull:false},
   comment: {type:DataTypes.TEXT}, 
   approved_at: {type:DataTypes.DATE},  
})

const Doc_History = sequelize.define('doc_history',{
   id: {type:DataTypes.INTEGER, primaryKey: true, autoIncrement:true},
   action: {type:DataTypes.STRING, allowNull:false},   
   action_at: {type:DataTypes.DATE},   
   change: {type:DataTypes.TEXT},
})


Users.hasMany(Documents)
Documents.belongsTo(Users)

Users.hasMany(Doc_Approvals)
Doc_Approvals.belongsTo(Users)

Users.hasMany(Doc_History)
Doc_History.belongsTo(Users)

Users.hasMany(Files)
Files.belongsTo(Users)

Documents.hasMany(Doc_Approvals)
Doc_Approvals.belongsTo(Documents)

Documents.hasMany(Doc_History)
Doc_History.belongsTo(Documents)

Documents.hasMany(Files)
Files.belongsTo(Documents)

Departamens.hasMany(Documents)
Documents.belongsTo(Departamens)

Departamens.hasMany(Users)
Users.belongsTo(Departamens)

Roles.hasMany(Users)
Users.belongsTo(Roles)

Document_Types.hasMany(Documents)
Documents.belongsTo(Document_Types)

module.exports = {
   Users,
   Roles,
   Departamens,
   Documents,
   Document_Types,
   Files,
   Doc_Approvals,
   Doc_History
}