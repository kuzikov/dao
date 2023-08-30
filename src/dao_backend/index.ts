import { $query, $update, Principal, ic, StableBTreeMap, Opt, Vec } from 'azle';
import { User } from "./types";

$query;
export function whoami(): Principal {
    return ic.caller();
}

// offset, maxKeySize, maxValueSize
// `starting` offset for stable memory is 0 sinse this is 
// only stable memory area.
//
// maxKeySize is set to 64 for alingment purpose. Principal itself 
// can be up to 63 characters.
//
// maxValueSize
const DAO_MEMBERS = new StableBTreeMap<Principal, User>(0, 64, 32);

$update;
export function addDAOMember(p: Principal, usnername: string): Opt<User> {
    if (p.isAnonymous()) {
        return Opt.None;
    };

    if (p !== ic.caller()) {
        ic.trap(`unexpected Principal. want: ${ic.caller().toText()} got${p.toText()}`)
    }


    if (usnername.length > 32) {
        return ic.trap(`username exceeds 32 character limit with length ${p.toString().length}`);
    };

    const member: User = { username: p.toText(), registrationDate: new Date().toString() };
    DAO_MEMBERS.insert(p, member);

    return Opt.Some(member);
};

$query
export function getMyProfile(myPrincipal: Principal): Opt<User> {
    return getMemberByPrincipal(myPrincipal);
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

$query
export function getDAOMembers(): Vec<User> {
    const members = DAO_MEMBERS.values();
    return members;
};

