import { usuariosModel } from '../../features/usuarios/usuariosModel.js';
import { animaisModel } from '../../features/animais/animaisModel.js';
import { doacoesModel } from '../../features/doacoes/doacoesModel.js';
import { denunciasModel } from '../../features/denuncias/denunciasModel.js';

usuariosModel.hasMany(animaisModel, { foreignKey: 'usuario_id_adocao' });
animaisModel.belongsTo(usuariosModel, { foreignKey: 'usuario_id_adocao' });

usuariosModel.hasMany(doacoesModel, { foreignKey: 'usuario_id' });
doacoesModel.belongsTo(usuariosModel, { foreignKey: 'usuario_id' });

usuariosModel.hasMany(denunciasModel, { foreignKey: 'usuario_id' });
denunciasModel.belongsTo(usuariosModel, { foreignKey: 'usuario_id' });

export default { usuariosModel, animaisModel, doacoesModel, denunciasModel };
