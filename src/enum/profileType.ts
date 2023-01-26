/* eslint-disable no-unused-vars */
export enum ProfileType {
  ADMIN = 1,
  TEACHER = 2,
  STUDENT = 3,
  DIRECTOR = 4,
  SCHOOL_ADMIN = 5,
  FAMILY = 8,
  ADVISER = 9,
  ATTENDANT = 11,
  EDOOLS = 12,
  SUPER_ADMIN = 13,
}

export const ProfileTypeArray = [
  { id: ProfileType.ADMIN, name: "Administrador" },
  { id: ProfileType.SUPER_ADMIN, name: "Global" },
  { id: ProfileType.TEACHER, name: "Professor" },
  { id: ProfileType.STUDENT, name: "Aluno" },
  { id: ProfileType.DIRECTOR, name: "Diretor" },
  { id: ProfileType.SCHOOL_ADMIN, name: "Cordenador" },
  { id: ProfileType.FAMILY, name: "Familiar" },
  { id: ProfileType.ADVISER, name: "Consultor" },
  { id: ProfileType.ATTENDANT, name: "Assistente" },
];

export const UserCreateArray = [
  { id: ProfileType.ADMIN, name: "Administrador" },
  { id: ProfileType.STUDENT, name: "Aluno" },
  { id: ProfileType.TEACHER, name: "Professor" },
  { id: ProfileType.DIRECTOR, name: "Diretor" },
  { id: ProfileType.SCHOOL_ADMIN, name: "Cordenador" },
  { id: ProfileType.FAMILY, name: "Familiar" },
  { id: ProfileType.ADVISER, name: "Consultor" },
  { id: ProfileType.ATTENDANT, name: "Atendente" },
  { id: ProfileType.EDOOLS, name: "Edools" },
];

export const getProfileType = (value: string | number): string | undefined => {
  return ProfileTypeArray.find(x => x.id === value)?.name;
};
