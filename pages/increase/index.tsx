import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const isCPF = true;
import CPF from './cpf'
import CNPJ from './cnpj'

export default isCPF ? CPF : CNPJ;

export async function getStaticProps(context: { locale: any; }) {
    const { locale } = context;
  
    return {
      props: {
        ...(await serverSideTranslations(locale)),
      },
    };
  }

