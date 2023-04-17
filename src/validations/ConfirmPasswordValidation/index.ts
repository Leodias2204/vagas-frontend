import * as yup from 'yup';

export const ConfirmPasswordSchema = yup.object().shape({
    newPassword: yup
        .string()
        .required('O campo "Nova senha" é obrigatório')
        .min(8, 'A senha precisa ter no mínimo 8 caracteres')
        .max(20, 'A senha pode ter no máximo 20 caracteres')
        .matches(
            /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*\W+)(?=^.{8,20}$).*$/,
            'Insira a senha com os critérios informados'
        ),

    confirmPassword: yup
        .string()
        .required('O campo "Repetir senha" senha é obrigatório')
        .oneOf([yup.ref('newPassword')], 'As senhas não conferem'),   
});
