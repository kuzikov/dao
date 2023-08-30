import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface User { 'username' : string, 'registrationDate' : string }
export interface _SERVICE {
  'addDAOMember' : ActorMethod<[Principal, string], [] | [User]>,
  'getDAOMembers' : ActorMethod<[], Array<User>>,
  'getMemberByPrincipal' : ActorMethod<[Principal], [] | [User]>,
  'getMyProfile' : ActorMethod<[Principal], [] | [User]>,
  'whoami' : ActorMethod<[], Principal>,
}
