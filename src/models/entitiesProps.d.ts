/* eslint-disable no-unused-vars */
export as namespace entitiesProps;

interface IUser {
  id?: string;
  email?: string;
  password?: string;
  profileType?: number;
  idSchool?: string | null;
  name?: string;
  cellphone?: string | null;
  firstAccessDate?: string;
  lastAccess?: string;
  isEducatorSubAccount?: string | null;
  acceptedTerms?: string | null;
  idClass?: string | null;
  idSas?: string | null;
  deviceType?: string | null;
  academicRecord?: string | null;
  profilePictureUrl?: string | null;
  passwordTokenExpires?: string | null;
  deviceId?: string | null;
  pushToken?: string | null;
  deletedAt?: string | null;
  createdAt?: string;
  updatedAt?: string | null;
  defaultProfileType?: number;
  idEdools?: string | null;
  studentClass?: IClass;
  coursing?: boolean;
}
