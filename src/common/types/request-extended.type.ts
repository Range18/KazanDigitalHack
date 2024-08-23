import { Request } from 'express';
import { UserRequest } from '#src/common/types/user-request.type';

export type RequestExtended = Request & {
  user?: UserRequest;
};
