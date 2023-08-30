# DAO built on ICP

Refer to [The Azle Book](https://demergent-labs.github.io/azle/) for more in-depth documentation.

`dfx` is the tool you will use to interact with the IC locally and on mainnet. If you don't already have it installed:

```bash
npm run dfx_install
```

Next you will want to start a replica, which is a local instance of the IC that you can deploy your canisters to:

```bash
npm run replica_start
```

If you ever want to stop the replica:

```bash
npm run replica_stop
```

Now you can deploy your canister locally:

```bash
npm install
npm run canister_deploy_local
```

Assuming you have [created a cycles wallet](https://internetcomputer.org/docs/current/developer-docs/quickstart/network-quickstart) and funded it with cycles, you can deploy to mainnet like this:

```bash
npm run canister_deploy_mainnet
```
