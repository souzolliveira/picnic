const isCPF = false;
import CPF from './cpf'
import CNPJ from './cnpj'

export default isCPF ? CPF : CNPJ;

