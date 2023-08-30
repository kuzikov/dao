export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({
    'username' : IDL.Text,
    'registrationDate' : IDL.Text,
  });
  return IDL.Service({
    'addDAOMember' : IDL.Func([IDL.Principal, IDL.Text], [IDL.Opt(User)], []),
    'getDAOMembers' : IDL.Func([], [IDL.Vec(User)], ['query']),
    'getMemberByPrincipal' : IDL.Func(
        [IDL.Principal],
        [IDL.Opt(User)],
        ['query'],
      ),
    'getMyProfile' : IDL.Func([IDL.Principal], [IDL.Opt(User)], ['query']),
    'whoami' : IDL.Func([], [IDL.Principal], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
