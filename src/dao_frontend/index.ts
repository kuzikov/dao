import { dao_backend } from "../declarations/dao_backend";
import { AuthClient } from '@dfinity/auth-client';

const login = async () => {
    const authClient = await AuthClient.create();
    const isLocalNetwork = process.env.DFX_NETWORK == 'local';
    const identityProviderUrl = isLocalNetwork
        ? `http://127.0.0.1:4943/?canisterId=${process.env.CANISTER_ID_INTERNET_IDENTITY}`
        : 'https://identity.ic0.app/';

    authClient.login({
        identityProvider: identityProviderUrl,
        maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
        onSuccess: async () => {
            const identity = await authClient.getIdentity();
            const principal = identity.getPrincipal().toText();
            // handle auth here
        },
    });
};