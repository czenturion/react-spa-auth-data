export type LoginFormDataT = {
  username: string
  password: string
  authFailed?: boolean
}

export type simpleResponseObjectT = {
  error_code: number
  error_message: string
}

export type authResponseDataT = simpleResponseObjectT & {
  data: { token: string }
}

export type employeeT = {
  companySigDate: string
  companySignatureName: string
  documentName: string
  documentStatus: string
  documentType: string
  employeeNumber: string
  employeeSigDate: string
  employeeSignatureName: string
  id: string
}