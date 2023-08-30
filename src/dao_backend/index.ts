import { $query, $update, Principal, ic, StableBTreeMap, Opt } from 'azle';
import { User } from "./types";
$query;
export function whoami(): Principal {
    return ic.caller();
}

const DAO_MEMBERS = new StableBTreeMap<Principal, User>(0, 64, 32);

$update;
export function addMember(p: Principal): Opt<User> {
    if (p.isAnonymous()) {
        return Opt.None;
    };
    const member: User = { username: p.toText() }
    DAO_MEMBERS.insert(p, member)

    return Opt.Some(member)

};

$query
export function getMemberByPrincipal(p: Principal): Opt<User> {
    if (p.isAnonymous()) {
        return Opt.None;
    };
    if (p === null || p === undefined) {
        return Opt.None;
    };

    const member = DAO_MEMBERS.get(p);
    return member;

};